import React, {useEffect, useState} from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constant'
import './Banner.css'
function Banner() {
  const r=Math.floor(Math.random() * (20 - 0 + 1)) + 0;
  const [movie, setMovie]=useState()
  useEffect(()=>{
      axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
        console.log(response.data)
        setMovie(response.data.results[r])
      }
      )
  },[r])
  return (
    <div 
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}} 
    className='banner'>
        <div className='content'>
            <h1 className='Title'>{movie ? movie.name : ""}{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>  
                <button className='button'>MyList</button>  
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade">
            
        </div>
    </div>
  )
}

export default Banner