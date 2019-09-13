import { connect } from 'react-redux'
import ChatScreen from '../component/ChatScreen'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => {
  return {
    newMessage: state.newMessage,
    message: state.message,
    showEmojiPicker: state.showEmojiPicker,
    messages: state.messages,
    user: state.user,
    choosedUser: state.choosedUser
  }
}

const ChatScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatScreen)

export default ChatScreenContainer
