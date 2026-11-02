import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Icon from '../components/common/Icon';
import LeadForm from '../components/common/LeadForm';
import { UniversityCard } from '../components/common/Cards';
import { getCountry, universities } from '../data/mockData';

export default function DestinationDetail() {
  const { id } = useParams();
  const country = getCountry(id);

  if (!country) {
    return <Navigate to="/destinations" replace />;
  }

  const countryUnis = universities.filter((u) => u.country === country.id);

  return (
    <main id="main">
      <section className="detail-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              ['Home', '/'],
              ['Destinations', '/destinations'],
              [country.name, `/destinations/${country.id}`]
            ]}
          />
          <div className="head" style={{ marginTop: '24px' }}>
            <span className="code-tile" style={{ fontSize: '20px', width: '56px', height: '56px' }}>
              {country.code}
            </span>
            <div className="head-main">
              <span className="eyebrow">Study Destination</span>
              <h1 className="t-h1">Study in {country.name}</h1>
              <div className="card-meta mt-8" style={{ fontSize: '15px' }}>
                <span><Icon name="pin" /> Capital: {country.capital}</span>
                <span><Icon name="wallet" /> Currency: {country.currency}</span>
                <span><Icon name="globe" /> Language: {country.lang}</span>
              </div>
            </div>
            <div className="actions" style={{ marginTop: '8px' }}>
              <a className="btn btn-primary" href="#advice">
                Get free advice
              </a>
            </div>
          </div>

          <div className="facts mt-32">
            <div className="fact">
              <div className="k"><Icon name="calendar" /> Intakes</div>
              <div className="v">{country.intakes.join(', ')}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="passport" /> Student Visa</div>
              <div className="v">{country.visa}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="briefcase" /> Post-Study Work</div>
              <div className="v">{country.psw}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="filecheck" /> Key Document</div>
              <div className="v">{country.keyDoc}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-32">
        <div className="detail">
          <div className="detail-main">
            <section>
              <h2 className="t-h2">Why choose {country.name}?</h2>
              <ul className="ticks mt-16">
                {country.why.map((reason, idx) => (
                  <li key={idx}>
                    <Icon name="check" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-32">
              <h2 className="t-h2">Top Universities in {country.name}</h2>
              <div className="results mt-16">
                {countryUnis.length > 0 ? (
                  countryUnis.map((u) => <UniversityCard key={u.id} university={u} />)
                ) : (
                  <p className="muted">Universities for this country are currently being updated.</p>
                )}
              </div>
            </section>

            <section className="mt-32">
              <h2 className="t-h2">Visa & Required Documents</h2>
              <p className="sec-intro">Essential documents required when lodging your student visa for {country.name}:</p>
              <div className="card mt-16">
                <ul className="bullets">
                  {country.docs.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-16">
                <Link className="link-arrow" to={`/student-visa/${country.id}`}>
                  Read complete student visa guide for {country.name} <Icon name="arrowR" />
                </Link>
              </div>
            </section>
          </div>

          <aside className="detail-aside">
            <div className="aside-cta">
              <span className="eyebrow">Free Guidance</span>
              <h3 className="t-h3 mt-8">Apply to {country.name}</h3>
              <p className="small mt-8">Connect with authorized advisors for application shortlists and visa filing.</p>
              <LeadForm id="dest-aside" compact country={country.id} cta="Talk to an Adviser" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

