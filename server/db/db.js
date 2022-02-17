const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTodos
}

//DB functions
function getTodos(db = connection){
  return db('todos').select()
}