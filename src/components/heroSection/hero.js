import React from 'react';
import Button from '../Button/button'
import './hero.css'

import bg from '../../assets/bg-intro-mobile.svg'
import mobileBg from '../../assets/image-mockups.png'



const HeroSection = () => {
  return (
    <div className='heroSection'>

      <div className="heroTitle">
        <h1>Next generation digital banking</h1>
        <p> Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <Button />
      </div>

      <div className="heroImg">
      </div>
      <div className="bgMain">

        <img src={ bg } alt="" className='bg'/>
        <img src={ mobileBg } alt="" className='mobileImg'/>
      </div>

    </div>
  )
}

export default HeroSection;