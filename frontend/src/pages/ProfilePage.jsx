import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useReveal from '../hooks/useReveal';

// Scholarship matching logic (mirrors backend)
const scholarships = [
    { name: 'National Scholarship Portal (NSP)', amount: 'Up to ₹50,000/yr', match: (d) => d.income > 0 && d.income <= 250000 },
    { name: 'Post Matric Scholarship (OBC)', amount: 'Up to ₹15,000/yr', match: (d) => d.category === 'OBC' },
    { name: 'Dr. Ambedkar Post Matric Scholarship', amount: 'Up to ₹20,000/yr', match: (d) => d.category === 'SC' || d.category === 'ST' },
    { name: 'PM-YASASVI EWS Scholarship', amount: 'Up to ₹75,000/yr', match: (d) => d.category === 'EWS' && d.income <= 800000 },
    { name: 'Central Sector Scholarship (Top Class)', amount: 'Up to ₹1,20,000/yr', match: (d) => d.cgpa >= 80 },
    { name: 'Pragati Scholarship (AICTE)', amount: '₹50,000/yr + fees', match: (d) => d.course.includes('B.E') || d.course.includes('B.Tech') || d.course.includes('Diploma') },
    { name: 'Saksham Scholarship (AICTE)', amount: '₹50,000/yr + fees', match: (d) => d.category === 'OBC' && (d.course.includes('B.E') || d.course.includes('B.Tech')) },
    { name: 'Merit-cum-Means Scholarship (Minority)', amount: 'Up to ₹30,000/yr', match: (d) => d.income > 0 && d.income <= 250000 && d.cgpa >= 50 },
];

function InfoRow({ label, value }) {
    if (!value) return null;
    return (
        <div className="profile-info-row">
            <span className="profile-info-label">{label}</span>
            <span className="profile-info-value">{value}</span>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div className="profile-section">
            <h3 className="profile-section-title">{title}</h3>
            {children}
        </div>
    );
}

export default function ProfilePage() {
    useReveal();
    const { student, logout } = useAuth();
    const navigate = useNavigate();

    // Guard — if no student in context, redirect to register
    if (!student) {
        return (
            <div style={{ paddingTop: '80px' }}>
                <section style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔒</div>
                    <span className="section-tag" style={{ display: 'block' }}>Not Logged In</span>
                    <h2 className="section-title">No Profile Found</h2>
                    <p style={{ color: 'var(--muted)', maxWidth: '380px', margin: '0 auto 36px', fontFamily: 'var(--font-body)', lineHeight: 1.8 }}>
                        Please register first to view your student profile.
                    </p>
                    <Link to="/register" className="btn-primary">Register Now →</Link>
                </section>
            </div>
        );
    }

    const initials = `${student.firstName?.[0] ?? ''}${student.lastName?.[0] ?? ''}`.toUpperCase();
    const fullName = `${student.firstName} ${student.lastName}`;
    const matched = scholarships.filter((s) => s.match({
        income: Number(student.income) || 0,
        cgpa: Number(student.cgpa) || 0,
        category: student.category || '',
        course: student.course || '',
    }));

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div style={{ paddingTop: '80px' }}>
            {/* ── PROFILE HEADER ── */}
            <section className="profile-hero">
                <div className="profile-hero-inner">
                    {/* Avatar */}
                    <div className="profile-avatar">{initials}</div>

                    {/* Name & meta */}
                    <div className="profile-hero-info">
                        <h1 className="profile-name">{fullName}</h1>
                        <p className="profile-meta">
                            {student.course && <span>{student.course}</span>}
                            {student.college && <span>· {student.college}</span>}
                            {student.semester && <span>· {student.semester}</span>}
                        </p>
                        <div className="profile-badges">
                            {student.category && <span className="profile-badge">{student.category}</span>}
                            {student.cgpa && <span className="profile-badge profile-badge-teal">CGPA {student.cgpa}</span>}
                            {student.state && <span className="profile-badge">{student.state}</span>}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="profile-hero-actions">
                        <Link to="/checker" className="btn-primary" style={{ fontSize: '0.85rem', padding: '11px 24px' }}>
                            🔍 Check Scholarships
                        </Link>
                        <button className="profile-logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>

                {/* Stats row */}
                <div className="profile-stats-row">
                    <div className="profile-stat">
                        <span className="profile-stat-num">{matched.length}</span>
                        <span className="profile-stat-label">Matched Scholarships</span>
                    </div>
                    <div className="profile-stat-divider" />
                    <div className="profile-stat">
                        <span className="profile-stat-num">{student.cgpa || '—'}</span>
                        <span className="profile-stat-label">CGPA / Percentage</span>
                    </div>
                    <div className="profile-stat-divider" />
                    <div className="profile-stat">
                        <span className="profile-stat-num">
                            {student.income ? `₹${Number(student.income).toLocaleString('en-IN')}` : '—'}
                        </span>
                        <span className="profile-stat-label">Annual Family Income</span>
                    </div>
                    <div className="profile-stat-divider" />
                    <div className="profile-stat">
                        <span className="profile-stat-num">{student.category || '—'}</span>
                        <span className="profile-stat-label">Category</span>
                    </div>
                </div>
            </section>

            {/* ── MAIN CONTENT ── */}
            <section className="profile-body">
                <div className="profile-grid">

                    {/* LEFT COLUMN */}
                    <div className="profile-left">

                        {/* Personal Info */}
                        <Section title="👤 Personal Information">
                            <InfoRow label="Full Name" value={fullName} />
                            <InfoRow label="Email" value={student.email} />
                            <InfoRow label="Mobile" value={student.phone} />
                            <InfoRow label="Date of Birth" value={student.dob} />
                            <InfoRow label="Gender" value={student.gender} />
                            <InfoRow label="State" value={student.state} />
                        </Section>

                        {/* Academic Details */}
                        <Section title="🎓 Academic Details">
                            <InfoRow label="Institution" value={student.college} />
                            <InfoRow label="University" value={student.university} />
                            <InfoRow label="Course" value={student.course} />
                            <InfoRow label="Branch" value={student.branch} />
                            <InfoRow label="Semester" value={student.semester} />
                            <InfoRow label="CGPA / %" value={student.cgpa} />
                            <InfoRow label="Roll Number" value={student.rollNo} />
                            <InfoRow label="Admission Year" value={student.admYear} />
                        </Section>

                        {/* Financial */}
                        <Section title="💰 Financial & Category">
                            <InfoRow label="Category" value={student.category} />
                            <InfoRow label="Annual Income" value={student.income ? `₹${Number(student.income).toLocaleString('en-IN')}` : ''} />
                            <InfoRow label="Disability" value={student.disability && student.disability !== 'No' ? student.disability : 'None'} />
                        </Section>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="profile-right">

                        {/* Matched Scholarships */}
                        <div className="profile-section">
                            <h3 className="profile-section-title">🏆 Your Matched Scholarships</h3>
                            {matched.length === 0 ? (
                                <div className="profile-no-match">
                                    <p>No scholarships matched your current profile.</p>
                                    <Link to="/checker" className="schol-link" style={{ marginTop: '12px', display: 'inline-flex' }}>
                                        Try the Eligibility Checker →
                                    </Link>
                                </div>
                            ) : (
                                <div className="profile-match-list">
                                    {matched.map((s, i) => (
                                        <div className="profile-match-card" key={i}>
                                            <div className="profile-match-dot" />
                                            <div>
                                                <div className="profile-match-name">{s.name}</div>
                                                <div className="profile-match-amount">{s.amount}</div>
                                            </div>
                                            <Link to="/scholarships" className="profile-match-btn">View →</Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Quick Actions */}
                        <div className="profile-section">
                            <h3 className="profile-section-title">⚡ Quick Actions</h3>
                            <div className="profile-actions-grid">
                                <Link to="/checker" className="profile-action-card">
                                    <span className="profile-action-icon">🔍</span>
                                    <span className="profile-action-label">Run Eligibility Check</span>
                                </Link>
                                <Link to="/scholarships" className="profile-action-card">
                                    <span className="profile-action-icon">📋</span>
                                    <span className="profile-action-label">Browse All Scholarships</span>
                                </Link>
                                <Link to="/how" className="profile-action-card">
                                    <span className="profile-action-icon">📖</span>
                                    <span className="profile-action-label">How to Apply</span>
                                </Link>
                                <Link to="/contact" className="profile-action-card">
                                    <span className="profile-action-icon">✉️</span>
                                    <span className="profile-action-label">Contact Support</span>
                                </Link>
                            </div>
                        </div>

                        {/* Profile Completeness */}
                        <div className="profile-section">
                            <h3 className="profile-section-title">✅ Profile Completeness</h3>
                            {(() => {
                                const fields = ['firstName', 'lastName', 'email', 'phone', 'dob', 'gender', 'state',
                                    'college', 'university', 'course', 'semester', 'cgpa', 'branch', 'rollNo',
                                    'category', 'income', 'aadhar', 'bank'];
                                const filled = fields.filter(f => student[f] && String(student[f]).trim() !== '').length;
                                const pct = Math.round((filled / fields.length) * 100);
                                return (
                                    <div className="profile-completeness">
                                        <div className="profile-completeness-header">
                                            <span>{pct}% Complete</span>
                                            <span>{filled}/{fields.length} fields</span>
                                        </div>
                                        <div className="profile-completeness-bar">
                                            <div className="profile-completeness-fill" style={{ width: `${pct}%` }} />
                                        </div>
                                        {pct < 100 && (
                                            <p className="profile-completeness-tip">
                                                A complete profile gives you the most accurate scholarship matches.
                                            </p>
                                        )}
                                    </div>
                                );
                            })()}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
