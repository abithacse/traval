import React from 'react'
import './Selectimg.css'


function Selectimg({bgImg, text}) {
  return (
    <div className='selects-img'>
      <img src={bgImg} alt="" />  
      <div className="overlay">
        <p>{text}</p>
      </div>
      
      </div>
  )
}

export default Selectimg
