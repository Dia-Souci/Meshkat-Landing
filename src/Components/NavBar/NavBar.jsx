import React from 'react'
import Logo from '../../imgs/Group.svg'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='Nav-bar'>
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navigations-container">
        <ul className='navigation-list'>
          <li className='nav-item'>
            <a className='link' href="">Home</a>
          </li>
          <li className='nav-item'>
            <a className='link' href="">Case Studies</a>
          </li>
          <li className='nav-item'>
            <a className='link' href="">Product</a>
          </li>
          <li className='nav-item'>
            <a className='link' href="">Services</a>
          </li>
          <li className='nav-item'>
            <a className='link' href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="login-container">
        <button className='log-btn'> Login</button>
      </div>
    </div>
  )
}

export default NavBar