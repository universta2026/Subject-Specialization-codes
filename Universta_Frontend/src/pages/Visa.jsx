import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Icon from '../components/common/Icon';
import LeadForm from '../components/common/LeadForm';
import { countries } from '../data/mockData';

export default function Visa() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[['Home', '/'], ['Student Visa', '/student-visa']]} />
          <div className="mt-32">
            <span className="eyebrow">Student Visa Guides</span>
          </div>
          <h1 className="t-h1" style={{ marginTop: '8px' }}>
            Step-by-step student visa guides & checklists
          </h1>
          <p className="lead">
            Learn requirements, financial evidence rules, processing times, biometric steps, and common refusal reasons.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Countries</span>
              <h2 className="t-h2">Select your study destination</h2>
            </div>
          </div>
          <div className="grid g-3 gap-16">
            {countries.map((c) => (
              <div key={c.id} className="card">
                <div className="row between">
                  <h3 className="card-title">{c.name}</h3>
                  <span className="tag tag-eyebrow">{c.code}</span>
                </div>
                <div className="card-meta mt-8">
                  <span><Icon name="passport" /> {c.visa}</span>
                </div>
                <p className="small muted mt-8">
                  Key document: <strong>{c.keyDoc}</strong>
                </p>
                <div className="mt-16">
                  <Link className="link-arrow" to={`/student-visa/${c.id}`}>
                    Visa checklist & timeline <Icon name="arrowR" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink" id="advice">
        <div className="container cta-band">
          <div>
            <span className="eyebrow">Visa Advisory</span>
            <h2 className="t-h1 mt-16">Have your visa documents vetted</h2>
            <p className="lead mt-16">
              Avoid refusals with our step-by-step checklist and professional application pre-screening.
            </p>
          </div>
          <LeadForm id="visa-band" />
        </div>
      </section>
    </main>
  );
}

