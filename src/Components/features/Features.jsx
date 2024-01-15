import React from 'react'
import './Features.css'
import Feature_card from '../feature-card/Feature-card'
import pic1 from '../../imgs/image 10.svg'
import pic2 from '../../imgs/image 11.svg'
import pic3 from '../../imgs/image 12.svg'
import Decription from '../feature-description/decription'


const Features = () => {
    let txt = 'A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.'

    let Card_Content = {
        card1 : {
            ele:'',
            img : pic1,
            title : 'Easy to purchase',
            text :txt
        },
        card2 : {
            ele:'red',
            img : pic2,
            title : 'Strategy',
            text :txt
        },
        card3 : {
            ele:'',
            img : pic3,
            title : 'Agency Web',
            text :txt
        }
    }
        
    
  
    return (
    <div className='feature-container'>
        <div className='feature-container-titles'>
            <h1>Company feature</h1>
            <p>We believe scaling startups require a radically different kind of agency</p>
        </div>
        <div className="grid-card-container">
            {Object.values(Card_Content).map((element, index) => (
                <Feature_card
                    key={index} 
                    eleClass={element.ele}
                    img={element.img}
                    title={element.title}
                    text={element.text}
                />
            ))}
        </div>
        <Decription/>
        
    </div>
  )
}

export default Features