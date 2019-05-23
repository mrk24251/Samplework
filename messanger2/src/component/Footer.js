import React from 'react'
import send from '../img/send.png'
import emoji from '../img/emoji.png'
import { addNewMessage , addEmoji , addNewMessageInChat} from '../action/conversation'
import 'emoji-mart/css/emoji-mart.css'

export default class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showEmojiPicker: false,
      newMessage: null
    }
  }
  handleInput = (e) => {
    this.setState({ newMessage: e.target.value }, () =>
    this.props.dispatch(addNewMessage(this.state.newMessage)))
    console.log('sss',this.props.newMessages)
  }
  handleClick = (e) => {
    this.props.dispatch(addEmoji(this.state.showEmojiPicker))
  }
  handleSenderClick = () => {
    if (this.state.newMessage !== null && this.state.newMessage !==''){
      this.props.dispatch(addNewMessageInChat(this.state.newMessage))}else{
        return null
      }}
  handleFocus = (e) => {
    e.target.value=this.props.newMessages
    this.setState({newMessage:this.props.newMessages} ,() =>
    this.props.dispatch(addNewMessage(this.state.newMessage)))
  }
  render () {
    return ( 
        <div className='footer'>
          <textarea
            className='writting_textarea'
            name='newMessage'
            placeholder='write a message...'
            onChange={this.handleInput} 
            onFocus={this.handleFocus}/>
          <img
            src={emoji}
            className='emoji_button'
            onClick={this.handleClick} />
          <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <img
			      src={send}
			      className='send_icon'
            onClick={this.handleSenderClick} />
        </div>
    )
  }
}