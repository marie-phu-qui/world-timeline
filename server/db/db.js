const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

function getEvents(){
    return db('timeline').select()
     }

module.exports = {getEvents}