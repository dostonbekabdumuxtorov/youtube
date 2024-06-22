import React from 'react'
import './detail.css'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import DetailMore from './DetailMore'
import Recomended from './Recomended'

function Detail() {
	const { id } = useParams()



	return (
		<div className='detail-container'>
			<div className="left-detail">
				<ReactPlayer 
					width={'100%'} 
					height={'500px'} 
					controls 
					url={`https://www.youtube.com/watch?v=${id}`} 
				/>
				<DetailMore video_id={id} />
			</div>
			<div className="right-detail">
				<Recomended />
			</div>
		</div>
	)
}

export default Detail