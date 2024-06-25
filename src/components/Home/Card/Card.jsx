import React from 'react'
import './card.css'
import { Avatar, Button, IconButton } from '@mui/material'
import { MoreVert } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Card({ item }) {
	const navigate = useNavigate()

	return (
		<div className='home-card' onClick={() => navigate(`/watch/${item.id.videoId}`)}>
			<img className='thumbnail' src={item.snippet.thumbnails.high.url} alt="" />
			<div className='card-texts'>
				<Avatar src={item.snippet.thumbnails.medium.url} />
				<div>
					<h4>{item.snippet.title}</h4>
					<p>{item.snippet.channelTitle}</p>
					<p>{item.snippet.publishTime}</p>
				</div>
				<IconButton>
					<MoreVert />
				</IconButton>
			</div>
		</div>
	)
}

export default Card