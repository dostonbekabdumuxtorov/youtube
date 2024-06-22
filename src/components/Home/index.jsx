import React from 'react'
import './index.css'
import Sidebar from './Sidebar/Sidebar'
import Videos from './Videos/Videos'

function Home() {
  return (
	<div className='home-container'>
    <div className="sidebar-container">
      <Sidebar />
    </div>
    <div className="videos-container">
      <Videos />
    </div>
  </div>
  )
}

export default Home