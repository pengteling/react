import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import reducer from './../reducers'
import {init} from './../actions'

let store = createStore(reducer)
console.log(store.getState())

//改造 dispatch 在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。
let next = store.dispatch;

store.dispatch = function dispatchAndLog(action) {
  console.log('dispatching', action);
  next(action);
  console.log('next state', store.getState());
}

store.dispatch(init({
  "city":"上海",
  "temp":"29℃"
}))
console.log(store.getState())


export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>{store.getState().temp}</div>
      </Provider>
    )
  }
}
