import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemList extends React.Component{
  constructor(props){
    super(props)
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.chooseNumber==this.props.number ||this.props.number == this.props.chooseNumber ){
      return true
    }else{
      return false
    }
    //return false

  }
  render(){
    const style1 ={ background: "red"}
    const style2={background: "#fff"}
    return(
      <div className="numberbox" style={this.props.chooseNumber == this.props.number? style1:style2 }>{this.props.number}
      </div>
    )
  }
}
