import React from 'react'
import './header.css'
import { Avatar, Button, ButtonGroup, IconButton, TextField } from '@mui/material'
import { MenuSharp, MenuBook, MicSharp, VideoCall, NotificationsNone } from '@mui/icons-material';
import { Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Search } = Input;
import Speech from '../Speech/Speech';

function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Speech open={open} setOpen={setOpen} />
      <div className='header-container'>
        <div className="header-left">
          <IconButton>
            <MenuSharp />
          </IconButton>
          <img onClick={() => navigate('/')} className='main-logo' src="/mainlogo.png" alt="" />
        </div>
        <div className="header-center">
          <Search
            placeholder="Search"
            allowClear
            onSearch={(e) => navigate(`/result/${e}`)}
            style={{
              width: 400,
              borderRadius: 20
            }}
          />
          <IconButton onClick={()=>setOpen(true)}>
            <MicSharp />
          </IconButton>
        </div>
        <div className="header-right">
          <IconButton>
            <VideoCall />
          </IconButton>
          <IconButton>
            <NotificationsNone />
          </IconButton>
          <Avatar style={{ width: 35, height: 35 }} alt="Dostonbek" src="/static/images/avatar/2.jpg" />
        </div>
      </div>
    </>
  )
}

export default Header