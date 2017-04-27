'use strict'

const db = require('APP/db')
const Poll = db.model('poll')
const User = db.model('user')
const Choice = db.model('choice')

module.exports = require('express').Router()
 // Find all Polls
  .get('/', (req, res, next) => {
    Poll.findAll()
      .then(allPolls => res.json(allPolls))
      .catch(next)
  })
  // Find all Polls from a specific User
  .get('/:userId', (req, res, next) => {
    Poll.findAll({where: {user_id: req.params.user_id}})
      .then(allPolls => res.json(allPolls))
      .catch(next)
  })
  // Create a poll
  .post('/', (req, res, next) => {
    Poll.create(req.body)
    .then(allPolls => res.status(201).json(allPolls))
    .catch(next)
  })
  //Find a specific poll with its choices
  .get('/:id', (req, res, next) => {
    Poll.findById(req.params.id, {
      include: [{
        model: Choice,
        where: {poll_id: req.params.id}
      }]
    })
    .then(poll => {
      poll ? res.json(poll) : res.sendStatus(404)
    })
    .catch(next)
  })
  // Delete a poll
  .delete('/:id', (req, res, next) => {
    Poll.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(destroyedPoll => {
      destroyedPoll ? res.sendStatus(204) : res.sendStatus(404)
    })
    .catch(next)
  })
  //Update a poll
  .put('/:id', (req, res, next) => {
    Poll.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true,
      plain: true
    })
    .then(updatedPoll => {
      updatedPoll ? res.send(updatedPoll) : res.sendStatus(404)
    })
  })

