import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const STEPS = ['Personal Info', 'Academic Details', 'Financial Info'];

function FieldError({ msg }) {
  return msg ? <span className="field-error">{msg}</span> : null;
}

export default function Register() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});
  const [terms, setTerms] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', dob: '', gender: '', state: '',
    college: '', university: '', course: '', semester: '', cgpa: '', rollNo: '', admYear: '', branch: '',
    category: '', income: '', aadhar: '', bank: '', disability: '', password: '', password2: '',
  });

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const validate = (s) => {
    const errs = {};
    if (s === 1) {
      if (!form.firstName) errs.firstName = 'First Name is required.';
      if (!form.lastName) errs.lastName = 'Last Name is required.';
      if (!form.email) errs.email = 'Email Address is required.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.';
      if (!form.phone) errs.phone = 'Mobile Number is required.';
      if (!form.dob) errs.dob = 'Date of Birth is required.';
      if (!form.gender) errs.gender = 'Gender is required.';
      if (!form.state) errs.state = 'State is required.';
    }
    if (s === 2) {
      if (!form.college) errs.college = 'Institution Name is required.';
      if (!form.university) errs.university = 'University is required.';
      if (!form.course) errs.course = 'Course is required.';
      if (!form.semester) errs.semester = 'Semester is required.';
      if (!form.cgpa) errs.cgpa = 'CGPA / Percentage is required.';
    }
    if (s === 3) {
      if (!form.category) errs.category = 'Category is required.';
      if (!form.income) errs.income = 'Annual Family Income is required.';
      if (!form.password) errs.password = 'Password is required.';
      else if (form.password.length < 8) errs.password = 'Password must be at least 8 characters.';
      if (!form.password2) errs.password2 = 'Confirm Password is required.';
      else if (form.password !== form.password2) errs.password2 = 'Passwords do not match.';
    }
    return errs;
  };

  const goNext = () => {
    const errs = validate(step);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setErrors({});
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submit = async () => {
    const errs = validate(3);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    if (!terms) { alert('Please accept the Terms & Conditions to continue.'); return; }
    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) setDone(true);
      else alert(data.message || 'Registration failed.');
    } catch {
      alert('Server error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inp = (id, field, type = 'text', placeholder = '', extra = {}) => (
    <div className="reg-field" key={field}>
      <label>
        {id} {extra.req && <span className="req">*</span>}
      </label>
      <input type={type} value={form[field]} onChange={set(field)} placeholder={placeholder} {...extra.attrs} className={errors[field] ? 'error' : ''} />
      <FieldError msg={errors[field]} />
    </div>
  );

  const sel = (id, field, options, req = false) => (
    <div className="reg-field" key={field}>
      <label>{id} {req && <span className="req">*</span>}</label>
      <select value={form[field]} onChange={set(field)} className={errors[field] ? 'error' : ''}>
        <option value="">Select {id.toLowerCase()}</option>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
      <FieldError msg={errors[field]} />
    </div>
  );

  return (
    <section id="register">
      <span className="section-tag">Create Your Account</span>
      <h2 className="section-title">Register on<br />Scholars Scope</h2>
      <p className="section-sub">Fill in your academic and personal details to get matched with the right scholarships instantly.</p>

      <div className="reg-wrapper">
        {/* Progress Steps */}
        <div className="reg-steps">
          {STEPS.map((label, i) => {
            const n = i + 1;
            const cls = done ? 'done' : n < step ? 'done' : n === step ? 'active' : '';
            return (
              <React.Fragment key={n}>
                <div className={`reg-step ${cls}`} data-step={n}>
                  <div className="reg-step-circle">{done || n < step ? '✓' : n}</div>
                  <span>{label}</span>
                </div>
                {n < 3 && <div className={`reg-step-line ${done || n < step ? 'done' : ''}`}></div>}
              </React.Fragment>
            );
          })}
        </div>

        <div className="reg-card">
          {/* SUCCESS */}
          {done && (
            <div className="reg-page active" id="reg-page-success">
              <div className="reg-success">
                <div className="success-icon">🎉</div>
                <h3>Registration Successful!</h3>
                <p>Welcome to Scholars Scope. Your account has been created. Start exploring scholarships that match your profile.</p>
                <Link to="/checker" className="btn-primary" style={{ display: 'inline-block', marginTop: '24px' }}>Check My Eligibility →</Link>
              </div>
            </div>
          )}

          {/* STEP 1 */}
          {!done && (
            <div className={`reg-page ${step === 1 ? 'active' : ''}`}>
              <h3 className="reg-page-title">Personal Information</h3>
              <div className="reg-grid">
                {inp('First Name', 'firstName', 'text', 'e.g. Mitul', { req: true })}
                {inp('Last Name', 'lastName', 'text', 'e.g. Jodhani', { req: true })}
                {inp('Email Address', 'email', 'email', 'you@example.com', { req: true })}
                {inp('Mobile Number', 'phone', 'tel', '+91 98765 43210', { req: true })}
                {inp('Date of Birth', 'dob', 'date', '', { req: true })}
                {sel('Gender', 'gender', ['Male', 'Female', 'Other', 'Prefer not to say'], true)}
                <div className="reg-field full-width">
                  <label>State of Domicile <span className="req">*</span></label>
                  <select value={form.state} onChange={set('state')} className={errors.state ? 'error' : ''}>
                    <option value="">Select state</option>
                    {['Gujarat','Maharashtra','Rajasthan','Madhya Pradesh','Uttar Pradesh','Bihar','West Bengal','Tamil Nadu','Karnataka','Other'].map(s => <option key={s}>{s}</option>)}
                  </select>
                  <FieldError msg={errors.state} />
                </div>
              </div>
              <div className="reg-nav">
                <span></span>
                <button className="reg-btn-next" onClick={goNext}>Next: Academic Details →</button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {!done && (
            <div className={`reg-page ${step === 2 ? 'active' : ''}`}>
              <h3 className="reg-page-title">Academic Details</h3>
              <div className="reg-grid">
                {inp('Institution Name', 'college', 'text', 'e.g. SSASIT, Surat', { req: true })}
                {inp('University / Board', 'university', 'text', 'e.g. Gujarat Technological University', { req: true })}
                <div className="reg-field">
                  <label>Course / Degree <span className="req">*</span></label>
                  <select value={form.course} onChange={set('course')} className={errors.course ? 'error' : ''}>
                    <option value="">Select course</option>
                    {['B.E. / B.Tech','B.Sc','B.Com','B.A','Diploma','M.Tech / M.E','MBA','Other'].map(c => <option key={c}>{c}</option>)}
                  </select>
                  <FieldError msg={errors.course} />
                </div>
                {inp('Branch / Stream', 'branch', 'text', 'e.g. Information Technology')}
                <div className="reg-field">
                  <label>Current Semester / Year <span className="req">*</span></label>
                  <select value={form.semester} onChange={set('semester')} className={errors.semester ? 'error' : ''}>
                    <option value="">Select semester</option>
                    {['1st Sem','2nd Sem','3rd Sem','4th Sem','5th Sem','6th Sem','7th Sem','8th Sem'].map(s => <option key={s}>{s}</option>)}
                  </select>
                  <FieldError msg={errors.semester} />
                </div>
                {inp('CGPA / Percentage', 'cgpa', 'number', 'e.g. 8.5 or 85%', { req: true, attrs: { min: 0, max: 100 } })}
                {inp('Enrollment / Roll No.', 'rollNo', 'text', 'e.g. 230760116085')}
                {inp('Admission Year', 'admYear', 'number', 'e.g. 2023', { attrs: { min: 2000, max: 2030 } })}
              </div>
              <div className="reg-nav">
                <button className="reg-btn-back" onClick={goBack}>← Back</button>
                <button className="reg-btn-next" onClick={goNext}>Next: Financial Info →</button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {!done && (
            <div className={`reg-page ${step === 3 ? 'active' : ''}`}>
              <h3 className="reg-page-title">Financial &amp; Category Information</h3>
              <div className="reg-grid">
                <div className="reg-field">
                  <label>Category <span className="req">*</span></label>
                  <select value={form.category} onChange={set('category')} className={errors.category ? 'error' : ''}>
                    <option value="">Select category</option>
                    {['General','OBC','SC','ST','EWS'].map(c => <option key={c}>{c}</option>)}
                  </select>
                  <FieldError msg={errors.category} />
                </div>
                {inp('Annual Family Income (₹)', 'income', 'number', 'e.g. 250000', { req: true })}
                {inp('Aadhar Number', 'aadhar', 'text', 'XXXX XXXX XXXX', { attrs: { maxLength: 14 } })}
                {inp('Bank Account Number', 'bank', 'text', 'For scholarship disbursement')}
                <div className="reg-field full-width">
                  <label>Do you have any disability?</label>
                  <select value={form.disability} onChange={set('disability')}>
                    <option value="">Select</option>
                    {['No','Yes — Visual Impairment','Yes — Hearing Impairment','Yes — Physical Disability','Yes — Other'].map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
                {inp('Password', 'password', 'password', 'Min. 8 characters', { req: true })}
                {inp('Confirm Password', 'password2', 'password', 'Re-enter password', { req: true })}
              </div>
              <div className="reg-checkbox-row">
                <input type="checkbox" id="reg-terms" checked={terms} onChange={e => setTerms(e.target.checked)} />
                <label htmlFor="reg-terms">
                  I agree to the <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a>
                </label>
              </div>
              <div className="reg-nav">
                <button className="reg-btn-back" onClick={goBack}>← Back</button>
                <button className="reg-btn-submit" onClick={submit} disabled={submitting}>
                  {submitting ? 'Creating...' : '✅ Create My Account'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
