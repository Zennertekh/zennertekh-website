import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        })
    }

    const {
        name, 
        email, 
        message
    } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            message: "Missing required fields"
        })
    }

    const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Zennertekh Website" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: ` 
      Name: ${name} 
      Email: ${email}
      Message: ${message}
      `,
    });

    return res.status(200).json({ 
        message: "Email sent successfully" 
    });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ 
        message: "Error sending email" 
    });
  }
}