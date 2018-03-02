const express = require('express');
const { router } = require('./routes');
const mongoose = require('mongoose');
const path = require('path');
// const bodyParser = require('body-parser');
// const cors = require('cors');

const app = express();

// mongoose.connect('mongodb://localhost/recommendations');
// app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/public')));
app.use('/listings', router);

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});

