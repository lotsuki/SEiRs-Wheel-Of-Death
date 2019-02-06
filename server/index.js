const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, '/client/index.html')));
// For when/if we send data to client we can practice sending it in a body
app.use(bodyParser({extended: true})); 
// So we don't have to specify a bunch of headers
app.use(cors());

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
})