import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Shrek</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testiomonials</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="blank_" rel="noopener"><AiFillFacebook/></a>
        <a href="https://instagram.com" target="blank_" rel="noopener"><AiOutlineInstagram/></a>
        <a href="https://twitter.com" target="blank_" rel="noopener"><AiFillTwitterCircle/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer