import React from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux'
import { combineReducers, createStore } from 'redux'

require("./../sass/style.scss");

//pure function  = reducer
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}


const reducer = combineReducers({ visibilityFilter, todos })
const store = createStore(reducer)


store.subscribe(
  ()=>console.log(store.getState())
)
store.dispatch({
  type: "ADD_TODO",
  text: "fy"
})
store.dispatch({
  type: "ADD_TODO",
  text: "fy2"
})
store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_COMPLETED"
})
// store.dispatch({
//   type: "SET_VISIBILITY_FILTER3",
//   filter: "SHOW_COMPLETED"
// })
// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('todoapp')
// );
