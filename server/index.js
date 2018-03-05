const express = require('express');
const path = require('path');
const { router } = require('./routes');

const app = express();

app.use('/listings/:listing_id', express.static(path.join(__dirname, '/../client/public')));
app.use('/listings', router);

app.listen(3005, () => {
  console.log('Listening on port 3005...');
});
