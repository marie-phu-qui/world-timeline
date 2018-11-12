const express = require('express')
const path = require('path')
const server = express()
const db = require('./db/db')

server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

// server.get('/timeline', require('./routes/timeline'))

server.get('/timeline', (req, res) => {
    db.getEvents()
      .then(events => {
        console.log(events)
        res.json(events)
      })
      .catch(err => {
        console.log(err)
      })
  })

server.get('/test', (req, res) => {
res.send('test test test test')
})


module.exports = server