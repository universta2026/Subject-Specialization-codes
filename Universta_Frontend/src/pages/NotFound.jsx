import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';

export default function NotFound() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[['Home', '/'], ['Page Not Found', '']]} />
          <div className="mt-32">
            <span className="eyebrow">404</span>
          </div>
          <h1 className="t-h1" style={{ marginTop: '8px' }}>
            Page not found
          </h1>
          <p className="lead">
            The page you were looking for doesn’t exist or has moved.
          </p>
          <div className="mt-24">
            <Link className="btn btn-primary" to="/">
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

