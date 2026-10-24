import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, FileDown } from 'lucide-react';

export default function Navbar({ onOpenTerminal }) {
  return (
    <nav className="site-navbar">
      <a href="#home" className="logo-badge">
        {personalInfo.initials} <span>( )</span>
      </a>

      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#journey">Journey</a>
        <a href="#about">About</a>
        <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <a href="#contact">Contact</a>

        {/* Interactive Hacker Terminal Toggle */}
        <button
          type="button"
          onClick={onOpenTerminal}
          className="nav-terminal-btn"
          title="Open Developer Shell"
        >
          <Terminal size={14} />
          <span>SHELL</span>
        </button>

        {/* Resume CV Download Button */}
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cv-btn"
        >
          <FileDown size={14} />
          <span>CV</span>
        </a>
      </div>
    </nav>
  );
}
