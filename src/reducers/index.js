import { combineReducers } from 'redux'
import musicList from './musicList'
import player from './player'
import list from "./list"
import { initialState, reducer as jPlayers } from 'react-jplayer';

const musicApp = combineReducers({
  musicList,
  list,
  player,
  jPlayers
})

export default musicApp
