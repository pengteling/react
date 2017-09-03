import { connect } from 'react-redux'
//import { playNext } from '../actions'
import {actions} from 'react-jplayer'
import LoadAudioPlayer from '../components/LoadAudioPlayer'

const mapStateToProps = state =>{
  return{
    musicList: state.musicList,
    //player: state.player,
    list:state.list
  }
}
//加载播放器 通过actions对播放器进行操作
const mapDispatchToProps = dispatch => {
  return {
    play: ()=>{
      dispatch(actions.play("AudioPlayer"))
    },
    setMedia:(media)=>{
      dispatch(actions.setMedia("AudioPlayer",media))
    },
    init:(media)=>{
      dispatch(actions.setMedia("AudioPlayer",media))
      dispatch(actions.play("AudioPlayer"))
    }

  }
}


const ShowLoadAudioPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadAudioPlayer)

export default ShowLoadAudioPlayer
