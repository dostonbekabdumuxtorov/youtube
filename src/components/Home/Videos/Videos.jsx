import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { APIKEY } from '../../base/token'
import { Button } from '@mui/material'
import './videos.css'
import Card from '../Card/Card'

function Videos() {
  const [categories, setCategories] = useState([])
  const [homevideos, setHomevideos] = useState([])
  const [category_id, setcategory_id] = useState(0)

  useEffect(() => {
    get_categories()
    getvideos_categories_all()
  }, [])


  function get_categories() {
    axios.get(`https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${APIKEY}`).then((res) => {
      console.log("categories", res.data.items)
      setCategories(res.data.items)
    })
  }

  function getvideos_categories_all() {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${APIKEY}&maxResults=50`).then((res)=>{
      console.log('all',res.data.items)
      setHomevideos(res.data.items.reverse())
    })
  }

  function getvideos_categories_Id(id) {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=${id}&type=video&key=${APIKEY}&maxResults=50`).then((res)=>{
      console.log('all',res.data.items)
      setHomevideos(res.data.items.reverse())
    })
  }



  return (
    <div className='videos-main-wrapper'>
      <div className="categories-container">
        <Button 
          onClick={()=>{
            setcategory_id(0)
            getvideos_categories_all()
          }} 
        className={`cat-btn ${category_id === 0 ? "active-btn" : ""}`} >All</Button>
        {
          categories.map((item, index) => (
            <Button
              onClick={()=>{
                  setcategory_id(item.id)
                  getvideos_categories_Id(item.id)

              }} 
             className={`cat-btn ${category_id === item.id ? "active-btn" : ""}`}
             >
              {item.snippet.title}
            </Button>
          ))
        }
      </div>
      <div className="cards-container">
          {
            homevideos.map((item,index)=>(
              <Card  item={item} />
            ))
          }
      </div>
    </div>
  )
}

export default Videos