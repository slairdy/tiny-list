export const CLICK_TODO = 'CLICK_TODO'
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
