import React from 'react'
import './chatlist.css'
import { useState } from 'react'
import {BsPlusLg} from 'react-icons/bs'
import {FaEllipsisH} from 'react-icons/fa'
import {BiSearchAlt} from 'react-icons/bi'
import ChatListitems from './ChatListitems'

const ChatList = () => {

    const allChatUsers = [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
          id: 1,
          name: "Tim Hover",
          active: true,
          isOnline: true,
        },

        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
          id: 3,
          name: "Hamaad Dejesus",
          active: false,
          isOnline: false,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
          id: 4,
          name: "Eleni Hobbs",
          active: false,
          isOnline: true,
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
          id: 5,
          name: "Elsa Black",
          active: false,
          isOnline: false,
        },
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 6,
          name: "Kayley Mellor",
          active: false,
          isOnline: true,
        },
        {
          image:
            "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
          id: 7,
          name: "Hasan Mcculloch",
          active: false,
          isOnline: true,
        },

        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
          id: 9,
          name: "Allen Woodley",
          active: false,
          isOnline: true,
        },
        {
          image: "https://pbs.twimg.com/profile_images/770394499/female.png",
          id: 10,
          name: "Manpreet David",
          active: false,
          isOnline: true,
        },
      ];

    const [allChats, setAllChats] = useState(allChatUsers)
    console.log(allChats)

  return (
    <div className='main__chatlist'>
        <button className='btn'>
            <BsPlusLg />
            <span>New Conversation</span>
        </button>
        <div className="chatlist__heading">
            <h2>Chat</h2>
            <button className="btn-nobg">
                <FaEllipsisH />
            </button>
        </div>
        <div className="chatlist__search">
            <div className="search__wrap">
                <input type="text" placeholder='Search Here' required />
                <button className="search-btn">
                    <BiSearchAlt />
                </button>
            </div>
        </div>
        <div className="chatlist__items">
          {allChats.map((item, index) => {
            return(
              <ChatListitems
                name={item.name}
                key={item.id}
                animationDelay={index +1}
                active={item.active ? "active" : ""}
                image={item.image}
              />
            )
          })}

        </div>
    </div>
  )
}

export default ChatList