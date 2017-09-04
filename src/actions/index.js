export const playNext = () => {
  return {
    type: 'PLAY_NEXT'
  }
}
export const playPrev = () => {
  return {
    type: 'PLAY_PREV'
  }
}
export const playPause = () => {
  return {
    type: 'PLAY_PAUSE'
  }
}
export const changeRepeatType = ()=>{
  return {
    type: 'CHANGE_REPEAT_TYPE'
  }
}
export const changeMusic = (item)=>{
  return {
    type: 'CHANGE_MUSIC',
    item
  }
}
