const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const redis = require('redis');
const PORT = process.env.PORT || 3000;
import client from '../DB/redis.js';


// Temp script to generate data for testing
const seedData = require('../DB/dummyData.json');

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));
// For when/if we send data to client we can practice sending it in a body
app.use(bodyParser({extended: true}));
// So we don't have to specify a bunch of headers
app.use(cors());


app.get('/students', function (req, res) {
  //DB query, get all students

  client.hgetall('students');

  const studentData = seedData;
  res.send(studentData)
});

app.get('/students/leastpicked', function (req, res) {
  //DB query, find one and update

});


//ADD ENTIRE CLASS
app.post('/class/submit', function(req, res) {

//If called, can add lastCalled and notes prop
  const studentNames = req.body;
  const firstname = studentNames[i].firstname;
  const lastName = studentNames[i].lastname;
  for (var i = 0; i < studentNames; i++) {
    client.hmset(`students`, {
      'id': `${i}`,
      'firstname': firstname,
      'lastname': lastName,
      'profilePic': 'somePic',
      'beenCalled': 'false'
    });

    client.rpush(['notCalledNames', `${firstname} ${lastname}`])
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
})