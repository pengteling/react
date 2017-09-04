import { connect } from 'react-redux'
import { changeProgress } from '../actions'
import {actions} from 'react-jplayer'
import Lrc from '../components/Lrc'

const mapStateToProps = state =>{
  return{
    player: state.player,
    list:state.list,
    jPlayers:state.jPlayers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangProgress: (progress) => {
      dispatch(changeProgress(progress))
    }
  }
}


const ShowLrc = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lrc)

export default ShowLrc
