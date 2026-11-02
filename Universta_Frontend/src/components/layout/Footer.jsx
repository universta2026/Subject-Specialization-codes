import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="top">
            <div>
              <img src="/assets/img/universta-logo-reverse.png" alt="Universta" style={{ width: '168px' }} />
              <p className="mt-16" style={{ font: '600 17px/24px var(--font-head)', color: '#fff' }}>
                Your world of universities.
              </p>
              <p className="mt-24 small">Get the monthly study abroad digest</p>
              {subscribed ? (
                <p className="caption" style={{ color: 'var(--success)' }}>
                  ✓ You’re subscribed to the monthly digest!
                </p>
              ) : (
                <form className="sub" onSubmit={handleSubscribe}>
                  <input
                    className="input"
                    type="email"
                    placeholder="Your email"
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="btn btn-white" type="submit">
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            <div>
              <h4>Explore</h4>
              <ul>
                <li><Link to="/subjects">Subjects</Link></li>
                <li><Link to="/destinations">Destinations</Link></li>
                <li><Link to="/universities">Universities</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/scholarships">Scholarships</Link></li>
              </ul>
            </div>

            <div>
              <h4>Prepare</h4>
              <ul>
                <li><Link to="/exams">Exams</Link></li>
                <li><Link to="/coaching">Coaching</Link></li>
                <li><Link to="/student-visa">Student visa</Link></li>
                <li><Link to="/consultants">Consultants</Link></li>
                <li><Link to="/pages">All page templates</Link></li>
              </ul>
            </div>

            <div>
              <h4>Partners</h4>
              <ul>
                <li><a href="#partner" onClick={(e) => { e.preventDefault(); alert('Partner portal coming soon'); }}>For universities</a></li>
                <li><a href="#partner" onClick={(e) => { e.preventDefault(); alert('Partner portal coming soon'); }}>For consultants</a></li>
                <li><a href="#partner" onClick={(e) => { e.preventDefault(); alert('Partner portal coming soon'); }}>For coaching centres</a></li>
                <li><a href="#partner" onClick={(e) => { e.preventDefault(); alert('Partner portal coming soon'); }}>List your institution</a></li>
              </ul>
            </div>

            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); alert('About Us coming soon'); }}>About us</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); alert('Contact Us coming soon'); }}>Contact</a></li>
                <li><a href="#careers" onClick={(e) => { e.preventDefault(); alert('Careers coming soon'); }}>Careers</a></li>
                <li><a href="#press" onClick={(e) => { e.preventDefault(); alert('Press coming soon'); }}>Press</a></li>
              </ul>
            </div>
          </div>

          <div className="bottom">
            <span>
              © 2026 Universta. All rights reserved. · Connected React Frontend with FastAPI/PostgreSQL Backend.
            </span>
            <span className="row" style={{ gap: '20px' }}>
              <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy</a>
              <a href="#terms" onClick={(e) => e.preventDefault()}>Terms</a>
              <a href="#cookies" onClick={(e) => e.preventDefault()}>Cookies</a>
            </span>
          </div>
        </div>
      </footer>

      <Link className="proto-fab" to="/pages">
        <Icon name="grid" className="ico-sm" /> All pages
      </Link>
    </>
  );
}

