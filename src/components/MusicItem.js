import React from 'react'
// class MusicListItem extends React.Component{
//   render(){
//     let musicItem = this.props.musicItem
//     return (
//       <li className="components-musiclistitem">
//         <p>{musicItem.title} - {musicItem.artist}</p>
//         <p className="-col-auto delete"></p>
//       </li>
//     )
//   }
// }

//export default MusicListItem

export default ({id,musicItem,focus,onChangMusicItem,onDeleteMusicItem}) => {
  //console.log(focus)
      return (
        <li className={`components-listitem row ${ focus ? 'focus':''}`} onClick={()=>{
          if(!focus) //防止点击当前歌曲 重新开始
          onChangMusicItem(id)
        }}>
          <p>{musicItem.title} - {musicItem.artist}</p>
          <p className="-col-auto delete" onClick={(e)=>{
            e.stopPropagation()
            return onDeleteMusicItem(musicItem)
          }}></p>
        </li>
      )
}
