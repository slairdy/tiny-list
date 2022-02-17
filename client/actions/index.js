import { getTodos } from '../apis/'

export const CLICK_TODO = 'CLICK_TODO'
export const SET_TODOS = 'SET_TODOS'
// Actions are just objects - they must have a type and then anything else you want
// we wrap them in a function to avoid long-winded code repetition

// what redux-thunk does: it is a middleware that looks at every action that passes
// through the system, and if it’s a function, it calls that function - now actions can do stuff instead of just being objects!

export function clickTodo (id, checked) {
  return {
    type: 'CLICK_TODO',
    id: id,
    checked: checked
  }
}

export function setTodos (todos) {
  return {
    type: SET_TODOS,
    todos
  }
}

export function fetchTodos () {
  return (dispatch) => {
    return getTodos()
      .then(todos => {
        dispatch(setTodos(todos))
        return null
      })
      .catch(e => {
        console.log(e)
      })
  }
}
