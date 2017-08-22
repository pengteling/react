import todos from "./todo"
import visibilityFilter from "./visibilityFilter"
// import {combineReducers} from "redux"
//
// const todoApp = combineReducers({
//   todos,
//   visibilityFilter
// })
const todoApp = (state={},action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter,action)
  }
}
export default todoApp
