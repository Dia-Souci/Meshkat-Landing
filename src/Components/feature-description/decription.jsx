import React from 'react'
import './decription.css'
import pic from '../../imgs/personne-pres-usine-energie-alternative 1.svg'
const Decription = () => {
  return (
    <div className='description-container'>
        <div className="description-image-container">
            <img src={pic} alt="" />
        </div>

        <div className="description-text-container">
            <h3 className="description-text-small">
                Company vision
            </h3>
            <h1 className="description-text-big">
                IT solutions for your business.
            </h1>
            <p className="description-text">
            Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data in the digital world.
            </p>

            <button className="description-text-button">
                Read More
            </button>
        </div>
    </div>
  )
}

export default Decription