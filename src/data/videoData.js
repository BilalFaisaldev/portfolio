/**
 * Video Catalog & Motion Showcase
 * Contains Muhammad Bilal Faisal's video productions, CGI simulations, and official promo demos.
 */

export const videoCategories = [
  "All",
  "Promo & Motion",
  "Science & Simulation",
  "Cosmic & VFX",
];

export const videos = [
  {
    id: "syncscope-promo",
    title: "SyncScope — Product Demo & Official Launch Promo",
    category: "Promo & Motion",
    description:
      "High-octane commercial promotional walkthrough and product demo showcasing SyncScope's synchronized real-time capabilities, cyber aesthetic interface, and rapid data flow.",
    duration: "00:36",
    date: "Nov 2026",
    badge: "1080p Full HD",
    tech: ["Product Promo", "Motion Graphics", "SyncScope", "Video Production"],
    videoType: "mp4",
    videoUrl: "./videos/syncscope-promo.mp4",
    embedUrl: "./videos/syncscope-promo.mp4",
    thumbnailGradient: "linear-gradient(135deg, #091b2c 0%, #0369a1 50%, #030305 100%)",
    accentColor: "#00e5ff",
    featured: true,
    githubUrl: "https://github.com/BilalFaisaldev",
    liveUrl: null,
  },
  {
    id: "earth-stopped-spinning",
    title: "What If Earth Stopped Spinning? — CGI & Physics Simulation",
    category: "Science & Simulation",
    description:
      "Scientific simulation and visual storytelling breakdown examining the catastrophic physics if the Earth suddenly halted rotation: atmospheric shockwaves, supersonic winds, and planetary momentum.",
    duration: "00:37",
    date: "Nov 2026",
    badge: "CGI Simulation",
    tech: ["CGI Visuals", "Physics Simulation", "3D Rendering", "Visual Effects"],
    videoType: "mp4",
    videoUrl: "./videos/Earth_Stopped_Spinning_final.mp4",
    embedUrl: "./videos/Earth_Stopped_Spinning_final.mp4",
    thumbnailGradient: "linear-gradient(135deg, #1b0a2a 0%, #6b21a8 50%, #030305 100%)",
    accentColor: "#d946ef",
    featured: true,
    githubUrl: "https://github.com/BilalFaisaldev",
    liveUrl: null,
  },
  {
    id: "sooraj-bujhna",
    title: "Sooraj Bujhna (Suraj Bujh Jaye To?) — Cosmic Solar Extinction VFX",
    category: "Cosmic & VFX",
    description:
      "Cosmic narrative visual storytelling exploring the catastrophic aftermath if the Sun were to extinguish: orbital shifts, deep planetary freeze, and darkness enveloping the solar system.",
    duration: "00:45",
    date: "Nov 2026",
    badge: "1080p Cosmic VFX",
    tech: ["Astronomy VFX", "Cosmic Simulation", "Video Editing", "Visual Storytelling"],
    videoType: "mp4",
    videoUrl: "./videos/sooraj-bujhna.mp4",
    embedUrl: "./videos/sooraj-bujhna.mp4",
    thumbnailGradient: "linear-gradient(135deg, #2e0d00 0%, #c2410c 50%, #030305 100%)",
    accentColor: "#f97316",
    featured: true,
    githubUrl: "https://github.com/BilalFaisaldev",
    liveUrl: null,
  },
];
