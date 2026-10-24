import React from 'react';
import { personalInfo, stats } from '../data/portfolioData';
import ThreeCanvas from './ThreeCanvas';
import { Github, Phone, Mail, MapPin, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="ambient-light" />
      <ThreeCanvas />

      <h1>
        <svg className="hero-name-svg" viewBox="0 0 880 72" xmlns="http://www.w3.org/2000/svg">
          <text
            x="0"
            y="56"
            fontFamily="'Syncopate', sans-serif"
            fontWeight="700"
            fontSize="50"
            letterSpacing="3"
            className="hero-name-text"
          >
            {personalInfo.firstName.toUpperCase()}
          </text>
        </svg>
        <br />
        <span className="outline">{personalInfo.lastName.toUpperCase()}</span>
      </h1>

      <div className="hero-desc">
        <strong>{personalInfo.primaryTitle}</strong> <br />
        {personalInfo.secondaryTitle}. <br />
        {personalInfo.tagline}

        <div className="work-tech2">
          <a
            className="tech-pill2"
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              borderColor: 'var(--accent)',
              color: '#ff9cb3',
              background: 'rgba(255, 42, 95, 0.08)',
            }}
          >
            <FileText size={15} />
            Download CV
          </a>
          <a
            className="tech-pill2"
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            className="tech-pill2"
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone size={15} />
            WhatsApp Desk
          </a>
          <a className="tech-pill2" href={`mailto:${personalInfo.email}`}>
            <Mail size={15} />
            Email
          </a>
          <span
            className="tech-pill2"
            style={{ borderColor: 'rgba(0, 229, 255, 0.4)', color: 'var(--accent2)' }}
          >
            <MapPin size={15} />
            {personalInfo.location}
          </span>
        </div>
      </div>

      <div className="stats-banner">
        {stats.map((s, idx) => (
          <div className="stat-item" key={idx}>
            <h4>{s.value}</h4>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
