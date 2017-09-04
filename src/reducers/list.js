import {MUSIC_LIST} from "../musicdata/musicList"
//console.log(MUSIC_LIST)
const list = (state = {
  //musicList:MUSIC_LIST,
  musicNum:MUSIC_LIST.length,
  currentIndex:0,
  repeatType:"cycle"
},action) => {
  //console.log(action.type)
  switch (action.type) {
    case 'PLAY_NEXT':
      let nextIndex = 0
      let num = state.musicNum
      if(state.repeatType == "cycle"){
        nextIndex = (state.currentIndex + 1) % num
      }
      return {...state, currentIndex: nextIndex }
    case 'PLAY_PREV':
      let prevIndex = 0
      num = state.musicNum
      if(state.repeatType == "cycle"){
        prevIndex = (state.currentIndex - 1 +num) % num
      }
      return {...state, currentIndex: prevIndex }
    case 'CHANGE_REPEAT_TYPE':
      let old_repeatType = state.repeatType
      let new_repeatType = 'cycle'
      if(old_repeatType == 'cycle'){
        new_repeatType = 'once'
      }else if(old_repeatType == 'once'){
        new_repeatType = 'random'
      }
      
      return {...state,repeatType:new_repeatType}
    case 'CHANGE_MUSIC':
      return {...state, currentIndex: action.item}
    default:
      return state
  }
}
export default list
