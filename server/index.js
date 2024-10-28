import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Social media followers endpoint
app.get('/api/social-stats', async (req, res) => {
  try {
    // GitHub followers
    const githubResponse = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` }
    });

    // LinkedIn and Facebook stats would require their respective APIs
    // This is a simplified example
    
    const stats = {
      github: githubResponse.data.followers,
      linkedin: 0, // Implement LinkedIn API
      facebook: 0  // Implement Facebook API
    };

    res.json(stats);
  } catch (error) {
    console.error('Social stats error:', error);
    res.status(500).json({ error: 'Failed to fetch social stats' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});