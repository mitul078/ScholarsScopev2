import React from 'react';
import useReveal from '../hooks/useReveal';
import { Link } from 'react-router-dom';

const scholarships = [
  {
    badge: 'Government', badgeClass: '',
    title: 'National Scholarship Portal (NSP)',
    desc: 'Centralized portal for multiple government scholarship schemes from various departments for meritorious and financially weak students.',
    amount: 'Up to ₹50,000/yr', metaKey: 'Income', metaVal: '≤ ₹2.5L',
    eligible: 'Annual family income ≤ ₹2,50,000',
  },
  {
    badge: 'Merit Based', badgeClass: 'badge-gold',
    title: 'Post Matric Scholarship (OBC)',
    desc: 'Scholarship for OBC students pursuing post-matric level courses including diploma, graduation, and post-graduation programs.',
    amount: 'Up to ₹15,000/yr', metaKey: 'Category', metaVal: 'OBC',
    eligible: 'OBC category students',
  },
  {
    badge: 'SC/ST', badgeClass: 'badge-purple',
    title: 'Dr. Ambedkar Post Matric Scholarship',
    desc: 'Financial assistance for SC/ST students to enable them to pursue higher education and improve their employment prospects.',
    amount: 'Up to ₹20,000/yr', metaKey: 'Category', metaVal: 'SC / ST',
    eligible: 'SC or ST category students',
  },
  {
    badge: 'EWS', badgeClass: 'badge-red',
    title: 'PM-YASASVI EWS Scholarship',
    desc: 'Support for students from Economically Weaker Sections pursuing education at recognized institutions across India.',
    amount: 'Up to ₹75,000/yr', metaKey: 'Income', metaVal: '≤ ₹8L',
    eligible: 'EWS category + family income ≤ ₹8,00,000',
  },
  {
    badge: 'Merit', badgeClass: '',
    title: 'Central Sector Scholarship (Top Class)',
    desc: 'For top-performing students who score 80% and above in their qualifying examination, irrespective of category.',
    amount: 'Up to ₹1,20,000/yr', metaKey: 'CGPA', metaVal: '≥ 80%',
    eligible: 'CGPA / Percentage ≥ 80',
  },
  {
    badge: 'AICTE', badgeClass: 'badge-gold',
    title: 'Pragati Scholarship (AICTE)',
    desc: 'AICTE scholarship for students pursuing technical education (B.E, B.Tech, Diploma) at AICTE-approved institutions.',
    amount: '₹50,000/yr + fees', metaKey: 'Course', metaVal: 'B.E/B.Tech/Diploma',
    eligible: 'Enrolled in B.E., B.Tech or Diploma',
  },
  {
    badge: 'AICTE · OBC', badgeClass: 'badge-purple',
    title: 'Saksham Scholarship (AICTE)',
    desc: 'Specially designed for OBC students pursuing technical education (B.E/B.Tech) at AICTE-approved institutions.',
    amount: '₹50,000/yr + fees', metaKey: 'Category', metaVal: 'OBC',
    eligible: 'OBC + B.E. or B.Tech course',
  },
  {
    badge: 'Minority', badgeClass: 'badge-red',
    title: 'Merit-cum-Means Scholarship (Minority)',
    desc: 'Financial assistance to students from minority communities who demonstrate both merit and financial need.',
    amount: 'Up to ₹30,000/yr', metaKey: 'Income', metaVal: '≤ ₹2.5L',
    eligible: 'Income ≤ ₹2.5L + CGPA ≥ 50%',
  },
];

export default function ScholarshipsPage() {
  useReveal();
  return (
    <div style={{ paddingTop: '80px' }}>
      <section>
        <span className="section-tag">Available Scholarships</span>
        <h2 className="section-title">Explore All Scholarship<br />Opportunities</h2>
        <p className="section-sub">
          A complete listing of scholarships on Scholars Scope across government, AICTE, and
          minority categories.
        </p>
        <div className="schol-grid reveal">
          {scholarships.map(({ badge, badgeClass, title, desc, amount, metaKey, metaVal, eligible }) => (
            <div className="schol-card" key={title}>
              <span className={`schol-card-badge ${badgeClass}`}>{badge}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="schol-meta">
                <div className="meta-item">Amount<span>{amount}</span></div>
                <div className="meta-item">{metaKey}<span>{metaVal}</span></div>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--teal)', fontWeight: 600, marginBottom: '16px' }}>
                ✓ Eligible if: {eligible}
              </p>
              <Link to="/checker" className="schol-link">Check Eligibility →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--ink)', color: '#fff', textAlign: 'center' }} className="reveal">
        <span className="section-tag" style={{ color: 'var(--gold-light)' }}>Not Sure Which Applies?</span>
        <h2 className="section-title" style={{ color: '#fff' }}>Let Us Match You<br />Automatically</h2>
        <p style={{ color: 'rgba(255,255,255,.6)', maxWidth: '500px', margin: '0 auto 40px', lineHeight: 1.8 }}>
          Enter your details once and our engine will instantly tell you exactly which of these
          scholarships you qualify for.
        </p>
        <Link to="/checker" className="btn-primary">Check My Eligibility →</Link>
      </section>
    </div>
  );
}
