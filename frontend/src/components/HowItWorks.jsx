import React from 'react';

const steps = [
  { num: 1, icon: '📝', title: 'Register & Enter Details', desc: 'Create a profile with your academic marks or CGPA, family income, category, and course information.' },
  { num: 2, icon: '🔍', title: 'Smart Eligibility Check', desc: 'The system instantly filters hundreds of scholarships and shows only those matching your exact profile.' },
  { num: 3, icon: '⚖️', title: 'Compare & Choose', desc: 'View scholarship amounts, requirements, and deadlines side-by-side to make the best decision.' },
  { num: 4, icon: '✅', title: 'Apply & Track', desc: 'Submit applications directly and track their status in your personal dashboard, with reminders for deadlines.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="reveal">
      <span className="section-tag">How It Works</span>
      <h2 className="section-title">
        From Registration to Approval
        <br />in Four Simple Steps
      </h2>
      <p className="section-sub">
        Scholars Scope streamlines the entire scholarship journey so students can focus on what
        matters — their studies.
      </p>
      <div className="steps">
        {steps.map(({ num, icon, title, desc }) => (
          <div className="step-card" key={num}>
            <div className="step-num">{num}</div>
            <div className="step-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
