import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemList extends React.PureComponent{
  constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        //this.props.onChange(this.props.label.id);
        this.props.onChange();
    }
    shouldComponentUpdate(nextProps,nextState){
      return nextProps.label != this.props.label
    }
    render(){
        return(
            <div>
            {this.props.label.get("text")}
            <input type="checkbox" checked={this.props.label.get("checked")} onChange={this.handleChange} />
            {this.props.label.get("checked")? this.props.label.get("on") : this.props.label.get("off")}
            </div>
            )
    }
}
