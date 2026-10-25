import React, { useEffect, useRef } from 'react';

export default function WaterRipple() {
  const containerRef = useRef(null);

  useEffect(() => {
    let lastRipple = 0;
    let initialized = false;
    let checkInterval = null;

    const initRipples = () => {
      if (typeof window === 'undefined' || !window.$ || !window.$.fn || !window.$.fn.ripples) {
        return false;
      }
      if (!containerRef.current || initialized) return true;

      try {
        const $el = window.$(containerRef.current);
        $el.ripples({
          resolution: 256,
          dropRadius: 25,
          perturbance: 0.05,
          interactive: false,
          crossOrigin: 'anonymous',
        });
        initialized = true;

        // Ambient ripples on load
        setTimeout(() => {
          try {
            $el.ripples('drop', window.innerWidth * 0.35, window.innerHeight * 0.35, 26, 0.06);
          } catch (e) {}
        }, 500);

        setTimeout(() => {
          try {
            $el.ripples('drop', window.innerWidth * 0.65, window.innerHeight * 0.5, 30, 0.07);
          } catch (e) {}
        }, 1200);

        return true;
      } catch (err) {
        console.warn('WebGL ripples initialization notice:', err);
        return false;
      }
    };

    if (!initRipples()) {
      checkInterval = setInterval(() => {
        if (initRipples()) {
          clearInterval(checkInterval);
        }
      }, 100);
      setTimeout(() => clearInterval(checkInterval), 8000);
    }

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastRipple > 35 && window.$ && containerRef.current && initialized) {
        try {
          window.$(containerRef.current).ripples('drop', e.clientX, e.clientY, 16, 0.04);
        } catch (err) {}
        lastRipple = now;
      }
    };

    const handleClick = (e) => {
      if (window.$ && containerRef.current && initialized) {
        try {
          window.$(containerRef.current).ripples('drop', e.clientX, e.clientY, 32, 0.08);
        } catch (err) {}
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      if (checkInterval) clearInterval(checkInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (initialized && window.$ && containerRef.current) {
        try {
          window.$(containerRef.current).ripples('destroy');
        } catch (e) {}
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="water-surface"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 995,
        pointerEvents: 'none',
        backgroundImage:
          "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        mixBlendMode: 'color-dodge',
        opacity: 0.12,
      }}
    />
  );
}
