import React from 'react'
import './Selects.css'
import chennai from '../assests/chennai.png'
import kanchi from '../assests/kanchi.png'
import kodai from '../assests/kodai.png'
import kumari from '../assests/kumari.png'
import madhurai from '../assests/madhurai.png'
import maha from '../assests/maha.png'
import Selectimg from './Selectimg'

function Selects() {
  return (
    <div name='views' className='selects'>
      <div className="container">
      <Selectimg bgImg={chennai} text='chennai'/>
      <Selectimg bgImg={kanchi} text='kanchipuram'/>
      <Selectimg bgImg={kodai} text='kodaikanal'/>
      <Selectimg bgImg={kumari} text='kanyakumari'/>
      <Selectimg bgImg={madhurai} text='madhurai'/>
      <Selectimg bgImg={maha} text='mahapalipuram'/>
     </div>
    </div>
  )
}

export default Selects

