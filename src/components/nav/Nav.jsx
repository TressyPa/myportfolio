import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {RiContactsFill} from 'react-icons/ri'
import {GiGraduateCap} from 'react-icons/gi'
import {FaServicestack} from 'react-icons/fa'
import {IoMdContact} from 'react-icons/io'
import { useState } from 'react'


const Nav = () => {
  const [activeNav , setActiveNav] = useState('#home')
  return (
    <nav>
    <a href="#home" onClick ={()=>setActiveNav('#home')}  className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
     <a href="#about" onClick ={()=>setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><RiContactsFill /></a>
      <a href="#experience" onClick ={()=>setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><GiGraduateCap /></a>
       <a href="#services" onClick ={()=>setActiveNav('#services')}  className={activeNav === '#services' ? 'active' : ''}><FaServicestack /></a>
        <a href="#contact" onClick ={()=>setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><IoMdContact /></a>
    
    </nav>
  )
}

export default Nav