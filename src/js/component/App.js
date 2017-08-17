import React from 'react';
import ReactDOM from 'react-dom';


import ItemList from './ItemList';
export default class App extends React.Component{
    constructor(props){
      super(props)
      this.state={
          number:0
      }
      this.handleChange=this.handleChange.bind(this)
    }
    // shouldComponentUpdate(){
    //   return false
    // }

    handleChange(e){
      this.setState({
        number:e.target.value
      })
    }
    render(){
      let tempstr=[];
      for(let i=1;i<=5000; ++i){
        //console.log(i);
        tempstr.push(<ItemList key={i} chooseNumber={this.state.number} number={i} ></ItemList>)
      }
      return(
        <div>
        <input type="text" value={this.state.number} onChange={this.handleChange}/>
        {tempstr}
        </div>
      )
    }
}
App.defaultProps ={

}
