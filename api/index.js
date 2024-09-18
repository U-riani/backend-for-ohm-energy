const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const emailRoutes = require("../routes/emailRoute");
const webhookRoutes = require("../routes/webhookRoute");

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(
  cors({
    origin: ["https://ohmenergy.ge","https://oli.wic.temporary.site", 'http://localhost:3000'], // Replace with your frontend URL
  })
);

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
