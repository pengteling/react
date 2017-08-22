import React from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux'
import {createStore} from 'redux'

require("./../sass/style.scss");

//pure function  = reducer
function counter(state=0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state+1
    case "DECREMENT":
      return state-1
    default:
      return state
  }
}

let store = createStore(counter)
store.subscribe(
  ()=>console.log(store.getState())
)
store.dispatch({
  type: "INCREMENT"
})
store.dispatch({
  type: "DECREMENT"
})
store.dispatch({
  type: "INCREMENT"
})
store.dispatch({
  type: "FU"
})
// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('todoapp')
// );
