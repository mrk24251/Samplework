import React from 'react'
import profile from '../img/profile.jpg'
import send from '../img/send.png'
import emoji from '../img/emoji.png'
import { Picker } from 'emoji-mart'
import {
  addEmoji,
  toggleEmojiPicker
} from './emoji/methods'
import 'emoji-mart/css/emoji-mart.css'

export default class ChatScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showEmojiPicker: false,
      newMessage: '',
      messages: [
        {
          id: 1,
          message: 'salam'
        },
        {
          id: 2,
          message: 'salam'
        },
        {
          id: 1,
          message: 'khoobi?'
        }
      ]
    }
    this.addEmoji = addEmoji.bind(this)
    this.toggleEmojiPicker = toggleEmojiPicker.bind(this)
  }
  handleInput = (e) => {
    var newMessage = e.target.name
    this.setState({ [newMessage]: e.target.value })
  }
  handleSend = (e) => {
    this.setState({ ...this.state,messages: [...this.state.messages, { id: 1, message: this.state.newMessage }]})
    this.setState({newMessage: ''})
  }
  render () {
    var {
      showEmojiPicker,
      newMessage
    } = this.state
    return (
      <div className='base_screen'>
        <div className='screen'>
        {this.state.messages.map((item, index) => {
          if (item.id === 1) {
            return (
              <div className='sender'>
                <span className='message'>{item.message}</span>
              </div>
            )
          } else {
            return (
              <div className='receiver'>
                <span className='message'>{item.message}</span>
              </div>
            )
          }
        }

        )}
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
          <img
            src={send}
            className='send_icon'
            onClick={this.handleSend} />
        </div>
      </div>
    )
  }
}
