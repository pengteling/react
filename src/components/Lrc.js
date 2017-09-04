import React from 'react'

class Lrc extends React.Component{
  constructor(props){
    super(props)
  }
  componentWillMount(){
    //console.log('componentWillMount')
    let arr = this.props.list.currentMusicItem.lrc.split("[")
    let lrc = arr.map((item,i)=>{
      return {
        time: item.split("]")[0],
        txt:item.split("]")[1],
        time_end: arr[i+1]
      }
    })
    lrc.shift()
    this.lrc = lrc
    console.log(lrc)

  }
  componentWillUpdate(){
    //console.log(this.props.jPlayers.AudioPlayer.currentTime)
    //console.log(this.props.jPlayers.AudioPlayer.currentTimeText)

  }
  componentDidUpdate(){
    // document.getElementById('lrcUl').scrollHeight=document.getElementById('cur').scrollHeight    //window.scrollTo(0,500)
    //console.log(document.getElementById('lrcUl').offsetTop)
  }
  render(){
    //console.log(this.props)
    let curTime = this.props.jPlayers.AudioPlayer.currentTimeText +'.'+ (this.props.jPlayers.AudioPlayer.currentTime+'').split('.')[1]
    //console.log(curTime)
    //let n=0
    let curClass=""
    //let prevTime=""
    let lrclist= this.lrc.map((item,i) => {

        if((item.time_end>=curTime||!item.time_end) && item.time<=curTime){
          curClass="cur"
          this.curli =i

        }else{
          curClass="normal"
        }
         //prevTime=item.time
      return( <li className={curClass} id={curClass} key={i} > [{item.time}]{item.txt} </li>)
    })
    return(
      <div className="lrc-component">
        <ul id="lrcUl" ref={(node)=>{this.lrcUl = node}}>{lrclist}</ul>
      </div>
    )
  }

}
export default Lrc
