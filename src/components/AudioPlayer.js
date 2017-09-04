//仅做加载播放器用
import React from 'react';
import JPlayer, { connect, Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar, Repeat,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
 } from 'react-jplayer';

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

export default connect(AudioPlayer, options);
