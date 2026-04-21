import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-dots"></div>
      <div className="hero-inner">
        <span className="hero-badge">🎓 SSASIT · Design Engineering 2B · 2025–26</span>
        <h1>
          Find the <em>Right Scholarship</em>
          <br />for Your Future
        </h1>
        <p>
          Scholars Scope is a smart, centralized platform that matches students with scholarships
          based on their academic performance, income, category, and course details — no more
          endless searching.
        </p>
        <div className="hero-btns">
          <Link to="/checker" className="btn-primary">Check My Eligibility →</Link>
          <Link to="/about"   className="btn-outline">Learn More</Link>
        </div>
      </div>
    </section>
  );
}
