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

export { toggleEmojiPicker, addEmoji }
