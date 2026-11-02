import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Icon from '../components/common/Icon';
import LeadForm from '../components/common/LeadForm';
import { specs, getSubject, universities } from '../data/mockData';

export default function SpecializationDetail() {
  const { id } = useParams();
  const spec = specs[id];

  if (!spec) {
    return <Navigate to="/subjects" replace />;
  }

  const parentSubject = getSubject(spec.subject);

  return (
    <main id="main">
      <section className="detail-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              ['Home', '/'],
              ['Subjects', '/subjects'],
              [parentSubject ? parentSubject.name : 'Subject', parentSubject ? `/subjects/${parentSubject.id}` : '/subjects'],
              [spec.name, `/specializations/${id}`]
            ]}
          />
          <div className="head" style={{ marginTop: '24px' }}>
            <div className="head-main">
              <span className="eyebrow">Specialization</span>
              <h1 className="t-h1">{spec.name}</h1>
              <p className="lead">
                A focused discipline within {parentSubject ? parentSubject.name : 'this subject'}.
              </p>
            </div>
            <div className="actions" style={{ marginTop: '8px' }}>
              <a className="btn btn-primary" href="#advice">
                Find matching courses
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-32">
        <div className="detail">
          <div className="detail-main">
            <section>
              <h2 className="t-h2">Core Curriculum & Modules</h2>
              <p className="sec-intro">Representative modules typically covered in top accredited degree programmes:</p>
              <div className="grid g-2 gap-16 mt-24">
                {spec.mods.map((mod, idx) => (
                  <div key={idx} className="card">
                    <span className="tag tag-cloud">Module {idx + 1}</span>
                    <h4 className="t-h4 mt-8">{mod}</h4>
                    <p className="small muted mt-8">Covers fundamental principles, applied frameworks, and real-world case studies.</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-32">
              <h2 className="t-h2">Available Study Levels</h2>
              <div className="table-wrap mt-16">
                <table className="tbl">
                  <thead>
                    <tr>
                      <th>Degree Level</th>
                      <th>Typical Duration</th>
                      <th>Target Background</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bachelor’s (BSc / BA)</td>
                      <td>3–4 years</td>
                      <td>Secondary school completion</td>
                    </tr>
                    <tr>
                      <td>Master’s (MSc / MA)</td>
                      <td>1–2 years</td>
                      <td>Undergraduate degree in related area</td>
                    </tr>
                    <tr>
                      <td>PhD / Doctorate</td>
                      <td>3–5 years</td>
                      <td>Research proposal + Master’s degree</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <aside className="detail-aside">
            <div className="aside-cta">
              <span className="eyebrow">Free Guidance</span>
              <h3 className="t-h3 mt-8">Apply for {spec.name}</h3>
              <p className="small mt-8">Talk with an academic counselor about tuition fees, deadlines, and scholarships.</p>
              <LeadForm id="spec-aside" compact cta="Ask a Mentor" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

