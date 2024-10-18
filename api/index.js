const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const emailRoutes = require("../routes/emailRoute");
const webhookRoutes = require("../routes/webhookRoute");
const priceRouter = require("../routes/priceRoute");

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS with more options
app.use(
  cors({
    origin: [
      "https://ohmenergy.ge",
      "https://oli.wic.temporary.site",
      "http://localhost:3000",
    ], // Allowed origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Enable credentials if needed
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", emailRoutes);
app.use("/", webhookRoutes);
app.use("/", priceRouter);

app.get("/", (req, res) => {
  console.log("sdsa");
  res.status(200).json({ fromindex: "sadas" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
