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

  // Create the Outlook SMTP transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587, // TLS port
    secure: false, // Use STARTTLS
    auth: {
      user: "sanpro.papiashvili1997@outlook.com", // Authenticated email
      pass: "tdkgaqfaigctxgxa", // App-specific password
    },
    tls: {
      ciphers: "SSLv3", // Encryption protocol
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // User's email as the sender
    to: "sanpro.papiashvili1997@outlook.com", // Your email
    subject: "New Inquiry from Website",
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
    replyTo: email, // Allows you to reply directly to the user's email
  };

  try {
    // Send the email using the transporter
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Error sending email", error: error.toString() });
  }
};

// A test endpoint to verify your backend setup
const testGetemail = async (req, res) => {
  res.status(200).json({ message: "Backend is working!" });
};

module.exports = { emailController, testGetemail };
