import { connect } from 'react-redux'
import { playNext } from '../actions'
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
    play: ()=>{
      dispatch(actions.play("AudioPlayer"))
    },
    setMedia:(media)=>{
      dispatch(actions.setMedia("AudioPlayer",media))
    }
  }
}


const ShowPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default ShowPlayer
