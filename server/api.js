'use strict'

const api = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/polls', require('./polls'))
  .use('/users', require('./users'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())

module.exports = api
