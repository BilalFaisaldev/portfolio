import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, FileDown, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenTerminal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="site-navbar">
      <a href="#home" className="logo-badge" onClick={closeMenu}>
        {personalInfo.initials} <span>( )</span>
      </a>

      {/* Desktop Navigation Links */}
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
        {personalInfo.instagramUrl && (
          <a href={personalInfo.instagramUrl} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        )}
        <a href="#contact">Contact</a>

        {/* Developer Terminal Toggle */}
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
          download={personalInfo.resumeDownloadName}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cv-btn"
          title="Download Curriculum Vitae"
        >
          <FileDown size={14} />
          <span>CV</span>
        </a>
      </div>

      {/* Mobile Actions */}
      <div className="mobile-nav-actions">
        <button
          type="button"
          onClick={onOpenTerminal}
          className="nav-terminal-btn mobile-shell-btn"
          title="Open Developer Shell"
        >
          <Terminal size={14} />
        </button>

        <button
          type="button"
          className="mobile-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-menu">
          <a href="#work" className="mobile-nav-link" onClick={closeMenu}>
            Work
          </a>
          <a href="#capabilities" className="mobile-nav-link" onClick={closeMenu}>
            Capabilities
          </a>
          <a href="#journey" className="mobile-nav-link" onClick={closeMenu}>
            Journey
          </a>
          <a href="#about" className="mobile-nav-link" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>
            Contact
          </a>

          <div className="mobile-drawer-footer">
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeDownloadName}
              target="_blank"
              rel="noopener noreferrer"
              className="submit-btn"
              style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
              onClick={closeMenu}
            >
              <FileDown size={16} />
              <span>Download CV</span>
            </a>

            <div className="mobile-drawer-socials">
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              {personalInfo.instagramUrl && (
                <a href={personalInfo.instagramUrl} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
