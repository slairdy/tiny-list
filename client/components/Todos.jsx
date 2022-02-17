import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todo from './Todo'
import { fetchTodos } from '../actions/'

function Todos () {
  // get the todos state from the store
  const todoList = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <>
      <div className="todos">
        {todoList.map((todo, i) => {
          return (
            <div key={i}>
              <Todo id={todo.id} task={todo.task} complete={todo.complete} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Todos
