require('dotenv').config();

const getWebhookController = async (req, res) => {
  const VERIFY_TOKEN = process.env.FACEBOOK_VERIFY_TOKEN; // Ensure this matches what you set in Facebook Developer Console

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(400);
  }
};

// Handle webhook events
const postWebhookController = async (req, res) => {
  const body = req.body;

  if (body.object === "page") {
    body.entry.forEach(function (entry) {
      const webhookEvent = entry.messaging[0];
      console.log(webhookEvent);

      // Handle the event
    });

    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.sendStatus(404);
  }
};

const testGetWebhook = async (req, res) => {
  res.status(200).json({ test: "getWebhook" });
};

module.exports = {
  postWebhookController,
  getWebhookController,
  testGetWebhook,
};
