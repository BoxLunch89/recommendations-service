const express = require('express');
const router = express.Router;

const app = express();

app.get('/recommendations/:id', (req, res) => {

})

app.listen(3005, () => {
  console.log('Listening on port 3005...');
});

