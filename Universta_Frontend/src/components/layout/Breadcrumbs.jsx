import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';

export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        const [label, href] = item;
        return (
          <React.Fragment key={idx}>
            {idx > 0 && <Icon name="chevR" />}
            {isLast ? (
              <span aria-current="page">{label}</span>
            ) : (
              <Link to={href}>{label}</Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

