'use strict'
const Sequelize = require('sequelize')
    , name = 'AwesomeProject'
    , url = `postgres://localhost:5432/${name}`

const db = module.exports = new Sequelize(url, {
  define: {
    underscored: true,       // use snake_case rather than camelCase column names.
                             // these are easier to work with in psql.
    freezeTableName: true,   // don't change table names from the one specified
    timestamps: true,        // automatically include timestamp columns
  }
})

// Initialize all our models and assign them as properties
// on the database object.
// This lets us use destructuring to get at them like so:
Object.assign(db, require('./models')(db),
  // We'll also make createAndSync available. It's sometimes useful in tests.
  {createAndSync})

// After defining all the models, sync the database.
// Notice that didSync *is* a Promise, rather than being a function that returns
// a Promise. It holds the state of this initial sync.
db.didSync = db.createAndSync()

// sync the db, creating it if necessary
function createAndSync(force=true) {
  return db.sync({force})
    .catch(fail => {
      // Don't do this auto-create nonsense in prod, or
      // if we've retried too many times.
      // Otherwise, do this autocreate nonsense
      return new Promise(resolve =>
        // 'child_process.exec' docs: https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
        require('child_process').exec(`createdb "${name}"`, resolve)
      ).then(() => createAndSync(true, 1))
    })
}
