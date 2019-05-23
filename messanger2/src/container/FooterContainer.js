import { connect } from 'react-redux'
import Footer from '../component/Footer'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => {
  return {
    newMessages: state.newMessages,
    showEmojiPicker: state.showEmojiPicker
  }
}

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer
