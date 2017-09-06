const reducer = (state={
  json:{} ,
  isFetching:false,
  didInvalidate:false,
  lastUpdate:'1970-1-1'
}, action)=>{
  switch (action.type) {
    case "INIT":
      return {...state,json:action.json}
    case "FETCH_POSTS_REQUEST":
      return {...state, isFetching:true}
    case "FETCH_POSTS_FAILURE":
      return {...state, json:{},isFetching:false}
    case "FETCH_POSTS_SUCCESS":
      //console.log(action.res)
      return {...state, json:action.res,isFetching:false,lastUpdate: action.time}
    default:
      return state
  }
}

export default reducer
