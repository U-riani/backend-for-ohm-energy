require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const emailRoutes = require("../routes/emailRoute");
const webhookRoutes = require("../routes/webhookRoute");

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with URL-encoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

// Use email routes and webhook routes
app.use("/", emailRoutes);
app.use("/", webhookRoutes);

// Root endpoint for basic testing
app.get("/", (req, res) => {
  console.log("Root endpoint hit");
  res.status(200).json({ fromindex: "sadas" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
