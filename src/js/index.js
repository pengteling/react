import React from 'react';
import ReactDOM from 'react-dom';

class Box extends React.Component{
  constructor(props){
    super(props)
    this.state ={state1:"1"}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    console.log("handleClick")
    this.setState({state1: new Date()})
  }
  render(){
    return (
      <div onClick={this.handleClick}><Clock date={this.state.state1}/></div>
    )
  }
}
class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state= {date:new Date()}
  }
  componentDidMount(){
    console.log("componentDidMount")
    this.num =0;
    this.timer = setInterval( () =>{
      this.num ++;
      this.setState({date: new Date()})
    } ,1000)



    //第二种写法
    // setInterval(function(){
    //   this.setState({date: new Date()});
    // }.bind(this),1000)
  }
  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps")
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate")
    return true
  }
  componentWillMount(){
    //组件第一次建立
    console.log("componentWillMount")
  }
  componentWillUpdate(){
    console.log("componentWillUpdate")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
    if(this.num>3){
      //console.log("unmount");
      //销毁组件
      //ReactDOM.unmountComponentAtNode(document.getElementById('app'))
      clearInterval(this.timer);
    }
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
    clearInterval(this.timer);
  }

  render(){
    console.log("render")
    return (
      <div>
      <h1>hello</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}



ReactDOM.render(
  <Box />,
  document.getElementById('app')
);
