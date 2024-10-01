import React from 'react'
import './Destynation.css'
import img1 from '../assests/img1.jpg'
import img2 from '../assests/img2.jpg'
import img3 from '../assests/img3.jpg'
import img4 from '../assests/img4.jpg'
import img5 from '../assests/img5.jpg'


function Destynation() {
  return (
    
  <div name='destynation' className="destination">
    <div className="container">
      <h1>All-Inclusive Resorts</h1>
      <p>On the Caribbean's Best Beaches</p>
      <div className="img-container">
        <img className='span-3 image-grid-row-2' src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        
      </div>
    </div>
   </div> 
  )
}

export default Destynation