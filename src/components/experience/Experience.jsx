import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
    <h5>Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className='experience__frontend'>
      <h3>Frontend Development</h3>
      <div className='experience__content'>
        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Javascript</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Next JS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>

        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>SASS</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>React</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
      </div>


      </div>

      <div className='experience__backend'>
      <h3>Backend Development/ Frameworks</h3>
      <div className='experience__content'>
        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>PHP</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Tailwind</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Nodejs</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Mysql</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>

        
      </div>

      </div>
    </div>
    
    </section>
  )
}

export default Experience