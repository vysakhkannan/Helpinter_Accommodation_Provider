import React, {useState} from 'react'
import './header.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsSearch} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {FiSettings} from 'react-icons/fi'


const Header = (props) => {

  return (
    <div className="topbar">
      <div className="toggle">
        <GiHamburgerMenu className='ion-icon' onClick={() => {props.toggle === 'navigation' ? props.setToggle('#active') : props.setToggle('navigation')}}/>
      </div>
      {/* SEARCH */}
      <div className="search">
        <label>
          <input type="text" placeholder='Search here' />
          <BsSearch className='ion-icon' />
        </label>
      </div>
      {/* USER IMAGE */}
      <div className="user">
        <img src="user.png" alt="" className='user-profile'/>
        <div className="dropdown">
          <ul>
            <li><a href="#" className='hoverable'>Account Setting <FiSettings className='icon' /></a></li>
            <li><a href="#" className='hoverable'>Logout <FiLogOut className='icon'/></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header