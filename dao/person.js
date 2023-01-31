const { knex } = require("knex");
const path = require("path");
const Person = require("../models/person");

const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.join(__dirname, "Person.db"),
  },
});

class PersonDao {
  async getAll() {
    return db("people").select();
  }

  async lottery() {
    const data = await Person.query();
    const lottery = [];
    const lotteryNum = 2;
    for (var i = 0; i < lotteryNum; i++) {
      var index = Math.floor(Math.random() * data.length);
      if (lottery.indexOf(data[index]) == -1) {
        lottery.push(data[index]);
      } else i--;
    }
    return lottery;
  }

  async find(id) {
    const results = await db("people").select().where("personId", id);
    return results[0];
  }

  async create(personInfo) {
    return db("people").insert(personInfo);
  }

  async update(id, patch) {
    return db("people").update(patch).where("personId", id);
  }

  async delete(id) {
    return db("people").delete().where("personId", id);
  }
}
module.exports = PersonDao;
