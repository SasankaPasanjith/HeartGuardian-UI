import React from 'react'
import './Header.css'
import Navbar from "../Navbar/Navbar"

function Header() {
  return (
    <header>
      <div className='wrapper'>
        <Navbar />
        <div className='cta'>
          <p className='course-name'>Heart Disease Predictor</p>
          <h1>Protecting Your Heart is our Main Duty</h1>
          <a href='src\components\Prediction\Prediction.jsx' className='demo-btn'>
            Predict Here
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header