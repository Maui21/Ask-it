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
    speakers: speakers(),
    polls: polls(),
    choices: choices(),
    votes: votes()
  }
  // seeded.magnets = magnets(seeded)
  // seeded.reviews = reviews(seeded)
  // seeded.order = orders(seeded)
  return Promise.props(seeded)
}

const users = seed(User, {
  god: {
    email: 'god@example.com',
    name: 'So many names',
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

const polls = seed(Poll, ({users, choices}) => ({
  // order1: {
  //   products: {
  //     2: 3,
  //     3: 2
  //   },
  //   user_id: users.god.id
  // }
}))

const choices = seed(Choice, {
  marcus: {
    name: 'Marcus Aurelius',
    bio: `If ever there was an exemplification of Plato's 'Philosopher King', it would be Marcus Aurelius. Born in 121, he became a Roman Emperor in 161, and his reign lasted until his death in 180. An ardent Stoic, he is best remembered today as the author of the Meditations, a collection of 'spiritual exercises' that were written for himself between 170 and 180. Fortunately for us, this work was preserved for posterity, and it can be read profitably today by anyone looking for a source of spiritual guidance.`,
    image: 'http://thinkmongr.com/wp-content/uploads/2013/03/marcus-aurelius-4-640x320.png'
  },
  virginia: {
    name: 'Virginia Woolf',
    bio: ` Born in 1882 in London, Virginia Woolf was an author and essayist today regarded as one of the twentieth century's literary greats. Her most well known works include the novels Mrs Dalloway, To the Lighthouse, Orlando, and the book-length essay A Room of One's Own.`,
    image: 'http://www.peabodylibrary.org/freeforall/wp-content/uploads/2016/01/woolf1-e1402796124116-650x413.jpg'
  },
  ralph: {
    name: 'Ralph Waldo Emerson',
    bio: `Born in 1803 in Boston, Massachusetts, Ralph Waldo Emerson was arguably the most influential writer of 19th-century America. Regarded by many as the American version of Michel de Montaigne, Emerson wrote voluminously on a wide range of subjects. Some of his most important essays include Nature, Self-Reliance, and Experience.`,
    image: 'http://s3.amazonaws.com/armstrongeconomics-wp/2015/04/Emerson-Ralph-Waldo.jpg'
  }
})

const votes = seed(Vote, ({polls, choices, users}) => ({
  mag1: {
    title: 'Marcus Aurelius Fridge Magnet #1',
    quote: 'Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/marcus-aurelius-quote-fridge-magnet-1_large.jpg?v=1380466387',
    itemNumber: 1,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 395,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: speakers.marcus.id
  },
  mag2: {
    title: 'Marcus Aurelius Fridge Magnet #2',
    quote: 'When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/marcus-aurelius-quote-fridge-magnet-2_large.jpg?v=1380466539',
    itemNumber: 2,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 395,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: speakers.marcus.id
  },
  mag3: {
    title: 'Marcus Aurelius Fridge Magnet #3',
    quote: 'You have power over your mind - not oustide events. Realize this, and you will find strength.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/marcus-aurelius-quote-fridge-magnet-3_large.jpg?v=1380466642',
    itemNumber: 3,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 395,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: speakers.marcus.id
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
