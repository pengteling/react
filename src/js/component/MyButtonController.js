import React from 'react'
import ReactDOM from 'react-dom'
import MyButton from './MyButton'
import ButtonActions from './../actions/ButtonActions'
//var ListStore = require('../stores/ListStore');
import ListStore from '../stores/ListStore'


export default class MyButtonController extends React.PureComponent{
  constructor(props) {
      super(props);
      this.state={
        items: ListStore.getAll()
      }
      this.createNewItem = this.createNewItem.bind(this);
      this._onChange = this._onChange.bind(this)
  }
  componentDidMount() {
    ListStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    ListStore.removeChangeListener(this._onChange);
  }
  _onChange () {
    this.setState({
      items: ListStore.getAll()
    })
  }
  createNewItem(e){
    ButtonActions.addNewItem("new item")
  }
  render(){
    return <MyButton items={this.state.items} onClick ={this.createNewItem} />
  }

}
