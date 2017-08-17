import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './ItemList';
import update from 'immutability-helper';

export default class App extends React.PureComponent{
    constructor(props){
      super(props)
      this.state={
          items:["one","two"]
      }
      this.handleClick=this.handleClick.bind(this)
    }
    // shouldComponentUpdate(nextProps,nextState){
    //   console.log(this.olditems.length)
    //   console.log(nextState.items.length)
    //   if(nextState.items.length!== this.olditems.length){
    //     return true
    //   }
    //   else{
    //     return false
    //   }
    // }

    handleClick(){
      //this.olditems = this.state.items.slice()
      // let {items} = this.state
      //
      // // console.log({items})
      // // console.log(items)
      // items.push("new-item")
      // //console.log({items})
      // this.setState({items})

      //const newItems = update(this.state.items, {$push: ["new-item"]})
      const newItems = update(this.state, {items: {$apply: x=>x} })
      console.log(newItems)
      this.setState({items:newItems.items})
    }
    render(){
      return(
        <div>
          <button onClick={this.handleClick}>点击Add</button>
          <ItemList items={this.state.items} />
        </div>
      )
    }
}
App.defaultProps ={

}
