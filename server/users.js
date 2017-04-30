'use strict'

const db = require('../db')
const Poll = db.model('poll')
const User = db.model('user')
const Vote = db.model('vote')

module.exports = require('express').Router()

  .get('/', (req, res, next) => {
      User.findAll()
        .then(allUsers => res.json(allUsers))
        .catch(next)
    })
  // Create a user
  .post('/', (req, res, next) => {
    User.create(req.body)
    .then(allUsers => res.status(201).json(allUsers))
    .catch(next)
  })
  // Find a specific user with its polls and votes
  .get('/:id', (req, res, next) => {
    User.findById(req.params.id, {
      include: [{
        all: true
      }]
    })
    .then(poll => {
      poll ? res.json(poll) : res.sendStatus(404)
    })
    .catch(next)
  })
  // Delete a poll
  .delete('/:id', (req, res, next) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(destroyedUser => {
      destroyedUser ? res.sendStatus(204) : res.sendStatus(404)
    })
    .catch(next)
  })
  // //Update a poll
  // .put('/:id', (req, res, next) => {
  //   console.log('hit route')
  //   Poll.update(req.body, {
  //     where: {
  //       id: req.params.id
  //     },
  //     returning: true, //includes data instanse with response
  //     plain: true      //returns just JSONinstead of crazy object
  //   })
  //   .then(updatedPoll => {
  //     updatedPoll[1] ? res.send(updatedPoll[1]) : res.sendStatus(404)
  //   })
  // })
