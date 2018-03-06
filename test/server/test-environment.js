const knex = require('knex')

const testConfig = require('../../knexfile').test

module.exports = {
  getTestDb: () => knex(testConfig),
    initialise: (db) => {
    return db.migrate.latest()
      .then(() => {
        return db.seed.run()
      })
  },

  cleanup: (db) => {
    return db.destroy()
  }
}