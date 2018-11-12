const router = require('express').Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getArticles()
    .then(events => {
      console.log(events)
      let event = events[0]
      return res.json(event.title)
    })
    .catch(err => {
        console.log(err)
      })
})