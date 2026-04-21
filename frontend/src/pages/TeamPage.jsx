import React from 'react';
import useReveal from '../hooks/useReveal';

const members = [
  { letter: 'Y', color: 'avatar-teal',   name: 'Yagnik Khasiya', enroll: '230760116138', role: 'Frontend & UI Design' },
  { letter: 'T', color: 'avatar-purple', name: 'Tirth Avaiya',   enroll: '230760116128', role: 'Backend & Database' },
  { letter: 'V', color: 'avatar-red',    name: 'Vivek Tank',     enroll: '230760116125', role: 'Eligibility Engine' },
  { letter: 'M', color: 'avatar-gold',   name: 'Mitul Jodhani',  enroll: '230760116085', role: 'Full Stack & Integration' },
];

export default function TeamPage() {
  useReveal();
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* TEAM HEADER */}
      <section>
        <span className="section-tag">Our Team</span>
        <h2 className="section-title">Built by Students,<br />For Students</h2>
        <p className="section-sub">
          Information Technology, 6th Semester — Gujarat Technological University, SSASIT, Surat
        </p>
        <div className="team-grid reveal">
          {members.map(({ letter, color, name, enroll, role }) => (
            <div className="member-card" key={enroll}>
              <div className={`avatar ${color}`}>{letter}</div>
              <h4>{name}</h4>
              <div className="enroll">{enroll}</div>
              <p style={{ fontSize: '0.78rem', color: 'var(--teal)', fontWeight: 600, marginTop: '8px', fontFamily: 'var(--font-body)' }}>
                {role}
              </p>
            </div>
          ))}
        </div>

        {/* FACULTY BAR */}
        <div className="faculty-bar reveal">
          <div className="faculty-item">
            <div className="faculty-role">Faculty Guide</div>
            <div className="faculty-name">Prof. Foram N. Patel</div>
          </div>
          <div className="faculty-divider"></div>
          <div className="faculty-item">
            <div className="faculty-role">Head of Department</div>
            <div className="faculty-name">Prof. Hardik C. Soneria</div>
          </div>
          <div className="faculty-divider"></div>
          <div className="faculty-item">
            <div className="faculty-role">Institution</div>
            <div className="faculty-name">SSASIT, Surat · GTU</div>
          </div>
        </div>
      </section>

      {/* PROJECT INFO */}
      <section style={{ background: 'var(--cream)' }} className="reveal">
        <span className="section-tag">Project Details</span>
        <h2 className="section-title">About the Project</h2>
        <div className="steps">
          {[
            { icon: '💡', title: 'Problem Statement', desc: 'Students across India miss scholarships due to scattered information, complex eligibility criteria, and missed deadlines.' },
            { icon: '🛠️', title: 'Tech Stack', desc: 'React.js frontend, Node.js + Express backend, MongoDB database, deployed on a cloud platform.' },
            { icon: '📐', title: 'Design Approach', desc: 'User-first design built with accessibility in mind — clean, minimal, and fast on all devices.' },
            { icon: '🎓', title: 'Academic Context', desc: 'Design Engineering 2B — a project-based learning course focused on solving real-world problems.' },
          ].map(({ icon, title, desc }) => (
            <div className="step-card" key={title}>
              <div className="step-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
