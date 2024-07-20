const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
  const { name, companyName, email, countryCode, phoneNumber, comments } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sandropapiashvili@gmail.com',
      pass: 'gjpr lqtk yxdk pmsu' // Ensure this is correct
    }
  });

  const mailOptions = {
    from: email,
    to: 'sandropapiashvili@gmail.com',
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nCompany Name: ${companyName}\nEmail: ${email}\nPhone Number: ${countryCode} ${phoneNumber}\nComments: ${comments}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email'); // Correct way to send status code and message
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully'); // Correct way to send status code and message
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
