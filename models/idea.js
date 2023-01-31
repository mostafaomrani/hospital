const path = require('path')
const { knex } = require('knex')
const { Model } = require('objection')

const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.join(__dirname, "..", "Person.db"),
  },
})

class Idea extends Model {
  static tableName = 'ideas'
  static idColumn = 'ideaId'

  static knex () {
    return db
  }
}

module.exports = Idea
