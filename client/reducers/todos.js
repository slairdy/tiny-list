import { CLICK_TODO, SET_TODOS, POST_TODO, DELETE_TODO, UPDATE_TODO } from '../actions/'

const initialState = []

// reducers accept current state, action, and return new state
export default function todos (state = initialState, action) {
  // clone todos state
  const newState = state
  const indexMatch = newState.findIndex((i) => { return i.id === action.id })
  switch (action.type) {
    case SET_TODOS:
      return action.todos

    case CLICK_TODO:
      // assign the checked boolean to the active todo item in the state
      newState[indexMatch].complete = action.complete
      return newState

    case POST_TODO:
      // add newly added task/todo to the state
      newState.push({ task: action.task, id: action.id, complete: false })
      return newState

    case DELETE_TODO:
      // remove task/todo from the state
      newState.splice(indexMatch, 1)
      return newState

    case UPDATE_TODO:
      // update task/todo
      newState[indexMatch] = { task: action.task, complete: action.complete }
      return newState

    default:
      return state
  }
}
