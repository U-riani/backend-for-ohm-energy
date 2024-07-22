const nodemailer = require("nodemailer");

const emailController = async (req, res) => {
  const { name, companyName, email, countryCode, phoneNumber, comments } =
    req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.COMPANY_EMAIL,
      pass: EMAIL_PASS, // Ensure this is correct
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.COMPANY_EMAIL,
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
};

const testGetemail = async (req, res) => {
  res.status(200).json({ gela: "data" });
};

module.exports = { emailController, testGetemail };
