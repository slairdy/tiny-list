import React from 'react'
import Todos from './Todos'

function App () {
  return (
    <>
      <div className="listWrapper">
        <header className="header">
          <h1>A CRUDdy List</h1>
        </header>
        <div className="list">
          <Todos />
        </div>
      </div>
    </>
  )
}

export default App
