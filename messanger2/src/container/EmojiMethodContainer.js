import { connect } from 'react-redux'
import addEmoji from '../component/emoji/methods'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => {
  return {
    newMessage: state.newMessage,
    showEmojiPicker: state.showEmojiPicker
  }
}

const EmojiMethodContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(addEmoji)

export default EmojiMethodContainer
