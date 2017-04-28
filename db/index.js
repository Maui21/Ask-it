'use strict'
const Sequelize = require('sequelize')
    , name = 'AwesomeProject'
    , url = `postgres://localhost:5432/${name}`

const db = module.exports = new Sequelize(url, {
  define: {
    underscored: true,       // use snake_case rather than camelCase column names.
    freezeTableName: true,   // don't change table names from the one specified
    timestamps: true,        // automatically include timestamp columns
  }
})

Object.assign(db, require('./models')(db),
  // We'll also make createAndSync available. It's sometimes useful in tests.
  {createAndSync})

// After defining all the models, sync the database.
// Notice that didSync *is* a Promise, rather than being a function that returns
// a Promise. It holds the state of this initial sync.
db.didSync = db.createAndSync()

// sync the db, creating it if necessary
function createAndSync(force = false) {
  return db.sync({force})
    .catch(fail => {
      return new Promise(resolve =>
        // 'child_process.exec' docs: https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
        require('child_process').exec(`createdb "${name}"`, resolve)
      ).then(() => createAndSync(true, 1))
    })
}
