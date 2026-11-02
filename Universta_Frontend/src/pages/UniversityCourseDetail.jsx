import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Icon from '../components/common/Icon';
import LeadForm from '../components/common/LeadForm';
import {
  getUniversity,
  getCountry,
  getCourse,
  getLevel,
  programmes
} from '../data/mockData';

export default function UniversityCourseDetail() {
  const { id, courseId } = useParams();
  const uni = getUniversity(id);

  if (!uni) return <Navigate to="/universities" replace />;

  const prog = programmes.find((p) => p.uni === uni.id && (p.id === courseId || p.course === courseId));
  const country = getCountry(uni.country);
  const course = prog ? getCourse(prog.course) : getCourse(courseId.split('-')[0]);

  const title = prog?.title || `${course?.name || courseId} at ${uni.name}`;

  return (
    <main id="main">
      <section className="detail-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              ['Home', '/'],
              ['Universities', '/universities'],
              [uni.name, `/universities/${uni.id}`],
              [title, '']
            ]}
          />
          <div className="head" style={{ marginTop: '24px' }}>
            <span className="code-tile" style={{ fontSize: '18px', width: '56px', height: '56px' }}>
              {uni.code}
            </span>
            <div className="head-main">
              <span className="eyebrow">{uni.name} · {uni.city}, {country?.name}</span>
              <h1 className="t-h1">{title}</h1>
              <p className="lead">{course?.desc || 'Comprehensive degree curriculum tailored for global industry leaders.'}</p>
            </div>
            <div className="actions" style={{ marginTop: '8px' }}>
              <a className="btn btn-primary" href="#advice">
                Apply for this Degree
              </a>
            </div>
          </div>

          <div className="facts mt-32">
            <div className="fact">
              <div className="k"><Icon name="clock" /> Duration</div>
              <div className="v">{prog?.dur || '1–2 years'}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="calendar" /> Main Intake</div>
              <div className="v">{prog?.intake || 'September'}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="wallet" /> Tuition</div>
              <div className="v">[FEE] / year</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="filecheck" /> English Requirement</div>
              <div className="v">IELTS [SCORE] / TOEFL [SCORE]</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-32">
        <div className="detail">
          <div className="detail-main">
            <section>
              <h2 className="t-h2">Programme Overview & Modules</h2>
              <p className="sec-intro">
                Offered by the Faculty of {course?.name || 'Studies'} at {uni.name}. Combines foundational theory with applied research and practical team projects.
              </p>
              <div className="card mt-16">
                <h4 className="t-h4">Key Coursework Highlights:</h4>
                <ul className="bullets mt-16">
                  <li>Advanced methodologies in {course?.name || 'discipline'}</li>
                  <li>Applied computational frameworks and laboratory coursework</li>
                  <li>Industry placement or supervised master's dissertation project</li>
                  <li>Electives tailored towards industry leadership and research</li>
                </ul>
              </div>
            </section>

            <section className="mt-32">
              <h2 className="t-h2">Admission Criteria & Documents</h2>
              <div className="card mt-16">
                <ul className="ticks">
                  <li><Icon name="check" /><span>Recognized undergraduate bachelor's degree with minimum [GPA] equivalent</span></li>
                  <li><Icon name="check" /><span>English proficiency score (IELTS 6.5–7.0 / TOEFL 90–100 or equivalent)</span></li>
                  <li><Icon name="check" /><span>Statement of Purpose (SOP) detailing academic and career objectives</span></li>
                  <li><Icon name="check" /><span>Two academic letters of recommendation (LOR)</span></li>
                </ul>
              </div>
            </section>
          </div>

          <aside className="detail-aside">
            <div className="aside-cta">
              <span className="eyebrow">Free Application Help</span>
              <h3 className="t-h3 mt-8">Apply to {uni.name}</h3>
              <p className="small mt-8">Receive personalized assistance for document evaluation and offer letters.</p>
              <LeadForm id="uni-course-aside" compact country={uni.country} cta="Start My Application" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

