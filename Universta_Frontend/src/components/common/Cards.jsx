import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { getCountry, getSubject, getLevel, getCourse, getUniversity, programmesFor, specs } from '../../data/mockData';

export function DestinationCard({ country }) {
  return (
    <Link
      className="card result"
      to={`/destinations/${country.id}`}
      style={{ padding: 0, overflow: 'hidden' }}
    >
      <div className="photo" style={{ height: '120px', border: 0, borderRadius: 0 }}>
        [CITY PHOTO] {country.capital}
      </div>
      <div style={{ padding: '20px' }}>
        <div className="row between">
          <h3 className="card-title">{country.name}</h3>
          <span className="tag tag-eyebrow">{country.code}</span>
        </div>
        <div className="card-meta mt-8">
          <span>
            <Icon name="calendar" />
            {country.intakes.join(', ')}
          </span>
        </div>
        <div className="mt-16">
          <div className="tags">
            {country.tags.map((t, i) => (
              <span key={i} className="tag tag-cloud">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function SubjectCard({ subject, compact = false }) {
  if (compact) {
    return (
      <Link className="card" to={`/subjects/${subject.id}`} style={{ padding: '20px' }}>
        <span className="ico-tile">
          <Icon name={subject.icon} />
        </span>
        <h3 className="card-title mt-16" style={{ fontSize: '16px', lineHeight: '22px' }}>
          {subject.name}
        </h3>
        <p className="caption mt-8">{subject.specs.length} specializations</p>
      </Link>
    );
  }

  return (
    <div className="card result">
      <div className="row" style={{ alignItems: 'flex-start', gap: '16px' }}>
        <span className="ico-tile">
          <Icon name={subject.icon} />
        </span>
        <div style={{ flex: 1 }}>
          <h3 className="card-title">
            <Link className="stretched" to={`/subjects/${subject.id}`} style={{ color: 'inherit' }}>
              {subject.name}
            </Link>
          </h3>
          <p className="muted small mt-8">{subject.desc}</p>
          <div className="tags mt-16 above">
            {subject.specs.map((sid) => (
              <Link key={sid} className="tag" to={`/specializations/${sid}`}>
                {specs[sid]?.name || sid}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function UniversityCard({ university, onCompare, isCompared }) {
  const [saved, setSaved] = useState(false);
  const country = getCountry(university.country);

  return (
    <article className="card rcard result">
      <span className="code-tile">{university.code}</span>
      <div>
        <h3 className="card-title">
          <Link className="stretched" to={`/universities/${university.id}`} style={{ color: 'inherit' }}>
            {university.name}
          </Link>
        </h3>
        <div className="card-meta mt-8">
          <span>
            <Icon name="pin" /> {university.city}, {country?.name}
          </span>
          <span>
            <Icon name="landmark" /> {university.type} · Founded {university.founded}
          </span>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="k">World ranking</div>
            <div className="v">[#]</div>
          </div>
          <div className="stat">
            <div className="k">Tuition from</div>
            <div className="v">[FEE] / yr</div>
          </div>
          <div className="stat">
            <div className="k">Courses</div>
            <div className="v">[NUMBER]</div>
          </div>
          <div className="stat">
            <div className="k">Intakes</div>
            <div className="v">{country?.intakes.slice(0, 2).join(', ')}</div>
          </div>
        </div>
      </div>
      <div className="side above">
        <button
          className={`icon-btn ${saved ? 'is-on' : ''}`}
          type="button"
          aria-label="Save to shortlist"
          onClick={() => setSaved(!saved)}
        >
          <Icon name="bookmark" className="ico-sm" />
        </button>
        <label className="check small" style={{ fontSize: '14px' }}>
          <input
            type="checkbox"
            checked={isCompared}
            onChange={(e) => onCompare && onCompare(university.code, e.target.checked)}
          />{' '}
          Compare
        </label>
      </div>
    </article>
  );
}

export function CourseCard({ course }) {
  const s = getSubject(course.subject);
  const progCount = programmesFor({ course: course.id }).length;

  return (
    <Link className="card result" to={`/courses/${course.id}`}>
      <div className="row between">
        <span className="ico-tile">
          <Icon name={s?.icon || 'book'} />
        </span>
        <span className="caption">{progCount} programmes listed</span>
      </div>
      <h3 className="card-title mt-16">{course.name}</h3>
      <p className="muted small mt-8">{course.desc}</p>
      <div className="mt-16">
        <div className="tags">
          {course.levels.map((l) => (
            <span key={l} className="tag tag-cloud">{getLevel(l)?.name || l}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function ProgrammeCard({ programme, showUni = true }) {
  const u = getUniversity(programme.uni);
  const c = getCountry(programme.country);

  return (
    <article className="card result">
      <div className="card-head">
        <div>
          {showUni && <span className="tag tag-eyebrow">{c?.code}</span>}
          <h3 className="card-title mt-8">
            <Link className="stretched" to={`/universities/${programme.uni}/courses/${programme.id}`} style={{ color: 'inherit' }}>
              {programme.title}
            </Link>
          </h3>
          {showUni && (
            <p className="muted small mt-8">
              {u?.name} · {u?.city}
            </p>
          )}
        </div>
        <span className="caption" style={{ whiteSpace: 'nowrap' }}>
          {programme.intake} intake
        </span>
      </div>
      <div className="card-meta mt-16">
        <span><Icon name="wallet" /> [FEE] / year</span>
        <span><Icon name="clock" /> {programme.dur}</span>
        <span><Icon name="filecheck" /> IELTS [SCORE]</span>
      </div>
    </article>
  );
}

export function ScholarshipCard({ scholarship, uniId }) {
  const href = uniId ? `/universities/${uniId}/scholarships/${scholarship.id}` : `/scholarships/${scholarship.id}`;
  const c = getCountry(scholarship.country);

  return (
    <article className="card result">
      <div className="card-head">
        <span className="ico-tile">
          <Icon name="award" />
        </span>
        <span className={`tag ${scholarship.funding === 'Fully funded' ? 'tag-success' : 'tag-cloud'}`}>
          {scholarship.funding}
        </span>
      </div>
      <h3 className="card-title mt-16">
        <Link className="stretched" to={href} style={{ color: 'inherit' }}>
          {scholarship.name}
        </Link>
      </h3>
      <p className="muted small mt-8">
        {scholarship.provider} · {c ? c.name : 'Multiple countries'}
      </p>
      <div className="card-foot">
        <span className="card-meta">
          <span>
            <Icon name="cap" /> {scholarship.levels.map((l) => getLevel(l)?.name || l).join(', ')}
          </span>
        </span>
        <span className="caption">Deadline [DATE]</span>
      </div>
    </article>
  );
}

export function ExamCard({ exam }) {
  return (
    <Link className="card result" to={`/exams/${exam.id}`}>
      <div className="row between">
        <span className="code-tile" style={{ fontSize: '12px', width: 'auto', padding: '0 12px' }}>
          {exam.name.split(' ')[0]}
        </span>
        <span className="tag tag-cloud">{exam.type}</span>
      </div>
      <h3 className="card-title mt-16">{exam.name}</h3>
      <p className="muted small mt-8">{exam.full}</p>
      <div className="card-meta mt-16">
        <span><Icon name="trend" /> Score {exam.range}</span>
        <span><Icon name="wallet" /> [FEE]</span>
      </div>
    </Link>
  );
}

export function ExpertCard({ expert, kind = 'consultant' }) {
  const isCoach = kind === 'coaching';
  const href = isCoach ? `/coaching/${expert.id}` : `/consultants/${expert.id}`;
  const chips = isCoach
    ? expert.exams.map((e) => e.toUpperCase())
    : expert.dest.map((d) => getCountry(d)?.code || d);

  return (
    <article className="card rcard result">
      <span className="code-tile">[LOGO]</span>
      <div>
        <div className="row row-wrap" style={{ gap: '8px 12px' }}>
          <h3 className="card-title">
            <Link className="stretched" to={href} style={{ color: 'inherit' }}>
              {isCoach ? `Institute in ${expert.city}` : `Consultant in ${expert.city}`}
            </Link>
          </h3>
          <span className="verified">
            <Icon name="shield" /> Verified
          </span>
        </div>
        <div className="card-meta mt-8">
          <span>
            <Icon name="pin" /> {expert.city} {expert.city === 'Online' ? '' : `, ${expert.country}`}
          </span>
          <span>
            <Icon name={isCoach ? 'board' : 'message'} />
            {isCoach ? expert.tag : expert.services?.slice(0, 2).join(' · ')}
          </span>
          <span>
            <Icon name="globe" /> {expert.mode}
          </span>
        </div>
        <div className="row row-wrap mt-16" style={{ gap: '8px' }}>
          <div className="tags">
            {chips.map((c, i) => (
              <span key={i} className="tag">{c}</span>
            ))}
          </div>
          <span className="rating" style={{ marginLeft: '4px' }}>
            <Icon name="star" /> [RATING] <span className="caption">· [N] reviews</span>
          </span>
        </div>
      </div>
      <div className="side above">
        <Link className="btn btn-outline btn-sm" to={href}>
          View profile
        </Link>
        <a className="btn btn-ghost btn-sm" href="#advice">
          Contact
        </a>
      </div>
    </article>
  );
}

