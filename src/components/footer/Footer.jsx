import React from 'react'
import './footer.css'
import {ImFacebook2} from 'react-icons/im'
import {RiInstagramFill} from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
       <a href='#footer' className='footer__logo'>Linda Wangwe</a>
      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

       <div className="footer__socials">
        <a href='https://facebook.com'><ImFacebook2 /></a>
        <a href='https://instagram.com'><RiInstagramFill /></a>
        <a href='https://twitter.com'><FaTwitter /></a>
       </div>

        <div className='footer__copyright'>
        <small>&copy; Linda Portfolio. All Rights Reserved</small>
        </div>

    </footer>
  )
}

export default Footer