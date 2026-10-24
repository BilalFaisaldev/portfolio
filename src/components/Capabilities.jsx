import React from 'react';
import { capabilities } from '../data/portfolioData';

export default function Capabilities() {
  return (
    <section id="capabilities">
      <h2 className="section-title">
        Engine <span>Capabilities</span>
      </h2>

      <div className="bento-grid">
        {capabilities.map((c, idx) => {
          const cardClass =
            idx === 0
              ? 'b-card b-large'
              : idx === 1 || idx === 3
              ? 'b-card b-wide'
              : 'b-card';

          return (
            <div className={cardClass} key={c.id}>
              <div>
                <div className="b-header">{c.header}</div>
                <div className="b-title" style={{ marginTop: '0.8rem' }}>
                  {c.title}
                </div>
              </div>

              <div className="tag-cloud">
                {c.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
