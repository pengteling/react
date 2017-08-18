import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './ItemList';
import { fromJS } from 'immutable';

export default class App extends React.PureComponent{
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state= fromJS({
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
      })
  }
  handleChange(labelId){
    //console.log(this.state.get("items"))
    //console.log(this.state)
    //console.log(this.state.setIn([items,labelId,"checked"], !this.state.items.getIn([items,labelId,"checked"])))
    //console.log(this.state.getIn(["items",labelId,"checked"]))
    //console.log(this.state.setIn(["items",labelId,"checked"], !this.state.getIn(["items",labelId,"checked"])))
    console.log(this.state)
    const newState= this.state.setIn(["items",labelId,"checked"], !this.state.getIn(["items",labelId,"checked"]))
    console.log(this.state==newState)
    console.log(this.state.get("items"))
    console.log(newState.get("items"))

//replaceState 被淘汰 ，但是setState 是react插手，生成的是 object而非immutableJS对象 因此暂无好的办法
    this.replaceState(newState)

    //console.log(this.state.setIn(["items",labelId,"checked"], !this.state.getIn(["items",labelId,"checked"]))).get("items")
    // this.setState(fromJS({
    //   items: (this.state.setIn(["items",labelId,"checked"], !this.state.getIn(["items",labelId,"checked"]))).get("items")
    // }))
  }
  render(){
      let that = this;
      console.log(this.state)

      return(
          <div>
          {
              // this.state.items.map(function(label,i){
              //     //console.log(i)
              //     return <ItemList label={label} key={i} onChange={that.handleChange.bind(that,i)} />
              // })

              this.state.get("items").map((label,i)=>{

                return  <ItemList label={label} key={i} onChange={()=>{this.handleChange(i)}} />
              })
          }
          </div>
          )
  }
}
App.defaultProps ={

}
