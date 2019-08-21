import { chooseEmoji, addNewMessages } from '../../action/conversation'

function addEmoji (emoji) {
  var newMessage = this.props.newMessage
  var text = `${newMessage}${emoji.native}`
  this.setState({
    newMessages: text
  }, () => this.props.dispatch(addNewMessages(this.state.newMessages)))
  console.log('mmm', this.state.newMessages)
  this.props.dispatch(chooseEmoji())
}

function handleKeyPress (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    this.sendMessage()
  }
}

function sendMessage () {
  const { newMessage, currentUser, currentRoom } = this.state

  if (newMessage.trim() === '') return

  currentUser.sendMessage({
    text: newMessage,
    roomId: `${currentRoom.id}`
  })

  this.setState({
    newMessage: ''
  })
}

export { addEmoji, handleKeyPress, sendMessage }
