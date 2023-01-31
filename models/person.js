const path = require('path')
const { knex } = require('knex')
const { Model } = require('objection')
const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.join(__dirname, "..", "Person.db"),
  },
})

class Person extends Model {
  static tableName = 'people'
  static idColumn = 'personId'

  static knex () {
    return db
  }
}

module.exports = Person
