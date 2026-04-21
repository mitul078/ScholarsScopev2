import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { path: '/about', label: 'About' },
  { path: '/how', label: 'How It Works' },
  { path: '/scholarships', label: 'Scholarships' },
  { path: '/team', label: 'Team' },
  { path: '/contact', label: 'Contact' },
];

export default function Nav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { student, logout } = useAuth();

  const initials = student
    ? `${student.firstName?.[0] ?? ''}${student.lastName?.[0] ?? ''}`.toUpperCase()
    : '';

  return (
    <nav>
      <Link to="/" className="nav-logo">
        Scholars<span>Scope</span>
      </Link>

      <ul className="nav-links">
        {navItems.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              style={{ color: location.pathname === path ? 'var(--teal)' : '' }}
            >
              {label}
            </Link>
          </li>
        ))}
        {/* Show Register link only when NOT logged in */}
        {!student && (
          <li>
            <Link
              to="/register"
              style={{ color: location.pathname === '/register' ? 'var(--teal)' : '' }}
            >
              Register
            </Link>
          </li>
        )}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Right side CTA — changes based on auth state */}
      {student ? (
        <Link to="/profile" className="nav-profile-btn" title={`${student.firstName} ${student.lastName}`}>
          <span className="nav-profile-avatar">{initials}</span>
          <span className="nav-profile-name">{student.firstName}</span>
        </Link>
      ) : (
        <Link to="/register" className="nav-cta">Register Free</Link>
      )}

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              style={{ color: location.pathname === path ? 'var(--teal)' : '' }}
            >
              {label}
            </Link>
          ))}
          {student ? (
            <>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>My Profile</Link>
              <button
                onClick={() => { logout(); setMenuOpen(false); }}
                style={{ background: 'none', border: 'none', textAlign: 'left', padding: '10px 0', fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#e05252', cursor: 'pointer', borderBottom: 'none' }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
          )}
        </div>
      )}
    </nav>
  );
}
