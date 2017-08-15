import React from 'react';
import ReactDOM from 'react-dom';
require("../sass/style.scss");
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import { TransitionGroup } from 'react-transition-group' // ES6


class TodoList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      items:["one","two"]
    }
    this.handleAdd=this.handleAdd.bind(this)
    this.handleRemove=this.handleRemove.bind(this)
  }
  handleAdd(){
    const ipt = prompt('Enter some text')
    this.setState({
      items: this.state.items.concat([ipt])
    })
  }
  handleRemove(i,e){
    //console.log(e.target.id)
    let newItems = this.state.items.slice()
    //newItems.splice(e.target.id ,1)
    //newItems.splice(e.target.data-i,1)
    newItems.splice(i ,1)
    this.setState({
      items: newItems
    })
  }
  render(){
    const items= this.state.items.map((item,i)=>(
      <div key={item}> {item} <a id={i} onClick={()=>this.handleRemove(i)}>Del</a></div>
    ))
    return(
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <CSSTransitionGroup transitionName="items" transitionAppear={true}
      transitionAppearTimeout={500} transitionEnterTimeout ={500} transitionLeaveTimeout ={500} >
          {items}
        </CSSTransitionGroup>

      </div>
    )
  }
}


ReactDOM.render(
  <TodoList />,
  document.getElementById('app')
);
