import React from 'react'
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
        <ChatScreenContainer />
      </div>
    )
  }
}
