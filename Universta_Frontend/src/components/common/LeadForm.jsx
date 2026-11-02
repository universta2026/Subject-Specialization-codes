import React, { useState } from 'react';
import { countries } from '../../data/mockData';
import { submitEnquiry } from '../../services/enquiryService';
import Icon from './Icon';

export default function LeadForm({
  id = 'a',
  title,
  text,
  compact = false,
  country: preselectedCountry,
  cta = 'Get free advice',
  btnClass = 'btn-primary'
}) {
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [dest, setDest] = useState(preselectedCountry || 'Not sure yet');
  const [intake, setIntake] = useState('Sep 2027');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const names = fullName.trim().split(' ');
    const firstName = names[0] || '';
    const lastName = names.slice(1).join(' ') || '';
    const isEmail = contact.includes('@');

    await submitEnquiry({
      first_name: firstName,
      last_name: lastName,
      email: isEmail ? contact.trim() : null,
      phone: !isEmail ? contact.trim() : null,
      destination: dest,
      intake: intake
    });

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      {title && (
        <div>
          <h3 className="t-h3">{title}</h3>
          {text && <p className="muted mt-8 small">{text}</p>}
        </div>
      )}

      <div className="field">
        <label htmlFor={`lf-name-${id}`}>Full name</label>
        <input
          id={`lf-name-${id}`}
          className="input"
          required
          placeholder="Your name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor={`lf-contact-${id}`}>Email or phone</label>
        <input
          id={`lf-contact-${id}`}
          className="input"
          required
          placeholder="So we can reply"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>

      {!compact && (
        <div className="grid g-2 gap-16">
          <div className="field">
            <label>Destination</label>
            <select
              className="select"
              value={dest}
              onChange={(e) => setDest(e.target.value)}
            >
              <option value="Not sure yet">Not sure yet</option>
              {countries.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Planned intake</label>
            <select
              className="select"
              value={intake}
              onChange={(e) => setIntake(e.target.value)}
            >
              <option value="Choose intake">Choose intake</option>
              <option value="Jan 2027">Jan 2027</option>
              <option value="Sep 2027">Sep 2027</option>
              <option value="Jan 2028">Jan 2028</option>
              <option value="Later">Later</option>
            </select>
          </div>
        </div>
      )}

      <button className={`btn ${btnClass} btn-block`} type="submit" disabled={loading}>
        {loading ? 'Submitting...' : cta}
      </button>

      <p className="caption">Free, no pressure. We’ll only contact you about your study plans.</p>

      {submitted && (
        <div className="ok" style={{ display: 'block' }}>
          <span className="ico-tile" style={{ background: '#E7F4EF', color: 'var(--success)' }}>
            <Icon name="check" />
          </span>
          <h4 className="t-h4 mt-16">Thanks — we’ve got it.</h4>
          <p className="muted small mt-8">An adviser will reply within 24 hours. No spam, ever.</p>
        </div>
      )}
    </form>
  );
}

