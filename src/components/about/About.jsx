import React from 'react'
import './About.css'
import ME from "../../assets/me-about.jpg"
import {FaAward} from 'react-icons/fa'
import {PiUsersFill} from 'react-icons/pi'
import {PiFoldersFill} from 'react-icons/pi'

const About = () => {
  return (
    <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
         <img src={ME} className='picture' alt="About Me"/>
    </div>
    </div>

    <div className="about__content">
      <div className='about__cards'>
        <article className='about__card'>
          <FaAward className='about__icon'/>
        <h5>Experience</h5>
        
          <small>3+ working experience</small>
        </article>

        <article className='about__card'>
          <PiUsersFill className='about__icon'/>
        <h5>Clients</h5>
        
          <small>20+ clients</small>
        </article>

        <article className='about__card'>
          <PiFoldersFill className='about__icon'/>
        <h5>Projects</h5>
        
          <small>50+ completed projects</small>
        </article>
      </div>
      <p>
     I am an experienced web developer / front end developer who is enthusiastic with a passion in this field.
     With troubleshooting mindset and crafting solid and scalabale frontend products with great user experience.
      </p>
      <a href='#contact' className='btn btn-primary'>Let's talk</a>
    </div>
    </div>
    </section>
  )
}

export default About