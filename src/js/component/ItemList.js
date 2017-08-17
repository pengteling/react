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
      console.log(nextProps.label===this.props.label)
      //console.log(this.props.label)
      return this.props!=nextProps
    }
    render(){
        return(
            <div>
            {this.props.label.text}
            <input type="checkbox" checked={this.props.label.checked} onChange={this.handleChange} />
            {this.props.label.checked? this.props.label.on : this.props.label.off}
            </div>
            )
    }
}
