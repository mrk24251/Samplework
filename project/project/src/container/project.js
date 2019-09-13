import { connect } from 'react-redux'
import Mycard from '../component/listItem'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => {
  console.log('uuxcu', state.response)
  return {
    response: state.response
  }
}

const MycardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mycard)

export default MycardContainer