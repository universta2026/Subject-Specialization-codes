import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { countries } from '../../data/mockData';
import Icon from './Icon';

export default function SearchBar({
  placeholder = 'What do you want to study? e.g. MSc Data Science',
  targetPath = '/courses',
  initialQuery = '',
  initialCountry = 'Any country'
}) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (selectedCountry && selectedCountry !== 'Any country') params.set('country', selectedCountry);
    navigate(`${targetPath}?${params.toString()}`);
  };

  return (
    <form className="searchbar" role="search" onSubmit={handleSearch}>
      <div className="input-icon">
        <Icon name="search" />
        <input
          className="input"
          type="search"
          placeholder={placeholder}
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <span className="divider" />
      <select
        className="select"
        aria-label="Country"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option>Any country</option>
        {countries.map((c) => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
}

