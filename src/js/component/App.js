import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './ItemList';
export default class App extends React.PureComponent{
    constructor(props){
      super(props)
      this.state={
          items:["one","two"]
      }
      this.handleClick=this.handleClick.bind(this)
    }
    // shouldComponentUpdate(nextProps,nextState){
    //   return true
    // }

    handleClick(){
      // let {items} = this.state
      // // console.log({items})
      // // console.log(items)
      // items.push("new-item")
      // //console.log({items})
      // this.setState({items})

      // this.setState({
      //   items: this.state.items.concat(['new-item']) //不会改变现有数组 是返回新的数组
      // });

      this.setState( (prevState)=>{
        return {items:prevState.items.concat(['new-item'])}
      });

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
