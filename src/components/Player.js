import React from 'react'
//import Header from "../components/Header"
import Progress from "./Progress"
import "../sass/Player.scss"
import {  Link } from 'react-router-dom'


// class Player extends React.PureComponent{
//
//   constructor(props){
//     super(props)
//   }
//
//
//   render(){
//     return (
//       <div className="player-page">
//               <h1 className="caption"><Link to="/list">我的私人音乐坊 &gt;</Link></h1>
//               {
//                 musicList.musicList[0].file
//               }
//
//           </div>
//
//     )
//   }
//
// }
class Player extends React.Component{
  constructor(props){
    super(props)
  }

  shouldComponentUpdate(nextProps){
    //console.log("shouldComponentUpdate")
    if (nextProps.jPlayers.AudioPlayer.currentPercentAbsolute>=100){
      console.log(nextProps.jPlayers.AudioPlayer.currentPercentAbsolute)
      //this.props.pause()

      //this.props.pause()
      this.props.playNext()
      return false

    }
    return true
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }

  render(){
    //console.log(this.props)
    let jPlayers = this.props.jPlayers
    let musicList = this.props.list.musicList
    let player = this.props.player
    let list = this.props.list
    let playNext = this.props.playNext
    let playPrev = this.props.playPrev
    let play = this.props.play
    let pause = this.props.pause
    let changeRepeatType = this.props.changeRepeatType
    let changeProgress = this.props.changeProgress
    let changeVolume = this.props.changeVolume
    let currentMusicItem = this.props.list.currentMusicItem
//
// const Player = ({jPlayers,musicList,player,list,playNext,playPrev,play,pause,changeRepeatType,changeProgress,changeVolume}) => {
//       let currentMusicItem = musicList[list.currentIndex]
//       //play()
//       //playNext()
//       //console.log(jPlayers.AudioPlayer.durationText)
//       // if (jPlayers.AudioPlayer.currentPercentAbsolute>=99.9){
//       //   playNext()
//       // }
       return (

                <div className="player-page">
                        <h1 className="caption"><Link to="/list">我的私人音乐坊 &gt;</Link></h1>
                        <div className="mt20 row">
                          <div className="controll-wrapper">
                            <h2 className="music-title"><Link to="/lrc">{currentMusicItem.title}</Link></h2>
                            <h3 className="music-artist mt10">{currentMusicItem.artist}</h3>
                            <div className="row mt20">
                              <div className="left-time -col-auto">{jPlayers.AudioPlayer.durationText}</div>
                              <div className="volume-container">
                                <i className="icon-volume rt" style={{top: 5, left: -5}}></i>
                                <div className="volume-wrapper">
                                  <Progress
                            progress={jPlayers.AudioPlayer.volume *100}
                            onProgressChange={ (progress)=>{changeVolume(progress)} }
                            barColor='#aaa'
                                  >
                                  </Progress>
                                </div>
                              </div>
                            </div>
                            <div style={{height: 10, lineHeight: '10px'}}>
                              <Progress
                        progress={jPlayers.AudioPlayer.currentPercentAbsolute}
                        onProgressChange={ (progress)=>{changeProgress(progress)}}
                              >
                              </Progress>
                            </div>
                            <div className="mt35 row">
                              <div>
                                <i className="icon prev" onClick={ ()=>{playPrev()}}></i>
                                <i className={`icon ml20 ${player.isPlay ? 'pause' : 'play'}`} onClick={()=>{
                                  player.isPlay?pause():play()
                                }}></i>
                                <i className="icon next ml20" onClick={ ()=>{playNext()} }></i>
                              </div>
                              <div className="-col-auto">
                                <i className={`icon repeat-${list.repeatType}`} onClick={()=>changeRepeatType()}></i>
                              </div>
                            </div>
                          </div>
                          <div className="-col-auto cover">
                            <img className={`${player.isPlay ? 'play' : 'pause'}`} src={currentMusicItem.cover} alt={currentMusicItem.title} />
                          </div>
                        </div>
                    </div>



      )
      }
}
export default Player
