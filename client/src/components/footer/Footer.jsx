// import React from 'react'
import './Footer.css'
import {FaLinkedinIn, FaGithub, FaMediumM} from 'react-icons/fa'
import {IoLogoTwitter, IoMdMail} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        {/* <li><a href="#experience">Expeirience</a></li> */}
        {/* <li><a href="#services">Services</a></li> */}
        {/* <li><a href="#portfolio">Portfolio</a></li> */}
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tomasmakaj/"><FaLinkedinIn/></a>
        <a href="https://github.com/Tomasmakaj"><FaGithub/></a>
        <a href="https://medium.com/@tmakajcoding"><FaMediumM/></a>
        <a href="https://twitter.com/tomasmakaj_"><IoLogoTwitter/></a>
        <a href="mailto:tmakajcoding@gmail.com"><IoMdMail/></a>

      </div>

      <div className="footer__copyright">
        <small> Web Development by Tomas Makaj </small>
      </div>
    </footer>
  )
}

export default Footer