// This file is just for simulating data until the DB is set up
const faker = require('faker');

const number = function() {
  return Math.floor(Math.random() * 10);
};

const seedData = function() {
  var data = [];

  for (let i = 0; i < 50; i++) {
    data.push({
      name: [faker.fake('{{name.firstName}}'), faker.fake('{{name.lastName}}')],
      lastCalled: faker.fake('{{date.past}}'),
      timesCalled: number()
    });
  }
  return data;
};

module.exports = {
  seedData
}