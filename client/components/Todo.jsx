import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import store from '../store'
import { clickTodo } from '../actions'

function Todo (props) {
  const todo = useSelector(reduxState => reduxState.todos[props.id - 1])

  const [checked, setChecked] = useState(!props.checked)
  console.log(checked)
  useEffect(() => {
    setChecked(todo.complete)
  })

  function handleChange (e) {
    // dispatch to the store/state using action
    setChecked(e.target.checked)
    store.dispatch(clickTodo(e.target.id, e.target.checked))
  }

  function handleDelete (e) {
    // do something
  }

  return (
    <>
      {checked
        ? <><input onChange={handleChange} type="checkbox" defaultChecked={props.complete} id={props.id} name={todo.task} /><del><label htmlFor={todo.task}>{todo.task}</label></del></>
        : <><input onChange={handleChange} type="checkbox" id={props.id} name={todo.task} /><label htmlFor={todo.task}>{todo.task}</label></>
      }
      <><br /><button onClick={handleDelete}>Delete {todo.task}</button> <input type="text" defaultValue={'update ' + todo.task} /><br /><br /></>
    </>
  )
}

export default Todo
