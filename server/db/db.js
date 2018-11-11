const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

function getArticles(){
    return db('timeline').select()
     }