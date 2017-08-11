import React from 'react';
import ReactDOM from 'react-dom';





// class Box extends React.Component{
//   constructor(props){
//     super(props)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//
//   handleSubmit(e){
//     e.preventDefault()
//     console.log(this._ipt.value)
//     // 可以说明 this._ipt 就是原生DOM元素 用了findDOMNode还是自身
//     console.log(ReactDOM.findDOMNode(this._ipt)===this._ipt)
//     // 当参数是Component获取的是该Component render方法中的DOM
//     console.log(ReactDOM.findDOMNode(this)===this)
//   }
//
//   render(){
//     console.log("render")
//     return (
//       <form onSubmit={this.handleSubmit}>
//       <input type="text" defaultValue="default"  ref={ipt => this._ipt =ipt}  />
//       <input type="submit" />
//       </form>
//     )
//   }
// }


class Box extends React.Component{
  constructor(props){
    super(props)
    this.state={iptValue:"default"}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.state.iptValue)
  }
  handleChange(e){
    // 可以证明e.target是DOM节点
    console.log(e.target===this._ipt)
    this.setState({
      iptValue:e.target.value
    })
  }

  render(){
    console.log("render")
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.iptValue} onChange={this.handleChange} ref={ipt => this._ipt =ipt}/>
      <input type="submit" />
      </form>
    )
  }
}

ReactDOM.render(
  <Box />,
  document.getElementById('app')
);
