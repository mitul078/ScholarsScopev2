import React from 'react';

const members = [
  { letter: 'Y', color: 'avatar-teal', name: 'Yagnik Khasiya', enroll: '230760116138' },
  { letter: 'T', color: 'avatar-purple', name: 'Tirth Avaiya', enroll: '230760116128' },
  { letter: 'V', color: 'avatar-red', name: 'Vivek Tank', enroll: '230760116125' },
  { letter: 'M', color: 'avatar-gold', name: 'Mitul Jodhani', enroll: '230760116085' },
];

export default function Team() {
  return (
    <section id="team" className="reveal">
      <span className="section-tag">Our Team</span>
      <h2 className="section-title">
        Built by Students,
        <br />For Students
      </h2>
      <p className="section-sub">
        Information Technology, 6th Semester — Gujarat Technological University, SSASIT, Surat
      </p>
      <div className="team-grid">
        {members.map(({ letter, color, name, enroll }) => (
          <div className="member-card" key={enroll}>
            <div className={`avatar ${color}`}>{letter}</div>
            <h4>{name}</h4>
            <div className="enroll">{enroll}</div>
          </div>
        ))}
      </div>
      <div className="faculty-bar">
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
  );
}
