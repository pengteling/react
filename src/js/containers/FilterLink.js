import {connect} from "react-redux"
import Link from "../components/Link"
import {setVisibility} from "../actions"

const mapStateToProps=(state,ownProps) =>{
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispathToProps = (dispatch , ownProps)=>{
  return {
    onClick:()=>{
      dispatch(setVisibility(ownProps.filter))
    }
  }
}
const FilterLink = connect(
  mapStateToProps,
  mapDispathToProps
)(Link)

export default FilterLink
