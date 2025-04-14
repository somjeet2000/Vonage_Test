const express = require('express');
require('dotenv').config();
const app = express();
const token = require('./vonage');
const port = process.env.PORT || 5000;
const router = express.Router();

app.use(express.json());

app.listen(port, () => {
  console.log(`Example application is running on port ${port}`);
});

console.log(token);
