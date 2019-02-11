// This file is just for simulating data until the DB is set up
const faker = require('faker');

const number = function() {
  return Math.floor(Math.random() * 10);
};

const seedData = function() {
  let data = [];
  let num = 1

  for (let i = 0; i < 50; i++) {
    data.push({
      id: num,
      name: [faker.fake('{{name.firstName}}'), faker.fake('{{name.lastName}}')],
      profilePic: faker.fake('{{image.avatar}}'),
      lastCalled: faker.fake('{{date.past}}'),
      timesCalled: number()
    });
    num++
  }
  return data;
};

module.exports = {
  seedData
}