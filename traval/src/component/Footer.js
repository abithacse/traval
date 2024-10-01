import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <h3>BEACHES</h3>
          <div className="social">
            <FaFacebook className='icons' />
            <FaInstagram className='icons' />
            <FaTwitter className='icons' />
            <FaPinterest className='icons' />
            <FaYoutube className='icons' />
          </div>
        </div>
        <div className="bottom">
            <div className="left">
              <ul>
                <li>About</li>
                <li>Partnership</li>
                <li>Careers</li>
                <li>Newsroom</li>
                <li>Advertising</li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li>Contact</li>
                <li>Policy</li>
                <li>Privacy</li>
                <li>Pricing</li>
                <li> info</li>
              </ul>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
