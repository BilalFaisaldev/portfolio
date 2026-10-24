import React from 'react';

export default function Marquee() {
  const items = [
    'Full Stack Engineer',
    'Next.js 14',
    'QA Automation',
    'Node.js & Express',
    'WebSockets',
    'PostgreSQL & MongoDB',
    'Playwright & Jest',
    'Docker Containers',
  ];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.concat(items).map((item, idx) => (
          <React.Fragment key={idx}>
            <span>{item}</span>
            <span className="accent">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
