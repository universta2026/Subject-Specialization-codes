import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/common/Icon';
import SearchBar from '../components/common/SearchBar';
import LeadForm from '../components/common/LeadForm';
import {
  DestinationCard,
  SubjectCard,
  ScholarshipCard,
  ExamCard,
  ExpertCard
} from '../components/common/Cards';
import {
  countries,
  subjects,
  scholarships,
  exams,
  consultants,
  coaching,
  guides
} from '../data/mockData';

const SEARCH_TABS = [
  { label: 'Courses', placeholder: 'What do you want to study? e.g. MSc Data Science', path: '/courses' },
  { label: 'Universities', placeholder: 'Search any university', path: '/universities' },
  { label: 'Scholarships', placeholder: 'Your subject or level, e.g. Master’s in Engineering', path: '/scholarships' },
  { label: 'Consultants & coaching', placeholder: 'What do you need help with? e.g. IELTS coaching', path: '/consultants' }
];

const SECTIONS = [
  { key: 'subjects', name: 'Subjects', long: 'Subjects & specializations', href: '/subjects', icon: 'book', desc: 'Find the field that fits you — from AI and nursing to architecture.', cta: 'Browse subjects' },
  { key: 'destinations', name: 'Destinations', long: 'Study destinations', href: '/destinations', icon: 'globe', desc: 'Compare countries by cost, intakes, work rights and lifestyle.', cta: 'Explore countries' },
  { key: 'universities', name: 'Universities', long: 'Universities', href: '/universities', icon: 'landmark', desc: 'Profiles, fees, entry requirements and student life.', cta: 'Find universities' },
  { key: 'courses', name: 'Courses', long: 'Courses', href: '/courses', icon: 'cap', desc: 'Search programmes by level, intake, duration and budget.', cta: 'Search courses' },
  { key: 'scholarships', name: 'Scholarships', long: 'Scholarships', href: '/scholarships', icon: 'award', desc: 'Government, university and private funding — with real deadlines.', cta: 'Find funding' },
  { key: 'exams', name: 'Exams', long: 'Exams', href: '/exams', icon: 'filecheck', desc: 'IELTS, TOEFL, PTE, GRE, GMAT and SAT — formats, fees and scores.', cta: 'Compare tests' },
  { key: 'student-visa', name: 'Visa', long: 'Student visa', href: '/student-visa', icon: 'passport', desc: 'Step-by-step visa guides, document checklists and timelines.', cta: 'Read visa guides' },
  { key: 'coaching', name: 'Coaching', long: 'Coaching', href: '/coaching', icon: 'board', desc: 'Test-prep centres near you or online, with real student reviews.', cta: 'Find coaching' },
  { key: 'consultants', name: 'Consultants', long: 'Study abroad consultants', href: '/consultants', icon: 'message', desc: 'Verified advisers for shortlisting, applications and visas.', cta: 'Find a consultant' }
];

const JOURNEY = [
  { step: '01', title: 'Discover', desc: 'Explore subjects and countries that fit your goals and budget.', href: '/subjects' },
  { step: '02', title: 'Shortlist', desc: 'Compare universities and courses side by side.', href: '/universities' },
  { step: '03', title: 'Prepare', desc: 'Pick the right test and book your exam date.', href: '/exams' },
  { step: '04', title: 'Fund & apply', desc: 'Find scholarships, then send strong applications.', href: '/scholarships' },
  { step: '05', title: 'Visa & fly', desc: 'Follow a clear checklist from offer to arrival.', href: '/student-visa' }
];

export default function Home() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  return (
    <main id="main">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container wrap">
          <div>
            <span className="eyebrow">Every university. Every country.</span>
            <h1 className="t-display">
              Study <span className="hl">anywhere.</span>
              <br />
              Start here.
            </h1>
            <p className="lead">
              Explore subjects, countries, universities, courses, scholarships, exams, coaching, visas and consultants — and find the path that fits you.
            </p>

            <div className="search-tabs" role="tablist">
              {SEARCH_TABS.map((tab, idx) => (
                <button
                  key={tab.label}
                  type="button"
                  role="tab"
                  className={idx === activeTabIdx ? 'is-on' : ''}
                  onClick={() => setActiveTabIdx(idx)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <SearchBar
              placeholder={SEARCH_TABS[activeTabIdx].placeholder}
              targetPath={SEARCH_TABS[activeTabIdx].path}
            />

            <div className="quick-links">
              <span>Popular:</span>
              <Link to="/courses/computer-science">MS in Computer Science</Link>
              <Link to="/courses/mba">MBA</Link>
              <Link to="/scholarships/daad">Scholarships in Germany</Link>
              <Link to="/exams/ielts">IELTS</Link>
            </div>
          </div>

          <div className="hero-stack" aria-hidden="true">
            <div className="photo">
              <span className="ph">[HERO PHOTO]</span> Student arriving on campus, natural light
            </div>
            <div className="float" style={{ top: '32px', left: 0, width: '260px' }}>
              <div className="row between">
                <span className="tag tag-eyebrow">Canada</span>
                <span className="caption">Sept intake</span>
              </div>
              <div className="t-h4 mt-8">University of Toronto</div>
              <div className="caption mt-8" style={{ color: 'var(--slate-600)' }}>
                MSc Data Science · 2 years · [FEE] / yr
              </div>
            </div>
            <div className="float" style={{ top: '190px', right: '-8px', width: '220px' }}>
              <div className="row" style={{ gap: '12px' }}>
                <span className="ico-tile" style={{ width: '40px', height: '40px' }}>
                  <Icon name="award" />
                </span>
                <div>
                  <div className="caption">Scholarship</div>
                  <div style={{ fontWeight: 700 }}>DAAD · Germany</div>
                </div>
              </div>
              <div className="caption mt-8">Deadline [DATE]</div>
            </div>
            <div className="float ink" style={{ bottom: 0, left: '16px', width: '250px' }}>
              <div className="caption" style={{ color: 'var(--slate-200)' }}>
                Application status
              </div>
              <div className="t-h4" style={{ color: '#fff', marginTop: '4px' }}>
                Offer <span className="hl-amber">received</span>
              </div>
              <div className="caption mt-8" style={{ color: 'var(--slate-200)' }}>
                Next: student visa
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="section-sm bg-ink">
        <div className="container stats-band">
          <div>
            <div className="n"><span className="ph">500</span>+</div>
            <div className="l">Universities listed</div>
          </div>
          <div>
            <div className="n"><span className="ph">10</span></div>
            <div className="l">Study destinations</div>
          </div>
          <div>
            <div className="n"><span className="ph">1,000</span>+</div>
            <div className="l">Courses to compare</div>
          </div>
          <div>
            <div className="n"><span className="ph">200</span>+</div>
            <div className="l">Scholarships tracked</div>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Explore</span>
              <h2 className="t-h2">
                The whole study abroad world, <span className="hl">in one view</span>
              </h2>
              <p className="muted">
                Nine connected guides. Start anywhere — every page links to the next step of your journey.
              </p>
            </div>
          </div>
          <div className="grid g-3">
            {SECTIONS.map((s) => (
              <Link key={s.key} className="card" to={s.href}>
                <span className="ico-tile">
                  <Icon name={s.icon} />
                </span>
                <h3 className="card-title mt-16">{s.long}</h3>
                <p className="muted small mt-8">{s.desc}</p>
                <span className="link-arrow mt-16" style={{ color: 'var(--blue)' }}>
                  {s.cta} <Icon name="arrowR" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="section bg-cloud">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Study destinations</span>
              <h2 className="t-h2">Where do you want to study?</h2>
            </div>
            <Link className="link-arrow" to="/destinations">
              All countries <Icon name="arrowR" />
            </Link>
          </div>
          <div className="grid g-5">
            {countries.map((c) => (
              <DestinationCard key={c.id} country={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Subjects & specializations</span>
              <h2 className="t-h2">Start with what you love to learn</h2>
              <p className="muted">
                Pick a subject to see specializations, top universities, careers and the countries that do it best.
              </p>
            </div>
            <Link className="link-arrow" to="/subjects">
              All subjects <Icon name="arrowR" />
            </Link>
          </div>
          <div className="grid g-5">
            {subjects.map((s) => (
              <SubjectCard key={s.id} subject={s} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Your Journey */}
      <section className="section bg-cloud">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Your journey</span>
              <h2 className="t-h2">From first idea to first day on campus</h2>
            </div>
          </div>
          <div className="journey">
            {JOURNEY.map((j) => (
              <Link key={j.step} className="card" to={j.href}>
                <div className="n">STEP {j.step}</div>
                <h3 className="card-title mt-8">{j.title}</h3>
                <p className="muted small mt-8">{j.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships & Exams Side-by-Side */}
      <section className="section">
        <div className="container grid g-2" style={{ gap: '48px' }}>
          <div>
            <div className="sec-head">
              <div>
                <span className="eyebrow">Scholarships</span>
                <h2 className="t-h2">Funding you can apply for</h2>
              </div>
              <Link className="link-arrow" to="/scholarships">
                See all <Icon name="arrowR" />
              </Link>
            </div>
            <div className="grid gap-16">
              {scholarships.slice(0, 4).map((s) => (
                <Link
                  key={s.id}
                  className="card row"
                  to={`/scholarships/${s.id}`}
                  style={{ padding: '16px 20px' }}
                >
                  <span className="code-tile">{s.country === 'united-kingdom' ? 'UK' : s.country === 'united-states' ? 'US' : s.country === 'germany' ? 'DE' : 'EU'}</span>
                  <span style={{ flex: 1 }}>
                    <span className="card-title" style={{ fontSize: '16px', display: 'block' }}>
                      {s.name}
                    </span>
                    <span className="caption">
                      {s.funding} · {s.levels.join(', ')}
                    </span>
                  </span>
                  <span className="caption hide-sm">Deadline [DATE]</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="sec-head">
              <div>
                <span className="eyebrow">Exams</span>
                <h2 className="t-h2">Know which test you need</h2>
              </div>
              <Link className="link-arrow" to="/exams">
                Compare tests <Icon name="arrowR" />
              </Link>
            </div>
            <div className="grid gap-16">
              {exams.slice(0, 6).map((e) => (
                <Link
                  key={e.id}
                  className="card row between"
                  to={`/exams/${e.id}`}
                  style={{ padding: '16px 20px' }}
                >
                  <span>
                    <span className="card-title" style={{ fontSize: '16px' }}>{e.name}</span>{' '}
                    <span className="caption">{e.type}</span>
                  </span>
                  <Icon name="chevR" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultants & Coaching Preview */}
      <section className="section bg-cloud">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Consultants & coaching</span>
              <h2 className="t-h2">
                Find help you can <span className="hl">trust</span>
              </h2>
              <p className="muted">
                Compare verified consultants and coaching centres, read real student reviews, and contact them directly.
              </p>
            </div>
            <Link className="link-arrow" to="/consultants">
              All consultants <Icon name="arrowR" />
            </Link>
          </div>
          <div className="results">
            {consultants[0] && <ExpertCard expert={consultants[0]} kind="consultant" />}
            {coaching[2] && <ExpertCard expert={coaching[2]} kind="coaching" />}
            {consultants[2] && <ExpertCard expert={consultants[2]} kind="consultant" />}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Guides</span>
              <h2 className="t-h2">Honest answers to big questions</h2>
            </div>
            <a className="link-arrow" href="#advice">
              All guides <Icon name="arrowR" />
            </a>
          </div>
          <div className="grid g-4">
            {guides.map((g, i) => (
              <a key={i} className="card" href="#advice" style={{ padding: 0, overflow: 'hidden' }}>
                <div className="photo" style={{ height: '150px', border: 0, borderRadius: 0 }}>
                  [PHOTO]
                </div>
                <div style={{ padding: '20px' }}>
                  <span className="tag">{g.tag}</span>
                  <h3 className="card-title mt-16" style={{ fontSize: '16px', lineHeight: '22px' }}>
                    {g.title}
                  </h3>
                  <p className="caption mt-8">[N] min read</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Advice CTA Band */}
      <section className="section bg-ink" id="advice">
        <div className="container cta-band">
          <div>
            <span className="eyebrow">Free guidance</span>
            <h2 className="t-h1 mt-16">
              Not sure where to start? <span className="hl">Ask us.</span>
            </h2>
            <p className="lead mt-16">
              Tell us a little about your plans. We’ll match you with the right courses, scholarships and a verified expert — at no cost.
            </p>
            <div className="mt-32">
              <ul className="ticks">
                <li>
                  <Icon name="check" />
                  <span>A personal shortlist in [TIME]</span>
                </li>
                <li>
                  <Icon name="check" />
                  <span>No pressure, no hidden fees</span>
                </li>
                <li>
                  <Icon name="check" />
                  <span>For students from any country</span>
                </li>
              </ul>
            </div>
          </div>
          <LeadForm id="home-band" />
        </div>
      </section>
    </main>
  );
}

