import React from 'react'
const LoadAudioPlayer = ({play,setMedia,init,musicList,list}) =>{
  //console.log(list)
  let currentMusicItem = musicList[list.currentIndex]
  let media={
    title: currentMusicItem.title,
    artist: currentMusicItem.artist,
    sources: {
      // mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
      mp3: currentMusicItem.file,
      //oga: 'http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg',
    }
  }
  //setMedia(media)
  //play(musicList[list.currentIndex])
  init(media)
  return (
    <div key={list}></div>
  )

}
export default LoadAudioPlayer
