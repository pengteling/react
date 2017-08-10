import React from 'react';
import ReactDOM from 'react-dom';

//Es5写法
// var HelloMessage = React.createClass({
//   render: function() {
//     return <h1>Hello World！</h1>;
//   }
// });

// ES6写法
// class HelloMessage extends React.Component{
//   render(){
//     return <h1>Hello World!</h1>;
//   }
// }

//直接写一个函数也可以定义一个组件
function HelloMessage(props){
  //props.name = "fy"
  //let v="fy"
  return  <h1>Hello {props.name}!</h1>
}

ReactDOM.render(
  <HelloMessage name="world" />,
  document.getElementById('app')
);
