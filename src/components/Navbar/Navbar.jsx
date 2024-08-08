import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { menuIcon, closeIcon, logoImage} from '../../assets'

function Navbar() {

  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState (null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth',
    });
    setIsActive(false);
  };

  return (
    <>
      <nav>
        <a href="/" className="logo"> Heart<span className="red">Guardian</span></a>
        <ul>
          <li>
            <a href="#topics" onClick={(e) => handleNavLinkClick(e, 'topics')}>Disease Details</a>
          </li>
          <li>
            <a href="#info" onClick={(e) => handleNavLinkClick(e, 'info')}>About Us</a>
          </li>
          <li>
            <a href="#blog" onClick={(e) => handleNavLinkClick(e, 'blog')}>Blog</a>
          </li>
          <li>
            <a href="#prediction" onClick={(e) => handleNavLinkClick(e, 'prediction')}>Prediction</a>
          </li>
          <li>
            <a href="#testimonials" onClick={(e) => handleNavLinkClick(e, 'testimonials')}>Testimonials</a>
            </li>
          <li>
            {username ? (
              <span className='navbar-username'>Welcome {username}</span>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>
        <div onClick={() => setIsActive(true)} className="menu-icon" aria-label="Open menu">
          <img src={menuIcon} alt="Menu Icon" />
        </div>
      </nav>

      <div className={`mobile-menu-container ${isActive ? "active" : ""}`} >
        <div onClick={() => setIsActive(false)} className='close-icon' aria-label="Close menu">
          <img src={closeIcon} alt='Close Icon' />
        </div>
        <ul className='menu-items'>
        <li>
            <a href="#topics" onClick={(e) => handleNavLinkClick(e, 'topics')}>Disease Details</a>
          </li>
          <li>
            <a href="#info" onClick={(e) => handleNavLinkClick(e, 'info')}>About Us</a>
          </li>
          <li>
            <a href="#blog" onClick={(e) => handleNavLinkClick(e, 'blog')}>Blog</a>
          </li>
          <li>
            <a href="#prediction" onClick={(e) => handleNavLinkClick(e, 'prediction')}>Prediction</a>
          </li>
          <li>
            <a href="#testimonials" onClick={(e) => handleNavLinkClick(e, 'testimonials')}>Testimonials</a>
          </li>
          <li>
            {username ? (
              <span className='navbar-username'>Welcome {username}</span>
            ) : (
              <NavLink to="/login" onClick={() => setIsActive(false)}>Login</NavLink>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;