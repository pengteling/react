import { connect } from 'react-redux'
import { playNext,playPrev,playPause,changeMusic } from '../actions'
import {actions} from 'react-jplayer'
import List from '../components/List'

const mapStateToProps = state =>{
  return{
    musicList: state.musicList,
    player: state.player,
    list:state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangMusicItem: (item) => {
      dispatch(changeMusic(item))
    },


  }
}


const ShowList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ShowList
