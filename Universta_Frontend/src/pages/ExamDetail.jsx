import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Icon from '../components/common/Icon';
import LeadForm from '../components/common/LeadForm';
import { getExam } from '../data/mockData';

export default function ExamDetail() {
  const { id } = useParams();
  const exam = getExam(id);

  if (!exam) {
    return <Navigate to="/exams" replace />;
  }

  return (
    <main id="main">
      <section className="detail-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              ['Home', '/'],
              ['Exams', '/exams'],
              [exam.name, `/exams/${exam.id}`]
            ]}
          />
          <div className="head" style={{ marginTop: '24px' }}>
            <span className="code-tile" style={{ fontSize: '18px', width: '56px', height: '56px' }}>
              {exam.name.split(' ')[0]}
            </span>
            <div className="head-main">
              <span className="eyebrow">{exam.type}</span>
              <h1 className="t-h1">{exam.name}</h1>
              <p className="lead">{exam.full}</p>
            </div>
            <div className="actions" style={{ marginTop: '8px' }}>
              <a className="btn btn-primary" href="#advice">
                Find Prep Coaching
              </a>
            </div>
          </div>

          <div className="facts mt-32">
            <div className="fact">
              <div className="k"><Icon name="trend" /> Score Scale</div>
              <div className="v">{exam.range}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="globe" /> Delivery Mode</div>
              <div className="v">{exam.mode}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="check" /> Where Accepted</div>
              <div className="v">{exam.accepted}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-32">
        <div className="detail">
          <div className="detail-main">
            <section>
              <h2 className="t-h2">Test Sections & Structure</h2>
              <div className="grid g-2 gap-16 mt-16">
                {exam.parts.map((part, idx) => (
                  <div key={idx} className="card">
                    <span className="tag tag-cloud">Part {idx + 1}</span>
                    <h4 className="t-h4 mt-8">{part}</h4>
                    <p className="small muted mt-8">Evaluates key competency and time-bound problem solving.</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="detail-aside">
            <div className="aside-cta">
              <span className="eyebrow">Free Prep Consultation</span>
              <h3 className="t-h3 mt-8">Prepare for {exam.name}</h3>
              <p className="small mt-8">Get a free diagnostic score assessment and connect with accredited tutors.</p>
              <LeadForm id="exam-aside" compact cta="Get Free Diagnostic" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

