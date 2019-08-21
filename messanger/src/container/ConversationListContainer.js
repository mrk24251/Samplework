import { connect } from 'react-redux'
import ConversationList from '../component/ConversationList'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const ChatScreenContainer = connect(
  mapDispatchToProps
)(ConversationList)

export default ChatScreenContainer
