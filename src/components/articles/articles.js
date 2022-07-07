import React from 'react';
import './articles.css'

import Currency from '../../assets/image-currency.jpg'
import Restaurant from '../../assets/image-restaurant.jpg'
import Plane from '../../assets/image-plane.jpg'
import Confetti from '../../assets/image-confetti.jpg'

const Articles = () => {
  return (

    <div className='articles'>
      <h1>Latest Articles</h1>
      <div className="topics">


        <div className="topicCard">
          <div className="imageWrapper">
            <img src={Currency} alt="" />
          </div>
          <div className="text">
            <p className='auther'>By Claire Robinson</p>
            <h4> Receive money in any currency with no fees</h4>
            <p className='articleTopic'>The world is getting smaller and we’re becoming more mobile. So why should you be
              forced to only receive money in a single …</p>
          </div>
        </div>
        <div className="topicCard">
          <div className="imageWrapper">
            <img src={Restaurant} alt="" />
          </div>
          <div className="text">
            <p className='auther'>By Wilson Hutton</p>
            <h4>Treat yourself without worrying about money</h4>
            <p className='articleTopic'> Our simple budgeting feature allows you to separate out your spending and set
              realistic limits each month. That means you …</p>
          </div>
        </div>

        <div className="topicCard">
          <div className="imageWrapper">
            <img src={Plane} alt="" />
          </div>
          <div className="text">
            <p className='auther'>By Wilson Hutton</p>
            <h4>Take your Easybank card wherever you go</h4>
            <p className='articleTopic'> We want you to enjoy your travels. This is why we don’t charge any fees on purchases
              while you’re abroad. We’ll even show you …</p>
          </div>
        </div>

        <div className="topicCard">
          <div className="imageWrapper">
            <img src={Confetti} alt="" />
          </div>

          <div className="text">
            <p className='auther'>By Claire Robinson</p>
            <h4>Our invite-only Beta accounts are now live!</h4>
            <p className='articleTopic'> After a lot of hard work by the whole team, we’re excited to launch our closed beta.
              It’s easy to request an invite through the site ...</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Articles;