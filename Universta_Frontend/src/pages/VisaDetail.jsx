import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Icon from '../components/common/Icon';
import LeadForm from '../components/common/LeadForm';
import { getCountry } from '../data/mockData';

export default function VisaDetail() {
  const { id } = useParams();
  const country = getCountry(id);

  if (!country) {
    return <Navigate to="/student-visa" replace />;
  }

  return (
    <main id="main">
      <section className="detail-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              ['Home', '/'],
              ['Student Visa', '/student-visa'],
              [country.name, `/student-visa/${country.id}`]
            ]}
          />
          <div className="head" style={{ marginTop: '24px' }}>
            <span className="code-tile" style={{ fontSize: '18px', width: '56px', height: '56px' }}>
              {country.code}
            </span>
            <div className="head-main">
              <span className="eyebrow">Student Visa Guide</span>
              <h1 className="t-h1">{country.name}: {country.visa}</h1>
              <p className="lead">
                Everything you need to apply for a student visa to {country.name}: eligibility, funds, and mandatory paperwork.
              </p>
            </div>
            <div className="actions" style={{ marginTop: '8px' }}>
              <a className="btn btn-primary" href="#advice">
                Get Visa Support
              </a>
            </div>
          </div>

          <div className="facts mt-32">
            <div className="fact">
              <div className="k"><Icon name="passport" /> Visa Subclass / Name</div>
              <div className="v">{country.visa}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="filecheck" /> Primary Document</div>
              <div className="v">{country.keyDoc}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="briefcase" /> Post-Study Route</div>
              <div className="v">{country.psw}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-32">
        <div className="detail">
          <div className="detail-main">
            <section>
              <h2 className="t-h2">Mandatory Document Checklist</h2>
              <div className="card mt-16">
                <ul className="ticks">
                  {country.docs.map((doc, idx) => (
                    <li key={idx}>
                      <Icon name="check" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-32">
              <h2 className="t-h2">Application Timeline & Steps</h2>
              <div className="steps mt-16">
                <div className="step">
                  <div>
                    <h4>1. Receive Unconditional Offer & {country.keyDoc}</h4>
                    <p>Pay required tuition deposit and receive your formal acceptance documentation.</p>
                  </div>
                </div>
                <div className="step">
                  <div>
                    <h4>2. Prepare Proof of Sufficient Funds</h4>
                    <p>Ensure bank balances or sponsorship letters meet minimum maintenance requirements for the mandated duration.</p>
                  </div>
                </div>
                <div className="step">
                  <div>
                    <h4>3. Complete Online Visa Application</h4>
                    <p>Submit online forms, pay health surcharges/application fees, and schedule biometric appointment.</p>
                  </div>
                </div>
                <div className="step">
                  <div>
                    <h4>4. Attend Biometrics & Interview</h4>
                    <p>Provide fingerprints, photograph, and present original credentials if requested.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="detail-aside">
            <div className="aside-cta">
              <span className="eyebrow">Free Visa Advice</span>
              <h3 className="t-h3 mt-8">Visa Assistance for {country.name}</h3>
              <p className="small mt-8">Connect with registered visa agents to ensure your financial evidence and paperwork are 100% compliant.</p>
              <LeadForm id="visa-aside" compact country={country.id} cta="Talk to a Visa Specialist" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

