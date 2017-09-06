import {connect} from 'react-redux'
import AsyncApp from './../components/AsyncApp'
import {fetchPosts} from './../actions'

const mapStateToProps =(state,ownProps) => ({
  json:state.json,
  ownProps:ownProps,
  state:state,
  lastUpdate:state.lastUpdate
})
const mapDispathToProps = (dispatch,ownProps) =>{
  return {
    onClick :()=>{
      dispatch(fetchPosts("data",new Date().toLocaleString()))
    }
  }
}

const ShowAsyncApp = connect(
  mapStateToProps,
  mapDispathToProps
)(AsyncApp)

export default ShowAsyncApp
