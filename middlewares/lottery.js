const Person = require("../models/person");
module.exports=  async function lottery() {
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
