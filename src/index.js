import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import musicApp from './reducers'
import App from './components/App'
import "./sass/comm.scss"
import AudioPlayer from './components/AudioPlayer'
import { initialState, reducer as jPlayers  } from 'react-jplayer';

//console.log(actions )
let store = createStore(musicApp,{ jPlayers: initialState(AudioPlayer) })
console.log(store.getState())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
//store.dispatch(actions.play("AudioPlayer"))
