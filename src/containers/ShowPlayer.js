import { connect } from 'react-redux'
import { playNext,playPrev,playPause,changeRepeatType,changeProgress,changeVolume } from '../actions'
import {actions} from 'react-jplayer'
import Player from '../components/Player'

const mapStateToProps = state =>{
  return{
    player: state.player,
    list:state.list,
    jPlayers:state.jPlayers
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
    },
    changeProgress:(progress)=>{
      dispatch(changeProgress(progress))
    },
    changeVolume:(progress)=>{
      dispatch(changeVolume(progress))
    }

  }
}


const ShowPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default ShowPlayer
