import React from 'react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import { ExpertCard } from '../components/common/Cards';
import SearchBar from '../components/common/SearchBar';
import LeadForm from '../components/common/LeadForm';
import { coaching } from '../data/mockData';

export default function Coaching() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[['Home', '/'], ['Coaching', '/coaching']]} />
          <div className="mt-32">
            <span className="eyebrow">Test Preparation</span>
          </div>
          <h1 className="t-h1" style={{ marginTop: '8px' }}>
            Verified coaching institutes & tutors
          </h1>
          <p className="lead">
            Find classroom and online prep for IELTS, TOEFL, GRE, GMAT, PTE, and SAT with authentic student ratings.
          </p>
          <SearchBar placeholder="Search coaching by city or test..." targetPath="/coaching" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="results">
            {coaching.map((c) => (
              <ExpertCard key={c.id} expert={c} kind="coaching" />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink" id="advice">
        <div className="container cta-band">
          <div>
            <span className="eyebrow">Free Prep Match</span>
            <h2 className="t-h1 mt-16">Get matched with top coaching classes</h2>
            <p className="lead mt-16">
              Compare trial sessions, faculty experience, batch timings, and discounts.
            </p>
          </div>
          <LeadForm id="coaching-band" />
        </div>
      </section>
    </main>
  );
}

