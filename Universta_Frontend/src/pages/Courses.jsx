import React, { useState } from 'react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import ListingLayout from '../components/common/ListingLayout';
import { CourseCard } from '../components/common/Cards';
import SearchBar from '../components/common/SearchBar';
import LeadForm from '../components/common/LeadForm';
import { courses, subjects, levels } from '../data/mockData';

export default function Courses() {
  const [activeFilters, setActiveFilters] = useState({});

  const filterConfigs = [
    {
      key: 'subject',
      title: 'Subject area',
      options: subjects.map((s) => ({
        value: s.id,
        label: s.name,
        count: courses.filter((c) => c.subject === s.id).length
      }))
    },
    {
      key: 'level',
      title: 'Study level',
      options: levels.map((l) => ({
        value: l.id,
        label: l.name,
        count: courses.filter((c) => c.levels.includes(l.id)).length
      }))
    }
  ];

  const handleFilterChange = (groupKey, value, isChecked) => {
    setActiveFilters((prev) => {
      const current = prev[groupKey] || [];
      const updated = isChecked ? [...current, value] : current.filter((v) => v !== value);
      return { ...prev, [groupKey]: updated };
    });
  };

  const handleClearFilters = () => setActiveFilters({});

  const filteredCourses = courses.filter((c) => {
    if (activeFilters.subject && activeFilters.subject.length > 0) {
      if (!activeFilters.subject.includes(c.subject)) return false;
    }
    if (activeFilters.level && activeFilters.level.length > 0) {
      if (!activeFilters.level.some((lvl) => c.levels.includes(lvl))) return false;
    }
    return true;
  });

  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[['Home', '/'], ['Courses', '/courses']]} />
          <div className="mt-32">
            <span className="eyebrow">Courses</span>
          </div>
          <h1 className="t-h1" style={{ marginTop: '8px' }}>
            Search global courses & degrees
          </h1>
          <p className="lead">
            Explore bachelor’s, master’s and doctorate programmes across hundreds of partner universities worldwide.
          </p>
          <SearchBar placeholder="What do you want to study? e.g. Data Science" targetPath="/courses" />
        </div>
      </section>

      <ListingLayout
        filters={filterConfigs}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        totalCount={filteredCourses.length}
        itemNoun="courses"
      >
        <div className="grid g-2 gap-16" style={{ width: '100%' }}>
          {filteredCourses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </ListingLayout>

      <section className="section bg-ink" id="advice">
        <div className="container cta-band">
          <div>
            <span className="eyebrow">Find your match</span>
            <h2 className="t-h1 mt-16">Compare course modules & entry criteria</h2>
            <p className="lead mt-16">
              Get detailed syllabus guides and entry requirement evaluations from experienced mentors.
            </p>
          </div>
          <LeadForm id="courses-band" />
        </div>
      </section>
    </main>
  );
}

