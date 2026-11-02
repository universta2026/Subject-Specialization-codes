import React, { useState } from 'react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import ListingLayout from '../components/common/ListingLayout';
import { SubjectCard } from '../components/common/Cards';
import SearchBar from '../components/common/SearchBar';
import LeadForm from '../components/common/LeadForm';
import { subjects } from '../data/mockData';

export default function Subjects() {
  const [activeFilters, setActiveFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const filterConfigs = [
    {
      key: 'subject',
      title: 'Field of study',
      options: subjects.map((s) => ({ value: s.id, label: s.name, count: s.specs.length }))
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

  const filteredSubjects = subjects.filter((s) => {
    if (activeFilters.subject && activeFilters.subject.length > 0) {
      if (!activeFilters.subject.includes(s.id)) return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[['Home', '/'], ['Subjects', '/subjects']]} />
          <div className="mt-32">
            <span className="eyebrow">Subjects & specializations</span>
          </div>
          <h1 className="t-h1" style={{ marginTop: '8px' }}>
            Find the field that fits you
          </h1>
          <p className="lead">
            Explore 10 major fields and dozens of specializations. Every subject guide shows careers, typical modules, top universities and how degrees differ by study level.
          </p>
          <SearchBar
            placeholder="Search subjects or specializations..."
            targetPath="/subjects"
          />
        </div>
      </section>

      <ListingLayout
        filters={filterConfigs}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        totalCount={filteredSubjects.length}
        itemNoun="subjects"
      >
        {filteredSubjects.map((s) => (
          <SubjectCard key={s.id} subject={s} />
        ))}
      </ListingLayout>

      <section className="section bg-ink" id="advice">
        <div className="container cta-band">
          <div>
            <span className="eyebrow">Need Advice?</span>
            <h2 className="t-h1 mt-16">Talk to a Subject Specialist</h2>
            <p className="lead mt-16">
              Not sure which specialization aligns with your career goals? Let our verified mentors help you decide.
            </p>
          </div>
          <LeadForm id="subjects-band" />
        </div>
      </section>
    </main>
  );
}

