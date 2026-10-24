import React, { useState, useRef, useEffect } from 'react';
import { personalInfo, projects, capabilities, journey } from '../data/portfolioData';

export default function TerminalModal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: "⚡ Muhammad Bilal Faisal — Developer Terminal v2.0.0 [Node/React Engine]\nType 'help' to view available system commands.",
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
  whoami     - Learn about Muhammad Bilal Faisal
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
              `${i + 1}. ${p.title} [${p.category}]\n   Stack: ${p.tech.join(', ')}\n   Code: ${
                p.githubUrl || 'N/A'
              }`
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
GitHub:   ${personalInfo.githubUrl}
LinkedIn: ${personalInfo.linkedinUrl}`;
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
      { type: 'input', text: `bilal@terminal:~$ ${trimmed}` },
      { type: 'output', text: output, isError },
    ]);
    setInputVal('');
  };

  return (
    <div className="terminal-modal-overlay" onClick={onClose}>
      <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot-red" onClick={onClose} title="Close" />
            <span className="dot-yellow" title="Minimize" />
            <span
              className="dot-green"
              onClick={() => setHistory([{ type: 'system', text: "Terminal reset.\nType 'help' for commands." }])}
              title="Reset"
            />
          </div>
          <div className="terminal-title">bilal@production-shell: ~</div>
          <div style={{ width: 40 }} />
        </div>

        <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
          {history.map((h, i) => (
            <div key={i} className="term-line">
              {h.type === 'input' && <span className="term-prompt">{h.text}</span>}
              {h.type === 'output' && (
                <div className={`term-output ${h.isError ? 'error' : ''}`}>
                  {h.text}
                </div>
              )}
              {h.type === 'system' && (
                <div style={{ color: 'var(--accent2)', marginBottom: '0.8rem' }}>
                  {h.text}
                </div>
              )}
            </div>
          ))}

          <div className="terminal-input-row">
            <span className="term-prompt">bilal@terminal:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
