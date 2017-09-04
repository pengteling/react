import { combineReducers } from 'redux'
import player from './player'
import list from "./list"
import { initialState, reducer as jPlayers } from 'react-jplayer';

const musicApp = combineReducers({
  list,
  player,
  jPlayers
})

export default musicApp
