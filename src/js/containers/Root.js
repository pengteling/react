import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import {createLogger}  from 'redux-logger' //注意 有括号
import reducer from './../reducers'
import {fetchPosts,fetchPostsRequest} from './../actions'

const logger = createLogger()
const store = createStore(
  reducer,
  applyMiddleware(logger)
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
// let action = init({
//   "city":"上海",
//   "temp":"29℃"
// })
let action=fetchPostsRequest('data')
console.log(action)
store.dispatch(action)
//console.log(store.getState())


export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>{store.getState().temp}</div>
      </Provider>
    )
  }
}
