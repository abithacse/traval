import React, {useState} from 'react'
import './Navbar.css'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-scroll'

function Navbar() {
 const [nav,setNav] = useState(false)
 const handLetNav = () => setNav (!nav)
 
 
  return (
    <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
       <div className={nav ? 'logo dark' : 'logo'}>
            <h2>TN TOURIST PLACES</h2>
        </div>
        <ul className='nav-menu'>
            <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
            <Link to='destynation' smooth={true} duration={500}><li>Destination</li></Link>
            <Link to='carousel' smooth={true} duration={500}><li>Travel</li></Link>
            <Link to='search' smooth={true} duration={500}><li>Book</li></Link>
            <Link to='views' smooth={true} duration={500}><li>Views</li></Link>
            
        </ul>
        <div className="nav-icons">
          <BiSearch className='icon' style={{marginRight:'1rem'}}/>
          <BsPerson className='icon' />
            
         </div>
         <div className="hamburger" onClick={handLetNav}>
          {!nav ? ( <HiOutlineMenuAlt4 className='icon' /> ) : ( <AiOutlineClose style={{color:'#000'}} className='icon' />)}
         
         </div>


         <div className={nav ? 'mobile-menu  active' : 'mobile-menu'}>
          <ul className="mobile-nav">
          <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>Book</li>
            <li>Views</li>
          </ul>
         
         <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className='icons' />
            <FaInstagram className='icons' />
            <FaTwitter className='icons' />
            <FaPinterest className='icons' />
            <FaYoutube className='icons' />
          </div>
         </div>
         </div>

    </div>
  )
}

export default Navbar