'use strict'

const db = require('../db'),
  {
    User,
    Poll,
    Choice,
    Vote,
    Promise
  } = db,
  {
    mapValues
  } = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
    polls: polls(),
    choices: choices(),
    //votes: votes()
  }
  seeded.votes = votes(seeded)
  // seeded.reviews = reviews(seeded)
  // seeded.order = orders(seeded)
  return Promise.props(seeded)
}

const users = seed(User, {
  judah: {
    email: 'judah@example.com',
    name: 'Judah',
    password: '1234',
    isAdmin: false
  },
  barack: {
    name: 'Barack Obama',
    email: 'barack@example.gov',
    password: '1234',
    isAdmin: true
  },
})

const polls = seed(Poll, ({users}) => ({
  poll1: {
    title: 'Pizza or Panckes?',
    context: 'Which would you prefer as drunk munchies?',
    answers: ['Pizza', 'Pancakes'],
    categories: ['misc', 'culture'],
    totalVotes: 0
  },
  poll2: {
    title: 'Do ghosts exist?',
    context: 'Ghost: A disembodied consciousness of a dead person',
    answers: ['Ghosts exist', 'Ghosts do not exist'],
    categories: ['misc'],
    totalVotes: 0
  },
  poll3: {
    title: 'Should a man pay on the first date?',
    context: 'Which would you prefer as drunk munchies?',
    answers: ['A man should pay', 'A man is not obligated to pay', 'Bill should be split'],
    categories: ['culture','sensitive'],
    totalVotes: 0
  },
  poll4: {
    title: 'Are you active on online dating?',
    context: 'Ex: Tinder, Match.com, etc...',
    answers: ['I use internet dating',  'I do not use internet dating'],
    categories: ['culture'],
    totalVotes: 0
  }
}))

const choices = seed(Choice, ({polls}) => ({
  choice1: {
    text: 'Pizza',
    poll_id: 1
  },
  choice2: {
    text: 'Pancakes',
    poll_id: 1
  },
  choice3: {
    text: 'Ghosts exist',
    poll_id: 2
  },
  choice4: {
    text: 'Ghosts do not exist',
    poll_id: 2
  },
  choice5: {
    text: 'A man should pay',
    poll_id: 3
  },
  choice6: {
    text: 'A man is not obligated to pay',
    poll_id: 3
  },
  choice7: {
    text: 'Bill should be split',
    poll_id: 3
  },
  choice9: {
    text: 'I use internet dating',
    poll_id: 4
  },
  choice10: {
    text: 'I do not use internet dating',
    poll_id: 4
  },
}))

const votes = seed(Vote, ({users, choices, polls}) => ({
  vote1: {
    user_id: 1,
    poll_id: 1,
    choice_id: 1,
  },
  vote2: {
    user_id: 1,
    poll_id: 2,
    choice_id: 3,
  },
  vote3: {
    user_id: 1,
    poll_id: 3,
    choice_id: 7,
  },
  vote4: {
    user_id: 1,
    poll_id: 4,
    choice_id: 9,
  },
  vote5: {
    user_id: 2,
    poll_id: 1,
    choice_id: 1,
  },
  vote6: {
    user_id: 2,
    poll_id: 2,
    choice_id: 4,
  },
  vote7: {
    user_id: 2,
    poll_id: 3,
    choice_id: 6,
  },
  vote8: {
    user_id: 2,
    poll_id: 4,
    choice_id: 8,
  },
}))

if (module === require.main) {
  db.didSync
    .then(() => db.sync({
      force: true
    }))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others = {}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
          // Is other a function? If so, call it. Otherwise, leave it alone.
          typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
        .map(key => {
          const row = rows[key]
          return {
            key,
            value: Promise.props(row)
              .then(row => Model.create(row)
                .catch(error => {
                  throw new BadRow(key, row, error)
                })
              )
          }
        }).reduce(
          (all, one) => Object.assign({}, all, {
            [one.key]: one.value
          }), {}
        )
      ))
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, {
  users,
  polls,
  choices,
  votes
})

console.log('ran the seed')
