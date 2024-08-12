import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { menuIcon, closeIcon } from '../../assets';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    setUsername(null);
    navigate('/');
  };

  return (
    <>
      <nav>
        <a href="/" className="logo">Heart<span className="red">Guardian</span></a>
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
          <li className="navbar-username-dropdown">
            {username ? (
              <>
                <span
                  className='navbar-username'
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Welcome {username}
                </span>
                {dropdownOpen && (
                  <ul className='dropdown-menu'>
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                )}
              </>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>
        <div onClick={() => setIsActive(true)} className="menu-icon" aria-label="Open menu">
          <img src={menuIcon} alt="Menu Icon" />
        </div>
      </nav>

      <div className={`mobile-menu-container ${isActive ? 'active' : ''}`}>
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
          <li className="navbar-username-dropdown">
            {username ? (
              <>
                <span
                  className='navbar-username'
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Welcome {username}
                </span>
                {dropdownOpen && (
                  <ul className='dropdown-menu'>
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                )}
              </>
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