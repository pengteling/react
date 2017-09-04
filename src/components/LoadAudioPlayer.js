import React from 'react'
import JPlayer, { connect, Audio } from 'react-jplayer';

 const AudioPlayer = () => (
   <JPlayer className="jp-sleek">
    <Audio />
  </JPlayer>
 )

 const options = {
  id: 'AudioPlayer',
  //autoplay: true, //?不起作用！！
  // keyEnabled: true,
  preload:'metadata',
  showRemainingDuration:true,
  verticalVolume: true,
  media: {
    title: 'Bubble',
    artist: 'Miaow',
    sources: {
       mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'

    },
    free: true
  },
};

const AudioPlayer2 = connect(AudioPlayer, options);


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
    let isPlay = this.props.player.isPlay
    this.props.setMedia(media)
    if(isPlay){
      this.props.play()
    }else{
      this.props.pause()
    }
  }
  shouldComponentUpdate(nextProps ,nextState){
    //console.log(this.props.musicList[this.props.list.currentIndex])
    //console.log(nextProps.musicList[nextProps.list.currentIndex])
    //state改变 但歌曲没有变 这时候注意 不重复渲染， 如 播放  暂停、切换循环、删除列表
    //console.log(nextProps)
    console.log("没有重复渲染")
    if(this.props.player.volume!== nextProps.player.volume){
      console.log("音量变化 ")
      this.props.changeVolume(nextProps.player.volume)
    }
    if(this.props.player.progress!== nextProps.player.progress){
      console.log("进度变化 ")
      this.props.changeProgress(nextProps.player.progress)
    }
    if(this.props.list.currentMusicItem == nextProps.list.currentMusicItem){
      let isPlay = this.props.player.isPlay
      //console.log(isPlay == nextProps.player.isPlay)  //表示 有没有改变播放状态 play or pause
      if(isPlay !== nextProps.player.isPlay){ //只有isPlay改变的情况下才暂停
        if(isPlay){
          this.props.pause()
        }else{
          this.props.play()
        }
      }
      //
      // if(isPlay){
      //   this.props.pause()
      // }else{
      //   this.props.play()
      // }
      return false
    }
    return true
  }
  componentDidMount(){

      //不能写在render里面 否则会报Warning 因为在渲染过程中又去改变state
      //this.props.init(media)
      console.log("componentDidMount")
      this.initPlayer()
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
    this.initPlayer()
  }
  render(){
    return (
      <AudioPlayer2 />
    )
  }
}
export default LoadAudioPlayer
