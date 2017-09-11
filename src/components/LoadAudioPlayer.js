import React from 'react'
import JPlayer, { connect, Audio,initializeOptions } from 'react-jplayer';
import AudioPlayer from './AudioPlayer'


//const AudioPlayer2 = connect(AudioPlayer, options);


class LoadAudioPlayer extends React.PureComponent{
  constructor(props){
    super(props)
    this.initPlayer = this.initPlayer.bind(this)
  }
  initPlayer(){
    let currentMusicItem = this.props.list.currentMusicItem
    let media={
      title: currentMusicItem.title,
      artist: currentMusicItem.artist,
      sources: {
        mp3: currentMusicItem.file,
      }
    }


    this.props.setMedia(media)
    let isPlay = this.props.player.isPlay
    if(isPlay){
      console.log("init play")
      //this.props.play()
      setTimeout(()=>{this.props.play()},0) //防止报错 Uncaught (in promise) DOMException: The play() request was interrupted
    }else{
      console.log("init pause")
      // this.props.pause()
        setTimeout(()=>{this.props.pause()},0)
    }
    // console.log(this.props.jPlayers.AudioPlayer.pause)
    // console.log(this.props.player.isPlay)
    // if(this.props.player.isPlay && !this.props.jPlayers.AudioPlayer.pause){
    //   this.props.play()
    // }
  }
  componentWillMount(){
    console.log("componentWillMount")
    this.props.async()
  }
  componentWillReceiveProps(nextProps){
    //
  }
  shouldComponentUpdate(nextProps ,nextState){
    //console.log(this.props.musicList[this.props.list.currentIndex])
    //console.log(nextProps.musicList[nextProps.list.currentIndex])
    //state改变 但歌曲没有变 这时候注意 不重复渲染， 如 播放  暂停、切换循环、删除列表
    //console.log(nextProps)

    if(this.props.player.volume!== nextProps.player.volume){
      console.log("音量变化 ")
      this.props.changeVolume(nextProps.player.volume)
    }
    if(this.props.player.progress!== nextProps.player.progress){
      console.log("进度变化 ")
      this.props.changeProgress(nextProps.player.progress)
    }
    //播放结束
    let currentPercentAbsolute=this.props.jPlayers.AudioPlayer.currentPercentRelative
    //console.log("Test")
    if(currentPercentAbsolute >=100 ){
          console.log('播放完毕')
          this.flag = this.flag + 1
          //this.props.pause()
          return true
    }

    if(this.props.list.currentMusicItem === nextProps.list.currentMusicItem){
      this.flag=0
      //console.log("没有重复渲染")
      //console.log(this.props.jPlayers.AudioPlayer.currentPercentRelative)
      let isPlay = this.props.player.isPlay
      //console.log(isPlay == nextProps.player.isPlay)  //表示 有没有改变播放状态 play or pause
      if(isPlay !== nextProps.player.isPlay){ //只有isPlay改变的情况下才暂停
        if(isPlay){
          console.log("暂停")
          this.props.pause()
        }else{
          console.log("播放")
          this.props.play()
        }
      }
      return false
    }


    return true
  }
  componentDidMount(){
      //不能写在render里面 否则会报Warning 因为在渲染过程中又去改变state
      //this.props.init(media)
      console.log("componentDidMount")
      //console.log(this.props.list.currentMusicItem)
      //this.initPlayer()
      this.flag = 0
  }
  componentDidUpdate(){
    console.log("LoadAudioPlayer componentDidUpdate")
    console.log(this.flag)
    if(this.flag==1){
      console.log("play next ")      
      this.props.playNext()
      this.flag = 10
    }else{
      this.initPlayer()
    }
  }
  render(){
    return (
      <AudioPlayer />
    )
  }
}
export default LoadAudioPlayer
