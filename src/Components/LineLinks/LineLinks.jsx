import React from 'react'
import './LineLinks.css'
import icon from '../../imgs/blackLinksIcon.svg'
import smallIcon from '../../imgs/Group 1008.svg'

const LineLinks = ({index , content}) => {
  return (
    <div className="lineLinks">
        <div className="lineLink">
            <span>{index}</span>
            <div className="linebreak"></div>
            <img src={icon} alt="" />
        </div>
        <div className="content-link">
            <h3 className="content-link-title">
                Lorem ipsum
            </h3>
            <div className="all-checks-content">
                {
                    content.map((e)=>(
                        <div className='check-container-content'>
                            <div className="small-check-logo">
                                <img src={smallIcon} alt="" />
                            </div>
                            <span>
                                {e}
                            </span>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default LineLinks