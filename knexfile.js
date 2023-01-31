const path = require("path");

/**
 * @type { Object.<string, import('knex').Knex.Config> }
 */
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "Person.db"),
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "Person.db"),
    },
    useNullAsDefault: true,
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "Person.db"),
    },
    useNullAsDefault: true,
  },
};
