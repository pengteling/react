import { connect } from 'react-redux'
//import { playNext } from '../actions'
import {actions} from 'react-jplayer'
import {playNext} from '../actions'
import {fetchPosts , fetchPostsSuccess} from '../actions/getAsyncMusicList'
//import LoadAudioPlayer from '../components/LoadAudioPlayer'
import LoadAudioPlayer from '../components/LoadAudioPlayer'

const mapStateToProps = state =>{
  return{
    player: state.player,
    list:state.list,
    jPlayers:state.jPlayers
  }
}

//加载播放器 通过actions对播放器进行操作
const mapDispatchToProps = dispatch => {
  return {
    async: ()=>{
      console.log("async")
      //dispatch(fetchPosts("/api/musicList1.json",new Date().toLocaleString()))
      dispatch(fetchPosts("http://music.henshui.com/api/musicList.js?!234",new Date().toLocaleString()))
      //dispatch(fetchPosts("http://www.u8see.com/api/musicList.js",new Date().toLocaleString()))
      //dispatch(fetchPostsSuccess({lrc:0},new Date().toLocaleString() ))
    },
    play: ()=>{
      dispatch(actions.play("AudioPlayer"))
    },
    pause: ()=>{
      dispatch(actions.pause("AudioPlayer"))
    },
    playNext:()=>{
      dispatch(playNext())
    },
    setMedia:(media)=>{
      dispatch(actions.setMedia("AudioPlayer",media))
    },
    init:(media)=>{
      dispatch(actions.setMedia("AudioPlayer",media))
      dispatch(actions.play("AudioPlayer"))
    },
    changeVolume:(progress)=>{
      console.log(progress)
      dispatch(actions.setVolume("AudioPlayer",progress))
    },
    changeProgress:(progress)=>{
      console.log(progress)
      //播放进度
      dispatch(actions.setPlayHead("AudioPlayer",progress*100))
    }

  }
}


const ShowLoadAudioPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadAudioPlayer)

export default ShowLoadAudioPlayer
