import React from 'react';
import ReactDOM from 'react-dom';

// var HelloMessage = React.createClass({
//   getInitialState:function(){
//     return{
//         state1:"state1"
//     }
//   },
//   getDefaultProps:function(){
//     return{
//       name:'fy'
//     }
//   },
//   componentDidMount(){
//     //this.state.state1 = "new state"
//     this.setState({state1:"new state"});
//   },
//   propTypes:{
//     name: React.PropTypes.string.isRequired,
//     title: React.PropTypes.string.isRequired
//   },
//   render:function() {
//
//     return <h1>hello,{this.props.name} {this.props.title} {this.state.state1}</h1>
//   }
// })

class HelloMessage extends React.Component{
  constructor(props){
    super(props)
    this.state= {state1:"state1"}
  }
  componentDidMount(){
    this.setState({state1: "new state"})
  }
  render(){
    return <h1>hello,{this.props.name} {this.props.title} {this.state.state1}</h1>
  }
}

HelloMessage.defaultProps ={
  name:"fy"
}
HelloMessage.propTypes ={
  title: React.PropTypes.string.isRequired
}

ReactDOM.render(
  <HelloMessage name="world" title="test"/>,
  document.getElementById('app')
);
