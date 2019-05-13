import React from 'react'
import profile from '../img/profile.jpg'
import send from '../img/send.png'
import emoji from '../img/emoji.png'
import { Picker } from 'emoji-mart'
import {
  addEmoji,
  toggleEmojiPicker
} from './methods'
import 'emoji-mart/css/emoji-mart.css'

export default class ChatScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showEmojiPicker: false,
      newMessage: ''
    }
    this.addEmoji = addEmoji.bind(this)
    this.toggleEmojiPicker = toggleEmojiPicker.bind(this)
  }
  handleInput = (e) => {
    var newMessage = e.target.name
    this.setState({ [newMessage]: e.target.value })
  }
  render () {
    var {
      showEmojiPicker,
      newMessage
    } = this.state
    return (
      <div className='base_screen'>
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
          <div className='emoji'>
            {showEmojiPicker ? (
                <Picker set='emojione' onSelect={this.addEmoji} />
              ) : null}
          </div>
        </div>
        <div className='footer'>
          <textarea
            className='writting_textarea'
            name='newMessage'
            value={ newMessage }
            placeholder='write a message...'
            onChange={this.handleInput} />
          <img
            src={emoji}
            className='emoji_button'
            onClick={this.toggleEmojiPicker} />
          <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <img src={send} className='send_icon' />
        </div>
      </div>
    )
  }
}
