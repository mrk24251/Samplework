
function toggleEmojiPicker () {
  this.setState({
    showEmojiPicker: !this.state.showEmojiPicker
  })
}

function addEmoji (emoji) {
  var newMessage = this.state.newMessage
  var text = `${newMessage}${emoji.native}`

  this.setState({
    newMessage: text,
    showEmojiPicker: false
  })
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

export { toggleEmojiPicker, addEmoji, handleKeyPress, sendMessage }
