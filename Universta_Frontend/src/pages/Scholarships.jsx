import React, { useState } from 'react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import ListingLayout from '../components/common/ListingLayout';
import { ScholarshipCard } from '../components/common/Cards';
import SearchBar from '../components/common/SearchBar';
import LeadForm from '../components/common/LeadForm';
import { scholarships, countries } from '../data/mockData';

export default function Scholarships() {
  const [activeFilters, setActiveFilters] = useState({});

  const filterConfigs = [
    {
      key: 'funding',
      title: 'Funding coverage',
      options: [
        { value: 'full', label: 'Fully funded', count: scholarships.filter((s) => s.funding === 'Fully funded').length },
        { value: 'partial', label: 'Full or partial / Need-based', count: scholarships.filter((s) => s.funding !== 'Fully funded').length }
      ]
    },
    {
      key: 'type',
      title: 'Provider type',
      options: [
        { value: 'Government', label: 'Government', count: scholarships.filter((s) => s.type === 'Government').length },
        { value: 'University', label: 'University', count: scholarships.filter((s) => s.type === 'University').length }
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

  const filteredScholarships = scholarships.filter((s) => {
    if (activeFilters.funding && activeFilters.funding.length > 0) {
      const isFull = s.funding === 'Fully funded';
      if (activeFilters.funding.includes('full') && !isFull) return false;
      if (activeFilters.funding.includes('partial') && isFull) return false;
    }
    if (activeFilters.type && activeFilters.type.length > 0) {
      if (!activeFilters.type.includes(s.type)) return false;
    }
    return true;
  });

  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[['Home', '/'], ['Scholarships', '/scholarships']]} />
          <div className="mt-32">
            <span className="eyebrow">Scholarships & Grants</span>
          </div>
          <h1 className="t-h1" style={{ marginTop: '8px' }}>
            Find funding for your global education
          </h1>
          <p className="lead">
            Explore government awards, university waivers, and merit bursaries with verified deadlines and eligibility criteria.
          </p>
          <SearchBar placeholder="Search scholarships by country or name..." targetPath="/scholarships" />
        </div>
      </section>

      <ListingLayout
        filters={filterConfigs}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        totalCount={filteredScholarships.length}
        itemNoun="scholarships"
      >
        <div className="grid g-2 gap-16" style={{ width: '100%' }}>
          {filteredScholarships.map((s) => (
            <ScholarshipCard key={s.id} scholarship={s} />
          ))}
        </div>
      </ListingLayout>

      <section className="section bg-ink" id="advice">
        <div className="container cta-band">
          <div>
            <span className="eyebrow">Scholarship Assessment</span>
            <h2 className="t-h1 mt-16">Maximize your funding eligibility</h2>
            <p className="lead mt-16">
              Our experts review your academic record, test scores, and essays to match you with funding opportunities.
            </p>
          </div>
          <LeadForm id="scholarship-band" />
        </div>
      </section>
    </main>
  );
}

