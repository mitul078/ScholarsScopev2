import React from 'react';
import useReveal from '../hooks/useReveal';

export default function AboutPage() {
  useReveal();
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* ABOUT HERO */}
      <section style={{ background: 'var(--cream)', paddingBottom: '60px' }}>
        <span className="section-tag">About the Project</span>
        <h2 className="section-title">Simplifying Scholarship Discovery<br />for Every Student</h2>
        <p className="section-sub">
          We built Scholars Scope to eliminate the confusion and wasted time students face when
          hunting for the right scholarship.
        </p>

        <div className="about-grid reveal">
          <div className="about-text">
            <p className="body-text">
              Scholars Scope is a web-based platform designed to solve the confusion students face
              while searching for scholarships. Many scholarship portals exist, but students often
              struggle with unclear eligibility criteria, scattered information, and missed deadlines.
            </p>
            <p className="body-text mt">
              Our system allows students to input personal and academic details — marks/CGPA, family
              income, category, and course — then instantly displays only the scholarships they qualify
              for, complete with amounts, deadlines, and application status.
            </p>
            <p className="body-text mt">
              The platform was built as a Design Engineering 2B project at SSASIT, Surat under
              Gujarat Technological University, combining real-world problem solving with modern
              web development.
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
              { icon: '🔒', title: 'Secure & Private', desc: 'Your data is encrypted and never shared with third parties without consent.' },
              { icon: '🌐', title: 'Accessible Anywhere', desc: 'Fully responsive — use Scholars Scope on mobile, tablet, or desktop seamlessly.' },
            ].map(({ icon, title, desc }) => (
              <div className="feature-row" key={title}>
                <div className="feature-icon">{icon}</div>
                <div><h4>{title}</h4><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section className="reveal">
        <span className="section-tag">Problem & Solution</span>
        <h2 className="section-title">Why Scholars Scope Exists</h2>
        <p className="section-sub">
          Students across India miss out on thousands of crores in scholarship money every year —
          simply because they don't know they qualify.
        </p>
        <div className="steps">
          {[
            { icon: '😕', title: 'Scattered Information', desc: 'Hundreds of scholarship portals with inconsistent, outdated data make it nearly impossible to find what you qualify for.' },
            { icon: '⏰', title: 'Missed Deadlines', desc: 'Students only discover scholarships after deadlines have passed, losing out on significant financial aid.' },
            { icon: '📄', title: 'Complex Applications', desc: 'Unclear eligibility criteria force students to apply speculatively, wasting time on scholarships they don\'t qualify for.' },
            { icon: '✅', title: 'Our Solution', desc: 'One profile. Instant matches. Clear eligibility. Deadline tracking. Everything a student needs in one place.' },
          ].map(({ icon, title, desc }) => (
            <div className="step-card" key={title}>
              <div className="step-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTITUTION */}
      <section style={{ background: 'var(--ink)', color: '#fff' }} className="reveal">
        <span className="section-tag" style={{ color: 'var(--gold-light)' }}>Our Institution</span>
        <h2 className="section-title" style={{ color: '#fff' }}>SSASIT, Surat</h2>
        <div className="contact-grid">
          <div>
            <p style={{ color: 'rgba(255,255,255,.65)', lineHeight: 1.9, fontSize: '0.95rem' }}>
              Shree Swami Atmanand Saraswati Institute of Technology is an autonomous engineering
              college affiliated with Gujarat Technological University (GTU), Surat. The Department
              of Information Technology consistently produces industry-ready graduates with strong
              fundamentals in software development, data science, and systems design.
            </p>
            <div className="info-row" style={{ marginTop: '28px' }}>
              <div className="icon">🏛</div>
              <span>SSASIT, Surat, Gujarat — 395006</span>
            </div>
            <div className="info-row">
              <div className="icon">🎓</div>
              <span>Affiliated: Gujarat Technological University</span>
            </div>
            <div className="info-row">
              <div className="icon">📅</div>
              <span>Academic Year 2025–26 · Design Engineering 2B</span>
            </div>
          </div>
          <div className="faculty-bar" style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', marginTop: 0 }}>
            <div className="faculty-item">
              <div className="faculty-role">Faculty Guide</div>
              <div className="faculty-name" style={{ color: '#fff' }}>Prof. Foram N. Patel</div>
            </div>
            <div className="faculty-divider" style={{ background: 'rgba(255,255,255,.15)' }}></div>
            <div className="faculty-item">
              <div className="faculty-role">Head of Department</div>
              <div className="faculty-name" style={{ color: '#fff' }}>Prof. Hardik C. Soneria</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
