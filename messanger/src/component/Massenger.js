import React from 'react'
import ConversationList from './ConversationList'
import Chat from './Chat'

export default class Massenger extends React.Component {
  render () {
    return (
      <div class='messengerscreen'>
        <ConversationList />

        <Chat />
      </div>
    )
  }
}
