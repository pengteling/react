const toggleApp = (state=true, action)=>{
  switch (action.type) {
    case "TOGGLE":
      //console.log(action)
      //return !action.isshow
      return !state
    default:
      return state
  }
}

export default toggleApp
