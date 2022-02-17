import request from 'superagent'

export function getTodos () {
  return request
    .get('/v1/get-todos')
    .then(res => res.body)
}
