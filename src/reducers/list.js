import {MUSIC_LIST} from "../musicdata/musicList"
//console.log(MUSIC_LIST)
const list = (state = {
  musicList:MUSIC_LIST,
  currentMusicItem:MUSIC_LIST[0],
  repeatType:"cycle"
},action) => {
  //console.log(action.type)
  switch (action.type) {
    case 'PLAY_NEXT':
      if(state.musicList.length>0){ //列表清空了
        let nextIndex = 0
        let num = state.musicList.length
        let currentIndex = state.musicList.indexOf(state.currentMusicItem)
        if(state.repeatType == "cycle" || state.repeatType == "once"){
          nextIndex = (currentIndex + 1) % num
        }else if(state.repeatType =="random"){
          nextIndex =    Math.floor(Math.random()*num)
        }
        return {...state, currentMusicItem: state.musicList[nextIndex] }
      }
      return state

    case 'PLAY_PREV':
      if(state.musicList.length>0){
        let nextIndex
        let num = state.musicList.length
        let currentIndex = state.musicList.indexOf(state.currentMusicItem)
        if(state.repeatType == "cycle" || state.repeatType == "once"){
          nextIndex = (currentIndex - 1 + num) % num
        }else if(state.repeatType =="random"){
          nextIndex =    Math.floor(Math.random()*num)
        }
        return {...state, currentMusicItem: state.musicList[nextIndex] }
      }
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

      return {...state, currentMusicItem: action.item}

    case 'DELETE_MUSIC':
    //系统有问题
      if(action.item == state.currentMusicItem){
        console.log("删除当前")
        let currentIndex = state.musicList.indexOf(state.currentMusicItem)
        let newIndex = (currentIndex + 1) % state.musicList.length

        return {...state,currentMusicItem: state.musicList[newIndex] ,musicList: state.musicList.filter((item)=>(item!= action.item))}

      }
      return {...state,musicList: state.musicList.filter((item)=>(item!= action.item))}


    default:
      return state
  }
}
export default list
