/**
 * =========================================================================
 * CENTRAL CONFIG — ONE SOURCE OF TRUTH
 * =========================================================================
 * Holds every repeated value rendered across the site:
 * header, hero, About, Career Journey, contact section, footer, terminal,
 * and page title. Never hardcode different values anywhere else.
 * =========================================================================
 */

export const centralConfig = {
  // Canonical display name
  NAME: "Muhammad Bilal Faisal",
  FIRST_NAME: "Muhammad Bilal",
  LAST_NAME: "Faisal",
  INITIALS: "MBF",

  // Roles & titles (name appears once in page title)
  PRIMARY_TITLE: "Full Stack Engineer & QA Specialist",
  SECONDARY_TITLE: "MERN & Next.js Production Architect",
  PAGE_TITLE: "Muhammad Bilal Faisal | Full Stack Engineer & QA Specialist",

  // Canonical Contact Details
  EMAIL: "bilalfaisalarain@gmail.com",
  WHATSAPP_NUMBER: "+92 320 3066554",
  WHATSAPP_LINK: "https://wa.me/923203066554",
  LOCATION: "Karachi, Pakistan",

  // Verified Profiles
  GITHUB_PROFILE: "https://github.com/BilalFaisaldev",
  INSTAGRAM_URL: "https://www.instagram.com/bilalfaysaldev/",
  INSTAGRAM_HANDLE: "@bilalfaysaldev",

  // Confirmed Commercial Experience
  EXPERIENCE_VALUE: "2+",
  EXPERIENCE_LABEL: "Years Commercial Exp",

  // No LinkedIn profile was found during audit. Do not invent.
  LINKEDIN_URL: null, // [OWNER_TO_PROVIDE]

  // Form endpoint for Formspree / FormSubmit
  FORM_ENDPOINT: "", // [OWNER_TO_PROVIDE — if empty, honest mailto is used]

  // Canonical resume document
  RESUME_URL: "resume.pdf",
  RESUME_DOWNLOAD_NAME: "Bilal_Faisal_CV.pdf",

  // Footer copyright exact format: "© 2026 Muhammad Bilal Faisal. All rights reserved."
  COPYRIGHT_YEAR: "2026",
  COPYRIGHT_TEXT: "© 2026 Muhammad Bilal Faisal. All rights reserved.",

  TAGLINE:
    "Crafting scalable, high-performance web applications and resilient backend architectures with Next.js, Node.js, and automated QA testing pipelines.",
};

// Aliases for component imports
export const personalInfo = {
  name: centralConfig.NAME,
  firstName: centralConfig.FIRST_NAME,
  lastName: centralConfig.LAST_NAME,
  initials: centralConfig.INITIALS,
  primaryTitle: centralConfig.PRIMARY_TITLE,
  secondaryTitle: centralConfig.SECONDARY_TITLE,
  pageTitle: centralConfig.PAGE_TITLE,
  tagline: centralConfig.TAGLINE,
  email: centralConfig.EMAIL,
  phone: centralConfig.WHATSAPP_NUMBER,
  whatsappUrl: centralConfig.WHATSAPP_LINK,
  githubUrl: centralConfig.GITHUB_PROFILE,
  instagramUrl: centralConfig.INSTAGRAM_URL,
  linkedinUrl: centralConfig.LINKEDIN_URL,
  location: centralConfig.LOCATION,
  resumeUrl: centralConfig.RESUME_URL,
  resumeDownloadName: centralConfig.RESUME_DOWNLOAD_NAME,
  formEndpoint: centralConfig.FORM_ENDPOINT,
  copyrightText: centralConfig.COPYRIGHT_TEXT,
};

/**
 * Honest, verifiable statistics
 * 1. Experience: 3+ [OWNER_TO_CONFIRM]
 * 2. Projects: Exactly 9 projects displayed on this site
 * 3. QA: 100% test coverage focus (replaces unverified claims)
 */
export const stats = [
  { value: centralConfig.EXPERIENCE_VALUE, label: centralConfig.EXPERIENCE_LABEL },
  { value: "9", label: "Production & Client Projects" },
  { value: "100%", label: "QA Test Coverage Focus" },
];

export const projectCategories = [
  "All",
  "Full Stack & MERN",
  "AI & Voice",
  "Utilities & Tools",
  "QA & Arcade",
];

/**
 * All 9 Production Projects
 * All links verified live (logged-out guest sessions):
 * - Dead links and 404s removed
 * - Private repos unlinked
 * - Real verified live demos added
 */
export const projects = [
  {
    id: "dropbeam",
    title: "DropBeam — Instant Wi-Fi Sharing & Live Clipboard",
    category: "Full Stack & MERN",
    description:
      "High-speed, privacy-first local file-sharing and live clipboard synchronization utility across local Wi-Fi networks. Zero registration, drag-and-drop transfers, and real-time room communication.",
    tech: ["Node.js", "Express.js", "WebSockets", "Wi-Fi Subnet", "HTML5 Canvas"],
    metric: "Wi-Fi Sync",
    metricLabel: "Zero-Config Transfer",
    liveUrl: "https://dropbeem.onrender.com/",
    githubUrl: "https://github.com/BilalFaisaldev/DropBeem",
    featured: true,
  },
  {
    id: "ods",
    title: "Omar Digital Solutions (ODS)",
    category: "Full Stack & MERN",
    description:
      "Responsive educational platform landing page engineered with modern UI components, course directory showcases, and automated course enrollment inquiries.",
    tech: ["Next.js 14", "Node.js", "MongoDB Atlas", "TailwindCSS", "Vercel"],
    metric: "EdTech",
    metricLabel: "Course Directory",
    liveUrl: "https://ods-courses.vercel.app/",
    githubUrl: null, // [OWNER_TO_CONFIRM]: Repo is private on GitHub; unlinked to prevent 404 for visitors
    featured: true,
  },
  {
    id: "nova-ai",
    title: "NOVA — Personal AI Voice Assistant",
    category: "AI & Voice",
    description:
      "Conversational AI voice assistant prototype featuring speech recognition, responsive 3D audio-reactive orb visualization, and dynamic telemetry HUD powered by Google Gemini API.",
    tech: ["Google Gemini API", "Web Speech API", "Canvas Audio Viz", "JavaScript ES6+"],
    metric: "AI Engine",
    metricLabel: "Voice Telemetry",
    liveUrl: null,
    githubUrl: null, // [OWNER_TO_CONFIRM]: Source repo unlinked per audit rule (old URL 404s)
    featured: true,
  },
  {
    id: "luxurystay-hms",
    title: "LuxuryStay — Hotel Management Suite (HMS)",
    category: "Full Stack & MERN",
    description:
      "End-to-end commercial hospitality platform featuring real-time room inventory management, reservation checkout flows, staff RBAC privilege tiers, and dynamic analytics dashboard.",
    tech: ["React.js", "TypeScript", "Vite", "TailwindCSS", "Cloud Run"],
    metric: "Hospitality",
    metricLabel: "Commercial Suite",
    liveUrl: "https://luxurystay-hms-103758282821.asia-southeast1.run.app/", // Verified 200 OK from README
    githubUrl: "https://github.com/BilalFaisaldev/luxurystay-hms",
    featured: true,
  },
  {
    id: "hinglish-transcriber",
    title: "Hinglish Audio Transcriber",
    category: "AI & Voice",
    description:
      "Specialized speech-to-text intelligence system tuned for romanized Urdu/Hindi (Hinglish) phonetics and dialectal nuances with timestamped transcript exports.",
    tech: ["React.js", "TypeScript", "TailwindCSS", "Node.js Express", "Vite"],
    metric: "Bilingual AI",
    metricLabel: "Speech-to-Text",
    liveUrl: null, // Live demo unlinked per audit rule (omitted per audit requirement)
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
    liveUrl: "https://instapdf.netlify.app/",
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
    liveUrl: "https://png-to-webp-converter-lrwt.vercel.app/", // Verified canonical deployment
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
    githubUrl: null, // [OWNER_TO_CONFIRM]: Source repo unlinked per audit rule (old URL 404s)
    featured: true,
  },
  {
    id: "code-creative-suite",
    title: "Code Creative — Commercial Software Suite",
    category: "QA & Arcade",
    description:
      "Production client delivery ecosystem featuring automated end-to-end testing, high-throughput web architectures, and containerized deployment.",
    tech: ["Laravel", "PHP", "JavaScript", "TailwindCSS", "Postman", "QA Automation"],
    metric: "Agency Delivery",
    metricLabel: "Client Production",
    liveUrl: "https://staging.codecreatives.com/", // Verified live agency staging deployment
    githubUrl: null, // Generic GitHub profile link removed per audit rule
    featured: true,
  },
];

export const capabilities = [
  {
    id: "frontend",
    header: "01 // Front-End & Modern UI",
    title: "Building responsive, zero-defect interfaces.",
    tags: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "TailwindCSS",
      "HTML5 / Modern CSS3",
      "JavaScript ES6+",
      "Bootstrap",
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
      "PHP & Laravel",
      "WebSockets",
      "RESTful APIs",
      "JWT Auth",
    ],
    highlight: false,
  },
  {
    id: "database",
    header: "03 // Databases & Caching",
    title: "Data Architecture",
    tags: ["MySQL", "MongoDB Atlas", "PostgreSQL", "Supabase", "SQL"],
    highlight: false,
  },
  {
    id: "devops-qa",
    header: "04 // DevOps, Tooling & QA Automation",
    title: "Production Pipelines",
    tags: [
      "Playwright E2E",
      "Postman",
      "Git & GitHub",
      "Docker",
      "Vercel",
      "Figma",
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
      "Working with Code Creative while managing private client projects. Engineering scalable web architectures, conducting end-to-end Quality Assurance testing, and executing API integrations.",
  },
  {
    year: "2024 — PRES",
    role: "Independent Full Stack Developer",
    company: "Personal & Commercial Clients",
    description:
      "Delivering custom end-to-end digital solutions for direct clients. Architected high-performance web applications (including DropBeam and ODS), interactive web platforms, RESTful APIs, and cloud deployments.",
  },
  {
    year: "JAN 2023 — 2024",
    role: "Core Engineering Foundations",
    company: "Intensive Technical Deep-Dive",
    description:
      "Initiated dedicated software development journey in January 2023. Mastered modern JavaScript (ES6+), React, Node.js, Express, databases, and automated QA practices through building rigorous prototypes.",
  },
];
