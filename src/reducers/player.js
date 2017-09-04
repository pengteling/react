const player = (state={
  volume:20,
  isPlay: true,
  progress:0
},action) => {
  switch (action.type) {
    case "PLAY_PAUSE":
      return {...state,isPlay:!state.isPlay}
    case "CHANGE_VOLUME":
      return {...state, volume: action.progress}
    case "CHANGE_PROGRESS":
      return {...state, progress: action.progress}
    default:
      return state
  }
}
export default player
