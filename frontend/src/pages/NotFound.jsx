import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '5rem', marginBottom: '24px' }}>🎓</div>
        <span className="section-tag" style={{ textAlign: 'center', display: 'block' }}>404 — Page Not Found</span>
        <h2 className="section-title">Looks Like You Took<br />a Wrong Turn</h2>
        <p style={{ color: 'var(--muted)', maxWidth: '420px', lineHeight: 1.8, marginBottom: '40px', fontFamily: 'var(--font-body)' }}>
          The page you're looking for doesn't exist. Let's get you back to finding scholarships.
        </p>
        <Link to="/" className="btn-primary">← Back to Home</Link>
      </section>
    </div>
  );
}
