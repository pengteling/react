import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore ,applyMiddleware } from 'redux'
import musicApp from './reducers'
import App from './components/App'
import "./sass/comm.scss"
import AudioPlayer from './components/AudioPlayer'
import {  reducer as jPlayers  } from 'react-jplayer';
import thunk from 'redux-thunk'
import {createLogger}  from 'redux-logger' //注意 有括号

const logger = createLogger()

//console.log(actions )
let store = createStore(
  musicApp,
  applyMiddleware(
  //logger,
    thunk
  )
)
console.log(store.getState())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
//store.dispatch(actions.play("AudioPlayer"))
