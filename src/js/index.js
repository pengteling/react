console.log("text");
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);
var props ={
  foo:'default'
};
var component =(
  <div {...props}>test</div>);
console.log(component.props.foo);
var component2 =(
  <div {...props} foo="news">test</div>);
console.log(component2.props.foo);
