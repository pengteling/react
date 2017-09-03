const player = (state={
  volume:20,
  isPlay: false,
  progress:0,
  leftTime:"-"
},action) => {
  switch (action.type) {
    case "1":
      return state

    default:
      return state
  }
}
export default player
