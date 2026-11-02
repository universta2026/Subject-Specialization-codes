import React, { useState } from 'react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import ListingLayout from '../components/common/ListingLayout';
import { ExamCard } from '../components/common/Cards';
import SearchBar from '../components/common/SearchBar';
import LeadForm from '../components/common/LeadForm';
import { exams } from '../data/mockData';

export default function Exams() {
  const [activeFilters, setActiveFilters] = useState({});

  const filterConfigs = [
    {
      key: 'type',
      title: 'Exam Category',
      options: [
        { value: 'English proficiency', label: 'English proficiency', count: exams.filter((e) => e.type === 'English proficiency').length },
        { value: 'Graduate admission', label: 'Graduate admission', count: exams.filter((e) => e.type === 'Graduate admission').length },
        { value: 'Undergraduate admission', label: 'Undergraduate admission', count: exams.filter((e) => e.type === 'Undergraduate admission').length }
      ]
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

  const filteredExams = exams.filter((e) => {
    if (activeFilters.type && activeFilters.type.length > 0) {
      if (!activeFilters.type.includes(e.type)) return false;
    }
    return true;
  });

  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[['Home', '/'], ['Exams', '/exams']]} />
          <div className="mt-32">
            <span className="eyebrow">Standardized Testing</span>
          </div>
          <h1 className="t-h1" style={{ marginTop: '8px' }}>
            Know which test you need
          </h1>
          <p className="lead">
            Compare IELTS, TOEFL, PTE, Duolingo, GRE, GMAT, and SAT: test formats, score scales, fees, and test center availability.
          </p>
          <SearchBar placeholder="Search tests (e.g. IELTS, GRE)..." targetPath="/exams" />
        </div>
      </section>

      <ListingLayout
        filters={filterConfigs}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        totalCount={filteredExams.length}
        itemNoun="tests"
      >
        <div className="grid g-2 gap-16" style={{ width: '100%' }}>
          {filteredExams.map((e) => (
            <ExamCard key={e.id} exam={e} />
          ))}
        </div>
      </ListingLayout>

      <section className="section bg-ink" id="advice">
        <div className="container cta-band">
          <div>
            <span className="eyebrow">Test Preparation</span>
            <h2 className="t-h1 mt-16">Prepare with Top Coaching Institutes</h2>
            <p className="lead mt-16">
              Connect with verified tutors and coaching centres for structured prep and mock tests.
            </p>
          </div>
          <LeadForm id="exam-band" />
        </div>
      </section>
    </main>
  );
}

