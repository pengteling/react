import React from 'react'
import MusicListItem from "./MusicItem"
import "../sass/MusicList.scss"
class MusciList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let listEle = null;
    listEle = this.props.musicList.map((item,i)=>{
      //console.log(this.props.musicList)
      //console.log(item)

      return <MusicListItem key={i} id={i} musicItem={item} focus={ i==this.props.list.currentIndex } onChangMusicItem={this.props.onChangMusicItem} onDeleteMusicItem={this.props.onDeleteMusicItem}/>
    })
    return (
      <div>
        <ul>{listEle}</ul>
      </div>)
  }

}


export default MusciList
