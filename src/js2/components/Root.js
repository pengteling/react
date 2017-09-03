import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./Header"
import Player from "./../pages/Player"
import MusicList from "./../pages/MusicList"
import MusicItem from './../pages/MusicItem'
import {MUSIC_LIST} from "../config/MusciList"
import update from 'immutability-helper'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
//import Progress from "./Progress"

//import $ from "jquery"
class Root extends React.PureComponent{
  constructor(props){
    super(props)
    this.state ={
      musicList: MUSIC_LIST,
      currentMusicItem:MUSIC_LIST[0],
      repeatType:'cycle'
    }
    this.changeMusicItemHandler=this.changeMusicItemHandler.bind(this)
    this.pervNextHandler=this.pervNextHandler.bind(this)
    this.playFile = this.playFile.bind(this)
    this.deleteMusicItemHandler=this.deleteMusicItemHandler.bind(this)
    this.changeRepeatHandler = this.changeRepeatHandler.bind(this)
  }
  playFile(file){
    $("#jplayer").jPlayer('setMedia',{
      mp3: file
    }).jPlayer("play")
  }
  changeRepeatHandler(){
    this.oldMusicItem = this.state.currentMusicItem
    let new_repeatType="cycle"
    if(this.state.repeatType == 'cycle'){
      new_repeatType="once"
    }else if(this.state.repeatType=="once"){
      new_repeatType ="random"
    }

    this.setState({
      repeatType: new_repeatType
    })
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

    //console.log(this.oldMusicItem.file )
    //console.log(this.state.currentMusicItem.file)
    if(this.oldMusicItem != this.state.currentMusicItem){
      this.playFile(file)
    }
    //this.playFile(file)
  }
  shouldComponentUpdate(){
    if(this.state.musicList.length>0){  //列表为空时 下一首会报错
      return true
    }else{
      return false
    }
  }
  changeMusicItemHandler(musicItem){
    this.oldMusicItem = this.state.currentMusicItem
    this.setState({
      currentMusicItem:musicItem
    })
  }
  deleteMusicItemHandler(musicItem){
    //e.stopPropagation()
    this.oldMusicItem = this.state.currentMusicItem
    if(musicItem == this.state.currentMusicItem){

      this.pervNextHandler()
    }
    let new_musicList = update(this.state.musicList,{
        $apply:(x)=> (x.filter((n)=>n!=musicItem))
    })
    //console.log(new_musicList)
    this.setState({
      //musicList:this.state.musicList.filter((n)=>n!= musicItem)
      musicList:new_musicList
    })
    //this.setState(newState)
  }
  pervNextHandler(type){
    this.oldMusicItem=""
    //console.log(type)
    //this.setState({})
    //if(this.state.musicList.length>0){
      let currentIndex = this.state.musicList.indexOf(this.state.currentMusicItem)
      let num = this.state.musicList.length
      let repeatType = this.state.repeatType
      if(repeatType == "cycle" || repeatType=="once"){
        if(type=="prev"){
          currentIndex = (currentIndex - 1 + num) % num
        }else{
          currentIndex = (currentIndex + 1 ) % num
        }
      }
      else{

        //currentIndex =  Math.round(Math.random() * num +0.5) -1
        currentIndex = Math.floor(Math.random()*num)
        //console.log(currentIndex)
      }


      this.setState({
        currentMusicItem: this.state.musicList[currentIndex]
      })
    //}
  }
  render(){
    return(
      <Router>
      <div>
        <Header />
        <Route exact path ="/" render = {() =>(
          <Player repeatType={this.state.repeatType} changeRepeatHandler={this.changeRepeatHandler} currentMusicItem={this.state.currentMusicItem}  onPervNext={this.pervNextHandler}></Player>
        )}>
        </Route>
        <Route path ="/list" render = {() =>(
          <MusicList currentMusicItem={this.state.currentMusicItem} musicList = {this.state.musicList} onChangMusicItem={this.changeMusicItemHandler} onDeleteMusicItem={this.deleteMusicItemHandler}/>
        )}>
        </Route>

        <Route path ="/item" render = {()=>(
          <MusicItem musicItem ={this.state.currentMusicItem}/>
        )}>
        </Route>
      </div>
      </Router>
    )
  }


}

export default Root
