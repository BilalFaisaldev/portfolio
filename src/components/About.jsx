import React, { useState } from 'react';
import { personalInfo, stats } from '../data/portfolioData';

export default function About() {
  const [photoLoaded, setPhotoLoaded] = useState(false);

  return (
    <section id="about">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="about-content">
        <figure className="about-photo">
          <img
            src="bilal.jpg"
            alt={personalInfo.name}
            style={{
              display: photoLoaded ? 'block' : 'none',
              width: '100%',
              aspectRatio: '4 / 5',
              objectFit: 'cover',
              borderRadius: '20px',
              border: '1px solid var(--border)',
            }}
            onLoad={() => setPhotoLoaded(true)}
            onError={() => setPhotoLoaded(false)}
          />

          {!photoLoaded && (
            <div className="avatar-card">
              <div className="avatar-badge">{personalInfo.initials}</div>
              <div className="avatar-name">{personalInfo.name}</div>
              <div className="avatar-role">Full Stack & QA Lead</div>
            </div>
          )}

          <figcaption>
            {personalInfo.name} // Karachi, PK
          </figcaption>
        </figure>

        <div className="about-info">
          <div className="about-text">
            <span className="highlight">
              Zero-Defect Engineering & High-Performance Web Architectures
            </span>
            <p>
              I am a Full Stack Engineer and QA Automation Specialist based in Karachi,
              Pakistan, available for remote collaborations worldwide. I bridge the gap
              between creative, fluid frontend experiences and bulletproof, high-performance
              backend architectures.
            </p>
            <p>
              With over 3+ years of commercial experience across Next.js 14, Node.js,
              TypeScript, PostgreSQL, and MongoDB, I build production systems with automated
              QA testing pipelines (Playwright & Jest) to guarantee 99.9% reliability and
              zero-regression deployments.
            </p>
          </div>

          <div className="stats-banner" style={{ marginTop: '3.5rem' }}>
            {stats.slice(0, 3).map((s, idx) => (
              <div className="stat-item" key={idx}>
                <h4>{s.value}</h4>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
