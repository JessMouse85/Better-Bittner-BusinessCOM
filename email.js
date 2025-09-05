const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Configure Nodemailer (use your email service credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider (e.g., Gmail, Outlook)
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-app-password'     // Use an App Password for Gmail (not regular password)
  }
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Email content
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'consultation-email@yourdomain.com', // The email to receive consultations
    subject: `New Consultation Request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error: Could not send email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Thank you! Your consultation request has been sent.');
    }
  });
});

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Path to your HTML file
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});