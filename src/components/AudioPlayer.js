import React from 'react'
import JPlayer, { connect, Audio,initializeOptions } from 'react-jplayer';


const defaultOptions = {
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

initializeOptions(defaultOptions);

const AudioPlayer = () => (
 <JPlayer id={defaultOptions.id} className="jp-sleek">
  <Audio />
</JPlayer>
)

export default AudioPlayer
