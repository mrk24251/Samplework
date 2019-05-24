import React from 'react'
import ConversationListContainer from '../container/conversationListContainer'
import Chat from './Chat'

export default class Massenger extends React.Component {
  render () {
    return (
      <div className='messengerscreen'>
        <ConversationListContainer />
        <Chat />
      </div>
    )
  }
}
