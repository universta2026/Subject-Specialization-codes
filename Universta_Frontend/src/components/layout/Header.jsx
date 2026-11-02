import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../common/Icon';

const SECTIONS = [
  { key: 'subjects', name: 'Subjects', href: '/subjects' },
  { key: 'destinations', name: 'Destinations', href: '/destinations' },
  { key: 'universities', name: 'Universities', href: '/universities' },
  { key: 'courses', name: 'Courses', href: '/courses' },
  { key: 'scholarships', name: 'Scholarships', href: '/scholarships' },
  { key: 'exams', name: 'Exams', href: '/exams' },
  { key: 'student-visa', name: 'Visa', href: '/student-visa' }
];

const MORE_SECTIONS = [
  { key: 'coaching', name: 'Coaching', desc: 'Test-prep centres near you or online, with real student reviews.', href: '/coaching', icon: 'board' },
  { key: 'consultants', name: 'Study abroad consultants', desc: 'Verified advisers for shortlisting, applications and visas.', href: '/consultants', icon: 'message' }
];

export default function Header({ onOpenDrawer }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMoreOpen(false);
  }, [location.pathname]);

  const scrollToAdvice = (e) => {
    e.preventDefault();
    const el = document.getElementById('advice');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const input = el.querySelector('input');
      if (input) setTimeout(() => input.focus({ preventScroll: true }), 400);
    } else {
      window.location.href = '/#advice';
    }
  };

  return (
    <header className="site-header">
      <div className="container">
        <Link className="brand" to="/" aria-label="Universta home">
          <img src="/assets/img/universta-logo.png" alt="Universta" width="152" height="24" />
        </Link>

        <nav className="nav" aria-label="Main">
          {SECTIONS.map((s) => {
            const isActive = location.pathname.startsWith(s.href);
            return (
              <Link
                key={s.key}
                to={s.href}
                className={isActive ? 'is-active' : ''}
                aria-current={isActive ? 'page' : undefined}
              >
                {s.name}
              </Link>
            );
          })}

          <div className={`nav-more ${moreOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              aria-haspopup="true"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              More <Icon name="chevD" className="ico-sm" />
            </button>
            <div className="menu">
              {MORE_SECTIONS.map((m) => (
                <Link key={m.key} to={m.href} onClick={() => setMoreOpen(false)}>
                  <span className="ico-tile" style={{ width: '36px', height: '36px', borderRadius: '8px' }}>
                    <Icon name={m.icon} className="ico-sm" />
                  </span>
                  <span>
                    {m.name}
                    <small>{m.desc}</small>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="header-actions">
          <button className="btn btn-ghost btn-sm hide-sm" type="button" onClick={() => alert('Sign-in portal coming soon!')}>
            Sign in
          </button>
          <a className="btn btn-primary btn-sm" href="#advice" onClick={scrollToAdvice}>
            Get free advice
          </a>
          <button
            className="icon-btn menu-btn"
            type="button"
            aria-label="Open menu"
            onClick={onOpenDrawer}
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}

