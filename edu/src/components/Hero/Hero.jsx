import React from 'react'
import { Link } from 'react-scroll'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' name='hero'>
      <div className="hero-text">
        <h1>Turning Wind into Power & Vision into Reality!</h1>
        <p>Jesra specializes in end-to-end wind energy solutions — from site assessment to turbine installation and maintenance. We harness the power of nature to build a cleaner & sustainable future.</p>
        <Link 
          to="about" 
          smooth={true} 
          offset={-200} 
          duration={500} 
          className='btn'
        >
          Explore more <img src={dark_arrow} alt="arrow" />
        </Link>
      </div>
    </div>
  )
}

export default Hero
