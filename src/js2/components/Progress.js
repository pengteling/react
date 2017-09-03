import React from "react"
import "../../sass/progress.scss"

class Progress extends React.Component{
  constructor(props){
    super(props)
    this.changeProgress = this.changeProgress.bind(this)
  }


  changeProgress(e){
    //console.log(this.progressbar)
    //console.log("改变播放进度")
    let progress =(e.clientX -this.progressbar.getBoundingClientRect().left)/this.progressbar.clientWidth;
    //console.log(progress)
    this.props.onProgressChange && this.props.onProgressChange(progress)

  }
  render(){
    //let progressbar
    return (
        <div className="components-progress"  onClick={this.changeProgress} ref={(node)=>this.progressbar=node}>
          <div className="progress" style={{
            width:`${this.props.progress}%`, background: this.props.barColor
          }} >
          </div>
        </div>
    )
  }
}
Progress.defaultProps = {
  barColor: "#2f9842"
}
export default Progress
