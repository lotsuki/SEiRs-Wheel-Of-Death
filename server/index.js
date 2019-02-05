const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, '/client/index.html')));
app.use(bodyParser({extended: true}));
app.use(cors());

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
})