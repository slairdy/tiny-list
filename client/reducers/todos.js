const initialState = [
  { id: 1, task: 'Vaccuum Lounge', complete: false },
  { id: 2, task: 'Fold & Put Away Laundry', complete: true },
  { id: 3, task: 'Wash Dishes', complete: false }
]

// reducers accept current state, action, and return new state
const todos = (state = initialState, action) => {
  // clone todos state
  const newState = state
  const index = action.id - 1
  const checked = action.checked
  switch (action.type) {
    case 'CLICK_TODO':
      // assign the checked boolean to the active todo item in the state
      newState[index].complete = checked
      return newState
    default:
      return state
  }
}

export default todos
