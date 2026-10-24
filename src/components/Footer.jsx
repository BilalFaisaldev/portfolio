import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer>
        <p>
          Architected & Engineered by {personalInfo.name} // Full Stack Engineer & QA Specialist
        </p>
        <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.5rem' }}>
          Next.js • Node.js • React • TypeScript • Automated QA • Cloud Systems • ©{' '}
          {new Date().getFullYear()}
        </p>
      </footer>

      {showScrollTop && (
        <button
          id="back-to-top"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
