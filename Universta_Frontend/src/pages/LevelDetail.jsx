import React from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Icon from '../components/common/Icon';
import LeadForm from '../components/common/LeadForm';
import { ProgrammeCard } from '../components/common/Cards';
import {
  getSubject,
  getCourse,
  getLevel,
  getScholarship,
  specs,
  programmesFor,
  countries
} from '../data/mockData';

export default function LevelDetail() {
  const { id, level } = useParams();
  const location = useLocation();

  const isSubject = location.pathname.startsWith('/subjects');
  const isSpec = location.pathname.startsWith('/specializations');
  const isCourse = location.pathname.startsWith('/courses');
  const isScholarship = location.pathname.startsWith('/scholarships');

  const lvlObj = getLevel(level);

  let title = '';
  let parentName = '';
  let parentHref = '';
  let desc = '';
  let progs = [];

  if (isSubject) {
    const subj = getSubject(id);
    if (!subj) return <Navigate to="/subjects" replace />;
    parentName = subj.name;
    parentHref = `/subjects/${subj.id}`;
    title = `${lvlObj?.name || level} in ${subj.name}`;
    desc = `Explore ${lvlObj?.long?.toLowerCase() || level} options in ${subj.name}. Compare curriculum, duration, entry requirements, and top universities.`;
    progs = programmesFor({ level }).filter((p) => {
      const c = getCourse(p.course);
      return c && c.subject === subj.id;
    });
  } else if (isSpec) {
    const spec = specs[id];
    if (!spec) return <Navigate to="/subjects" replace />;
    const parentSubj = getSubject(spec.subject);
    parentName = spec.name;
    parentHref = `/specializations/${id}`;
    title = `${lvlObj?.name || level} in ${spec.name}`;
    desc = `Specialized ${lvlObj?.long?.toLowerCase() || level} curriculum focused on ${spec.name} within ${parentSubj?.name || 'the field'}.`;
    progs = programmesFor({ level });
  } else if (isCourse) {
    const course = getCourse(id);
    if (!course) return <Navigate to="/courses" replace />;
    parentName = course.name;
    parentHref = `/courses/${course.id}`;
    title = `${lvlObj?.name || level} in ${course.name}`;
    desc = `Search accredited ${lvlObj?.name || level} programmes in ${course.name} across leading universities.`;
    progs = programmesFor({ course: course.id, level });
  } else if (isScholarship) {
    const scholarship = getScholarship(id);
    if (!scholarship) return <Navigate to="/scholarships" replace />;
    parentName = scholarship.name;
    parentHref = `/scholarships/${scholarship.id}`;
    title = `${scholarship.name} — ${lvlObj?.name || level}`;
    desc = `Specific eligibility rules, stipend details, and deadlines for ${lvlObj?.name || level} applicants.`;
  }

  return (
    <main id="main">
      <section className="detail-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              ['Home', '/'],
              [isSubject ? 'Subjects' : isSpec ? 'Specializations' : isCourse ? 'Courses' : 'Scholarships', isSubject ? '/subjects' : isSpec ? '/subjects' : isCourse ? '/courses' : '/scholarships'],
              [parentName, parentHref],
              [`${lvlObj?.name || level} Level`, '']
            ]}
          />
          <div className="head" style={{ marginTop: '24px' }}>
            <span className="ico-tile" style={{ width: '56px', height: '56px' }}>
              <Icon name="cap" style={{ width: '28px', height: '28px' }} />
            </span>
            <div className="head-main">
              <span className="eyebrow">{lvlObj?.long || 'Degree Level'}</span>
              <h1 className="t-h1">{title}</h1>
              <p className="lead">{desc}</p>
            </div>
            <div className="actions" style={{ marginTop: '8px' }}>
              <a className="btn btn-primary" href="#advice">
                Get Shortlist & Eligibility
              </a>
            </div>
          </div>

          <div className="facts mt-32">
            <div className="fact">
              <div className="k"><Icon name="clock" /> Typical Duration</div>
              <div className="v">{lvlObj?.dur || '1–2 years'}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="cap" /> Degree Type</div>
              <div className="v">{lvlObj?.name || level}</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="users" /> Designed For</div>
              <div className="v">{lvlObj?.for?.slice(0, 32) || 'Graduates and professionals'}...</div>
            </div>
            <div className="fact">
              <div className="k"><Icon name="wallet" /> Tuition Range</div>
              <div className="v">[FEE] / yr</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-32">
        <div className="detail">
          <div className="detail-main">
            {progs.length > 0 && (
              <section>
                <h2 className="t-h2">Universities Offering this {lvlObj?.name || level}</h2>
                <p className="sec-intro">Compare accredited degree programmes, tuition fees, and application intakes:</p>
                <div className="results mt-16">
                  {progs.map((p) => (
                    <ProgrammeCard key={p.id} programme={p} />
                  ))}
                </div>
              </section>
            )}

            <section className="mt-32">
              <h2 className="t-h2">Cost & Post-Study Work by Country</h2>
              <div className="table-wrap mt-16">
                <table className="tbl">
                  <thead>
                    <tr>
                      <th>Destination</th>
                      <th>Typical Tuition / yr</th>
                      <th>Living Cost / yr</th>
                      <th>Post-Study Work Route</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countries.slice(0, 6).map((c) => (
                      <tr key={c.id}>
                        <td>
                          <Link to={`/destinations/${c.id}`}><strong>{c.name}</strong></Link>
                        </td>
                        <td>[FEE]</td>
                        <td>[COST]</td>
                        <td>{c.psw}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <aside className="detail-aside">
            <div className="aside-cta">
              <span className="eyebrow">Free Guidance</span>
              <h3 className="t-h3 mt-8">Apply for {lvlObj?.name || level}</h3>
              <p className="small mt-8">Check entry requirements, GRE/GMAT/IELTS waivers, and application deadlines.</p>
              <LeadForm id="level-aside" compact cta="Check My Eligibility" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

