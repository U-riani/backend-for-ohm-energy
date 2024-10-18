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

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587, // TLS port
    secure: false, // Use TLS
    auth: {
      user: "sanpro.papiashvili1997@outlook.com",
      pass: tdkgaqfaigctxgxa, // Use app password if 2FA is enabled
    },
    tls: {
      rejectUnauthorized: false, // Avoid self-signed certificate issues
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "sanpro.papiashvili1997@outlook.com",
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
    replyTo: email,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email", error: error.toString() });
  }
};

module.exports = { emailController };
