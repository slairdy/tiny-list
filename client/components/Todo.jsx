import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delTodos, updateTodos } from '../actions'

function Todo (props) {
  const todoList = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [todo, setTodo] = useState({})
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setTodo(todoList[props.index])
  }, [todoList])

  // on check = no set checked, checked against todo.complete

  function handleCheck (e) {
    // dispatch to action
    const id = props.id
    const task = todo.task
    const complete = e.target.checked ? 1 : 0
    setTodo({ id: id, task: task, complete: complete })
    dispatch(updateTodos(id, task, complete))
    console.log(e.target.checked)
    console.log('todo local state: ' + todo.complete)
    console.log('todo global state: ' + todoList[props.index].complete)
  }

  function handleDelete (e) {
    // dispatch to action
    dispatch(delTodos(e.target.value))
    setVisible(false)
  }

  function handleUpdate (e) {
    const id = props.id
    const task = e.target.value
    const complete = todo.complete ? 1 : 0
    setTodo({ id: id, task: task, complete: complete })
    dispatch(updateTodos(id, task, complete))
    console.log('todo local state: ' + todo.task)
    console.log('todo global state: ' + todoList[props.index].task)
  }

  return (
    <>
      {!visible
        ? <></>
        : <>
          {todo.complete
            ? <><input onClick={handleCheck} type="checkbox" defaultChecked={todo.complete} name={todo.task} /><del><label htmlFor={todo.task}>{todo.task}</label></del></>
            : <><input onClick={handleCheck} type="checkbox" defaultChecked={todo.complete} name={todo.task} /><label htmlFor={todo.task}>{todo.task}</label></>
          }
          <br /><button value={todo.id} onClick={handleDelete}>Delete {todo.task}</button> <input id={todo.id} onChange={handleUpdate} type='text' defaultValue={props.task} /><br /><br />
        </>
      }
    </>
  )
}

export default Todo
