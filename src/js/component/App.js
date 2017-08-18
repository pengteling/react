import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './ItemList';


export default class App extends React.PureComponent{
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state= {
          items:[
          {
              id :0,
              text:"你喜欢吃萝卜吗",
              on:"喜欢",
              off:"不喜欢",
              checked:false
          },
          {
              id :1,
              text:"你喜欢吃西瓜吗",
              on:"喜欢",
              off:"不喜欢",
              checked:false
          },
          {
              id :2,
              text:"你喜欢吃香蕉吗",
              on:"喜欢",
              off:"不喜欢",
              checked:false
          }
          ]
      }
  }
  handleChange(id){

      //let newitem = this.state.items;
      //console.log(id);
      let newitem = this.state.items.concat([]);
      newitem[id].checked = !newitem[id].checked;
      //虽然执行concat后 数组是返回的新数组，但数组里面的项还是原来的对象
      // console.log(newitem == this.state.items)
      // console.log(newitem[0] === this.state.items[0])
      this.setState({
          items: newitem
      })
  }
  render(){
      let that = this;
      return(
          <div>
          {
              // this.state.items.map(function(label,i){
              //     //console.log(i)
              //     return <ItemList label={label} key={i} onChange={that.handleChange.bind(that,i)} />
              // })
              this.state.items.map((label,i)=>{
                return  <ItemList label={label} key={i} onChange={()=>{this.handleChange(i)}} />
              })
          }
          </div>
          )
  }
}
App.defaultProps ={

}
