import React, { useState } from 'react'
import "./Topics.css"
import { heartDisease, infected, treatments, predictHD, riskPopulation, prevent, bgElement1 } from "../../assets"

function Topics() {
  const [currentImage, setCurrentImage] = useState(heartDisease)

  return (
    <section id="topics" className='black'>
      <div className='Wrapper'>
        <h2>What will You Get?</h2>
        <div className='content-container'>
          <ul className='topics-list'>
            <li onMouseEnter={() => setCurrentImage(heartDisease)}>What are Heart Diseases?</li>
            <li onMouseEnter={() => setCurrentImage(infected)}>How are Those Diseases Infected? </li>
            <li onMouseEnter={() => setCurrentImage(treatments)}>What are the Treatments for Those Diseases?</li>
            <li onMouseEnter={() => setCurrentImage(predictHD)}>Predicting the Diseases</li>
            <li onMouseEnter={() => setCurrentImage(riskPopulation)}>Who is at Risk for These Diseases?</li>
            <li onMouseEnter={() => setCurrentImage(prevent)}>How to Prevent</li>
          </ul>

          <div className='topic-image'>
            <img src={currentImage}></img>
          </div>
        </div>
        <img src={bgElement1} className='bg-element-1'></img>
      </div>
    </section>
  )
}

export default Topics