/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTableIfNotExists('people', (people) => {
    people.integer('personId');
    people.string('firstName');
    people.string('lastName');
    people.integer('age');
    people.boolean('isMale');
    people.string('meliCode');
    people.string('mobile');
  });

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists('people');
