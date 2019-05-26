import { connect } from 'react-redux'
import Chat from '../component/Chat'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => {
  console.log('uuxcu', state.user)
  return {
    user: state.user
  }
}

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

export default ChatContainer
