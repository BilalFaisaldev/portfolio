import React from 'react';

export default function BackgroundLayer() {
  return (
    <>
      <div className="background-canvas-layer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 750"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ffb162" />
              <stop offset="30%" stopColor="#ff89cc" />
              <stop offset="65%" stopColor="#8a20ff" />
              <stop offset="100%" stopColor="#3400b8" />
            </linearGradient>

            <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#de7518" />
              <stop offset="35%" stopColor="#e86fc9" />
              <stop offset="70%" stopColor="#a31eff" />
              <stop offset="100%" stopColor="#4900d4" />
            </linearGradient>

            <linearGradient id="darkPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9519ff" />
              <stop offset="60%" stopColor="#3700b3" />
              <stop offset="100%" stopColor="#14005c" />
            </linearGradient>

            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="40%" stopColor="#00a2ff" />
              <stop offset="80%" stopColor="#004ce6" />
              <stop offset="100%" stopColor="#001882" />
            </linearGradient>
          </defs>

          <rect width="1000" height="750" fill="url(#bgGrad)" />

          <path fill="url(#pinkGrad)">
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M 0 240 C 300 240, 400 420, 650 400 C 850 380, 1000 240, 1000 240 L 1000 750 L 0 750 Z;
                M 0 340 C 360 110, 520 560, 730 330 C 940 170, 1000 320, 1000 320 L 1000 750 L 0 750 Z;
                M 0 200 C 260 320, 420 240, 640 440 C 860 600, 1000 220, 1000 220 L 1000 750 L 0 750 Z;
                M 0 240 C 300 240, 400 420, 650 400 C 850 380, 1000 240, 1000 240 L 1000 750 L 0 750 Z"
            />
          </path>

          <path fill="url(#darkPurpleGrad)">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M 400 750 C 450 500, 750 550, 1000 240 L 1000 750 Z;
                M 220 750 C 340 320, 680 660, 1000 100 L 1000 750 Z;
                M 520 750 C 560 560, 820 460, 1000 340 L 1000 750 Z;
                M 400 750 C 450 500, 750 550, 1000 240 L 1000 750 Z"
            />
          </path>

          <path fill="url(#blueGrad)">
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="
                M 0 390 C 250 250, 450 750, 850 750 L 0 750 Z;
                M 0 510 C 340 120, 600 700, 980 750 L 0 750 Z;
                M 0 300 C 200 420, 420 560, 760 700 L 0 750 Z;
                M 0 390 C 250 250, 450 750, 850 750 L 0 750 Z"
            />
          </path>
        </svg>
      </div>

      <div className="water-surface-overlay" />
    </>
  );
}
