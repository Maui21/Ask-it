'use strict'

const {STRING, INTEGER, TEXT, ARRAY, FLOAT} = require('sequelize')

module.exports = db => db.define('choice', {
  text: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  votes: {
    type: INTEGER,
    defaultValue: 0
  },
})

module.exports.associations = (Choice, {Poll}) => {
  Choice.belongsTo(Poll)
}
