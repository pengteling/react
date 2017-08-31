import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./Header"
import Player from "./../pages/Player"
import MusicList from "./../pages/MusicList"
import {MUSIC_LIST} from "../config/MusciList"

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
//import Progress from "./Progress"

//import $ from "jquery"
class Root extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      musicList: MUSIC_LIST,
      currentMusicItem:MUSIC_LIST[1]
    }
    this.changeMusicItemHandler=this.changeMusicItemHandler.bind(this)
    this.pervNextHandler=this.pervNextHandler.bind(this)
    this.playFile = this.playFile.bind(this)
  }
  playFile(file){
    $("#jplayer").jPlayer('setMedia',{
      mp3: file
    }).jPlayer("play")
  }
  componentDidMount(){
    let file= this.state.currentMusicItem.file
    let that =this
    $("#jplayer").jPlayer({
      ready:function(){
        // $("#jplayer").jPlayer('setMedia',{
        //   mp3: file
        // }).jPlayer("play")
        this.playFile(file)
      }.bind(that),
      supplied: 'mp3',
      wmode: 'window',
    })
  }
  componentDidUpdate(){
    //console.log(this.state.currentMusicItem.file)
    let file= this.state.currentMusicItem.file
    this.playFile(file)
  }
    // $("#jplayer").on($.jPlayer.event.timeupdate,e=>{
    //   this.duration = e.jPlayer.status.duration
    //   this.setState({
    //     // progress:Math.round(e.jPlayer.status.currentTime)
    //     progress:Math.round(e.jPlayer.status.currentPercentAbsolute)
    //   })
    // })
  //}
  // componentWillUnMout(){
  //   //console.log("off");
  //   $("#jplayer").off($.jPlayer.event.timeupdate)
  // }
  // progressChange(progress){
  //   //console.log(progress)
  //   $("#jplayer").jPlayer('play',this.duration * progress)
  // }
  // render(){
  //   return (
  //     <div>
  //       <Header />
  //       <Progress progress={this.state.progress} onProgressChange={this.progressChange} barColor="red"/>
  //       <div id="jplayer"></div>
  //     </div>
  //   )
  // }
  changeMusicItemHandler(musicItem){
    this.setState({
      currentMusicItem:musicItem
    })
  }
  pervNextHandler(type){
    console.log(type)
    //this.setState({})
    let currentIndex = this.state.musicList.indexOf(this.state.currentMusicItem)
    let num = this.state.musicList.length
    if(type=="prev"){
      currentIndex = (currentIndex - 1 + num) % num
    }else{
      currentIndex = (currentIndex + 1 ) % num
    }

    this.setState({
      currentMusicItem: this.state.musicList[currentIndex]
    })
  }
  render(){
    return(
      <Router>
      <div>
        <Header />
        <Route exact path ="/" render = {() =>(
          <Player currentMusicItem={this.state.currentMusicItem}  onPervNext={this.pervNextHandler}></Player>
        )}>
        </Route>
        <Route path ="/list" render = {() =>(
          <MusicList currentMusicItem={this.state.currentMusicItem} musicList = {this.state.musicList} onChangMusicItem={this.changeMusicItemHandler}/>
        )}>
        </Route>
      </div>
      </Router>
    )
  }


}

export default Root
