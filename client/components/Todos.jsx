import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

function Todos () {
  // get the todos state from the store
  const todoList = useSelector(reduxState => reduxState.todos)

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
