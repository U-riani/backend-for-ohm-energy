const nodemailer = require("nodemailer");

const priceController = async (req, res) => {
  const {
    email,
    phoneNumber,
    personCompany,
    panelsPlace,
    expense,
    stationPower,
    stationArea,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sandropapiashvili@gmail.com",
      pass: "gjpr lqtk yxdk pmsu",
    },
  });

  const mailOptions = {
    from: email,
    to: "sanpro.papiashvili1997@outlook.com",
    subject: "OHM energy calculate price",
    text: `Emal: ${email}\n Phone Number: ${phoneNumber}\n\n --info--\nFor: - ${personCompany}\nPanels Place: - ${panelsPlace}\nExpense Per Month: - ${expense}\nStation Power: - ${stationPower}\nRequire Area: - ${stationArea} `,
  };

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


module.exports = priceController