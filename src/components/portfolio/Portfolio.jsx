import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
    
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div> 
          <h3>This is my amazon clone</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          <a href="https://github.com/tressypa" className='btn btn-primary'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt=''/>
          </div> 
          <h3>This Next js AI prompt app</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://next-js-prompttile.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          <a href="https://github.com/tressypa" className='btn btn-primary'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt=''/>
          </div> 
          <h3>Crypto app</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          <a href="https://github.com/TressyPa" className='btn btn-primary'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt=''/>
          </div> 
          <h3>Weather app </h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          <a href="https://github.com/TressyPa" className='btn btn-primary'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt=''/>
          </div> 
          <h3>Movie app</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          <a href="https://github.com/TressyPa" className='btn btn-primary'>Github</a>
          </div>
        </article>
        {/**to map we alocate data an array and map on article */}

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt=''/>
          </div> 
          <h3>Google Maps API</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          <a href="https://github.com/TressyPa" className='btn btn-primary'>Github</a>
          </div>
        </article>
      </div>
    
    
    
    
    </section>
  )
}

export default Portfolio