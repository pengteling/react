import React from 'react'
import Player from './Player'
import MusicListItem from "../components/MusicListItem"
import "./MusicList.scss"
class MusciList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let listEle = null;
    listEle = this.props.musicList.map((item,i)=>{
      //console.log(this.props.currentMusciItem)
      //console.log(item)
      return <MusicListItem key={i} musicItem={item} focus={ item==this.props.currentMusicItem } onChangMusicItem={this.props.onChangMusicItem} onDeleteMusicItem={this.props.onDeleteMusicItem}/>
    })
    return (
      <div>
        <ul>{listEle}</ul>
      </div>)
  }

}


export default MusciList
