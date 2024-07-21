const express = require("express");
const {emailController, testGetemail} = require("../controllers/emailController");

const router = express.Router();

router.post("/send-email", emailController);

router.get('/send-email', testGetemail)

module.exports = router;
