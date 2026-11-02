import React, { useState } from 'react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import ListingLayout from '../components/common/ListingLayout';
import { UniversityCard } from '../components/common/Cards';
import SearchBar from '../components/common/SearchBar';
import LeadForm from '../components/common/LeadForm';
import { universities, countries } from '../data/mockData';

export default function Universities() {
  const [activeFilters, setActiveFilters] = useState({});
  const [comparedUnis, setComparedUnis] = useState([]);

  const filterConfigs = [
    {
      key: 'country',
      title: 'Country',
      options: countries.map((c) => ({
        value: c.id,
        label: c.name,
        count: universities.filter((u) => u.country === c.id).length
      }))
    },
    {
      key: 'type',
      title: 'Institution type',
      options: [
        { value: 'Public', label: 'Public university', count: universities.filter((u) => u.type === 'Public').length },
        { value: 'Private', label: 'Private university', count: universities.filter((u) => u.type === 'Private').length }
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

  const handleCompare = (code, checked) => {
    setComparedUnis((prev) =>
      checked ? [...prev, code] : prev.filter((c) => c !== code)
    );
  };

  const filteredUnis = universities.filter((u) => {
    if (activeFilters.country && activeFilters.country.length > 0) {
      if (!activeFilters.country.includes(u.country)) return false;
    }
    if (activeFilters.type && activeFilters.type.length > 0) {
      if (!activeFilters.type.includes(u.type)) return false;
    }
    return true;
  });

  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[['Home', '/'], ['Universities', '/universities']]} />
          <div className="mt-32">
            <span className="eyebrow">Universities</span>
          </div>
          <h1 className="t-h1" style={{ marginTop: '8px' }}>
            Explore leading universities worldwide
          </h1>
          <p className="lead">
            Compare rankings, tuition fees, entry criteria, degree offerings, and campus locations.
          </p>
          <SearchBar placeholder="Search any university or city..." targetPath="/universities" />
        </div>
      </section>

      <ListingLayout
        filters={filterConfigs}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        totalCount={filteredUnis.length}
        itemNoun="universities"
      >
        {filteredUnis.map((u) => (
          <UniversityCard
            key={u.id}
            university={u}
            isCompared={comparedUnis.includes(u.code)}
            onCompare={handleCompare}
          />
        ))}
      </ListingLayout>

      {/* Comparison Drawer / Tray */}
      {comparedUnis.length > 0 && (
        <div className="tray is-open" data-tray>
          <div className="container row between">
            <span>
              <strong>{comparedUnis.length}</strong> universities selected for comparison: {comparedUnis.join(', ')}
            </span>
            <div className="row" style={{ gap: '12px' }}>
              <button className="btn btn-ghost btn-sm" type="button" onClick={() => setComparedUnis([])}>
                Clear
              </button>
              <button
                className="btn btn-primary btn-sm"
                type="button"
                onClick={() => alert(`Comparing: ${comparedUnis.join(' vs ')}`)}
              >
                Compare Side-by-Side
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="section bg-ink" id="advice">
        <div className="container cta-band">
          <div>
            <span className="eyebrow">Personal Shortlisting</span>
            <h2 className="t-h1 mt-16">Get a tailored shortlist in 24 hours</h2>
            <p className="lead mt-16">
              Our university advisers evaluate your grades, budget, and test scores to build your dream, reach, and safe university list.
            </p>
          </div>
          <LeadForm id="uni-band" />
        </div>
      </section>
    </main>
  );
}

