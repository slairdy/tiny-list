import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import store from '../store'
import { clickTodo } from '../actions'

function Todo (props) {
  const todoList = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [checked, setChecked] = useState(false)
  const [todo, setTodo] = useState([])

  console.log(checked)
  useEffect(() => {
    setTodo(todoList[props.id - 1])
    setChecked(todo.complete)
  })

  function handleChange (e) {
    // dispatch to the store/state using action
    setChecked(e.target.checked)
    dispatch(clickTodo(e.target.id, e.target.checked))
    console.log('state: ' + todoList[todo.id - 1].task)
  }

  function handleDelete (e) {
    // do something
  }

  return (
    <>
      {checked
        ? <><input onChange={handleChange} type="checkbox" defaultChecked={checked} id={todo.id} name={todo.task} /><del><label htmlFor={todo.task}>{todo.task}</label></del></>
        : <><input onChange={handleChange} type="checkbox" defaultChecked={checked} id={todo.id} name={todo.task} /><label htmlFor={todo.task}>{todo.task}</label></>
      }
      <><br /><button onClick={handleDelete}>Delete {todo.task}</button> <input type="text" defaultValue={'update ' + todo.task} /><br /><br /></>
    </>
  )
}

export default Todo
