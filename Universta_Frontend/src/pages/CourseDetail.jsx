import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Icon from '../components/common/Icon';
import LeadForm from '../components/common/LeadForm';
import { ProgrammeCard } from '../components/common/Cards';
import { getCourse, getSubject, getLevel, programmesFor } from '../data/mockData';

export default function CourseDetail() {
  const { id } = useParams();
  const course = getCourse(id);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const subject = getSubject(course.subject);
  const progs = programmesFor({ course: course.id });

  return (
    <main id="main">
      <section className="detail-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              ['Home', '/'],
              ['Courses', '/courses'],
              [course.name, `/courses/${course.id}`]
            ]}
          />
          <div className="head" style={{ marginTop: '24px' }}>
            <span className="ico-tile" style={{ width: '56px', height: '56px' }}>
              <Icon name={subject?.icon || 'book'} style={{ width: '28px', height: '28px' }} />
            </span>
            <div className="head-main">
              <span className="eyebrow">{subject?.name || 'Course'}</span>
              <h1 className="t-h1">{course.name}</h1>
              <p className="lead">{course.desc}</p>
            </div>
            <div className="actions" style={{ marginTop: '8px' }}>
              <a className="btn btn-primary" href="#advice">
                Find universities
              </a>
            </div>
          </div>

          <div className="facts mt-32">
            <div className="fact">
              <div className="k"><Icon name="cap" /> Levels</div>
              <div className="v">{course.levels.map((l) => getLevel(l)?.name || l).join(', ')}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="landmark" /> Listed Programmes</div>
              <div className="v">{progs.length} universities</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="clock" /> Duration</div>
              <div className="v">1–4 years</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="wallet" /> Tuition</div>
              <div className="v">[FEE] / yr</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-32">
        <div className="detail">
          <div className="detail-main">
            <section>
              <h2 className="t-h2">Universities offering {course.name}</h2>
              <div className="results mt-16">
                {progs.length > 0 ? (
                  progs.map((p) => <ProgrammeCard key={p.id} programme={p} />)
                ) : (
                  <p className="muted">Programmes for this course are being cataloged.</p>
                )}
              </div>
            </section>
          </div>

          <aside className="detail-aside">
            <div className="aside-cta">
              <span className="eyebrow">Expert Advice</span>
              <h3 className="t-h3 mt-8">Study {course.name}</h3>
              <p className="small mt-8">Let an adviser match you with the best department based on your profile.</p>
              <LeadForm id="course-aside" compact cta="Find Best University" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

