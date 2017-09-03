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

const Player = ({musicList,player,list,playNext,playPrev,play,pause}) => {
      let currentMusicItem = musicList[list.currentIndex]
      //play()
      //playNext()
      return (

                <div className="player-page">
                        <h1 className="caption"><Link to="/list">我的私人音乐坊 &gt;</Link></h1>
                        <div className="mt20 row">
                          <div className="controll-wrapper">
                            <h2 className="music-title"><Link to="/item">{currentMusicItem.title}</Link></h2>
                            <h3 className="music-artist mt10">{currentMusicItem.artist}</h3>
                            <div className="row mt20">
                              <div className="left-time -col-auto">-{player.leftTime}</div>
                              <div className="volume-container">
                                <i className="icon-volume rt" style={{top: 5, left: -5}}></i>
                                <div className="volume-wrapper">
                                  <Progress
                            progress={player.volume}
                            onProgressChange=""
                            barColor='#aaa'
                                  >
                                  </Progress>
                                </div>
                              </div>
                            </div>
                            <div style={{height: 10, lineHeight: '10px'}}>
                              <Progress
                        progress={player.progress}
                        onProgressChange=""
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
                                <i className={`icon repeat-${list.repeatType}`} onClick=""></i>
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
export default Player
