'use strict'

const db = require('../db')
const Poll = db.model('poll')
const User = db.model('user')
const Choice = db.model('choice')
const router = require('express').Router()

router.get('/', (req, res, next) => {
    User.findAll()
      .then(allUsers => res.json(allUsers))
      .catch(next)
  })

module.exports = router
