require("dotenv").config();

const nodemailer = require("nodemailer");

const emailController = async (req, res) => {
  const { name, companyName, email, countryCode, phoneNumber, comments } =
    req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: EMAIL_PASSEMAIL_PASS, // Ensure this is correct
    },
  });

  const mailOptions = {
    from: email,
    to: "sandropapiashvili@gmail.com",
    subject: "New Email from Website",
    text: `Name: ${name}\nCompany Name: ${companyName}\nEmail: ${email}\nPhone Number: ${countryCode} ${phoneNumber}\nComments: ${comments}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email", error: error.toString() });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
  
};

const testGetemail = async (req, res) => {
  res.status(200).json({ gela: "data" });
};

module.exports = { emailController, testGetemail };