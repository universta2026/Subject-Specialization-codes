import React, { useState } from 'react';
import Icon from './Icon';

export default function ListingLayout({
  filters = [],
  activeFilters = {},
  onFilterChange,
  onClearFilters,
  totalCount = 0,
  itemNoun = 'items',
  sortOptions = ['Highest ranked', 'Tuition: low to high', 'Name: A to Z'],
  currentSort,
  onSortChange,
  children,
  emptyMessage = 'Try removing a filter — or ask an expert to search for you.'
}) {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  return (
    <div className="container">
      <div className="listing">
        <aside className={`filters ${mobileFilterOpen ? 'is-open' : ''}`}>
          <div className="filters-head">
            Filters
            <button type="button" onClick={onClearFilters}>
              Clear all
            </button>
          </div>
          {filters.map((group) => (
            <div key={group.key} className="fgroup">
              <h4>{group.title}</h4>
              {group.options.map((opt) => {
                const isChecked = (activeFilters[group.key] || []).includes(opt.value);
                return (
                  <label key={opt.value} className="check">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => onFilterChange(group.key, opt.value, e.target.checked)}
                    />{' '}
                    {opt.label}
                    {opt.count != null && <span className="count">{opt.count}</span>}
                  </label>
                );
              })}
            </div>
          ))}
        </aside>

        <div>
          <div className="results-bar">
            <div className="row">
              <button
                className="btn btn-ghost btn-sm filter-toggle"
                type="button"
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              >
                <Icon name="sliders" className="ico-sm" />
                Filters
              </button>
              <span>
                <span className="count">{totalCount}</span> {itemNoun}
              </span>
            </div>
            <select
              className="select"
              aria-label="Sort by"
              value={currentSort}
              onChange={(e) => onSortChange && onSortChange(e.target.value)}
            >
              <option>Sort: Most relevant</option>
              {sortOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {totalCount === 0 ? (
            <div className="empty" style={{ display: 'block' }}>
              <h3 className="t-h4">No matches yet</h3>
              <p className="mt-8">
                {emptyMessage}{' '}
                <a className="link" href="#advice">
                  ask an expert
                </a>
              </p>
            </div>
          ) : (
            <div className="results">{children}</div>
          )}

          <nav className="pager" aria-label="Pages">
            <span className="is-on">1</span>
            <span style={{ color: 'var(--slate-500)', padding: '0 8px' }}>Page 1 of 1</span>
          </nav>
        </div>
      </div>
    </div>
  );
}

