import React from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Icon from '../components/common/Icon';
import LeadForm from '../components/common/LeadForm';
import { coaching, consultants, getCountry } from '../data/mockData';

export default function ExpertDetail() {
  const { id } = useParams();
  const location = useLocation();
  const isCoaching = location.pathname.startsWith('/coaching');

  const expert = isCoaching
    ? coaching.find((c) => c.id === id)
    : consultants.find((c) => c.id === id);

  if (!expert) {
    return <Navigate to={isCoaching ? '/coaching' : '/consultants'} replace />;
  }

  const title = isCoaching
    ? `Coaching Institute in ${expert.city}`
    : `Study Abroad Consultant in ${expert.city}`;

  return (
    <main id="main">
      <section className="detail-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              ['Home', '/'],
              [isCoaching ? 'Coaching' : 'Consultants', isCoaching ? '/coaching' : '/consultants'],
              [title, '']
            ]}
          />
          <div className="head" style={{ marginTop: '24px' }}>
            <span className="code-tile" style={{ fontSize: '18px', width: '56px', height: '56px' }}>
              [LOGO]
            </span>
            <div className="head-main">
              <span className="eyebrow">{isCoaching ? 'Verified Test-Prep Centre' : 'Verified Study Abroad Adviser'}</span>
              <h1 className="t-h1">{title}</h1>
              <div className="card-meta mt-8" style={{ fontSize: '15px' }}>
                <span><Icon name="pin" /> {expert.city}, {expert.country}</span>
                <span><Icon name="globe" /> Delivery: {expert.mode}</span>
                <span><Icon name="star" /> [RATING] · [N] student reviews</span>
              </div>
            </div>
            <div className="actions" style={{ marginTop: '8px' }}>
              <a className="btn btn-primary" href="#advice">
                Book Free Consultation
              </a>
            </div>
          </div>

          <div className="facts mt-32">
            <div className="fact">
              <div className="k"><Icon name="shield" /> Verification</div>
              <div className="v">100% Certified</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="globe" /> Mode</div>
              <div className="v">{expert.mode}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name={isCoaching ? 'board' : 'message'} /> Specialization</div>
              <div className="v">{isCoaching ? expert.tag : expert.services?.join(', ')}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-32">
        <div className="detail">
          <div className="detail-main">
            <section>
              <h2 className="t-h2">{isCoaching ? 'Tests & Batches Offered' : 'Services & Countries Handled'}</h2>
              <div className="card mt-16">
                {isCoaching ? (
                  <div>
                    <h4 className="t-h4">Exams Covered:</h4>
                    <div className="tags mt-16">
                      {expert.exams.map((e) => (
                        <Link key={e} className="tag tag-cloud" to={`/exams/${e}`}>
                          {e.toUpperCase()} Prep
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="t-h4">Target Study Destinations:</h4>
                    <div className="tags mt-16">
                      {expert.dest.map((d) => (
                        <Link key={d} className="tag tag-cloud" to={`/destinations/${d}`}>
                          {getCountry(d)?.name || d}
                        </Link>
                      ))}
                    </div>
                    <h4 className="t-h4 mt-24">Core Services:</h4>
                    <ul className="ticks mt-16">
                      {expert.services.map((s, idx) => (
                        <li key={idx}><Icon name="check" /><span>{s}</span></li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          </div>

          <aside className="detail-aside">
            <div className="aside-cta">
              <span className="eyebrow">Direct Contact</span>
              <h3 className="t-h3 mt-8">Message this {isCoaching ? 'Institute' : 'Adviser'}</h3>
              <p className="small mt-8">Receive pricing options, upcoming batch schedules, and free initial evaluation.</p>
              <LeadForm id="expert-aside" compact cta="Request Call Back" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

