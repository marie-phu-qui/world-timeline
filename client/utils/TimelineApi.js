import request from 'superagent'

export function getEvents() {
  return request.get('/timeline')
}