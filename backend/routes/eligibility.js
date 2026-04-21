const express = require('express');
const router = express.Router();
const EligibilityCheck = require('../models/EligibilityCheck');

const scholarships = [
  {
    name: 'National Scholarship Portal (NSP)',
    amount: 'Up to ₹50,000/yr',
    match: (d) => d.income > 0 && d.income <= 250000,
  },
  {
    name: 'Post Matric Scholarship (OBC)',
    amount: 'Up to ₹15,000/yr',
    match: (d) => d.category === 'OBC',
  },
  {
    name: 'Dr. Ambedkar Post Matric Scholarship',
    amount: 'Up to ₹20,000/yr',
    match: (d) => d.category === 'SC' || d.category === 'ST',
  },
  {
    name: 'PM-YASASVI EWS Scholarship',
    amount: 'Up to ₹75,000/yr',
    match: (d) => d.category === 'EWS' && d.income <= 800000,
  },
  {
    name: 'Central Sector Scholarship (Top Class)',
    amount: 'Up to ₹1,20,000/yr',
    match: (d) => d.cgpa >= 80,
  },
  {
    name: 'Pragati Scholarship (AICTE)',
    amount: '₹50,000/yr + fees',
    match: (d) =>
      d.course.includes('B.E') ||
      d.course.includes('B.Tech') ||
      d.course.includes('Diploma'),
  },
  {
    name: 'Saksham Scholarship (AICTE)',
    amount: '₹50,000/yr + fees',
    match: (d) =>
      d.category === 'OBC' &&
      (d.course.includes('B.E') || d.course.includes('B.Tech')),
  },
  {
    name: 'Merit-cum-Means Scholarship (Minority)',
    amount: 'Up to ₹30,000/yr',
    match: (d) => d.income > 0 && d.income <= 250000 && d.cgpa >= 50,
  },
];

// POST /api/check-eligibility
router.post('/', async (req, res) => {
  try {
    const { name, cgpa, income, category, course } = req.body;

    if (!cgpa && !income && !category && !course) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in at least some details to check eligibility.',
      });
    }

    const data = {
      cgpa: parseFloat(cgpa) || 0,
      income: parseFloat(income) || 0,
      category: category || '',
      course: course || '',
    };

    const matched = scholarships
      .filter((s) => s.match(data))
      .map(({ name, amount }) => ({ name, amount }));

    // Save check to MongoDB
    await EligibilityCheck.create({
      studentName: name || 'Anonymous',
      cgpa: data.cgpa,
      income: data.income,
      category: data.category,
      course: data.course,
      matchCount: matched.length,
      matchedScholarships: matched,
    });

    res.json({
      success: true,
      studentName: name || 'Student',
      matched,
      count: matched.length,
    });
  } catch (err) {
    console.error('Eligibility check error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
