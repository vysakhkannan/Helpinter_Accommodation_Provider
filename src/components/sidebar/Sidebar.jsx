import React from 'react'
import './sidebar.css'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineSetting} from 'react-icons/ai'
import {AiOutlineDashboard} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {MdOutlineBedroomParent} from 'react-icons/md'


const Sidebar = (props) => {
  const [active, setActive] = useState('#dashboard')
  console.log(props.toggle)
  return (
    <div className='navigation' className={props.toggle === '#active' ? 'active navigation' :'navigation'} >
        <ul>
          <li>
            <a href="#">
                <span className="icon"><img src="icon.png" alt="" /></span>
                <span className='title'>Helpinter</span>
            </a>
          </li>
        
          <li>
            <Link to="/" onClick={() => setActive('#dashboard')} className={active === '#dashboard' ? 'active' : ''}>
                <span className="icon"><AiOutlineDashboard className='ion-icon'/></span>
                <span className='title'>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/accommodation" onClick={() => setActive('#accommodation')} className={active === '#accommodation' ? 'active' : ''}>
              <span className="icon"><AiOutlineHome className='ion-icon' /></span>
              <span className='title'>Accommodation</span>
            </Link>
          </li>
          
          <li>
            <Link to='/booking' onClick={() => setActive('#bookings')} className={active === '#bookings' ? 'active' : ''}>
              <span className="icon"><MdOutlineBedroomParent className='ion-icon' /></span>
              <span className='title'>Bookings</span>
            </Link>
          </li>
          <li>
            <Link to='/messenger' onClick={() => setActive('#messages')} className={active === '#messages' ? 'active' : ''}>
              <span className="icon"><BiMessageSquareDetail className='ion-icon' /></span>
              <span className='title'>Messages</span>
            </Link>
          </li>
          <li>
            <Link to='/settings' onClick={() => setActive('#Settings')} className={active === '#Settings' ? 'active' : ''}>
              <span className="icon"><AiOutlineSetting className='ion-icon' /></span>
              <span className='title'>Settings</span>
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar