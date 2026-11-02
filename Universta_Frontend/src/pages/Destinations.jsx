import React, { useState } from 'react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import ListingLayout from '../components/common/ListingLayout';
import { DestinationCard } from '../components/common/Cards';
import SearchBar from '../components/common/SearchBar';
import LeadForm from '../components/common/LeadForm';
import { countries } from '../data/mockData';

export default function Destinations() {
  const [activeFilters, setActiveFilters] = useState({});

  const regions = Array.from(new Set(countries.map((c) => c.region)));

  const filterConfigs = [
    {
      key: 'region',
      title: 'Region',
      options: regions.map((r) => ({
        value: r,
        label: r,
        count: countries.filter((c) => c.region === r).length
      }))
    },
    {
      key: 'lang',
      title: 'Language',
      options: [
        { value: 'english', label: 'English-speaking', count: countries.filter((c) => c.lang.includes('English')).length },
        { value: 'multilingual', label: 'Multilingual / Other', count: countries.filter((c) => !c.lang.includes('English')).length }
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

  const filteredCountries = countries.filter((c) => {
    if (activeFilters.region && activeFilters.region.length > 0) {
      if (!activeFilters.region.includes(c.region)) return false;
    }
    if (activeFilters.lang && activeFilters.lang.length > 0) {
      const isEnglish = c.lang.includes('English');
      if (activeFilters.lang.includes('english') && !isEnglish) return false;
      if (activeFilters.lang.includes('multilingual') && isEnglish) return false;
    }
    return true;
  });

  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[['Home', '/'], ['Destinations', '/destinations']]} />
          <div className="mt-32">
            <span className="eyebrow">Study destinations</span>
          </div>
          <h1 className="t-h1" style={{ marginTop: '8px' }}>
            Where do you want to study?
          </h1>
          <p className="lead">
            Compare countries by tuition fees, living costs, post-study work rights, visa timelines, and popular intakes.
          </p>
          <SearchBar placeholder="Search countries or capitals..." targetPath="/destinations" />
        </div>
      </section>

      <ListingLayout
        filters={filterConfigs}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        totalCount={filteredCountries.length}
        itemNoun="destinations"
      >
        <div className="grid g-3" style={{ width: '100%' }}>
          {filteredCountries.map((c) => (
            <DestinationCard key={c.id} country={c} />
          ))}
        </div>
      </ListingLayout>

      <section className="section bg-ink" id="advice">
        <div className="container cta-band">
          <div>
            <span className="eyebrow">Country Selection</span>
            <h2 className="t-h1 mt-16">Unsure which destination is right for your budget?</h2>
            <p className="lead mt-16">
              Our advisers compare tuition fees, post-study work permits, and living costs side by side.
            </p>
          </div>
          <LeadForm id="dest-band" />
        </div>
      </section>
    </main>
  );
}

