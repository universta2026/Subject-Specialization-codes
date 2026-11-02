import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';

const ALL_SECTIONS = [
  { key: 'subjects', name: 'Subjects & specializations', href: '/subjects', icon: 'book' },
  { key: 'destinations', name: 'Study destinations', href: '/destinations', icon: 'globe' },
  { key: 'universities', name: 'Universities', href: '/universities', icon: 'landmark' },
  { key: 'courses', name: 'Courses', href: '/courses', icon: 'cap' },
  { key: 'scholarships', name: 'Scholarships', href: '/scholarships', icon: 'award' },
  { key: 'exams', name: 'Exams', href: '/exams', icon: 'filecheck' },
  { key: 'student-visa', name: 'Student visa', href: '/student-visa', icon: 'passport' },
  { key: 'coaching', name: 'Coaching', href: '/coaching', icon: 'board' },
  { key: 'consultants', name: 'Study abroad consultants', href: '/consultants', icon: 'message' }
];

export default function Drawer({ isOpen, onClose }) {
  return (
    <div className={`drawer ${isOpen ? 'is-open' : ''}`}>
      <div className="drawer-scrim" onClick={onClose} />
      <div className="drawer-panel">
        <div className="row between">
          <img src="/assets/img/universta-logo.png" alt="Universta" style={{ width: '132px' }} />
          <button className="icon-btn" type="button" aria-label="Close menu" onClick={onClose}>
            <Icon name="x" />
          </button>
        </div>
        <div className="mt-24">
          {ALL_SECTIONS.map((s) => (
            <Link key={s.key} className="dl" to={s.href} onClick={onClose}>
              <span className="ico-tile" style={{ width: '36px', height: '36px', borderRadius: '8px' }}>
                <Icon name={s.icon} className="ico-sm" />
              </span>
              {s.name}
            </Link>
          ))}
        </div>
        <button
          className="btn btn-ghost btn-block mt-24"
          type="button"
          onClick={() => {
            onClose();
            alert('Sign-in portal coming soon!');
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

