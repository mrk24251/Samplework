import React from 'react'
import ConversationListContainer from '../container/conversationListContainer'
import ChatContainer from '../container/ChatContainer'

export default class Massenger extends React.Component {
  render () {
    return (
      <div className='messengerscreen'>
        <ConversationListContainer />
        <ChatContainer />
      </div>
    )
  }
}
