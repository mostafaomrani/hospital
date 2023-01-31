const path = require("path");
const { knex } = require("knex");
const { Model } = require("objection");
const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.join(__dirname, "..", "Person.db"),
  },
});

class User extends Model {
  static tableName = "users";
  static idColumn = "userId";

  static knex() {
    return db;
  }
}

module.exports = User;
