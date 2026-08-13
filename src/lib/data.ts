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
    id: "transigo-gps",
    title: "TRANSIGO — MONITOREO GPS",
    year: "2026",
    subtitle: "SISTEMA DE MONITOREO EN TIEMPO REAL",
    bgImage: "/images/transigo_preview.png",
    posterImage: "/images/transigo_preview.png",
    description:
      "Aplicación web orientada a la gestión, monitoreo y visualización en tiempo real del sistema de transporte público basado en GPS. Supervisa unidades satelitales mediante WebSockets (Pub/Sub), gestiona rutas y calcula estimaciones de arribo (ETA).",
    headline:
      "Seguimiento satelital de vehículos en tiempo real usando WebSockets (Pub/Sub) e interfaz directa con la API backend.",
    tags: ["TransiGo", "WebSockets Pub/Sub", "TypeScript", "Telemetría GPS", "OpenStreetMap", "APIs Backend"],
    liveUrl: "https://gps-based-transit-optimization.onlinestornsoftware.win/",
  },
  {
    id: "hanna-stina",
    title: "PORTFOLIO HANNA STÍNA",
    year: "2026",
    subtitle: "FRONTEND DE ALTO RENDIMIENTO Y CMS",
    bgImage: "/images/project_hanna_bg.png",
    posterImage: "/images/project_hanna_bg.png",
    description:
      "Portfolio enfocado en fotografía para la arquitecta de interiores Hanna Stína, optimizado con caché CDN personalizada y tiempos de carga inferiores a un segundo.",
    headline:
      "Creación de experiencias frontend impecables respaldadas por sistemas eficientes de entrega de contenido.",
    tags: ["React", "Next.js", "Tailwind CSS", "MDX"],
    liveUrl: "https://hannastina.is",
  },
  {
    id: "tolum-engine",
    title: "MOTOR NLP TÖLUM",
    year: "2026",
    subtitle: "BACKEND Y API OPEN-SOURCE",
    bgImage: "/images/project_tolum_bg.png",
    posterImage: "/images/project_tolum_bg.png",
    description:
      "API interactiva de reconocimiento de voz y herramienta de procesamiento de lenguaje desarrollada con Python FastAPI y Web Audio API.",
    headline:
      "Diseño de servicios backend escalables y herramientas de código abierto impulsadas por Web APIs modernas.",
    tags: ["Python", "FastAPI", "TypeScript", "Web Audio API"],
    liveUrl: "https://tolum.app",
  },
  {
    id: "dagens-media",
    title: "PLATAFORMA DAGENS MEDIA",
    year: "2025",
    subtitle: "BACKEND EDITORIAL DE ALTO TRÁFICO",
    bgImage: "/images/dark_forest_bg.png",
    posterImage: "/images/dark_forest_bg.png",
    description:
      "Plataforma editorial moderna diseñada para renderizado de servidor de baja latencia, almacenamiento en caché con Redis y alto tráfico de lectores.",
    headline:
      "Arquitectura de código limpio y mantenible con estricta seguridad de tipos y pipelines CI/CD automatizados.",
    tags: ["Next.js App Router", "Redis", "TypeScript", "Vercel"],
    liveUrl: "https://dagens.media",
  },
  {
    id: "perla-cloud",
    title: "TELEMETRÍA PERLA CLOUD",
    year: "2024",
    subtitle: "PANEL DE CONTROL EN LA NUBE DISTRIBUIDA",
    bgImage: "/images/project_merla_bg.png",
    posterImage: "/images/merla_poster_card.png",
    description:
      "Backend de telemetría distribuida que proporciona métricas de infraestructura en tiempo real, pipelines de datos en PostgreSQL y gráficos interactivos.",
    headline:
      "Soluciones full-stack de extremo a extremo, desde el modelado de bases de datos hasta herramientas fluidas de monitoreo UI.",
    tags: ["Node.js", "PostgreSQL", "React", "Recharts", "Docker"],
    liveUrl: "https://perla.cloud",
  },
]

export const capabilities: Capability[] = [
  {
    number: "(01)",
    title: "Arquitectura Backend y Sistemas",
    description:
      "Diseño de APIs REST y GraphQL de alto rendimiento, esquemas de bases de datos relacionales (PostgreSQL, Redis), flujos de autenticación y servicios backend concurrentes en Node.js.",
    image: "/images/transigo_preview.png",
  },
  {
    number: "(02)",
    title: "Desarrollo Web Full-Stack",
    description:
      "Desarrollo de aplicaciones de extremo a extremo, conectando frontends modernos en Next.js/React con backends de servidor altamente resilientes en TypeScript.",
    image: "/images/project_hanna_bg.png",
  },
  {
    number: "(03)",
    title: "Bases de Datos y Cloud DevOps",
    description:
      "Modelado relacional y NoSQL, optimización de consultas, contenedorización con Docker, automatización de integración continua (CI/CD) y despliegue en la nube (AWS, Vercel).",
    image: "/images/project_tolum_bg.png",
  },
  {
    number: "(04)",
    title: "Sistemas de UI/UX y Animaciones",
    description:
      "Creación de interfaces limpias y adaptables con microanimaciones CSS fluidas, diseños mobile-first, componentes accesibles y modos oscuros.",
    image: "/images/dark_forest_bg.png",
  },
  {
    number: "(05)",
    title: "Auditorías de Código y Rendimiento",
    description:
      "Pruebas de carga backend, afinamiento de consultas a bases de datos, corrección de fugas de memoria, optimización de Core Web Vitals y refactorización de código legado.",
    image: "/images/project_merla_bg.png",
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      "Roger Infa es un ingeniero excepcional con una solidez técnica notable en backend. Diseñó la arquitectura de nuestra base de datos en tiempo real y entregó una plataforma impecable antes del plazo.",
    name: "Kristín Eva Ólafsdóttir",
    role: "CEO en Gagarin",
  },
  {
    quote:
      "El enfoque de Roger en backend y su atención al rendimiento de las APIs le dieron a nuestra plataforma web una confiabilidad absoluta ante picos de tráfico.",
    name: "Oliver Jónsson",
    role: "Fundador en Merla",
  },
  {
    quote:
      "Roger conecta fluidamente complejos pipelines de datos en el servidor con interfaces web rápidas y elegantes. Un desarrollador full-stack de primer nivel.",
    name: "Hanna Stína",
    role: "Arquitecta Principal",
  },
]

export const navItems: NavItem[] = [
  { name: "Inicio", href: "#home" },
  { name: "Proyectos", href: "#work" },
  { name: "Sobre mí", href: "#studio" },
  { name: "Habilidades", href: "#capabilities" },
  { name: "Contacto", href: "#contact" },
]

