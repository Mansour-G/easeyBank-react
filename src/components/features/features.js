import React from 'react';
import './features.css'

import Bank from '../../assets/icon-online.svg'
import Budget from '../../assets/icon-budgeting.svg'
import Onboard from '../../assets/icon-onboarding.svg'
import Api from '../../assets/icon-api.svg'

const Features = () => {
  return (
    <div className='features'>
      <div className="featuresTitle">
        <h1>Why choose Easybank?</h1>
        <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.</p>
      </div>
      <div className="featuresItems">
        <div className="items">
          <img src={ Bank } alt="" className='icons'/>
          <h3>Online Banking</h3>
          <p>Our modern web and mobile applications allow you to keep track of your finances 
            wherever you are in the world.</p>
        </div>

        <div className="items">
          <img src={ Budget } alt="" className='icons'/>
          <h3>Simple Budgeting</h3>
          <p>See exactly where your money goes each month. Receive notifications when you’re 
            close to hitting your limits.</p>
        </div>

        <div className="items">
          <img src={ Onboard } alt="" className='icons'/>
          <h3>Fast Onboarding</h3>
          <p>We don’t do branches. Open your account in minutes online and start taking control 
            of your finances right away.</p>
        </div>

        <div className="items">
          <img src={ Api } alt="" className='icons'/>
          <h3>Open API</h3>
          <p>Manage your savings, investments, pension, and much more from one account. Tracking 
            your money has never been easier.</p>
        </div>
      </div>
    </div>
  )
}

export default Features;