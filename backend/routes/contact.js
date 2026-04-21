const express = require('express');
const router = express.Router();
const ContactModel = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email and message are required.' });
    }

    const entry = await ContactModel.create({ name, email, subject: subject || '', message });
    console.log(`📬 Contact from ${name} <${email}>`);

    res.status(201).json({
      success: true,
      message: 'Message sent! We will get back to you shortly. 📬',
      id: entry._id,
    });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// GET /api/contact — list all messages (admin use)
router.get('/', async (req, res) => {
  try {
    const messages = await ContactModel.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, messages });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
