/* ═══════════════════════════════════════════════
   SCHOLARS SCOPE — server.js
   Node.js + Express + MongoDB (Mongoose)
   ═══════════════════════════════════════════════ */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/scholarsscope';

/* ── MIDDLEWARE ── */
app.use(cors({
  origin: "*"
}));
app.use(express.json());

/* ── MONGODB CONNECTION ── */
mongoose
  .connect(MONGO_URI)
  .then(() => console.log(`✅ MongoDB connected: ${MONGO_URI}`))
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    console.warn('⚠️  Server running without DB — data will not persist.');
  });

/* ── ROUTES ── */
app.use('/api/check-eligibility', require('./routes/eligibility'));
app.use('/api/register', require('./routes/students'));
app.use('/api/contact', require('./routes/contact'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Scholars Scope API is running',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.path} not found.` });
});

/* ── START ── */
app.listen(PORT, () => {
  console.log(`🚀 Scholars Scope API running on http://localhost:${PORT}`);
});
