import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todo from './Todo'
import { fetchTodos, postTodos } from '../actions/'

function Todos () {
  // get the todos state from the store
  const [todos, setTodos] = useState([])
  const todoList = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [todoList])

  // On click -> dispatch to action -> action calls api function ->
  // api function posts or gets from api endpoint, api calls database function & returns result to action ->
  // action sends db/api result to reducer -> reducer alters state with new info, returns new state ->
  // front end ~^**~*magic happens*~**^~
  function handleCreateNew (e) {
    const newTodo = document.getElementById('newTodo').value
    dispatch(postTodos(newTodo))
    setTodos(todoList)
  }

  return (
    <>
      <div className="todos">
        {todoList.map((todo, i) => {
          return (
            <>
              {todo.complete
                ? <></>
                : <><div key={i}> <Todo id={todo.id} index={i} task={todo.task} complete={todo.complete} /></div></>
              }
            </>
          )
        })}
        {todoList.map((todo, i) => {
          return (
            <>
              {!todo.complete
                ? <></>
                : <><div key={i}> <Todo id={todo.id} index={i} task={todo.task} complete={todo.complete} /></div></>
              }
            </>
          )
        })}
        <input type="text" defaultValue="" id="newTodo" /><button id="addNew" onClick={handleCreateNew} value="add new"></button>
      </div>
    </>
  )
}

export default Todos
