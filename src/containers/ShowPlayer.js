import { connect } from 'react-redux'
import { playNext,playPrev,playPause,changeRepeatType } from '../actions'
import {actions} from 'react-jplayer'
import Player from '../components/Player'

const mapStateToProps = state =>{
  return{
    musicList: state.musicList,
    player: state.player,
    list:state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playNext: () => {
      dispatch(playNext())
    },
    playPrev: () => {
      dispatch(playPrev())
    },
    play: ()=>{
      //dispatch(actions.play("AudioPlayer"))
      dispatch(playPause())
    },
    pause: ()=>{
      //dispatch(actions.pause("AudioPlayer"))
      dispatch(playPause())
    },
    changeRepeatType:()=>{
      dispatch(changeRepeatType())
    }

  }
}


const ShowPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default ShowPlayer
