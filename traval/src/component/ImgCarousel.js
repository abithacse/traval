import React from 'react'
import './ImgCarousel.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import kumari from '../assests/kumari.png'
import madhurai from '../assests/madhurai.png'
import maha from '../assests/maha.png'

function ImgCarousel() {
  return (
   <div name='carousel' className="container">
   <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
    <div>
    <img src={kumari} alt="" />
        <p className="legend">kumari</p>
    </div>
    <div>  
    <img src={madhurai} alt="" />
        <p className="legend">madhurai</p>
    </div>
    <div>
    <img src={maha} alt="" />
        <p className="legend">maha</p>
    </div>
</Carousel>
</div>
  )
}

export default ImgCarousel

