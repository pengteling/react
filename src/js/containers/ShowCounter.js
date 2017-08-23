import React from 'react'
import { connect } from 'react-redux'
import Counter from "../components/Counter"
import {increaseCount, decreaseCount,multiplierCount,toggleApp} from "../actions"

const mapStateToProps = (state)=>{
  return {
    value: state.counterApp.counter,
    isshow: state.toggleApp
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    onIncrease: ()=> dispatch(increaseCount()),
    onDecrease: ()=> dispatch(decreaseCount()),
    onMultiple: (n)=> dispatch(multiplierCount(n)),
    onToggle:(isshow)=>dispatch(toggleApp(isshow))
  }
}
const ShowCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default ShowCounter
