import React from 'react'
import ChatScreen from './ChatScreen'
import profile from '../img/profile.jpg'
import send from '../img/send.png'

export default class Chat extends React.Component {
  render () {
    return (
      <div className='Chat'>
        <div className='header'>
          <img src={profile} className='header_profile' />
          <span className='header_convFN'>&nbsp;&nbsp;&nbsp; Mohammad </span>
        </div>
        <ChatScreen />
        <div className='footer'>
          <textarea placeholder='write a message...' />
          <img src={send} className='send_icon' />
        </div>
      </div>
    )
  }
}
