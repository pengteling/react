const counterApp = (state={counter: 0}, action)=>{
  switch (action.type) {
    case "INCREASE":
      return {counter: state.counter + 1}
    case "DECREASE":
      return {counter: state.counter - 1}
    case "MULTIPLIER":
      return {counter:state.counter * action.n}
    default:
      return state
  }
}

export default counterApp
