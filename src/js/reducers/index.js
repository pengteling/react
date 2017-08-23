import {combineReducers } from "redux"
import counterApp from "./counterApp"
import toggleApp from "./toggleApp"
const doApp = combineReducers({
  counterApp,
  toggleApp
})

export default doApp


// 合并reducers后的state其实就是下面的组合
// {
//   counterApp: {counter:0},
//   toggleApp: true
//
// }
