import React from 'react'
import hero from '../../imgs/Group 1000006889.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-container'>
       
        <div className="hero-text-container">
            <h1><span className='h-redPart'>Meshkat</span>Power Lorem Ipsum dolor</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales at velit tempor dapibus. Nam orci neque, pellentesque quis mauris sed, ultricies feugiat arcu. Nullam dignissim urna nibh, ut dignissim nisi suscipit et. Fusce hendrerit pellentesque odio eget ullamcorper</p>
            <button className='red-btn'>See more</button>
        </div>
    </div>
  )
}

export default Hero