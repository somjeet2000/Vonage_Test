const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const sendNewRequest = require('./routes/send-new-request')

app.use(express.json());

// Available routes
app.use('/api/createCall', sendNewRequest);
app.use('/api/checkCode', require('./routes/check-verification-code'))

app.listen(port, () => {
  console.log(`Example application is running on port ${port}`);
});