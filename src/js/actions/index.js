
export const increaseCount =() =>{
  return { type:"INCREASE" }
}
export const decreaseCount =() =>{
  return { type:"DECREASE" }
}
export const multiplierCount =(n) =>{
  console.log({type:"MULTIPLIER",n })
  return {type:"MULTIPLIER",n }
}

export const toggleApp =(isshow)=>{
  return {type:"TOGGLE",isshow }
}
