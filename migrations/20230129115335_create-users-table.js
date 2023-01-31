/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTableIfNotExists("users", (users) => {
    users.increments("userId");
    users.string("userName");
    users.string("password");
    users.string("firstName");
    users.string("lastName");
    users.string("mobile");
    users.string("email");
    users.string("AccessLevel");
    users.boolean("isActive");
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  knex.schema.dropTableIfExists("users");
};
