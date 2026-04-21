import React from 'react';
import useReveal from '../hooks/useReveal';

const steps = [
  { num: 1, icon: '📝', title: 'Register & Enter Details', desc: 'Create a profile with your academic marks or CGPA, family income, category, and course information. Takes less than 3 minutes.' },
  { num: 2, icon: '🔍', title: 'Smart Eligibility Check', desc: 'The system instantly filters hundreds of scholarships and shows only those matching your exact profile — no guesswork.' },
  { num: 3, icon: '⚖️', title: 'Compare & Choose', desc: 'View scholarship amounts, requirements, and deadlines side-by-side to make the best, most informed decision.' },
  { num: 4, icon: '✅', title: 'Apply & Track', desc: 'Submit applications directly and track their status in your personal dashboard, with automatic reminders for deadlines.' },
];

const faqs = [
  { q: 'Is Scholars Scope free to use?', a: 'Yes, completely free for all students. There are no hidden charges or subscription fees.' },
  { q: 'How accurate are the eligibility results?', a: 'Results are based on the official scholarship criteria. We achieve ~95% match accuracy. Always verify on the official portal before applying.' },
  { q: 'What details do I need to register?', a: 'Basic personal info, academic details (CGPA, course, college), and financial details (family income, category).' },
  { q: 'Can I update my profile later?', a: 'Yes. You can update your academic and financial details any time and re-run the eligibility check.' },
  { q: 'Which scholarships are listed?', a: 'We cover central government schemes (NSP, AICTE, PM-YASASVI), state scholarships, and select private scholarships.' },
  { q: 'Is my data secure?', a: 'Yes. Your data is encrypted and never sold or shared with third parties. It is only used for scholarship matching.' },
];

export default function HowItWorksPage() {
  useReveal();
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* HEADER */}
      <section>
        <span className="section-tag">How It Works</span>
        <h2 className="section-title">From Registration to Approval<br />in Four Simple Steps</h2>
        <p className="section-sub">
          Scholars Scope streamlines the entire scholarship journey so students can focus on what
          matters — their studies.
        </p>
        <div className="steps reveal">
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

      {/* DETAILED PROCESS */}
      <section style={{ background: 'var(--cream)' }} className="reveal">
        <span className="section-tag">The Process In Detail</span>
        <h2 className="section-title">Everything That Happens<br />Behind the Scenes</h2>
        <div className="about-grid">
          <div className="about-text">
            <p className="body-text">
              When you enter your details into Scholars Scope, our matching engine compares your
              profile against a curated database of scholarships using a multi-criteria filtering
              algorithm.
            </p>
            <p className="body-text mt">
              Each scholarship has a set of rules — income thresholds, category requirements, CGPA
              minimums, and course restrictions. Our engine evaluates every rule and returns only
              the scholarships where you meet all criteria.
            </p>
            <p className="body-text mt">
              Results are sorted by match strength and award amount, so the most relevant
              opportunities are always at the top. You can then click through to the official
              portal to apply directly.
            </p>
            <div className="highlight-card">
              <p>
                "Our goal is to make the process of finding and applying for scholarships as simple
                as a Google search — enter your details, get your results instantly."
              </p>
            </div>
          </div>
          <div className="about-visual">
            {[
              { icon: '📥', title: 'You enter your profile', desc: 'CGPA, income, category, course, and state are the core matching parameters.' },
              { icon: '⚙️', title: 'Matching engine runs', desc: 'Each of the 500+ scholarships is evaluated against your profile in milliseconds.' },
              { icon: '📊', title: 'Results ranked', desc: 'Matching scholarships are ranked by award amount and application deadline.' },
              { icon: '🔗', title: 'Apply via official link', desc: 'Click directly to the official government or institution portal to apply.' },
            ].map(({ icon, title, desc }) => (
              <div className="feature-row" key={title}>
                <div className="feature-icon">{icon}</div>
                <div><h4>{title}</h4><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal">
        <span className="section-tag">FAQ</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-sub">Everything you need to know before getting started.</p>
        <div className="schol-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px,1fr))' }}>
          {faqs.map(({ q, a }) => (
            <div className="schol-card" key={q} style={{ borderTopColor: 'var(--teal)' }}>
              <h3 style={{ marginBottom: '12px' }}>{q}</h3>
              <p style={{ marginBottom: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
