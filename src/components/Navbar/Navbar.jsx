import React, { useState } from 'react'
import "./Navbar.css"
import { menuIcon, closeIcon, logoImage} from '../../assets'

function Navbar() {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav>
        <a href='#' className='logo'> Heart<span className='red'>Guardian</span></a>
        <ul>
          <li>
            <a href='#topics'>Disease Details</a>
          </li>

          <li>
            <a href='#info'>About Us</a>
          </li>

          <li>
            <a href='#blog'>Blog</a>
          </li>

          <li>
            <a href='#prediction'>Prediction</a>
          </li>

          <li>
            <a href='#testimonials'>Testimonials</a>
          </li>
        </ul>

        <div onClick={() => setIsActive(true)} className='menu-icon'>
          <img src={menuIcon} alt='' />
        </div>
      </nav>

      <div className={`mobile-menu-container ${isActive ? "active" : ""}`} >
        <div onClick={() => setIsActive(false)} className='close-icon'>
          <img src={closeIcon} alt='' />
        </div>
        <ul className='menu-items'>
          <li>
            <a href='#topics' onClick={() => setIsActive(false)}>Disease Details</a>
          </li>
          <li>
            <a href='#info' onClick={() => setIsActive(false)}>About Us</a>
          </li>
          <li>
            <a href='#blog' onClick={() => setIsActive(false)}>Blog</a>
          </li>
          <li>
            <a href='#prediction' onClick={() => setIsActive(false)}>Prediction</a>
          </li>
          <li>
            <a href='#testimonials' onClick={() => setIsActive(false)}>Testimonials</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar