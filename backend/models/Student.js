const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    // Personal Info
    firstName:  { type: String, required: true, trim: true },
    lastName:   { type: String, required: true, trim: true },
    email:      { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone:      { type: String, required: true, trim: true },
    dob:        { type: String, required: true },
    gender:     { type: String, required: true },
    state:      { type: String, required: true },

    // Academic Details
    college:    { type: String, required: true },
    university: { type: String, required: true },
    course:     { type: String, required: true },
    semester:   { type: String, required: true },
    cgpa:       { type: Number, required: true },
    branch:     { type: String, default: '' },
    rollNo:     { type: String, default: '' },
    admYear:    { type: Number, default: null },

    // Financial & Category
    category:   { type: String, required: true },
    income:     { type: Number, required: true },
    aadhar:     { type: String, default: '' },
    bank:       { type: String, default: '' },
    disability: { type: String, default: 'No' },

    // Auth
    password:   { type: String, required: true }, // hashed via bcrypt in production
  },
  { timestamps: true }
);

module.exports = mongoose.model('Student', studentSchema);
