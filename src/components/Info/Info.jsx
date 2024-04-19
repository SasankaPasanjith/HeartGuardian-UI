import React from 'react'
import './Info.css'
import { doctorIcon, patientIcon, bgElement2 } from '../../assets'

function Info() {
  return (
    <section id='info' className='dark-gray'>
      <div className='wrapper'>
        <div className='content-container'>
          <div className='info-content'>
            <img src={patientIcon} />
            <div className='amount'>300</div>
            <div className='type'>Patients</div>
          </div>
        </div>

        <div className='content-container'>
          <div className='info-content'>
            <img src={doctorIcon} />
            <div className='amount'>10</div>
            <div className='type'>Doctors & Consultants</div>
          </div>
        </div>
        <img className='bg-element-2' src={bgElement2} />
      </div>
    </section>
  )
}

export default Info