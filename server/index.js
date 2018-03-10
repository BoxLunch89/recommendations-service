const express = require('express');
const path = require('path');
const { router } = require('./routes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());


app.use('/:listing_id', express.static(path.join(__dirname, '/../client/public')));
app.use('/recommendations/bundle.js', express.static(path.join(__dirname, '/../client/public/bundle.js')));
// app.use('/listings/:listing_id', express.static(path.join(__dirname, '/../client/public')));
app.use('/recommendations', router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
