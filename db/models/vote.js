'use strict'

const {STRING, INTEGER, TEXT, ARRAY, FLOAT} = require('sequelize')

module.exports = db => db.define('vote', {
})

module.exports.associations = (Vote, {User, Choice, Poll}) => {
  Vote.belongsTo(User)
  Vote.belongsTo(Poll)
  Vote.belongsTo(Choice)
}
