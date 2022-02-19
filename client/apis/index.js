import request from 'superagent'

export function getTodos () {
  return request
    .get('/v1/get-todos')
    .then(res => res.body)
}

export function addTodo (task) {
  return request
    .post('/v1/get-todos')
    .send({ task: task })
    .then(res => res.body)
}

export function deleteTodo (id) {
  return request
    .post('/v1/delete-todo')
    .send({ id: id })
    .then(res => res.body)
}

export function updateTodo (id, task, complete) {
  return request
    .post('/v1/update-todo')
    .send({
      id: id,
      task: task,
      complete: complete
    })
    .then(res => res.body)
}
