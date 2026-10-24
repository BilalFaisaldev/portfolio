export const personalInfo = {
  name: "Muhammad Bilal Faisal",
  firstName: "Muhammad Bilal",
  lastName: "Faisal",
  initials: "MBF",
  primaryTitle: "Full Stack Engineer & QA Specialist",
  secondaryTitle: "MERN & Next.js Production Architect",
  tagline: "Crafting scalable, high-performance web applications and resilient backend architectures with Next.js, Node.js, and automated QA testing pipelines.",
  email: "bilalfaisalarain@gmail.com",
  phone: "+92 320 3066554",
  whatsappUrl: "https://wa.me/923203066554",
  githubUrl: "https://github.com/BilalFaisaldev",
  linkedinUrl: "https://www.linkedin.com/in/bilalfaisaldev",
  location: "Karachi, Pakistan (Available for Remote Worldwide)",
  resumeUrl: "resume.pdf",
};

export const stats = [
  { value: "3+", label: "Years Commercial Exp" },
  { value: "15+", label: "Production Projects" },
  { value: "99.9%", label: "System Reliability" },
  { value: "500+", label: "Commits & Sprints" },
];

export const projectCategories = [
  "All",
  "Full Stack & MERN",
  "AI & Voice",
  "Utilities & Tools",
  "QA & Arcade",
];

export const projects = [
  {
    id: "dropbeam",
    title: "DropBeam — Instant Wi-Fi Sharing & Live Clipboard",
    category: "Full Stack & MERN",
    description:
      "High-speed, privacy-first local file-sharing and live clipboard synchronization utility across local Wi-Fi networks. Zero registration, drag-and-drop transfers, sandboxed temporary caching, real-time room chat, and self-destruct download timers.",
    tech: ["Node.js", "Express.js", "WebSockets", "Wi-Fi Subnet", "HTML5 Canvas", "Render"],
    metric: "Wi-Fi Sync",
    metricLabel: "Zero-Config Transfer",
    liveUrl: "https://dropbeem.onrender.com/",
    githubUrl: "https://github.com/BilalFaisaldev/DropBeem",
    featured: true,
  },
  {
    id: "ods",
    title: "Omar Digital Solutions Platform (ODS)",
    category: "Full Stack & MERN",
    description:
      "Full-stack enterprise educational ecosystem engineered with serverless microservice logic, dynamic MongoDB Atlas cloud CMS, responsive mobile-first UI, and automated course enrollment workflows.",
    tech: ["Next.js 14", "Node.js", "MongoDB Atlas", "TailwindCSS", "Vercel"],
    metric: "Enterprise",
    metricLabel: "EdTech Ecosystem",
    liveUrl: "https://ods-courses.vercel.app/",
    githubUrl: "https://github.com/BilalFaisaldev/ODS-Courses",
    featured: true,
  },
  {
    id: "nova-ai",
    title: "NOVA — Personal AI Voice Assistant",
    category: "AI & Voice",
    description:
      "Futuristic conversational AI voice assistant featuring real-time speech recognition, responsive 3D audio orb visualization, dynamic telemetry HUD, and conversational intelligence powered by Google Gemini API.",
    tech: ["Google Gemini API", "Web Speech API", "Canvas Audio Viz", "JavaScript ES6+"],
    metric: "AI Engine",
    metricLabel: "Voice Telemetry",
    liveUrl: null,
    githubUrl: "https://github.com/BilalFaisaldev/nova-voice-assistant",
    featured: true,
  },
  {
    id: "luxurystay-hms",
    title: "LuxuryStay — Hotel Management Suite (HMS)",
    category: "Full Stack & MERN",
    description:
      "End-to-end commercial hospitality platform featuring real-time room inventory management, reservation checkout flows, staff RBAC privilege tiers, and dynamic analytics dashboard.",
    tech: ["React.js", "Node.js", "Express", "MongoDB Atlas", "JWT Auth", "REST APIs"],
    metric: "Hospitality",
    metricLabel: "Commercial Suite",
    liveUrl: null,
    githubUrl: "https://github.com/BilalFaisaldev/luxurystay-hms",
    featured: true,
  },
  {
    id: "hinglish-transcriber",
    title: "Hinglish Audio Transcriber",
    category: "AI & Voice",
    description:
      "Specialized speech-to-text intelligence system tuned for romanized Urdu/Hindi (Hinglish) phonetics and dialectal nuances. Features audio waveform parsing and timestamped transcript exports.",
    tech: ["Python", "Whisper AI Engine", "Audio DSP", "RESTful API"],
    metric: "Bilingual AI",
    metricLabel: "Speech-to-Text",
    liveUrl: null,
    githubUrl: "https://github.com/BilalFaisaldev/Hinglish-Audio-Transcriber",
    featured: false,
  },
  {
    id: "instapdf",
    title: "InstaPDF — In-Browser Document Studio",
    category: "Utilities & Tools",
    description:
      "High-performance client-side document processing tool enabling instant PDF merging, splitting, reordering, and format conversion without uploading sensitive files to external servers.",
    tech: ["JavaScript ES6+", "PDF-Lib", "HTML5 Canvas", "Modern CSS3"],
    metric: "Zero-Server",
    metricLabel: "Privacy Utility",
    liveUrl: null,
    githubUrl: "https://github.com/BilalFaisaldev/instapdf",
    featured: false,
  },
  {
    id: "png-webp-converter",
    title: "PNG to WebP High-Efficiency Converter",
    category: "Utilities & Tools",
    description:
      "Client-side image compression tool utilizing modern browser WebP codecs to reduce asset file sizes by up to 80% while preserving alpha transparency and visual fidelity.",
    tech: ["Canvas 2D API", "WebP Encoding", "Blob Compression", "Modern CSS3"],
    metric: "80% Compression",
    metricLabel: "Asset Optimizer",
    liveUrl: null,
    githubUrl: "https://github.com/BilalFaisaldev/png_to_webp_converter",
    featured: false,
  },
  {
    id: "cyber-2048",
    title: "2048 Cyber Dark Edition",
    category: "QA & Arcade",
    description:
      "High-performance web arcade puzzle game featuring sleek cyber dark aesthetics, fluid CSS grid animations, touch swipe controls, and local score persistence.",
    tech: ["JavaScript ES6+", "Modern CSS3", "HTML5 Canvas", "Touch Gestures"],
    metric: "Web Arcade",
    metricLabel: "Cyber Edition",
    liveUrl: null,
    githubUrl: "https://github.com/BilalFaisaldev/2048-game",
    featured: true,
  },
  {
    id: "code-creative-suite",
    title: "Code Creative Commercial Software Suite",
    category: "QA & Arcade",
    description:
      "Production client delivery ecosystem featuring automated end-to-end testing, CI/CD integration, high-throughput relational databases, and containerized deployment.",
    tech: ["TypeScript", "PostgreSQL", "Docker", "Playwright E2E", "GitHub Actions"],
    metric: "Zero-Defect",
    metricLabel: "QA Pipeline",
    liveUrl: null,
    githubUrl: "https://github.com/BilalFaisaldev",
    featured: true,
  },
];

export const capabilities = [
  {
    id: "frontend",
    header: "01 // Front-End & Modern UI",
    title: "Building responsive, zero-defect interfaces.",
    tags: [
      "Next.js 14 (App Router)",
      "React 19 / 18",
      "TypeScript",
      "TailwindCSS",
      "HTML5 / Modern CSS3",
      "Zustand",
      "Context API",
    ],
    highlight: true,
  },
  {
    id: "backend",
    header: "02 // Backend & API Architecture",
    title: "Resilient Scalable APIs",
    tags: [
      "Node.js Runtime",
      "Express.js",
      "WebSockets",
      "RESTful APIs",
      "Serverless Functions",
      "JWT Auth & RBAC",
    ],
    highlight: false,
  },
  {
    id: "database",
    header: "03 // Databases & Caching",
    title: "Data Architecture",
    tags: ["PostgreSQL", "MongoDB Atlas", "Redis Cache", "Prisma ORM", "SQL & Mongoose"],
    highlight: false,
  },
  {
    id: "devops-qa",
    header: "04 // DevOps, Tooling & QA Automation",
    title: "Production Pipelines",
    tags: [
      "Docker Containers",
      "Playwright E2E",
      "Jest Testing",
      "Git & GitHub",
      "Postman",
      "Vercel",
      "Figma 5.0",
      "CI/CD Actions",
    ],
    highlight: false,
  },
];

export const journey = [
  {
    year: "DEC 2025 — PRES",
    role: "Software Engineer & QA Specialist",
    company: "Code Creative & Client Delivery",
    description:
      "Working with Code Creative while managing private client projects. Engineering scalable full-stack web architectures, optimizing cloud backends, and establishing automated testing & QA pipelines to maintain production reliability.",
  },
  {
    year: "2024 — PRES",
    role: "Independent Full Stack Developer",
    company: "Personal & Commercial Clients",
    description:
      "Delivering custom end-to-end digital solutions for direct clients. Architected high-performance web applications (including DropBeam and ODS), interactive web platforms, RESTful APIs, and cloud deployments tailored to client requirements.",
  },
  {
    year: "JAN 2023 — 2024",
    role: "Core Engineering Foundations",
    company: "Intensive Technical Deep-Dive",
    description:
      "Initiated dedicated software development journey in January 2023. Mastered modern JavaScript (ES6+), React, Node.js, Express, databases (MongoDB, PostgreSQL), data structures, and automated QA practices through building rigorous production prototypes.",
  },
];
