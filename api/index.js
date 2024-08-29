require('dotenv').config();

const emailRoutes = require("../routes/emailRoute");
const webhookRoutes = require("../routes/webhookRoute");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", emailRoutes);
app.use("/", webhookRoutes);

app.get("/", (req, res) => {
  console.log("sdsa");
  res.status(200).json({ fromindex: "sadas" });
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});