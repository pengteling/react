import React from 'react'
// const LoadAudioPlayer = ({play,setMedia,init,musicList,list}) =>{
//   //console.log(list)
//   let currentMusicItem = musicList[list.currentIndex]
//   let media={
//     title: currentMusicItem.title,
//     artist: currentMusicItem.artist,
//     sources: {
//       // mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
//       mp3: currentMusicItem.file,
//       //oga: 'http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg',
//     }
//   }
//   //setMedia(media)
//   //play(musicList[list.currentIndex])
//   init(media)
//   return (
//     <div key={list}></div>
//   )
//
// }

class LoadAudioPlayer extends React.PureComponent{
  constructor(props){
    super(props)
    this.initPlayer = this.initPlayer.bind(this)
  }
  initPlayer(){
    let currentMusicItem = this.props.musicList[this.props.list.currentIndex]
    let media={
      title: currentMusicItem.title,
      artist: currentMusicItem.artist,
      sources: {
        mp3: currentMusicItem.file,
      }
    }
    let isPlay = this.props.player.isPlay
    this.props.setMedia(media)
    if(isPlay){
      this.props.play()
    }else{
      this.props.pause()
    }
  }
  shouldComponentUpdate(nextProps ,nextState){
    console.log(this.props.musicList[this.props.list.currentIndex])
    console.log(nextProps.musicList[nextProps.list.currentIndex])
    if(this.props.musicList[this.props.list.currentIndex] == nextProps.musicList[nextProps.list.currentIndex]){
      let isPlay = this.props.player.isPlay

      if(isPlay){
        this.props.pause()
      }else{
        this.props.play()
      }
      return false
    }
    return true
  }
  componentDidMount(){

      //不能写在render里面 否则会报Warning 因为在渲染过程中又去改变state
      //this.props.init(media)
      this.initPlayer()
  }
  componentDidUpdate(){
    this.initPlayer()
  }
  render(){
    return (
      <div></div>
    )
  }
}
export default LoadAudioPlayer
