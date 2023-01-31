/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ideas").del();
  await knex("ideas").insert([
    {
      office:'تست مرکز',
      title:'تست عنوان',
      keyWords:'تست کلمات کلیدی',
      challenge:'تست چالشها',
      description:'تست توضیحات',
      timeAndPlace:'تست زمان و مکان',
      result:'تست نتایج',
      recommendation:'تست توصیه ها'
    },
  ]);
};
