import React from 'react'
import './messenger.css'
import ChatBody from '../../components/chatbody/ChatBody'

const Messenger = () => {
  return (
    <div className='accommodation'>
      <div className="content">
        <div className="accomHeader">
          <h2>Messages</h2>
          <ul class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </div>
        <ChatBody />
      </div>
    </div>
  )
}

export default Messenger