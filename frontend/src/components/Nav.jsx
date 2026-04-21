import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/about',       label: 'About' },
  { path: '/how',         label: 'How It Works' },
  { path: '/scholarships',label: 'Scholarships' },
  { path: '/team',        label: 'Team' },
  { path: '/contact',     label: 'Contact' },
  { path: '/register',    label: 'Register' },
];

export default function Nav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

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
      </ul>

      {/* Mobile hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <Link to="/register" className="nav-cta">Register Free</Link>

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
        </div>
      )}
    </nav>
  );
}
