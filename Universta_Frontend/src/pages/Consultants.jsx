import React from 'react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import { ExpertCard } from '../components/common/Cards';
import SearchBar from '../components/common/SearchBar';
import LeadForm from '../components/common/LeadForm';
import { consultants } from '../data/mockData';

export default function Consultants() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[['Home', '/'], ['Consultants', '/consultants']]} />
          <div className="mt-32">
            <span className="eyebrow">Study Abroad Consultants</span>
          </div>
          <h1 className="t-h1" style={{ marginTop: '8px' }}>
            Find advisers you can trust
          </h1>
          <p className="lead">
            Connect with verified study abroad counselors for university shortlisting, statement of purpose editing, financial planning, and visa applications.
          </p>
          <SearchBar placeholder="Search consultants by city or destination..." targetPath="/consultants" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="results">
            {consultants.map((c) => (
              <ExpertCard key={c.id} expert={c} kind="consultant" />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink" id="advice">
        <div className="container cta-band">
          <div>
            <span className="eyebrow">Personal Advisory</span>
            <h2 className="t-h1 mt-16">Connect directly with a certified consultant</h2>
            <p className="lead mt-16">
              100% free guidance. Get honest recommendations from verified experts who know your target university.
            </p>
          </div>
          <LeadForm id="consultants-band" />
        </div>
      </section>
    </main>
  );
}

