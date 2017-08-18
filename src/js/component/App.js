import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './ItemList';
//import { fromJS } from 'immutable';
import update from 'immutability-helper';

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
  handleChange(labelId){
    update.extend('$auto', function(value, object) {
      console.log()
      return object ?
        update(object, value):
        update({}, value);
    });
    //const newState = update(this.state, {items: { 0 : {checked:{$apply:  (x)=> !x }} } })

    // 采用immutability-helper的update方法 更新state
    const newState = update(this.state, {items: {$apply: (x)=>{
      //console.log(x)
      let newX = []
      x.map((obj,i)=>{

        if(i== labelId){
          //console.log(obj)
          let newobj = update( obj,  { checked: {$apply:  (x)=> !x  }})

          //console.log(newobj)
          newX.push(newobj)
        }else{
          newX.push(obj)
        }
      })
      //console.log(newX)
      return newX
    } } })


    //console.log(newState)
    this.setState(newState)


    //或者

    // this.setState(
    //       state => update(state, {
    //           items : {
    //               $apply : function(x){
    //                   console.log(x[labelId].checked);
    //                   x[labelId].checked = !x[labelId].checked;
    //                   console.log(x[labelId].checked);
    //                  // console.log(x)
    //                   return x;
    //               }
    //           }
    //       })
    //       ,function(){
    //           console.log(this.state);
    //       })

      //let newitem = this.state.items;
      //console.log(id);
      // let newitem = this.state.items.concat([]);
      // newitem[id].checked = !newitem[id].checked;
      // this.setState({
      //     items: newitem
      // })
      // this.setState({
      //      items: this.state.items.setIn([labelId,"checked"], !this.state.items.getIn([labelId,"checked"]))
      //      //items: this.state.items
      //  })
       //console.log(this.state.items.setIn([labelId,"checked"], !this.state.items.getIn([labelId,"checked"])))
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
