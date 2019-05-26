import React from 'react'
import profile from '../img/profile.jpg'
import ChatScreenContainer from '../container/ChatScreenContainer'

export default class Chat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newMessage: null
    }
  }
  render () {
    return (
      <div className='Chat'>
        <div className='header'>
          <img src={this.props.user.avatar_url} className='header_profile' />
          <span className='header_convFN'>&nbsp;&nbsp;&nbsp; {this.props.user.name} </span>
        </div>
        <ChatScreenContainer />
      </div>
    )
  }
}
