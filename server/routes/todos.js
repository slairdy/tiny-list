const express = require('express')
const request = require('superagent')
const db = require('../db/db')
const router = express.Router()

module.exports = router

// API routes - use DB functions in here
router.get('/get-todos', (req, res) => {
  db.getTodos()
    .then(tasks => {
      res.json(tasks)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/get-todos', (req, res) => {
  const task = req.body.task
  db.addTodo(task)
    .then((tast) => {
      res.json(task)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/delete-todo', (req, res) => {
  db.deleteTodo(req.body.id)
    .then((deleted) => {
      res.json(deleted)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/update-todo', (req, res) => {
  db.updateTodo(req.body.id, req.body.task, req.body.complete)
    .then((updated) => {
      res.json(updated)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
