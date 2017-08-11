import React from 'react';
import ReactDOM from 'react-dom';


// class Box extends React.Component{
//   constructor(props){
//     super(props)
//     this.state ={state1:(new Date()).toLocaleTimeString()}
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick(event){
//     console.log(event.target)
//     console.log(event.clientX)
//     this.setState({state1: (new Date()).toLocaleTimeString()})
//   }
//   render(){
//     return (
//       <div onClick={this.handleClick}>{this.state.state1}</div>
//     )
//   }
// }


class Box extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      x:0,
      y:0
    }
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }
  handleMouseMove(event){
    //console.log(event.target)
    //console.log(event.clientX)
    this.setState({
      x:event.clientX,
      y:event.clientY
    })
  }
  render(){
    return (
      <div onMouseMove={this.handleMouseMove} style={{
        width:"1000px",
        height:"700px"
      }}>
      X:{this.state.x}
      <br />
      Y:{this.state.y}
      </div>
    )
  }
}


ReactDOM.render(
  <Box />,
  document.getElementById('app')
);
