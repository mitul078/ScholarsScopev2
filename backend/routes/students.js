const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// POST /api/register
router.post('/', async (req, res) => {
  try {
    const {
      firstName, lastName, email, phone, dob, gender, state,
      college, university, course, semester, cgpa, rollNo, admYear, branch,
      category, income, aadhar, bank, disability, password,
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !dob || !gender || !state) {
      return res.status(400).json({ success: false, message: 'Personal information is incomplete.' });
    }
    if (!college || !university || !course || !semester || !cgpa) {
      return res.status(400).json({ success: false, message: 'Academic details are incomplete.' });
    }
    if (!category || !income || !password) {
      return res.status(400).json({ success: false, message: 'Financial info or password is incomplete.' });
    }

    // Check if email already exists
    const existing = await Student.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ success: false, message: 'An account with this email already exists.' });
    }

    // NOTE: In production, hash the password with bcrypt before saving.
    // e.g. const hashed = await bcrypt.hash(password, 10);
    const student = await Student.create({
      firstName, lastName, email, phone, dob, gender, state,
      college, university, course, semester,
      cgpa: parseFloat(cgpa),
      branch: branch || '',
      rollNo: rollNo || '',
      admYear: admYear ? parseInt(admYear) : null,
      category,
      income: parseFloat(income),
      aadhar: aadhar || '',
      bank: bank || '',
      disability: disability || 'No',
      password, // store hashed in production
    });

    console.log(`✅ New student registered: ${student.firstName} ${student.lastName} (${student.email})`);

    res.status(201).json({
      success: true,
      message: `Welcome to Scholars Scope, ${firstName}! Your account has been created.`,
      studentId: student._id,
    });
  } catch (err) {
    console.error('Registration error:', err);
    if (err.code === 11000) {
      return res.status(409).json({ success: false, message: 'Email already registered.' });
    }
    res.status(500).json({ success: false, message: 'Server error during registration.' });
  }
});

// GET /api/register — list all students (admin use)
router.get('/', async (req, res) => {
  try {
    const students = await Student.find({}, '-password').sort({ createdAt: -1 });
    res.json({ success: true, count: students.length, students });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// GET /api/register/:id — fetch a single student by ID (for profile)
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id, '-password');
    if (!student) return res.status(404).json({ success: false, message: 'Student not found.' });
    res.json({ success: true, student });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});


module.exports = router;
