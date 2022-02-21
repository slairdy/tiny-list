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
    inputChange()
  }, [todoList])

  function handleDelete (e) {
    // dispatch to action
    const text = 'Are you sure you want to delete ' + todo.task + '?'
    if (confirm(text)) {
      dispatch(delTodos(e.target.value))
      setVisible(false)
    }
  }

  function inputChange () {
    let timer
    const waitTime = 500
    const taskInput = document.getElementById(todo.id)

    if (taskInput) {
      taskInput.addEventListener('keyup', (e) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
          handleUpdate(props.id, taskInput.value, todo.complete)
        }, waitTime)
      })
      taskInput.addEventListener('keydown', (e) => {
        clearTimeout(timer)
      })
    }
  }

  function handleUpdate (id, task, complete) {
    complete = complete ? 1 : 0
    setTodo({ id: id, task: task, complete: complete })
    dispatch(updateTodos(id, task, complete))
    // console.log('todo local state: ' + todo.task)
    // console.log('todo global state: ' + todoList[props.index].task)
  }

  return (
    <>
      {!visible
        ? <></>
        : <>

          <span className='checkWrap'>
            <input onClick={(e) => handleUpdate(props.id, todo.task, e.target.checked)} type="checkbox" defaultChecked={todo.complete} name={todo.task} />
          </span>
          <input className={todo.complete ? 'del' : ''} id={todo.id} type='text' defaultValue={props.task} />
          <button value={todo.id} onClick={handleDelete}>&times;</button>
          <br />
        </>
      }
    </>
  )
}

export default Todo
