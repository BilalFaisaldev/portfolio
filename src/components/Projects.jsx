import React, { useState, useMemo } from 'react';
import { projects, projectCategories } from '../data/portfolioData';
import { ExternalLink, Github, Search } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section id="work">
      <h2 className="section-title">
        Selected <span>Work</span>
      </h2>

      {/* Category Tabs & Search Bar */}
      <div className="project-controls">
        <div className="category-tabs">
          {projectCategories.map((cat) => {
            const count =
              cat === 'All'
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        <div className="search-input-wrap">
          <Search className="search-icon-inside" />
          <input
            type="text"
            placeholder="Search projects or stack..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Projects List */}
      <div className="work-grid">
        {filteredProjects.length === 0 ? (
          <div
            style={{
              padding: '3rem',
              textAlign: 'center',
              color: '#888',
              background: 'var(--surface)',
              borderRadius: '20px',
              border: '1px solid var(--border)',
            }}
          >
            No projects found matching "{searchTerm}". Try a different search term or category.
          </div>
        ) : (
          filteredProjects.map((p) => (
            <div className="work-item" key={p.id}>
              <div className="work-content">
                <span className="work-category-badge">{p.category}</span>
                <h3 className="work-title">{p.title}</h3>
                <div className="work-desc">{p.description}</div>

                <div className="work-tech">
                  {p.tech.map((t, i) => (
                    <span className="tech-pill" key={i}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="work-links">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-btn"
                    >
                      <ExternalLink size={16} />
                      Live Platform
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              <div className="work-metric">
                <span className="metric-val">{p.metric}</span>
                <span className="metric-label">{p.metricLabel}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
