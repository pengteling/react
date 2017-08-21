import {connect} from "react-redux"
import {addTodo} from "../actions"
let AddTodo =({dispatch})=>{
  let ipt
  return (
    <div>
      <form onSubmit={ e=>{
        e.preventDefault()
        if(!input.value.trim()){return}
        dispatch(addTodo(ipt.value))
        ipt.value=""
      }}>
        <input type="text" ref={node=>{ipt=node}}/>
        <button type="submit">ADD TO DO</button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)
export default AddTodo
