import { connect } from 'react-redux'
import list from '../component/list'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => {
	console.log('jjjj')
  return {
    response: state.response
  }
}

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(list)

export default ListContainer