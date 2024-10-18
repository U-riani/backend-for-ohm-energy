require("dotenv").config();

const nodemailer = require("nodemailer");

const emailController = async (req, res) => {
  const {
    name,
    companyName,
    email,
    countryCode,
    phoneNumber,
    comments,
    personCompany,
    panelsPlace,
    expense,
    stationPower,
    stationArea,
  } = req.body;

  // Set up the transporter using Outlook SMTP settings
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587, // Port 587 is commonly used for TLS
    secure: false, // Set to false for TLS
    auth: {
      user: 'sanpro.papiashvili1997@outlook.com', // Use environment variables to secure your credentials
      pass: 'tdkgaqfaigctxgxa', // Password or app-specific password
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });

  const mailOptions = {
    from: email,
    to: "sanpro.papiashvili1997@outlook.com", // Replace with your recipient email
    subject: "New Email from Website",
    text: `Name: ${name}\nCompany Name: ${companyName}\nEmail: ${email}\nPhone Number: ${countryCode} ${phoneNumber}\nComments: ${comments}\nStation Info\n ---------\nFor: - ${personCompany}\nPanels Place: - ${panelsPlace}\nExpense Per Month: - ${expense}\nStation Power: - ${stationPower}\nStation Require Area: - ${stationArea} m²`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ message: "Error sending email", error: error.toString() });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send(`Email sent successfully`);
    }
  });
};

const testGetemail = async (req, res) => {
  res.status(200).json({ gela: "data" });
};

module.exports = { emailController, testGetemail };
