import React from 'react'
//import Header from "../components/Header"
import Progress from "../components/Progress"
import "./Player.scss"
import {  Link } from 'react-router-dom'


class Player extends React.PureComponent{

  constructor(props){
    super(props)
    this.state ={
      progress:0,
      volume:0,
      isPlay: true,
      leftTime:""
    }
    this.progressChangeHandler=this.progressChangeHandler.bind(this)
    this.changeVolumeHandler=this.changeVolumeHandler.bind(this)
    this.play = this.play.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    this.formatTime = this.formatTime.bind(this)
  }
  formatTime(t){
    let timestr=""
    let mm = parseInt(t / 60)
    let ss = parseInt (t % 60)
    ss = ss <10 ? `0${mm}`:ss
    return mm +':'+ ss
  }
  componentDidUpdate(){
    //console.log("player update")
  }
  componentDidMount(){
    $("#jplayer").on($.jPlayer.event.timeupdate,e=>{
      this.duration = e.jPlayer.status.duration
      let currentTime = e.jPlayer.status.currentTime
      //console.log(e.jPlayer.status.currentTime)
      //console.log(e.jPlayer.status.duration)
      this.setState({
        // progress:Math.round(e.jPlayer.status.currentTime)
        progress:Math.round(e.jPlayer.status.currentPercentAbsolute),
        volume: e.jPlayer.options.volume *100,
        leftTime: this.formatTime(this.duration - currentTime)
      })
      // 一开始时间为0
      // if(this.duration - currentTime <=0) {
      //   //this.next()
      //   console.log(this.duration - currentTime)
      // }

    })

    $("#jplayer").on($.jPlayer.event.ended,e=>{
      this.next()
    })
  }
  componentWillUnmount(){
    //console.log("off");
    $("#jplayer").off($.jPlayer.event.timeupdate) //一定要解绑，否则该组件卸载后 还会更新则报错
    $("#jplayer").off($.jPlayer.event.ended)
  }
  progressChangeHandler(progress){
    //console.log(progress)
    $("#jplayer").jPlayer('play',this.duration * progress)
  }
  changeVolumeHandler(progress){
    //console.log(progress)
    $("#jplayer").jPlayer('volume',progress)
  }
  play(){
    if(this.state.isPlay){
      $("#jplayer").jPlayer("pause")
    }
    else{
      $("#jplayer").jPlayer("play")
    }
    this.setState({
      isPlay: !this.state.isPlay
    })
  }
  prev(){
    //this.props.
    //console.log(this.props)
    this.props.onPervNext("prev")
  }
  next(){
    this.props.onPervNext("next")
  }
  render(){
    return (
      <div className="player-page">
              <h1 className="caption"><Link to="/list">我的私人音乐坊 &gt;</Link></h1>
              <div className="mt20 row">
                <div className="controll-wrapper">
                  <h2 className="music-title"><Link to="/item">{this.props.currentMusicItem.title}</Link></h2>
                  <h3 className="music-artist mt10">{this.props.currentMusicItem.artist}</h3>
                  <div className="row mt20">
                    <div className="left-time -col-auto">-{this.state.leftTime}</div>
                    <div className="volume-container">
                      <i className="icon-volume rt" style={{top: 5, left: -5}}></i>
                      <div className="volume-wrapper">
                        <Progress
                  progress={this.state.volume}
                  onProgressChange={this.changeVolumeHandler}
                  barColor='#aaa'
                        >
                        </Progress>
                      </div>
                    </div>
                  </div>
                  <div style={{height: 10, lineHeight: '10px'}}>
                    <Progress
              progress={this.state.progress}
              onProgressChange={this.progressChangeHandler}
                    >
                    </Progress>
                  </div>
                  <div className="mt35 row">
                    <div>
                      <i className="icon prev" onClick={this.prev}></i>
                      <i className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`} onClick={this.play}></i>
                      <i className="icon next ml20" onClick={this.next}></i>
                    </div>
                    <div className="-col-auto">
                      <i className={`icon repeat-${this.props.repeatType}`} onClick={this.props.changeRepeatHandler}></i>
                    </div>
                  </div>
                </div>
                <div className="-col-auto cover">
                  <img className={`${this.state.isPlay ? 'play' : 'pause'}`} src={this.props.currentMusicItem.cover} alt={this.props.currentMusicItem.title} />
                </div>
              </div>
          </div>

    )
  }

}
export default Player
