import React from "react"
import ReactDOM from "react-dom"

const Counter = ({value, onIncrease , onDecrease,onMultiple,onToggle,isshow})=>{
  let ipt

  return(
    <div>
      {isshow? <h1>{value}</h1>:""}
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <input type="text" ref={( node )=>{ ipt = node  }} />
      <button onClick={()=>onMultiple(ipt.value)}>X</button>
      <br/>
      <button onClick={()=>onToggle(isshow)}>切换显示</button>
    </div>
  )
}
export default Counter
