const mongoose = require('mongoose');

const eligibilityCheckSchema = new mongoose.Schema(
  {
    studentName: { type: String, default: 'Anonymous' },
    cgpa:        { type: Number, default: 0 },
    income:      { type: Number, default: 0 },
    category:    { type: String, default: '' },
    course:      { type: String, default: '' },
    matchCount:  { type: Number, default: 0 },
    matchedScholarships: [{ name: String, amount: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('EligibilityCheck', eligibilityCheckSchema);
