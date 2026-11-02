import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function AllPages() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[['Home', '/'], ['All page templates', '']]} />
          <div className="mt-32">
            <span className="eyebrow">Prototype sitemap</span>
          </div>
          <h1 className="t-h1" style={{ marginTop: '8px' }}>
            All page templates
          </h1>
          <p className="lead">
            Every page in the prototype, grouped by section and study level.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tpl-tree" style={{ maxWidth: '800px', fontSize: '18px', lineHeight: '28px' }}>
            {/* Home */}
            <div className="tpl-group">
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                <li>
                  <Link to="/" style={{ color: 'var(--blue)', fontWeight: 600 }}>Home</Link>
                  <code style={{ fontSize: '13px', color: 'var(--slate-500)', marginLeft: '8px' }}>/</code>
                </li>
              </ul>
            </div>

            {/* Subjects */}
            <div className="tpl-group">
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                <li>
                  <Link to="/subjects" style={{ color: 'var(--blue)', fontWeight: 600 }}>Subjects</Link>
                  <code>/subjects</code>
                  <ul>
                    <li>
                      <Link to="/subjects/computer-science">Subject Detail</Link>
                      <code>/subjects/computer-science</code>
                      <ul>
                        <li>
                          <Link to="/subjects/computer-science/masters">Subject Level Detail</Link>
                          <code>/subjects/computer-science/masters</code>
                        </li>
                      </ul>
                    </li>
                    <li style={{ marginTop: '12px' }}>
                      <Link to="/specializations/artificial-intelligence">Specialization Detail</Link>
                      <code>/specializations/artificial-intelligence</code>
                      <ul>
                        <li>
                          <Link to="/specializations/artificial-intelligence/masters">Specialization Level Detail</Link>
                          <code>/specializations/artificial-intelligence/masters</code>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Destinations */}
            <div className="tpl-group">
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                <li>
                  <Link to="/destinations" style={{ color: 'var(--blue)', fontWeight: 600 }}>Study Abroad Destinations</Link>
                  <code>/destinations</code>
                  <ul>
                    <li>
                      <Link to="/destinations/canada">Destination Detail</Link>
                      <code>/destinations/canada</code>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Student Visa */}
            <div className="tpl-group">
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                <li>
                  <Link to="/student-visa" style={{ color: 'var(--blue)', fontWeight: 600 }}>Student Visa</Link>
                  <code>/student-visa</code>
                  <ul>
                    <li>
                      <Link to="/student-visa/canada">Country Visa Detail</Link>
                      <code>/student-visa/canada</code>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Universities */}
            <div className="tpl-group">
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                <li>
                  <Link to="/universities" style={{ color: 'var(--blue)', fontWeight: 600 }}>Universities</Link>
                  <code>/universities</code>
                  <ul>
                    <li>
                      <Link to="/universities/university-of-toronto">University Detail</Link>
                      <code>/universities/university-of-toronto</code>
                      <ul>
                        <li>
                          <Link to="/universities/university-of-toronto/courses/data-science-masters">University Course Detail</Link>
                          <code>/universities/university-of-toronto/courses/data-science-masters</code>
                        </li>
                        <li>
                          <Link to="/universities/university-of-toronto/scholarships/lester-b-pearson">University Scholarship Detail</Link>
                          <code>/universities/university-of-toronto/scholarships/lester-b-pearson</code>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Courses */}
            <div className="tpl-group">
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                <li>
                  <Link to="/courses" style={{ color: 'var(--blue)', fontWeight: 600 }}>Courses</Link>
                  <code>/courses</code>
                  <ul>
                    <li>
                      <Link to="/courses/data-science">Course Detail</Link>
                      <code>/courses/data-science</code>
                      <ul>
                        <li>
                          <Link to="/courses/data-science/masters">Course Level Detail</Link>
                          <code>/courses/data-science/masters</code>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Scholarships */}
            <div className="tpl-group">
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                <li>
                  <Link to="/scholarships" style={{ color: 'var(--blue)', fontWeight: 600 }}>Scholarships</Link>
                  <code>/scholarships</code>
                  <ul>
                    <li>
                      <Link to="/scholarships/chevening">Scholarship Detail</Link>
                      <code>/scholarships/chevening</code>
                      <ul>
                        <li>
                          <Link to="/scholarships/daad/masters">Scholarship Level Detail</Link>
                          <code>/scholarships/daad/masters</code>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Exams */}
            <div className="tpl-group">
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                <li>
                  <Link to="/exams" style={{ color: 'var(--blue)', fontWeight: 600 }}>Exams</Link>
                  <code>/exams</code>
                  <ul>
                    <li>
                      <Link to="/exams/ielts">Exam Detail</Link>
                      <code>/exams/ielts</code>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Coaching */}
            <div className="tpl-group">
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                <li>
                  <Link to="/coaching" style={{ color: 'var(--blue)', fontWeight: 600 }}>Coaching</Link>
                  <code>/coaching</code>
                  <ul>
                    <li>
                      <Link to="/coaching/institute-lagos">Coaching Institute Detail</Link>
                      <code>/coaching/institute-lagos</code>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Study Abroad Consultants */}
            <div className="tpl-group">
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                <li>
                  <Link to="/consultants" style={{ color: 'var(--blue)', fontWeight: 600 }}>Study Abroad Consultants</Link>
                  <code>/consultants</code>
                  <ul>
                    <li>
                      <Link to="/consultants/consultant-nairobi">Study Abroad Consultant Detail</Link>
                      <code>/consultants/consultant-nairobi</code>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
