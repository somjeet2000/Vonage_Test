const express = require('express');
const router = express.Router();
const vonage = require('../vonage');
require('dotenv').config();

// Route: /api/checkCode/checkVerificationCode
router.post('/checkVerificationCode', (req, res) => {
  const { requestID, code } = req.body;
  try {
    vonage.verify2
      .checkCode(requestID, code)
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});

module.exports = router;
