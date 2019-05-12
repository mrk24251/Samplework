import React from 'react'
import profile from '../img/profile.jpg'

export default class ChatScreen extends React.Component {
  render () {
    return (
      <div className='screen'>

        <div className='receiver'>
          <div className='ps_div'>
            <img src={profile} className='profile_sender' />
          </div>
          <span className='message'>salammm</span>
        </div>

        <div className='sender'>
          <span className='message_sender'>salammm!!!!</span>
        </div>
      </div>
    )
  }
}
