import React from 'react'
import profile from '../img/profile.jpg'
import { Picker } from 'emoji-mart'
import {
  addEmoji
} from './emoji/methods'
import 'emoji-mart/css/emoji-mart.css'
import FooterContainer from '../container/FooterContainer'
import person from '../img/person.jpeg'
import { PassThrough } from 'stream';

export default class ChatScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newMessages: this.props.newMessage
    }
    this.addEmoji = addEmoji.bind(this)
  }
  render () {
    return (
      <div>
        <div className='header'>
          <img src={person} className='header_profile' />
          <span className='header_convFN'>&nbsp;&nbsp;&nbsp; {this.props.user.first_name}&nbsp;&nbsp;{this.props.user.last_name} </span>
        </div>

        <div className='base_screen'>
          <div className='screen'>
            {this.props.messages.map((item, index) => {
              if (item.sender_id == window.localStorage.getItem('id') && item.receiver_id == this.props.user.user_id) {
                return (
                  <div className='sender' key={index}>
                    <span className='message_sender' >{item.text}</span>
                  </div>
                )
              } else if (item.sender_id == this.props.user.user_id) {
                return (
                  <div className='receiver' key={index}>
                    <div className='ps_div'>
                      <img src={person} className='profile_sender' />
                    </div>
                    <span className='message'>{item.text}</span>
                  </div>
                )
              }
            })
            }
            <div className='emoji'>
              {this.props.showEmojiPicker ? (
                <Picker set='emojione' onSelect={this.addEmoji} />
              ) : null}
            </div>
          </div>
          <FooterContainer />
        </div>
      </div>
    )
  }
}
