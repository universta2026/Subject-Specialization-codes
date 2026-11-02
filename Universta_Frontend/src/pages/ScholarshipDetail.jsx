import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Icon from '../components/common/Icon';
import LeadForm from '../components/common/LeadForm';
import { getScholarship, getCountry, getLevel } from '../data/mockData';

export default function ScholarshipDetail() {
  const { id } = useParams();
  const scholarship = getScholarship(id);

  if (!scholarship) {
    return <Navigate to="/scholarships" replace />;
  }

  const country = getCountry(scholarship.country);

  return (
    <main id="main">
      <section className="detail-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              ['Home', '/'],
              ['Scholarships', '/scholarships'],
              [scholarship.name, `/scholarships/${scholarship.id}`]
            ]}
          />
          <div className="head" style={{ marginTop: '24px' }}>
            <span className="ico-tile" style={{ width: '56px', height: '56px' }}>
              <Icon name="award" style={{ width: '28px', height: '28px' }} />
            </span>
            <div className="head-main">
              <span className="eyebrow">{scholarship.type} Scholarship</span>
              <h1 className="t-h1">{scholarship.name}</h1>
              <p className="lead">{scholarship.desc}</p>
            </div>
            <div className="actions" style={{ marginTop: '8px' }}>
              <a className="btn btn-primary" href="#advice">
                Check Eligibility
              </a>
            </div>
          </div>

          <div className="facts mt-32">
            <div className="fact">
              <div className="k"><Icon name="wallet" /> Coverage</div>
              <div className="v">{scholarship.funding}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="cap" /> Eligible Degrees</div>
              <div className="v">{scholarship.levels.map((l) => getLevel(l)?.name || l).join(', ')}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="landmark" /> Provider</div>
              <div className="v">{scholarship.provider}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="globe" /> Destination</div>
              <div className="v">{country ? country.name : 'Multiple Countries'}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-32">
        <div className="detail">
          <div className="detail-main">
            <section>
              <h2 className="t-h2">What this award covers</h2>
              <div className="card mt-16">
                <ul className="ticks">
                  {scholarship.covers.map((c, idx) => (
                    <li key={idx}>
                      <Icon name="check" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-32">
              <h2 className="t-h2">Eligibility Requirements</h2>
              <div className="card mt-16">
                <ul className="bullets">
                  {scholarship.elig.map((e, idx) => (
                    <li key={idx}>{e}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <aside className="detail-aside">
            <div className="aside-cta">
              <span className="eyebrow">Application Support</span>
              <h3 className="t-h3 mt-8">Apply for {scholarship.name}</h3>
              <p className="small mt-8">Review essays, letters of reference, and submission forms with a scholarship coach.</p>
              <LeadForm id="scholarship-aside" compact cta="Get Essay Review" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

