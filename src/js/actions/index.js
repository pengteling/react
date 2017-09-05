import fetch from 'isomorphic-fetch'

// export const init = (json)=>({
//   type:"INIT",
//   json
// })

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
export const fetchPostsSuccess =(res)=>({
  type:"FETCH_POSTS_SUCCESS",
  res
})

export const fetchPosts = postTitle => (dispatch, getState) => {
  dispatch(fetchPostsRequest())
  return fetch(`/api/${postTitle}.json`)
    .then(response => response.json())
    .then(json => dispatch(fetchPostsSuccess(json)))

}
