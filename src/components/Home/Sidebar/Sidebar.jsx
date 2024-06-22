import React from 'react'
import './sidebar.css'
import { Avatar, Button, Divider } from '@mui/material'
import { AccessTime, Contacts, DataArray, Download, HomeSharp, MovieFilter, PlaylistPlay, PunchClock, Restore, SmartDisplay, Subscriptions, ThumbUp, VideoCameraBack } from '@mui/icons-material'
import { Flex } from 'antd'


function Sidebar() {
  return (
	<div className='sidebar'>
		<Button className='side-button' startIcon={<HomeSharp className='btn-icon' />}> <p>Home</p></Button>
		<Button className='side-button' startIcon={<MovieFilter className='btn-icon' />}> <p>Shorts</p></Button>
		<Button className='side-button' startIcon={<Subscriptions className='btn-icon' />}> <p>Subscribe</p></Button>
		<Divider />
		<Button className='side-button' startIcon={<Contacts className='btn-icon' />}> <p>Your channel</p></Button>
		<Button className='side-button' startIcon={<Restore className='btn-icon' />}> <p>History</p></Button>
		<Button className='side-button' startIcon={<PlaylistPlay className='btn-icon' />}> <p>Playlist</p></Button>
		<Button className='side-button' startIcon={<SmartDisplay className='btn-icon' />}> <p>Your Vidos</p></Button>
		<Button className='side-button' startIcon={<AccessTime className='btn-icon' />}> <p>Watch Later</p></Button>
		<Button className='side-button' startIcon={<ThumbUp className='btn-icon' />}> <p>Liked Videos</p></Button>
		<Divider />
		<Button className='side-button' startIcon={<Download className='btn-icon' />}> <p>Downloads</p></Button>
		<Button className='side-button' startIcon={<SmartDisplay className='btn-icon' />}> <p>Your Vidos</p></Button>
		<Button className='side-button' startIcon={<AccessTime className='btn-icon' />}> <p>Watch Later</p></Button>
		<Button className='side-button' startIcon={<ThumbUp className='btn-icon' />}> <p>Liked Videos</p></Button>
		{/* <h4 style={{marginTop:10}}>Subscriptions</h4> */}
		{/* <Flex align='center' gap='10px' style={{marginTop:10}}>
			<Avatar  sx={{ width: 28, height: 28,fontSize:12}}alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			<p>Dostonbek </p>
		</Flex>
		<Flex align='center' gap='10px' style={{marginTop:10}}>
			<Avatar  sx={{ width: 28, height: 28,fontSize:12}}alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			<p>Yuksalish maktabi </p>
		</Flex>
		<Flex align='center' gap='10px' style={{marginTop:10}}>
			<Avatar  sx={{ width: 28, height: 28,fontSize:12}}alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			<p>Yoshlar ittifoqi </p>
		</Flex> */}

	</div>
  )
}

export default Sidebar