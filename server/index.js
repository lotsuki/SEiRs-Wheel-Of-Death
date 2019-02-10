const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));
// For when/if we send data to client we can practice sending it in a body
app.use(bodyParser({extended: true})); 
// So we don't have to specify a bunch of headers
app.use(cors());

app.get('/students', function (req, res) {
  //DB query, get all students
  let data = ["Jim", "Bob", "Bobbo", "Dean", "Gene", "Ween"] //placeholder date for testing, actual data won't be just names
  res.send(data)
})

app.get('/students/leastpicked', function (req, res) {
  //DB query, find one and update
  
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
})