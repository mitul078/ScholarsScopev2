import React from 'react';
import { Link } from 'react-router-dom';

const cards = [
  {
    badge: 'Government', badgeClass: '',
    title: 'National Scholarship Portal (NSP)',
    desc: 'Centralized portal for multiple government scholarship schemes from various departments for meritorious and financially weak students.',
    amount: 'Up to ₹50,000/yr', metaKey: 'Income', metaVal: '≤ ₹2.5L',
  },
  {
    badge: 'Merit Based', badgeClass: 'badge-gold',
    title: 'Post Matric Scholarship (OBC)',
    desc: 'Scholarship for OBC students pursuing post-matric level courses including diploma, graduation, and post-graduation programs.',
    amount: 'Up to ₹15,000/yr', metaKey: 'Category', metaVal: 'OBC',
  },
  {
    badge: 'SC/ST', badgeClass: 'badge-purple',
    title: 'Dr. Ambedkar Post Matric Scholarship',
    desc: 'Financial assistance for SC/ST students to enable them to pursue higher education and improve their employment prospects.',
    amount: 'Up to ₹20,000/yr', metaKey: 'Category', metaVal: 'SC / ST',
  },
  {
    badge: 'EWS', badgeClass: 'badge-red',
    title: 'PM-YASASVI EWS Scholarship',
    desc: 'Support for students from Economically Weaker Sections pursuing education at recognized institutions across India.',
    amount: 'Up to ₹75,000/yr', metaKey: 'Income', metaVal: '≤ ₹8L',
  },
];

export default function Scholarships() {
  return (
    <section id="scholarships" className="reveal">
      <span className="section-tag">Available Scholarships</span>
      <h2 className="section-title">
        Explore Popular Scholarship
        <br />Opportunities
      </h2>
      <p className="section-sub">
        A snapshot of scholarships available on Scholars Scope across government and private sectors.
      </p>
      <div className="schol-grid">
        {cards.map(({ badge, badgeClass, title, desc, amount, metaKey, metaVal }) => (
          <div className="schol-card" key={title}>
            <span className={`schol-card-badge ${badgeClass}`}>{badge}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="schol-meta">
              <div className="meta-item">Amount<span>{amount}</span></div>
              <div className="meta-item">{metaKey}<span>{metaVal}</span></div>
            </div>
            <Link to="/checker" className="schol-link">Check Eligibility →</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
