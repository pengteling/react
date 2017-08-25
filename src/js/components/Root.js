import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./Header"
import Progress from "./Progress"

//import $ from "jquery"
class Root extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      progress:"-"
    }
    this.progressChange=this.progressChange.bind(this)
  }
  componentDidMount(){
    $("#jplayer").jPlayer({
      ready:function(){
        $(this).jPlayer('setMedia',{
          mp3:'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
        }).jPlayer("play")
      },
      supplied: 'mp3',
      wmode: 'window',

    })
    $("#jplayer").on($.jPlayer.event.timeupdate,e=>{
      this.duration = e.jPlayer.status.duration
      this.setState({
        // progress:Math.round(e.jPlayer.status.currentTime)
        progress:Math.round(e.jPlayer.status.currentPercentAbsolute)
      })
    })
  }
  componentWillUnMout(){
    //console.log("off");
    $("#jplayer").off($.jPlayer.event.timeupdate)
  }
  progressChange(progress){
    //console.log(progress)
    $("#jplayer").jPlayer('play',this.duration * progress)
  }
  render(){
    return (
      <div>
        <Header />
        <Progress progress={this.state.progress} onProgressChange={this.progressChange} barColor="red"/>
        <div id="jplayer"></div>
      </div>
    )
  }


}

export default Root
