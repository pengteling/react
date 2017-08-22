import React from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
let store = createStore(todoApp) //第二个参数可以传默认store

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()


// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('todoapp')
// );
