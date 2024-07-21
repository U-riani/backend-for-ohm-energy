// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// const port = 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// app.post("/send-email", (req, res) => {
//   const { name, companyName, email, countryCode, phoneNumber, comments } =
//     req.body;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "sandropapiashvili@gmail.com",
//       pass: "gjpr lqtk yxdk pmsu", // Ensure this is correct
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: "sandropapiashvili@gmail.com",
//     subject: "Contact Form Submission",
//     text: `Name: ${name}\nCompany Name: ${companyName}\nEmail: ${email}\nPhone Number: ${countryCode} ${phoneNumber}\nComments: ${comments}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error sending email:", error);
//       res.status(500).send("Error sending email"); // Correct way to send status code and message
//     } else {
//       console.log("Email sent:", info.response);
//       res.status(200).send("Email sent successfully"); // Correct way to send status code and message
//     }
//   });
// });

// // Verify webhook
// app.get("/webhook", (req, res) => {
//   const VERIFY_TOKEN = "YOUR_VERIFY_TOKEN";

//   const mode = req.query["hub.mode"];
//   const token = req.query["hub.verify_token"];
//   const challenge = req.query["hub.challenge"];

//   if (mode && token) {
//     if (mode === "subscribe" && token === VERIFY_TOKEN) {
//       console.log("WEBHOOK_VERIFIED");
//       res.status(200).send(challenge);
//     } else {
//       res.sendStatus(403);
//     }
//   }
// });

// // Handle webhook events
// app.post('/webhook', (req, res) => {
//   const body = req.body;

//   if (body.object === 'page') {
//     body.entry.forEach(function(entry) {
//       const webhookEvent = entry.messaging[0];
//       console.log(webhookEvent);

//       // Handle the event
//     });

//     res.status(200).send('EVENT_RECEIVED');
//   } else {
//     res.sendStatus(404);
//   }
// });

// app.get("/", (req, res) => {
//   console.log("sdsa");
//   res.status(200).json({ ssad: "sadas" });
// });

// app.get("/send-email", (req, res) => {
//   res.status(200).json({ gela: "data" });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// // mycustomverificationtoken

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const emailRoutes = require("../routes/emailRoute");
const webhookRoutes = require("../routes/webhookRoute");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", emailRoutes);
app.use("/", webhookRoutes);

app.get("/", (req, res) => {
  console.log("sdsa");
  res.status(200).json({ fromindex: "sadas" });
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
