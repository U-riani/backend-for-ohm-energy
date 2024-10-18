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
    host: "smtp.office365.com", // Outlook SMTP server
    port: 587, // Port 587 for TLS
    secure: false, // Use TLS (not SSL)
    auth: {
      user: 'sanpro.papiashvili1997@outlook.com', // Your email
      pass: 'tdkgaqfaigctxgxa', // Your password or app password
    },
    tls: {
      rejectUnauthorized: false, // Avoid certificate issues
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // User's name and email
    to: "sanpro.papiashvili1997@outlook.com", // Recipient email
    subject: "New Email from Website",
    text: `
      Name: ${name}
      Company Name: ${companyName}
      User Email: ${email}
      Phone Number: ${countryCode} ${phoneNumber}
      Comments: ${comments}

      Station Info:
      -------------
      For: ${personCompany}
      Panels Place: ${panelsPlace}
      Expense Per Month: ${expense}
      Station Power: ${stationPower}
      Station Required Area: ${stationArea} m²
    `,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email", error: error.toString() });
  }
};

const testGetemail = async (req, res) => {
  res.status(200).json({ gela: "data" });
};

module.exports = { emailController, testGetemail };
