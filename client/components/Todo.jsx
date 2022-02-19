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

  function handleDelete (e) {
    // dispatch to action
    dispatch(delTodos(e.target.value))
    setVisible(false)
  }

  function handleUpdate (e, id, task, complete) {
    complete = complete ? 1 : 0
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
            ? <><input onClick={(e) => handleUpdate(e, props.id, todo.task, e.target.checked)} type="checkbox" defaultChecked={todo.complete} name={todo.task} /><del><label htmlFor={todo.task}>{todo.task}</label></del></>
            : <><input onClick={(e) => handleUpdate(e, props.id, todo.task, e.target.checked)} type="checkbox" defaultChecked={todo.complete} name={todo.task} /><label htmlFor={todo.task}>{todo.task}</label></>
          }
          <br /><button value={todo.id} onClick={handleDelete}>Delete {todo.task}</button> <input id={todo.id} onChange={(e) => handleUpdate(e, props.id, e.target.value, todo.complete)} type='text' defaultValue={props.task} /><br /><br />
        </>
      }
    </>
  )
}

export default Todo
