/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTableIfNotExists("ideas", (ideas) => {
  
    ideas.increments("ideaId");
    ideas.string("office");
    ideas.string("title");
    ideas.string("keyWords");
    ideas.string("challenge");
    ideas.string("description");
    ideas.string("timeAndPlace");
    ideas.string("result");
    ideas.string("recommendation");
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  knex.schema.dropTableIfExists("ideas");
};
