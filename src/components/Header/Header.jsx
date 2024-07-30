import React from 'react'
import './Header.css'
import Navbar from "../Navbar/Navbar"

function Header() {
  const smoothScroll = (targetId) => {
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header>
      <div className='wrapper'>
        <Navbar />
        <div className='cta'>
          <p className='course-name'>Heart Disease Predictor</p>
          <h1>Protecting Your Heart is our Main Duty</h1>
          <button onClick={() => smoothScroll('prediction')} className='demo-btn'>
            Predict Here
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header