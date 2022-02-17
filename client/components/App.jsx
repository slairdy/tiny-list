import React from 'react'
import Todos from './Todos'

function App () {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <Todos />
      </section>
    </>
  )
}

export default App
