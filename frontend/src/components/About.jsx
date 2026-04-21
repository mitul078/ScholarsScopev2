import React from 'react';

export default function About() {
  return (
    <section id="about" className="reveal">
      <span className="section-tag">About the Project</span>
      <div className="about-grid">
        <div className="about-text">
          <h2 className="section-title">Simplifying Scholarship Discovery for Every Student</h2>
          <p className="body-text">
            Scholars Scope is a web-based platform designed to solve the confusion students face while
            searching for scholarships. Many scholarship portals exist, but students often struggle
            with unclear eligibility criteria, scattered information, and missed deadlines.
          </p>
          <p className="body-text mt">
            Our system allows students to input personal and academic details — marks/CGPA, family
            income, category, and course — then instantly displays only the scholarships they qualify
            for, complete with amounts, deadlines, and application status.
          </p>
          <div className="highlight-card">
            <p>
              "The system filters and displays only those scholarships for which the student is
              eligible, reducing time spent on manual searching and making scholarship opportunities
              more accessible."
            </p>
          </div>
        </div>
        <div className="about-visual">
          {[
            { icon: '🎯', title: 'Eligibility Matching', desc: 'Smart filters compare your details against scholarship requirements in real time.' },
            { icon: '📋', title: 'Centralized Information', desc: 'Scholarship amount, criteria, deadlines, and application status all in one place.' },
            { icon: '🔔', title: 'Timely Notifications', desc: 'Email and SMS alerts ensure you never miss an application deadline.' },
            { icon: '📊', title: 'Application Tracking', desc: 'A personal dashboard lets you track every application from submission to approval.' },
          ].map(({ icon, title, desc }) => (
            <div className="feature-row" key={title}>
              <div className="feature-icon">{icon}</div>
              <div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
