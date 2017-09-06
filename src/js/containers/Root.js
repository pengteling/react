import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import {createLogger}  from 'redux-logger' //注意 有括号
import reducer from './../reducers'
import {fetchPosts,fetchPostsRequest,init} from './../actions'
import thunk from 'redux-thunk'
import ShowAsyncApp from './ShowAsyncApp'

const logger = createLogger()
const store = createStore(
  reducer,
  applyMiddleware(logger,thunk)
)
//console.log(store.getState())

// //改造 dispatch 在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。
// let next = store.dispatch;
//
// store.dispatch = function dispatchAndLog(action) {
//   console.log('dispatching', action);
//   next(action);
//   console.log('next state', store.getState());
// }



let action1 = init({
  "city":"上海",
  "temp":"？"
})
store.dispatch(action1)
// let action2=fetchPosts('data',new Date().toLocaleString())
// //console.log(action)
// store.dispatch(action2)
// //console.log(store.getState())


export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ShowAsyncApp ownProps1 ="www.wether.com.cn" />
      </Provider>
    )
  }
}
