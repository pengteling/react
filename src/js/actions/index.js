//import fetch from 'isomorphic-fetch'
import $ from 'jquery'

export const init = (json)=>({
  type:"INIT",
  json
})

// 异步操作发起时的action
export const fetchPostsRequest =()=>({
  type:"FETCH_POSTS_REQUEST"
})
//操作失败时发起的action
export const fetchPostsFailure =(err)=>({
  type:"FETCH_POSTS_FAILURE",
  err
})
//操作成功发起的action
export const fetchPostsSuccess =(res,time)=>({
  type:"FETCH_POSTS_SUCCESS",
  res,
  time
})

// export const fetchPosts = (postTitle,time) => (dispatch, getState) => {
//   dispatch(fetchPostsRequest())
//   return fetch(`/api/${postTitle}.json`)
//     .then(response => {
//       //console.log(response.json())
//       return response.json()
//     })
//     .then(json => dispatch(fetchPostsSuccess(json,time)))
//
// }

//getState() 可以拿到当前整个state
export const fetchPosts = (postTitle,time) =>(dispatch,getState)=>{
  dispatch(fetchPostsRequest())
  console.log(getState())
  $.get(`/api/${postTitle}.json`,(data)=>{
    dispatch(fetchPostsSuccess(data,time))
    console.log(getState())
  })
}
