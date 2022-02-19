import { getTodos, addTodo, deleteTodo, updateTodo } from '../apis/'
export const CLICK_TODO = 'CLICK_TODO'
export const SET_TODOS = 'SET_TODOS'
export const POST_TODO = 'POST_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'

// Actions are just objects - they must have a type and then anything else you want
// we wrap them in a function to avoid long-winded code repetition
export function clickTodo (id, complete) {
  return {
    type: 'CLICK_TODO',
    id: id,
    complete: complete
  }
}

export function setTodos (todos) {
  return {
    type: 'SET_TODOS',
    todos
  }
}

export function postTodo (task, id) {
  return {
    type: 'POST_TODO',
    task: task,
    id: id
  }
}

export function delTodo (id) {
  return {
    type: 'DELETE_TODO',
    id: id
  }
}

export function upTodo (id, task, complete) {
  return {
    type: 'UPDATE_TODO',
    id: id,
    task: task,
    complete: complete
  }
}

// what redux-thunk does: it is a middleware that looks at every action that passes
// through the system, and if it’s a function, it calls that function - now actions can do stuff instead of just being objects!
// this be thunk:
export function fetchTodos () {
  return (dispatch) => {
    // wait for & return api/db result:
    return getTodos()
      .then(todos => {
        // then dispatch action to state/reducer:
        dispatch(setTodos(todos))
        return null
      })
      .catch(e => {
        console.log(e)
      })
  }
}

export function postTodos (task) {
  return (dispatch) => {
    return addTodo(task)
      .then(task => {
        dispatch(postTodo(task))
        return null
      })
  }
}

export function delTodos (id) {
  return (dispatch) => {
    return deleteTodo(id)
      .then(() => {
        console.log('help, I\'m stuck in an action creator! ' + id)
        dispatch(delTodo(id))
        return null
      })
  }
}

export function updateTodos (id, task, complete) {
  return (dispatch) => {
    return updateTodo(id, task, complete)
      .then(() => {
        dispatch(upTodo(id, task, complete))
        return null
      })
  }
}
