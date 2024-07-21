// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;

// // Define CORS options
// const corsOptions = {
//   origin: ['http://localhost:3000', 'http://ohmenergy.netlify.app',], // Update this to match your frontend's URL
//   optionsSuccessStatus: 200
// };

// // Use CORS with the defined options
// app.use(cors(corsOptions));
// app.use(bodyParser.json());

// app.post('/send-email', (req, res) => {
//   const { name, companyName, email, countryCode, phoneNumber, comments } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS
//     }
//   });

//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL_USER,
//     subject: 'Contact Form Submission',
//     text: `Name: ${name}\nCompany Name: ${companyName}\nEmail: ${email}\nPhone Number: ${countryCode} ${phoneNumber}\nComments: ${comments}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent:', info.response);
//       res.status(200).send('Email sent successfully');
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", (req, res) => {
  const { name, companyName, email, countryCode, phoneNumber, comments } =
    req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sandropapiashvili@gmail.com",
      pass: "gjpr lqtk yxdk pmsu", // Ensure this is correct
    },
  });

  const mailOptions = {
    from: email,
    to: "sandropapiashvili@gmail.com",
    subject: "Contact Form Submission",
    text: `Name: ${name}\nCompany Name: ${companyName}\nEmail: ${email}\nPhone Number: ${countryCode} ${phoneNumber}\nComments: ${comments}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email"); // Correct way to send status code and message
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully"); // Correct way to send status code and message
    }
  });
});


app.get('/', (req, res) => {
  console.log('sdsa')
  res.status(200).json({ssad: 'sadas'})
})

app.get("/send-email", (req, res) => {
  res.status(200).json({gela: 'data'})
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
