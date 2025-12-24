import React from 'react'
import './Hero.css'
import profile_img from '../../Assets/DP.jpg'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" className='profile-img'/>
      <h1> <span>I'm Ayaz Shaikh,</span> MERN Stack Developer</h1>
      <p>💻Turning ideas into scalable, real-world web apps 🚀✨</p>
      <div className="hero-action">
        <div className="hero-connect">
          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-80}
          >
            Connect With Me
          </Link>
          </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>

  )
}

export default Hero