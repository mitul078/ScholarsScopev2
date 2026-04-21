import React, { useState } from 'react';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default function EligibilityChecker() {
  const [form, setForm] = useState({ name: '', cgpa: '', income: '', category: '', course: '', sem: '' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleKeyDown = (e) => { if (e.key === 'Enter') checkEligibility(); };

  const checkEligibility = async () => {
    if (!form.cgpa && !form.income && !form.category && !form.course) {
      setError('Please fill in at least some details to check eligibility.');
      return;
    }
    setError('');
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`${API_BASE}/api/check-eligibility`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) setResult(data);
      else setError(data.message);
    } catch {
      setError('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="checker">
      <span className="section-tag">Eligibility Checker</span>
      <h2 className="section-title">
        See Which Scholarships
        <br />You Qualify For
      </h2>
      <p className="section-sub">
        Enter your details below and we'll instantly match you with eligible scholarships.
      </p>
      <div className="checker-card">
        <div className="checker-grid">
          <div className="field">
            <label>Your Name</label>
            <input name="name" type="text" placeholder="e.g. Yagnik Khasiya" value={form.name} onChange={handleChange} onKeyDown={handleKeyDown} />
          </div>
          <div className="field">
            <label>CGPA / Percentage</label>
            <input name="cgpa" type="number" placeholder="e.g. 8.5 or 85" min="0" max="100" value={form.cgpa} onChange={handleChange} onKeyDown={handleKeyDown} />
          </div>
          <div className="field">
            <label>Annual Family Income (₹)</label>
            <input name="income" type="number" placeholder="e.g. 250000" value={form.income} onChange={handleChange} onKeyDown={handleKeyDown} />
          </div>
          <div className="field">
            <label>Category</label>
            <select name="category" value={form.category} onChange={handleChange} onKeyDown={handleKeyDown}>
              <option value="">Select category</option>
              <option>General</option>
              <option>OBC</option>
              <option>SC</option>
              <option>ST</option>
              <option>EWS</option>
            </select>
          </div>
          <div className="field">
            <label>Course</label>
            <select name="course" value={form.course} onChange={handleChange} onKeyDown={handleKeyDown}>
              <option value="">Select course</option>
              <option>B.E. / B.Tech</option>
              <option>B.Sc</option>
              <option>B.Com</option>
              <option>B.A</option>
              <option>Diploma</option>
              <option>M.Tech / M.E</option>
              <option>MBA</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field">
            <label>Current Semester</label>
            <select name="sem" value={form.sem} onChange={handleChange} onKeyDown={handleKeyDown}>
              <option value="">Select semester</option>
              {['1st','2nd','3rd','4th','5th','6th','7th','8th'].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {error && <p style={{ color: '#e05252', fontFamily: 'var(--font-body)', fontSize: '0.85rem', marginBottom: '12px' }}>{error}</p>}

        <button className="check-btn" onClick={checkEligibility} disabled={loading}>
          {loading ? 'Checking...' : '🔍 Check My Scholarships'}
        </button>

        {result && (
          <div className="checker-result">
            <div className="result-card">
              {result.matched.length === 0 ? (
                <>
                  <h4>No exact matches found</h4>
                  <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.6)', fontFamily: 'var(--font-body)' }}>
                    Try updating your details — there may be more options once you complete your profile.
                  </p>
                </>
              ) : (
                <>
                  <h4>🎉 Great news, {result.studentName}! You may qualify for {result.count} scholarship{result.count > 1 ? 's' : ''}:</h4>
                  {result.matched.map((s, i) => (
                    <div className="schol-item" key={i}>
                      <div className="schol-dot"></div>
                      <div>
                        <div className="schol-name">{s.name}</div>
                        <div className="schol-detail">{s.amount}</div>
                      </div>
                    </div>
                  ))}
                  <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.4)', marginTop: '16px', fontFamily: 'var(--font-body)' }}>
                    Results are indicative. Always verify eligibility on the official scholarship portal.
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
