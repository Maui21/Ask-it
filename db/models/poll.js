'use strict'

const {STRING, INTEGER, TEXT, ARRAY, FLOAT} = require('sequelize')

module.exports = db => db.define('poll', {
  title: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  answers: {
    type: ARRAY(STRING),
    allowNull: false,
  },
  context: {
    type: TEXT,
  },
  categories: {
    type: ARRAY(STRING),
    allowNull: true
  },
  totalVotes: {
    type: INTEGER
  }
})

module.exports.associations = (Poll, {User, Choice}) => {
  Poll.belongsTo(User, {as: 'owner'})
  Poll.hasMany(Choice)
}
