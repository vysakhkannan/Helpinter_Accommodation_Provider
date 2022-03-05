import React from 'react'
import './cards.css'
import {MdPostAdd} from 'react-icons/md'
import {AiOutlineStop} from 'react-icons/ai'
import {FiUserX} from 'react-icons/fi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

const Cards = () => {
  return (
    <div className='cardBox'>
        <div className="card">
          <div>
            <div className="numbers">10</div>
            <div className="cardName">Accommdation Posts</div>
          </div>
          <div className="iconBx">
            <MdPostAdd className='eye-outline' />
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">10</div>
            <div className="cardName">Booked Accommodation</div>
          </div>
          <div className="iconBx">
            <HiOutlineClipboardCheck className='eye-outline' />
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">10</div>
            <div className="cardName">Declined Posts</div>
          </div>
          <div className="iconBx">
            <AiOutlineStop className='eye-outline' />
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">10</div>
            <div className="cardName">Blocked Users</div>
          </div>
          <div className="iconBx">
            <FiUserX className='eye-outline' />
          </div>
        </div>

    </div>
  )
}

export default Cards