import React from 'react';
import ReactDOM from 'react-dom';

// class RegForm extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       username:"",
//       sex:"0",
//       agree:false
//     }
//     this.handleChangeSex=this.handleChangeSex.bind(this)
//     this.handlChangeUsername=this.handlChangeUsername.bind(this)
//     this.handleChangeAgree=this.handleChangeAgree.bind(this)
//     this.handleSubmit=this.handleSubmit.bind(this)
//   }
//   handleSubmit(){
//     console.log(this.state)
//   }
//   handleChangeSex(e){
//     this.setState({
//       sex:e.target.value
//     })
//   }
//   handlChangeUsername(e){
//     this.setState({
//       username:e.target.value
//     })
//   }
//   handleChangeAgree(e){
//     this.setState({
//       agree:e.target.checked
//     })
//   }
//   render(){
//     return(
//       <div>
//         <input type="text" placeholder="请输入姓名" name="username" id="username" onChange={this.handlChangeUsername} /><br/>
//         <select name="sex" id="sex" onChange={this.handleChangeSex}>
//           <option value="0">女</option>
//           <option value="1">男</option>
//         </select><br/>
//         <lable htmlFor="agree">同意</lable><input type="checkbox" name="agree" id="agree" onClick={this.handleChangeAgree}/><br/>
//         <input type="submit" value="提交" onClick ={this.handleSubmit}/>
//       </div>
//     )
//   }
// }


// class RegForm extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       username:"",
//       sex:"0",
//       agree:false
//     }
//     this.handleChange=this.handleChange.bind(this)
//     this.handleSubmit=this.handleSubmit.bind(this)
//   }
//   handleSubmit(){
//     console.log(this.state)
//   }
//   handleChange(name,e){
//     this.setState({
//       [name]: name=="agree" ? e.target.checked: e.target.value
//     })
//   }
//   render(){
//     return(
//       <div>
//         <input type="text" placeholder="请输入姓名" name="username" id="username" onChange={this.handleChange.bind(this,"username")} /><br/>
//         <select name="sex" id="sex" onChange={this.handleChange.bind(this,"sex")}>
//           <option value="0">女</option>
//           <option value="1">男</option>
//         </select><br/>
//         <lable htmlFor="agree">同意</lable><input type="checkbox" name="agree" id="agree" onClick={this.handleChange.bind(this,"agree")}/><br/>
//         <input type="submit" value="提交" onClick ={this.handleSubmit}/>
//       </div>
//     )
//   }
// }


class RegForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      username:"",
      sex:"0",
      agree:false
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleSubmit(){
    console.log(this.state)
  }
  handleChange(e){
    // console.log(e.target.value)
    // console.log(e.target.name)
    //console.log(e.target)
    this.setState({
      [e.target.name]: [e.target.name]=="agree" ? e.target.checked: e.target.value
    })

  }
  render(){
    //console.log("render")
    return(
      <div>
        <input type="text" placeholder="请输入姓名" name="username" id="username" onChange={this.handleChange} /><br/>
        <select name="sex" id="sex" onChange={this.handleChange}>
          <option value="0">女</option>
          <option value="1">男</option>
        </select><br/>
        <lable htmlFor="agree">同意</lable><input type="checkbox" name="agree" id="agree" onClick={this.handleChange}/><br/>
        <input type="submit" value="提交" onClick ={this.handleSubmit}/>
      </div>
    )
  }
}

ReactDOM.render(
  <RegForm />,
  document.getElementById('app')
);
