const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "helpcenter.wejha.tn@gmail.com",
        pass: "ueyf hsxa kyyz ftjb",
      },
    });

    const mailOptions = {
      from: "Wejha <helpcenter.wejha.tn@gmail.com>",
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    alert("✅ Email sent successfully!");
  } catch (error) {
    alert("❌ Error sending email:", error);
  }
};

module.exports = sendEmail;
