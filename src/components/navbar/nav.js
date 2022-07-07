import React, { useState } from 'react';

import Logo from '../../assets/logo.svg'
import hamburger from '../../assets/icon-hamburger.svg'
import close from '../../assets/icon-close.svg'
import './nav.css'



const Navbar = () => {

  const [url, setUrl] = useState(hamburger);

  const toggleMenu = () => {
    const overlay = document.querySelector('#overlay')
    const navigation = document.querySelector('.navigations')

    if (url === hamburger) {
      setUrl(close);
      overlay.classList.add('showOvelay')
      navigation.classList.add('mobileNav')

    } else {
      setUrl(hamburger);
      navigation.classList.remove('mobileNav')
      overlay.classList.remove('showOvelay')
    }

  }

  return (
    <nav>
      <img src={Logo} alt="logo" />
      <div className="navigations navItems">
        <ul>
          <li className='active'>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>

      <div>
        <button className='button'>Request Invite</button>
      </div>

      <div className="menuBTn " onClick={toggleMenu}>
        <img src={url} alt='...' />
      </div>

    </nav>
  )
}

export default Navbar;