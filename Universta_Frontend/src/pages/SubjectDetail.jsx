import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Icon from '../components/common/Icon';
import LeadForm from '../components/common/LeadForm';
import { getSubject, specs, universities, countries } from '../data/mockData';

export default function SubjectDetail() {
  const { id } = useParams();
  const subject = getSubject(id);

  if (!subject) {
    return <Navigate to="/subjects" replace />;
  }

  return (
    <main id="main">
      <section className="detail-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              ['Home', '/'],
              ['Subjects', '/subjects'],
              [subject.name, `/subjects/${subject.id}`]
            ]}
          />
          <div className="head" style={{ marginTop: '24px' }}>
            <span className="ico-tile" style={{ width: '64px', height: '64px' }}>
              <Icon name={subject.icon} style={{ width: '32px', height: '32px' }} />
            </span>
            <div className="head-main">
              <span className="eyebrow">Subject guide</span>
              <h1 className="t-h1">{subject.name}</h1>
              <p className="lead">{subject.desc}</p>
            </div>
            <div className="actions" style={{ marginTop: '8px' }}>
              <a className="btn btn-primary" href="#advice">
                Talk to an adviser
              </a>
            </div>
          </div>

          <div className="facts mt-32">
            <div className="fact">
              <div className="k"><Icon name="layers" /> Specializations</div>
              <div className="v">{subject.specs.length} fields</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="briefcase" /> Top Careers</div>
              <div className="v">{subject.careers[0]}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="clock" /> Duration</div>
              <div className="v">1–4 years</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="wallet" /> Typical starting</div>
              <div className="v">[SALARY RANGE]</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-32">
        <div className="detail">
          <div className="detail-main">
            <section>
              <h2 className="t-h2">Specializations in {subject.name}</h2>
              <p className="sec-intro">Choose a pathway to explore focused coursework and career opportunities.</p>
              <div className="grid g-2 gap-16 mt-24">
                {subject.specs.map((sid) => {
                  const spec = specs[sid];
                  return (
                    <div key={sid} className="card">
                      <h3 className="card-title">
                        <Link to={`/specializations/${sid}`}>{spec?.name || sid}</Link>
                      </h3>
                      <div className="mt-8">
                        <p className="small muted">Key modules:</p>
                        <ul className="bullets mt-8">
                          {spec?.mods?.map((m, idx) => (
                            <li key={idx}>{m}</li>
                          ))}
                        </ul>
                      </div>
                      <Link className="link-arrow mt-16" to={`/specializations/${sid}`}>
                        Explore specialization <Icon name="arrowR" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="mt-32">
              <h2 className="t-h2">Career Outcomes</h2>
              <p className="sec-intro">Graduates in {subject.name} work across global companies and research institutions.</p>
              <ul className="ticks mt-16">
                {subject.careers.map((career, idx) => (
                  <li key={idx}>
                    <Icon name="check" />
                    <span><strong>{career}</strong> — industry and research roles worldwide</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="detail-aside">
            <div className="aside-cta">
              <span className="eyebrow">Expert help</span>
              <h3 className="t-h3 mt-8">Study {subject.name} abroad</h3>
              <p className="small mt-8">Get personalized course matching, eligibility checks, and visa advice.</p>
              <LeadForm id="subject-aside" compact cta="Get Free Consultation" />
            </div>

            <div className="card mt-24">
              <h3 className="t-h4">Top Destinations for {subject.name}</h3>
              <ul className="mt-16">
                {countries.slice(0, 5).map((c) => (
                  <li key={c.id} style={{ padding: '6px 0' }}>
                    <Link className="link-arrow" to={`/destinations/${c.id}`} style={{ fontWeight: 500 }}>
                      {c.name} <Icon name="arrowR" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

