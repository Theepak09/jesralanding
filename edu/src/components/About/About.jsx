import React from 'react'
import './About.css'
import about_img from '../../assets/windmillabout usupscaled-cgi-6x.jpeg'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about' name='about'>
        <div className="about-left">
            <img src={about_img} alt="about-img" className='about-img'/>
            <img src={play_icon} alt="play-icon" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT US</h3>
            <h2>Harnessing Wind, Empowering Tomorrow!</h2>
            <p>Jesra Green Energy Developer is a leading provider of end-to-end wind energy solutions. From turbine supply to installation and maintenance, we power progress with precision.</p>
            <p>Driven by innovation and sustainability, we turn wind into reliable, clean energy. Partner with Jesra where nature meets engineering for a greener tomorrow.</p>
            <p>At Jesra Green Energy Developer, we are committed to transforming the energy landscape by delivering cutting-edge wind power solutions that not only drive sustainable growth but also empower industries, communities, and future generations to thrive in a cleaner, greener world.</p>
        </div>
      
    </div>
  )
}

export default About
