const express = require('express');
const router = express.Router();
const vonage = require('../vonage');
const { Channels } = require('@vonage/verify2');
require('dotenv').config();

// Route: /api/createCall/sendNewRequest
router.post('/sendNewRequest', (req, res) => {
  const { toNumber } = req.body;
  try {
    vonage.verify2
      .newRequest({
        brand: process.env.BRAND_NAME,
        workflow: [
          {
            channel: Channels.VOICE,
            to: toNumber,
          },
        ],
      })
      .then((result) => res.send(result))
      .catch((err) => res.status(404).send(err));
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});

module.exports = router;
