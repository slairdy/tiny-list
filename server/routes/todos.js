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
