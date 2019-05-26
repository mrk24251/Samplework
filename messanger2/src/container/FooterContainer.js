import { connect } from 'react-redux'
import Footer from '../component/Footer'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => {
  return {
    newMessages: state.newMessages,
    showEmojiPicker: state.showEmojiPicker,
    conversationList: state.conversationList,
    user: state.user,
    conversation: state.conversation
  }
}

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer
