import React, { useState } from 'react';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const sendMessage = async () => {
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in Name, Email and Message.');
      return;
    }
    setSending(true);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        alert(data.message);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(data.message || 'Failed to send message.');
      }
    } catch {
      alert('Server error. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <span className="section-tag">Get in Touch</span>
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="section-title">
            Have a Question
            <br />or Feedback?
          </h2>
          <p>
            We'd love to hear from students, scholarship providers, or institutions interested in
            partnering with Scholars Scope.
          </p>
          <div className="info-row">
            <div className="icon">🏛</div>
            <span>Shree Swami Atmanand Saraswati Institute of Technology, Surat</span>
          </div>
          <div className="info-row">
            <div className="icon">🎓</div>
            <span>Department of Information Technology, 6th Semester</span>
          </div>
          <div className="info-row">
            <div className="icon">📅</div>
            <span>Academic Year 2025–26 | Design Engineering 2B</span>
          </div>
        </div>
        <div className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={set('name')}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={set('email')}
          />
          <input
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={set('subject')}
          />
          <textarea
            placeholder="Your message..."
            value={form.message}
            onChange={set('message')}
          />
          <button className="send-btn" onClick={sendMessage} disabled={sending}>
            {sending ? 'Sending...' : 'Send Message ✉️'}
          </button>
        </div>
      </div>
    </section>
  );
}
