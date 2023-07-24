import React from 'react'
import './Header.css'
import CTA from './CTA';
import ME  from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
    <div className="container header__container">
    <h5>Hi my name is</h5>
    <h1>Linda Wangwe</h1>
    <h5 className="text-light">Front End Developer</h5>
    <CTA />
     <HeaderSocials />

     <div className="me">
    <img src={ME} className='img' alt="ME"/>
    </div>
    <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
    
   

    </header>
  )
}

export default Header