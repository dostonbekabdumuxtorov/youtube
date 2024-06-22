import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { APIKEY } from './../base/token'
import { Avatar, Button, ButtonGroup, IconButton } from '@mui/material'
import { ContentCut, Forward, MoreHoriz, Share, Shortcut, ThumbDown, ThumbUp } from '@mui/icons-material'

function DetailMore({ video_id }) {
	const [content, setcontent] = useState({})

	useEffect(() => {
		get_info()
	}, [])

	function get_info() {
		axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${video_id}&key=${APIKEY}`).then((res) => {
			console.log(res.data.items[0].snippet)
			setcontent(res.data.items[0].snippet)
		})
	}



	return (
		<div>
			<h3>{content?.title}</h3>
			<div className='channel-row'>
				<div className='chanel-info'>
					<Avatar src={content?.thumbnails?.medium?.url} alt={content?.channelTitle} />
					<div>
						<h4>{content?.channelTitle}</h4>
						<p>190k</p>
					</div>
					<button>Subscribe</button>
				</div>
				<div className='chanel-btns'>
					<ButtonGroup variant="outlined" aria-label="Basic button group">
						<Button startIcon={<ThumbUp />}>Like</Button>
						<Button startIcon={<ThumbDown />}></Button>
					</ButtonGroup>
					<Button startIcon={<Shortcut />}>Share</Button>
					<Button startIcon={<ContentCut />}>Clip</Button>
					<IconButton>
						<MoreHoriz />
					</IconButton>

				</div>
			</div>
			<p>{content?.description?.slice(0, 50)}
				<Button style={{ textTransform: 'lowercase', padding: 4 }}>more</Button>
			</p>
		</div>
	)
}

export default DetailMore