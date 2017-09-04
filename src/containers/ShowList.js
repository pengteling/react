import { connect } from 'react-redux'
import { playNext,playPrev,playPause,changeMusic,deleteMusic } from '../actions'
import {actions} from 'react-jplayer'
import List from '../components/List'

const mapStateToProps = state =>{
  return{
    player: state.player,
    list:state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangMusicItem: (item) => {
      dispatch(changeMusic(item))
    },
    onDeleteMusicItem: (item) =>{
      dispatch(deleteMusic(item))
    }

  }
}


const ShowList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ShowList
