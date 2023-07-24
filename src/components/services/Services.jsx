import React from 'react'
import './services.css'
import {GiCheckMark} from 'react-icons/gi'

const Services = () => {
  return (
    <section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <article className='service'>
        <div className='service__head'>
          <h3>UI/UX Design</h3>
        </div>

         <ul className='service__list'>
          <li>
          <GiCheckMark className='service__list-icon' />
          <p>Collaboration with UI/UX designers.</p>
          </li>

           <li>
          <GiCheckMark className='service__list-icon' />
          <p>Transforming wireframes and mockups into fully functional front-end code</p>
          </li>

           <li>
          <GiCheckMark className='service__list-icon' />
          <p>Creating positive and intuitive user experience through well-designed interfaces and interactions</p>
          </li>
           
           
         </ul>
      </article>

       <article className='service'>
        <div className='service__head'>
          <h3>Web Development</h3>
        </div>

         <ul className='service__list'>
          <li>
          <GiCheckMark className='service__list-icon' />
          <p>Creating visually appealing and responsive websites .</p>
          </li>

          <li>
          <GiCheckMark className='service__list-icon' />
          <p>Building interactive web applications that run in the browser using frameworks like React</p>
          </li>

           <li>
          <GiCheckMark className='service__list-icon' />
          <p>Responsive Design: Ensuring that websites and applications are optimized for various devices and screen sizes</p>
          </li>

           <li>
          <GiCheckMark className='service__list-icon' />
          <p>Cross-Browser Compatibility and consistency among different web browsers</p>
          </li>

           <li>
          <GiCheckMark className='service__list-icon' />
          <p>Providing ongoing maintenance and support for existing websites and applications.</p>
          </li>


           <li>
          <GiCheckMark className='service__list-icon' />
          <p>Implementing animations and interactive elements to enhance the user experience.</p>
          </li>

           
         </ul>
      </article>
        {/**end of web */}
       <article className='service'>
        <div className='service__head'>
          <h3>Testing and Version Control </h3>
        </div>

         <ul className='service__list'>
          <li>
          <GiCheckMark className='service__list-icon' />
          <p>Writing and running tests to identify and fix bugs and ensure the front-end behaves as intended.</p>
          </li>

           <li>
          <GiCheckMark className='service__list-icon' />
          <p>Using version control systems like Git to manage and track changes to front-end code.</p>
          </li>

           <li>
          <GiCheckMark className='service__list-icon' />
          <p>Using tools like Webpack, Gulp, or Parcel to bundle and optimize front-end assets for production</p>
          </li>

           <li>
          <GiCheckMark className='service__list-icon' />
          <p>Developing web applications that offer an app-like experience, including offline capabilities and push notifications.</p>
          </li>


           <li>
          <GiCheckMark className='service__list-icon' />
          <p>Integrating front-end code with back-end APIs to fetch and display data from servers.</p>
          </li>

           
         </ul>
      </article>

      
    </div>
    </section>
  )
}

export default Services