import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import BackgroundLayer from './components/BackgroundLayer';
import WaterRipple from './components/WaterRipple';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Capabilities from './components/Capabilities';
import Journey from './components/Journey';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/Terminal';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <>
      <CustomCursor />
      <BackgroundLayer />
      <WaterRipple />
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Capabilities />
        <Journey />
        <About />
        <Contact />
      </main>

      <Footer />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </>
  );
}
