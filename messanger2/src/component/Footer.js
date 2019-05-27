import React from 'react'
import send from '../img/send.png'
import emoji from '../img/emoji.png'
import { addNewMessage , addEmoji , addNewMessageInChat} from '../action/conversation'
import 'emoji-mart/css/emoji-mart.css'
import axios from 'axios'

export default class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showEmojiPicker: false,
      newMessage: null,
      EmojiNumber:0,
      Enter:0,
      token: window.localStorage.getItem('token')
    }
  }
  componentDidUpdate(){
    if(this.props.showEmojiPicker==true && this.state.EmojiNumber==0 && this.state.Enter==0){
      this.setState({EmojiNumber:1})
      console.log('lll')
    }else if(this.props.showEmojiPicker==false && this.state.EmojiNumber==1 && this.state.Enter==0)
    {
    document.getElementsByClassName('writting_textarea')[0].value=this.props.newMessages
    this.setState({EmojiNumber:0})
    this.setState({newMessage:this.props.newMessages} ,() =>
    this.props.dispatch(addNewMessage(this.state.newMessage)))
    }
    else if(this.state.Enter==1){
      document.getElementsByClassName('writting_textarea')[0].value=''
      this.setState({Enter:0})
    }
  }
  handleInput = (e) => {
    this.setState({ newMessage: e.target.value }, () =>
    this.props.dispatch(addNewMessage(this.state.newMessage)))
    // console.log('sss',this.props.newMessages)
  }
  handleClick = (e) => {
    this.props.dispatch(addEmoji(this.state.showEmojiPicker))
    this.setState({newMessage:null})
  }
  handleSenderClick = () => {
    // if (this.state.newMessage !== null && this.state.newMessage !==''){
    //   this.props.dispatch(addNewMessageInChat(this.state.newMessage))}else{
    //     return null
    //   }
    //   this.setState({Enter:1})
    //   this.setState({newMessage:null})
      let fdata = new FormData()
      console.log('conversationnnnnnnn',this.props.conversation.id)
      fdata.append('conversation_id', this.props.conversation.id)
      fdata.append('token', this.state.token)
      fdata.append('text',this.state.newMessage)
      axios.post('https://api.paywith.click/conversation/create/', fdata)
        .then((response) => {
          console.log('hello', response)
        })
        .catch((error) => {
          console.log('error::::', error)
        })
      console.log('jjjjjjjjjj',this.props.user)
      
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
            onClick={this.handleClick}/>
          <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <img
			      src={send}
			      className='send_icon'
            onClick={() => this.handleSenderClick()} />
        </div>
    )
  }
}