const player = (state={
  volume:20,
  isPlay: true,
  progress:0,
  leftTime:"-"
},action) => {
  switch (action.type) {
    case "PLAY_PAUSE":
      return {...state,isPlay:!state.isPlay}

    default:
      return state
  }
}
export default player
