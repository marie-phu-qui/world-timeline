const router = require('express').Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getArticles()
    .then(events => {
      let event = events[0]
      res.json(event.title)
    })
    .catch(err => {
        console.log(err)
      })
})