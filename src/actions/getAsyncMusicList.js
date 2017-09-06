import $ from 'jquery'
import fetch from 'isomorphic-fetch'

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

const evil = (fn)=> {
    let Fn = Function;  //一个变量指向Function，防止有些前端编译工具报错
    return new Fn('return ' + fn)();
}

//getState() 可以拿到当前整个state
export const fetchPosts = (url,time) =>(dispatch,getState)=>{
  dispatch(fetchPostsRequest())
  console.log("异步请求开始")
  // $.get(`${url}`,(data)=>{
  //   console.log("捕获数据")
  //   console.log(data)
  //   //dispatch(fetchPostsSuccess(data,time))
  // })

  // $.ajax({
  //   url:url,
  //   dataType:'text',
  //   success:(data)=>{
  //     //console.log(evil(data)[0])
  //     dispatch(fetchPostsSuccess(evil(data),time))
  //   }
  // })

  // fetch请求
  return fetch(url)
    .then(response => {
      //console.log(response.json())
      //return response.json()
      return response.text()
    })
    .then(json => dispatch(fetchPostsSuccess(evil(json),time)))

}
