const express = require('express')
const path = require('path')
const server = express()


server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

// server.use('/timeline', require('./routes/timeline'))


server.get('/test', (req, res) => {
res.send('test test test test')
})


module.exports = server