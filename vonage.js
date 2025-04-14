const { Vonage } = require('@vonage/server-sdk');
const { Channels } = require('@vonage/verify2');
const fs = require('fs');
require('dotenv').config();

const privateKey = fs.readFileSync('private.key', 'utf8');
const toNumber = '919709270470';

const vonage = new Vonage({
  applicationId: process.env.APPLICATION_ID,
  privateKey: privateKey,
});

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
  .then(({ requestId }) => console.log(requestId))
  .catch((err) => {
    console.error(err);
  });
