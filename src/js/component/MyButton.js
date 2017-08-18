import React from 'react';
import ReactDOM from 'react-dom';

export default class MyButton extends React.PureComponent{
  constructor(props) {
        super(props);
    }
    render(){
      var items = this.props.items;
      var itemHtml = items.map(function (listItem, i) {
        return <li key={i}>{listItem}</li>;
      });

        return(
            <div>
            <ul>{itemHtml}</ul>
              <button onClick={this.props.onClick}>New Item</button>
            </div>
            )
    }
}
