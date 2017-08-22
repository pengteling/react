// const todo=(state,action)=>{
//   switch (action.type) {
//     case "ADD_TODO":
//       return{
//         id:action.id,
//         text:action.text,
//         completed:false //完成状态
//       }
//
//     case "TOGGLE_TODO":
//       if(state.id !== action.id){
//         return state
//       }
//       return Object.assign({},state,{
//         completed:!state.completed
//       })
//     default:
//     return state
//
//   }
// }
const todos= (state=[],action)=>{
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([{text: action.text ,completed:false}])
    case "TOGGLE_TODO":
      return state.map((todo,index)=>
        action.index===index?{text:todo.text, completed: !todo.completed} :todo
      )
    default:
      return state
  }
}
export default todos
