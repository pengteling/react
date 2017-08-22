const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id ?
          { ...todo, completed: !todo.completed } : todo //需要stage-0 以上支持


        // { //console.log(state)
        //   console.log({...todo, completed: !todo.completed} )
        //   if (todo.id  === action.id) {
        //           return Object.assign({}, todo, {
        //             completed: !todo.completed
        //           })
        //         }
        //         return todo
        //            }
      )
    default:
      return state
  }
}

export default todos
