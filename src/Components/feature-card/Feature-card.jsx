import {React } from 'react'
import './Feature-card.css'


const Feature_card = ({eleClass ,img , title , text}) => {
  return (
    <div className={`feature-card ${eleClass}`}>
        <div className="img-container-feature-card">
            <img src={img} alt="" />
        </div>
        <h3 className='feature-card-header'>{title}</h3>
        <p className='feature-card-text'>{text}</p>
    </div>
  )
}

export default Feature_card