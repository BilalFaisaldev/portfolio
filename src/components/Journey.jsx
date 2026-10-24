import React from 'react';
import { journey } from '../data/portfolioData';

export default function Journey() {
  return (
    <section id="journey">
      <h2 className="section-title">
        Career <span>Journey</span>
      </h2>

      <div className="journey-list">
        {journey.map((j, idx) => (
          <div className="j-row" key={idx}>
            <div className="j-year">{j.year}</div>
            <div className="j-role">
              {j.role} <br />
              <span
                style={{
                  fontSize: '1rem',
                  color: 'var(--accent2)',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {j.company}
              </span>
            </div>
            <div className="j-desc">{j.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
