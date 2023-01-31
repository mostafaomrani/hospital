/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("people").del();
  await knex("people").insert([
    {
      personId: 1,
      firstName: "مهدی",
      lastName: "یارمحمدی",
      age: 34,
      isMale: true,
      meliCode: "3932780401",
      mobile: "09121870617",
    },
    {
      personId: 2,
      firstName: "علی",
      lastName: "رضایی",
      age: 47,
      isMale: true,
      meliCode: "2345678901",
      mobile: "09123456789",
    },
    {
      personId: 3,
      firstName: "مینا",
      lastName: "مولایی",
      age: 29,
      isMale: false,
      meliCode: "0987654321",
      mobile: "09120987654",
    },
  ]);
};
