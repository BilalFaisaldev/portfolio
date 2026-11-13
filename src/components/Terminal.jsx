import React, { useState, useRef, useEffect } from 'react';
import { personalInfo, projects, capabilities, journey } from '../data/portfolioData';

export default function TerminalModal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `⚡ ${personalInfo.name} — Developer Terminal v2.0.0\nType 'help' to view available system commands.`,
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [pastCmds, setPastCmds] = useState([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCmds.length > 0) {
        const nextIdx = cmdIndex === -1 ? pastCmds.length - 1 : Math.max(0, cmdIndex - 1);
        setCmdIndex(nextIdx);
        setInputVal(pastCmds[nextIdx]);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (pastCmds.length > 0) {
        const nextIdx = cmdIndex + 1;
        if (nextIdx >= pastCmds.length) {
          setCmdIndex(-1);
          setInputVal('');
        } else {
          setCmdIndex(nextIdx);
          setInputVal(pastCmds[nextIdx]);
        }
      }
      return;
    }

    if (e.key !== 'Enter') return;

    const trimmed = inputVal.trim();
    if (!trimmed) return;

    setPastCmds((prev) => [...prev, trimmed]);
    setCmdIndex(-1);

    const cmd = trimmed.toLowerCase();
    let output = '';
    let isError = false;

    switch (cmd) {
      case 'help':
        output = `Available Commands:
  help       - Display this list of commands
  whoami     - Learn about ${personalInfo.name}
  skills     - View full-stack tech stack & QA tools
  projects   - Output catalog of production projects
  exp        - View career journey & engineering timeline
  contact    - Get direct contact links (Email, WhatsApp, GitHub)
  sudo hire  - Fast-track interview invitation
  clear      - Clear terminal screen
  exit       - Close this terminal window`;
        break;

      case 'whoami':
        output = `${personalInfo.name}
Role: ${personalInfo.primaryTitle}
Focus: ${personalInfo.secondaryTitle}
Location: ${personalInfo.location}
Bio: ${personalInfo.tagline}`;
        break;

      case 'skills':
        output = capabilities
          .map((c) => `[${c.header}]:\n  ${c.tags.join(', ')}`)
          .join('\n\n');
        break;

      case 'projects':
        output = projects
          .map(
            (p, i) =>
              `${i + 1}. ${p.title} [${p.category}]\n   Stack: ${p.tech.join(', ')}${
                p.githubUrl ? `\n   Code:  ${p.githubUrl}` : ''
              }${p.liveUrl ? `\n   Live:  ${p.liveUrl}` : ''}`
          )
          .join('\n\n');
        break;

      case 'exp':
        output = journey
          .map(
            (j) => `• ${j.year} — ${j.role} (${j.company})\n  ${j.description}`
          )
          .join('\n\n');
        break;

      case 'contact':
        output = `Email:    ${personalInfo.email}
WhatsApp: ${personalInfo.phone} (${personalInfo.whatsappUrl})
GitHub:   ${personalInfo.githubUrl}`;
        break;

      case 'sudo hire':
        output = `ACCESS GRANTED! 🎉
Candidate Status: Available for Immediate High-Impact Remote Roles & Contracts.
Email directly:   ${personalInfo.email}
WhatsApp desk:    ${personalInfo.phone}`;
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        output = `Command not recognized: '${trimmed}'. Type 'help' for valid commands.`;
        isError = true;
        break;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'user', text: `$ ${trimmed}` },
      { type: isError ? 'error' : 'output', text: output },
    ]);
    setInputVal('');
  };

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div
        className="terminal-window"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="terminal-topbar">
          <div className="terminal-dots">
            <span className="dot dot-red" onClick={onClose} title="Close Terminal" />
            <span className="dot dot-yellow" title="Minimize" />
            <span className="dot dot-green" title="Expand" />
          </div>
          <div className="terminal-title">
            bash — bilalfaisal@portfolio:~
          </div>
          <button
            type="button"
            className="terminal-close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="terminal-screen">
          {history.map((h, i) => (
            <div key={i} className={`term-line term-${h.type}`}>
              {h.text}
            </div>
          ))}

          <div className="term-input-line">
            <span className="term-prompt">bilal@mbf:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
