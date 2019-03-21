const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
//const redis = require('redis');
const PORT = process.env.PORT || 3000;
const client = require('../DB/redis.js');

// Temp script to generate data for testing
const seedData = require('../DB/dummyData.json');

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));
// For when/if we send data to client we can practice sending it in a body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// So we don't have to specify a bunch of headers
app.use(cors());

let numOfStudents;

//GET ALL STUDENTS
app.get('/students', function (req, res) {

  //TODO: need to install ioredis to get all hashes

});

//GET RANDOM STUDENT
app.get('/students/random', function (req, res) {
  //TODO: when class can be submitted at once, change 3 to numOfStudents
  let numOfStudentsNotCalledYet = 3;
  let randomNum = Math.floor(Math.random() * numOfStudentsNotCalledYet);

  client.lindex('notCalledYet', randomNum, function(err, result) {
    if (err) { console.log('Could not get student name ', err); }
    else {
      client.hgetall(result, function(err, object) {
        if (err) { console.log('Could not get random student: ', err); }
        else { res.status(200).send(object); }
      });
    }
  });


  numOfStudentsNotCalledYet--;
  //TODO: When list is empty, add all students names

});


//GET LEAST PICKED STUDENT
app.get('/students/leastpicked', function (req, res) {

});


//ADD ENTIRE CLASS

app.post('/students/submit', function(req, res) {
  let students = req.body;
  console.log(req.body)
  for (let i = 0; i < students.length; i++) {
    client.hmset(students[i].fullname, {
      'id': i,
      'fullname': students[i].fullname,
      'photo': students[i].photo
    }, function(err, reply) {
         if (err) { console.log('Could not add class: ', err); }
         else { res.status(200).send('Class added successfully!'); }
       });

    client.rpush(['notCalledYet', students[i].fullname], function(err, reply) {
      if (err) { console.log('Could not push student names', err) }
      else {
        numOfStudents = reply;
        res.status(200).send('Names added:', reply);
      }
    });
  }
 //BGSAVE

});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
})