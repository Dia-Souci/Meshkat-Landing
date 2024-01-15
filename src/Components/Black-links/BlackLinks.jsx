import React from 'react'
import './BlackLinks.css'

import LineLinks from '../LineLinks/LineLinks';

const BlackLinks = () => {
    const arrayOfData = [
        {id:0,index : 1 , content:['Web Design','App Design','Dashboard Design']},{id:1,index : 2 , content:['Web Dev','App Dev']},{id:2,index : 3 , content:['Brand Logo','Brand Promotion']}
    ]
  return (
    <div className='blackLinks-container'>
        <div className="lineLinks-container">
            {
                arrayOfData.map((data) => (
                    <LineLinks key={data.id} index={data.index} content={data.content}/>
                ))
            }
            
        </div>
        <div className="link-title-description">
            <h2 className="link-title-description-big">
                Solving problems by our product
            </h2>
            <p className="link-title-description-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce neque arcu, aliquet et suscipit eget, fermentum et lacus. Suspendisse suscipit nulla sollicitudin justo maximus cursus.
            </p>
            <button className="link-title-description-btn">
                Learn More ▶
            </button>
        </div>
    </div>
  )
}

export default BlackLinks