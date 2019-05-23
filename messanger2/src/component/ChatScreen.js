import React from 'react'
import profile from '../img/profile.jpg'
import { Picker } from 'emoji-mart'
import {
  addEmoji
} from './emoji/methods'
import 'emoji-mart/css/emoji-mart.css'
import FooterContainer from '../container/FooterContainer'

export default class ChatScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newMessages: this.props.newMessage
    }
    this.addEmoji = addEmoji.bind(this)
  }
  handleclick =() => {
    console.log(this.props.newMessage)
  }
  render () {
    return (
      <div className='base_screen'>
        <div className='screen'>
          {this.props.message.map( (item, index) => {
            if(item.id === 1) {
              return(
                <div className='sender' key={index}>
                  <span className = 'message_sender' >{item.message}</span>
                </div>
              )
            } else {
              return(
                <div className='receiver' key={index}>
                  <div className='ps_div'>
                    <img src={profile} className='profile_sender' />
                  </div>
                  <span className = 'message'>{item.message}</span>
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
    )
  }
}
