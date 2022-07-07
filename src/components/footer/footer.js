import React from 'react';
import Button from '../Button/button';
import Logo from '../../assets/logo.svg'

import insta from '../../assets/icon-instagram.svg'
import twitter from '../../assets/icon-twitter.svg'
import facebook from '../../assets/icon-facebook.svg'
import pinterest from '../../assets/icon-pinterest.svg'
import youtube from '../../assets/icon-youtube.svg'
import './footer.css'


const Footer = () => {
  return (

    <footer>
      <div className="social">
        <div className="socialIcons">
          <img src={Logo} alt="" className='logo' />
          <div>
            <img src={facebook} alt="" className='icon' />
            <img src={youtube} alt="" className='icon' />
            <img src={twitter} alt="" className='icon' />
            <img src={pinterest} alt="" className='icon' />
            <img src={insta} alt="" className='icon' />
          </div>
        </div>
        <div className="support">
          <ul>
            <li><a href="https://mansour-g.github.io/template_2/">About</a></li>
            <li><a href="https://mansour-g.github.io/template_2/">Contact</a></li>
            <li><a href="https://mansour-g.github.io/template_2/">Blog</a></li>
          </ul>
          <ul>
            <li><a href="https://mansour-g.github.io/template_2/">Careers</a></li>
            <li><a href="https://mansour-g.github.io/template_2/">Support</a></li>
            <li><a href="https://mansour-g.github.io/template_2/">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="cta">
        <Button />
        <h6>© Easybank. All Rights Reserved</h6>
      </div>
    </footer>
  )
}

export default Footer;