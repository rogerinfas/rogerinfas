export interface Project {
  id: string
  title: string
  year: string
  subtitle: string
  bgImage: string
  posterImage: string
  description: string
  headline: string
  tags?: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface Capability {
  number: string
  title: string
  description: string
  image: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export interface NavItem {
  name: string
  href: string
}

export const projects: Project[] = [
  {
    id: "merla",
    title: "MERLA RFID PLATFORM",
    year: "2026",
    subtitle: "REAL-TIME BACKEND & FULL-STACK APP",
    bgImage: "/images/project_merla_bg.png",
    posterImage: "/images/merla_poster_card.png",
    description:
      "A real-time RFID inventory platform powered by WebSockets, PostgreSQL, and Node.js that scans industrial warehouses in seconds.",
    headline:
      "Engineering robust backend systems, resilient API architectures, and modern full-stack web applications.",
    tags: ["Node.js", "WebSockets", "PostgreSQL", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/rogerinfas",
    liveUrl: "https://merla.app",
  },
  {
    id: "hanna-stina",
    title: "HANNA STÍNA PORTFOLIO",
    year: "2026",
    subtitle: "HIGH-PERFORMANCE FRONTEND & CMS",
    bgImage: "/images/project_hanna_bg.png",
    posterImage: "/images/project_hanna_bg.png",
    description:
      "An image-heavy portfolio for interior architect Hanna Stína, optimized with custom CDN caching and sub-second load times.",
    headline:
      "Crafting pixel-perfect frontend experiences backed by clean, efficient content delivery systems.",
    tags: ["React", "Next.js", "Tailwind CSS", "MDX"],
    githubUrl: "https://github.com/rogerinfas",
    liveUrl: "https://hannastina.is",
  },
  {
    id: "tolum-engine",
    title: "TÖLUM NLP ENGINE",
    year: "2026",
    subtitle: "OPEN-SOURCE BACKEND & API",
    bgImage: "/images/project_tolum_bg.png",
    posterImage: "/images/project_tolum_bg.png",
    description:
      "An interactive speech recognition API and language processing tool built with Python FastAPI and Web Audio API.",
    headline:
      "Designing scalable backend services and open-source tools powered by modern Web APIs.",
    tags: ["Python", "FastAPI", "TypeScript", "Web Audio API"],
    githubUrl: "https://github.com/rogerinfas",
    liveUrl: "https://tolum.app",
  },
  {
    id: "dagens-media",
    title: "DAGENS MEDIA PLATFORM",
    year: "2025",
    subtitle: "HIGH-TRAFFIC EDITORIAL BACKEND",
    bgImage: "/images/dark_forest_bg.png",
    posterImage: "/images/dark_forest_bg.png",
    description:
      "A modern publishing platform engineered for low-latency server rendering, Redis caching, and heavy reader traffic.",
    headline:
      "Architecting clean, maintainable codebases with robust type-safety and automated CI/CD pipelines.",
    tags: ["Next.js App Router", "Redis", "TypeScript", "Vercel"],
    githubUrl: "https://github.com/rogerinfas",
    liveUrl: "https://dagens.media",
  },
  {
    id: "perla-cloud",
    title: "PERLA TELEMETRY",
    year: "2024",
    subtitle: "DISTRIBUTED CLOUD DASHBOARD",
    bgImage: "/images/project_merla_bg.png",
    posterImage: "/images/merla_poster_card.png",
    description:
      "Distributed telemetry backend providing real-time infrastructure metrics, PostgreSQL data pipelines, and interactive charts.",
    headline:
      "Delivering end-to-end full-stack solutions from database modeling to fluid UI monitoring tools.",
    tags: ["Node.js", "PostgreSQL", "React", "Recharts", "Docker"],
    githubUrl: "https://github.com/rogerinfas",
    liveUrl: "https://perla.cloud",
  },
]

export const capabilities: Capability[] = [
  {
    number: "(01)",
    title: "Backend & System Architecture",
    description:
      "Designing high-throughput REST and GraphQL APIs, relational database schemas (PostgreSQL, Redis), authentication flows, and high-concurrency Node.js backends.",
    image: "/images/merla_poster_card.png",
  },
  {
    number: "(02)",
    title: "Full-Stack Web Development",
    description:
      "End-to-end application development connecting modern Next.js/React frontends to resilient server backends with strict TypeScript safety.",
    image: "/images/project_hanna_bg.png",
  },
  {
    number: "(03)",
    title: "Databases & Cloud DevOps",
    description:
      "Relational & NoSQL modeling, query optimization, Docker containerization, CI/CD pipeline automation, and cloud deployments (AWS, Vercel).",
    image: "/images/project_tolum_bg.png",
  },
  {
    number: "(04)",
    title: "UI/UX & Motion Systems",
    description:
      "Creating clean, responsive interfaces with fluid micro-animations, mobile-first layouts, accessible components, and dark modes.",
    image: "/images/dark_forest_bg.png",
  },
  {
    number: "(05)",
    title: "Performance & Code Audits",
    description:
      "Backend load testing, database query tuning, fixing memory leaks, optimizing Core Web Vitals, and refactoring complex legacy codebases.",
    image: "/images/project_merla_bg.png",
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      "Roger Infa is an outstanding engineer with incredible backend strength. He designed our real-time database architecture and delivered a flawless full-stack platform ahead of schedule.",
    name: "Kristín Eva Ólafsdóttir",
    role: "CEO at Gagarin",
  },
  {
    quote:
      "Roger's backend focus and attention to API performance gave our web platform rock-solid reliability under high traffic.",
    name: "Oliver Jónsson",
    role: "Founder at Merla",
  },
  {
    quote:
      "Roger seamlessly bridges complex backend data pipelines with sleek, fast web interfaces. A top-tier full-stack developer.",
    name: "Hanna Stína",
    role: "Lead Architect",
  },
]

export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#studio" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Contact", href: "#contact" },
]

