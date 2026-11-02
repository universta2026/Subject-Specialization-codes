import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Icon from '../components/common/Icon';
import LeadForm from '../components/common/LeadForm';
import { ProgrammeCard, ScholarshipCard } from '../components/common/Cards';
import { getUniversity, getCountry, programmesFor, scholarships } from '../data/mockData';

export default function UniversityDetail() {
  const { id } = useParams();
  const uni = getUniversity(id);

  if (!uni) {
    return <Navigate to="/universities" replace />;
  }

  const country = getCountry(uni.country);
  const uniProgs = programmesFor({ uni: uni.id });
  const uniScholarships = scholarships.filter((s) => s.uni === uni.id || s.country === uni.country);

  return (
    <main id="main">
      <section className="detail-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              ['Home', '/'],
              ['Universities', '/universities'],
              [uni.name, `/universities/${uni.id}`]
            ]}
          />
          <div className="head" style={{ marginTop: '24px' }}>
            <span className="code-tile" style={{ fontSize: '20px', width: '56px', height: '56px' }}>
              {uni.code}
            </span>
            <div className="head-main">
              <span className="eyebrow">University profile</span>
              <h1 className="t-h1">{uni.name}</h1>
              <div className="card-meta mt-8" style={{ fontSize: '15px' }}>
                <span><Icon name="pin" /> {uni.city}, {country?.name}</span>
                <span><Icon name="landmark" /> {uni.type} University · Founded {uni.founded}</span>
              </div>
            </div>
            <div className="actions" style={{ marginTop: '8px' }}>
              <a className="btn btn-primary" href="#advice">
                Check Admission Eligibility
              </a>
            </div>
          </div>

          <div className="facts mt-32">
            <div className="fact">
              <div className="k"><Icon name="trend" /> World Ranking</div>
              <div className="v">[TOP 50]</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="cap" /> Listed Programmes</div>
              <div className="v">{uniProgs.length} degrees</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="wallet" /> Tuition from</div>
              <div className="v">[FEE] / year</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="calendar" /> Main Intakes</div>
              <div className="v">{country?.intakes.join(', ')}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-32">
        <div className="detail">
          <div className="detail-main">
            <section>
              <h2 className="t-h2">Available Programmes & Courses</h2>
              <div className="results mt-16">
                {uniProgs.map((p) => (
                  <ProgrammeCard key={p.id} programme={p} showUni={false} />
                ))}
              </div>
            </section>

            <section className="mt-32">
              <h2 className="t-h2">Available Scholarships & Financial Aid</h2>
              <div className="results mt-16">
                {uniScholarships.slice(0, 3).map((s) => (
                  <ScholarshipCard key={s.id} scholarship={s} uniId={uni.id} />
                ))}
              </div>
            </section>
          </div>

          <aside className="detail-aside">
            <div className="aside-cta">
              <span className="eyebrow">Direct Application</span>
              <h3 className="t-h3 mt-8">Apply to {uni.name}</h3>
              <p className="small mt-8">Receive support on SOP editing, recommendation letters, and scholarship filing.</p>
              <LeadForm id="uni-aside" compact country={uni.country} cta="Start Application" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

