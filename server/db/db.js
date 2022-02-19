const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo
}

// DB functions
function getTodos (db = connection) {
  return db('todos').select()
}

function addTodo (task, db = connection) {
  return db('todos').insert({ task: task, complete: false })
}

function deleteTodo (id, db = connection) {
  return db('todos').where({ id: id }).del()
}

function updateTodo (id, task, complete, db = connection) {
  return db('todos').where({ id: id }).update({
    task: task,
    complete: complete
  })
}
