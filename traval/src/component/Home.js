import React from 'react'
import './Home.css'
import video from '../../src/assests/tn video.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

function Home() {
  return (
    <div className='home'>
        <video autoPlay loop muted id='video'>
             <source src={video} type='video/mp4' />
        </video>
        <div className="overlay"></div>
        <div className="content">
          <h1>First Class Travels</h1>
          <h2>Top 1% Locations Worldwide</h2>
          <form className='form'>
            <div><input type="text" placeholder='Search Destination' /></div>
            <div><button> <AiOutlineSearch className='icon'/></button></div>
          </form>
        </div>
    </div>
  )
}

export default Home 