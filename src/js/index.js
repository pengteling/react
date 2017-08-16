import React from 'react';
import ReactDOM from 'react-dom';
require("../sass/style.scss");
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import { TransitionGroup } from 'react-transition-group' // ES6
import TweenMax from 'gsap' //

class Box extends React.Component{
  constructor(props){
    super(props)
  }
  componentWillAppear(callback){
    console.log("componentWillAppear")
    const el = ReactDOM.findDOMNode(this);
		TweenMax.fromTo(el, 0.3, {x:300 ,y: 0, opacity: 0}, {x:0,y: 0, opacity: 1, onComplete: callback});
    //callback();
  }
  componentDidAppear(){
      console.log("componentDidAppear")
      const el = ReactDOM.findDOMNode(this);
		  TweenMax.fromTo(el, 0.3, {x:0 ,y: 0, opacity: 0}, {x:300,y: 100, opacity: 1 } );
  }

  componentWillEnter(callback){
    console.log("componentWillEnter")
    const el = ReactDOM.findDOMNode(this);
        //callback();
    TweenMax.fromTo(el, 0.3, {x:0 ,y: 100, opacity: 0}, {x:300,y: 0, opacity: 1, onComplete: callback});
  }
  componentDidEnter() {
      	console.log("componentDidEnter")
  }

  componentWillLeave (callback) {
  	console.log("componentWillLeave");
      const el = ReactDOM.findDOMNode(this);
      TweenMax.fromTo(el, 0.3, {x:300 , y: 0, opacity: 1}, {x:0 ,y: -100, opacity: 0, onComplete: callback});
  }
  componentDidLeave() {
  	   console.log('componentDidLeave');
  }
	componentDidMount() {
		console.log("componentDidMount")
	}
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  render(){
    return(
      <div className="box">
            {/* style={{
                width: '100px',
                height: '100px',
                margin: '100px',
                borderRadius: '50%',
                backgroundColor: 'red'
            }}> */}
      </div>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isshow:true
    }
    this.handleClick= this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      isshow:!this.state.isshow
    })
  }
  render(){
    console.log("render")
    return(
      <div>
        <input type="button" onClick={this.handleClick} value="点击切换"/>
        <TransitionGroup>
          {
            //this.state.isshow?         <Box /> :""
            this.state.isshow && <Box />               
          }
        </TransitionGroup>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
