'use strict'

const db = require('../db')
const Poll = db.model('poll')
const User = db.model('user')
const Choice = db.model('choice')
const Vote = db.model('vote')

module.exports = require('express').Router()
  // Find all votes
  .get('/votes', (req, res, next) => {
    Vote.findAll({
      include: [{
        all: true
      }],
    })
    .then(allVotes => {
      allVotes ? res.json(allVotes) : res.sendStatus(404)
    })
    .catch(next)
  })
  // Create a vote
  .post('/:pollId/vote/:choiceId', (req, res, next) => {
    Vote.create({poll_id: req.params.pollId, choice_id: req.params.choiceId, user_id: 2})
      .then(vote => res.status(201).json(vote))
      .catch(next)
  })
 // Find all Polls
  .get('/', (req, res, next) => {
    Poll.findAll({
      include: [{
        all: true
      }],
    })
    .then(allPolls => {
      allPolls ? res.json(allPolls) : res.sendStatus(404)
    })
    .catch(next)
  })
  //Find all Polls from a specific User
  .get('/user/:userId', (req, res, next) => {
    Poll.findAll({where: {user_id: req.params.userId}})
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
        all: true
      }],
      where: {poll_id: req.params.id}
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
      returning: true, //includes data instanse with response
      plain: true      //returns just JSONinstead of crazy object
    })
    .then(updatedPoll => {
      updatedPoll[1] ? res.send(updatedPoll[1]) : res.sendStatus(404)
    })
  })


