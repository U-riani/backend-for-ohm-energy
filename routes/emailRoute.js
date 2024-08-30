const express = require("express");
const {
  postWebhookController,
  getWebhookController,
  testGetWebhook,
} = require("../controllers/webhookController");

const router = express.Router();

router.post("/webhook", postWebhookController);

router.get("/webhook", getWebhookController);
router.get("/test-webhook", testGetWebhook);

module.exports = router;