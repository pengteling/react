const reducer = (state={city: '', temp :'' }, action)=>{
  switch (action.type) {
    case "INIT":
      return action.json
    default:
      return state
  }
}

export default reducer
