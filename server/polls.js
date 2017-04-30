'use strict'

// var express = require('express');
// var router = express.Router();
// var models = require('../db/models');
// var Poll = models.Poll;
// var User = models.User;
// var Choice = models.Choice
const db = require('../db')
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
        model: Choice
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
    console.log('hit route')
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

