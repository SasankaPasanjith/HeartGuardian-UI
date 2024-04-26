import React from 'react'
import { testimonial1, testimonial2, testimonial3 } from '../../assets'
import './Testimonials.css'

function Testimonials() {
  return (
    <section id="testimonials" className='dark-gray'>
      <div className='wrapper'>
        <h2>What is our patients Say?</h2>
      </div>

      <div className='content-container'>
        <div className='testimonial'>
          <img src={testimonial1} alt="" />
          <div className='reviewer-details'>
            <div className='name'>Parakrama De Silva</div>
            <div className='company-name'>Colombo</div>
            <div className='review'>This is a very good website. 
            This can easily check whether there is a risk of heart disease.</div>
          </div>
        </div>

        <div className='testimonial'>
          <img src={testimonial2} alt="" />
          <div className='reviewer-details'>
            <div className='name'>Gayani Kodikara</div>
            <div className='company-name'>Galle</div>
            <div className='review'>This is a website that is useful for the elderly 
            and busy people around the country.</div>
          </div>
        </div>


        <div className='testimonial'>
          <img src={testimonial3} alt="" />
          <div className='reviewer-details'>
            <div className='name'>Mohomad Musthaak</div>
            <div className='company-name'>Kandy</div>
            <div className='review'>I used this to check my parents' heart disease risk. 
            A website that can be recommended to everyone. </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials