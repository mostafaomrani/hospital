/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      userName: "admin",
      password: "abc@123",
      firstName: "mahdi",
      lastName: "yarmohamadi",
      mobile: "09121870617",
      email: "yarmohamadi677@gmail.com",
      AccessLevel: "admin",
      isActive: 1,
    },
    {
      userName: "administrator",
      password: "1qaz!QAZ",
      firstName: "Reza",
      lastName: "Ahmadi",
      mobile: "09123456789",
      email: "test@gmail.com",
      AccessLevel: "admin",
      isActive: 0,
    }
  ]);
};
