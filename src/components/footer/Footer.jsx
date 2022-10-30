import React from 'react'
import './Footer.css'

import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer-logo'>Me</a>

      <ul className='permalinks'>
        <li> <a href='#'>Home</a></li>
        <li> <a href='#about'>About</a></li>
        <li> <a href='#experience'>Experience</a></li>
        <li> <a href='#services'>Services</a></li>
        <li> <a href='#portofolio'>Portofolio</a></li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer-socials'>
        <a href='https://instagram.com/__nananq'><AiOutlineInstagram /></a>
        <a href='https://wa.me/+6281290415495'><AiOutlineWhatsApp /></a>
      </div>

    </footer>
  )
}

export default Footer