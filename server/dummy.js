// This file is just for simulating data until the DB is set up
// Create dev JSON DB by running seed script
// Data generated here will also be useful for testing purposes
const faker = require('faker');
const fs = require('fs');
const path = require('path');

const seedPath = path.join(__dirname, '../DB/dummyData.json');

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
      timesCalled: number(),
      notes: [undefined]
    });
    num++
  }
  return data;
};


const seed = () => {
  const seeded = seedData();
  fs.writeFileSync(seedPath, JSON.stringify(seeded));
}

seed();
