import React, { useEffect, useState } from 'react'
import './recomended.css'
import { APIKEY } from '../base/token'
import axios from 'axios'
import { Chip, IconButton, Stack } from '@mui/material'
import { MoreHoriz, MoreVert } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function Recomended() {
	const [RecomendedVideos, setRecomendedVideos] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		getvideos_categories_all()
	}, [])

	function getvideos_categories_all() {
		axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${APIKEY}&maxResults=50`).then((res) => {
			console.log('rec', res.data.items)
			setRecomendedVideos(res.data.items.reverse())
		})
	}
	return (
		<div className='recomended-container'>
			{
				RecomendedVideos.map((item, index) => (
					<div className='recomended-card' onClick={()=>navigate(`/watch/${item.id.videoId}`)}>
						<div className="rec-img">
							<img src={item.snippet.thumbnails.medium.url} alt="" />
						</div>
						<div className="rec-desc">
							<div className='rec-flex'>
								<h4>{item.snippet.title.slice(0, 30)}</h4>
								<IconButton>
									<MoreVert />
								</IconButton>
							</div>
							<p>{item.snippet.channelTitle.slice(0, 30)}</p>
							<p>1.8k views 17 hours ago</p>
						</div>
					</div>
				))
			}
		</div>
	)
}

export default Recomended