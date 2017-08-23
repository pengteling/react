import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import doApp from './reducers'
import App from './components/App'

let store = createStore(doApp)

console.log(store.getState())
// store.subscribe(()=>console.log(store.getState()))
// store.dispatch({type: "INCREASE"})
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
