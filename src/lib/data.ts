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
    id: "saas-core",
    title: "SAAS CORE — PLATAFORMA BASE",
    year: "2026",
    subtitle: "ARQUITECTURA Y CORE PARA APLICACIONES SAAS",
    bgImage: "/images/project_1.png",
    posterImage: "/images/project_1.png",
    description:
      "Repositorio y arquitectura core para plataformas SaaS que posibilita la administración centralizada, gestión multi-tenant, control de roles, autenticación segura y servicios base escalables.",
    headline:
      "Arquitectura backend y panel administrativo preparado para escalar aplicaciones SaaS empresariales con seguridad y modularidad.",
    tags: ["Next.js", "TypeScript", "Node.js", "Multi-Tenant", "PostgreSQL", "REST APIs"],
    liveUrl: "https://admin.saas.webcoresys.com/",
  },
  {
    id: "transigo-gps",
    title: "TRANSIGO — MONITOREO GPS",
    year: "2026",
    subtitle: "SISTEMA DE MONITOREO Y TELEMETRÍA DE TRANSPORTE",
    bgImage: "/images/project_2.png",
    posterImage: "/images/project_2.png",
    description:
      "Aplicación web orientada a la gestión, monitoreo y visualización en tiempo real del sistema de transporte público basado en GPS mediante WebSockets (Pub/Sub). Supervisa unidades, gestiona rutas y calcula estimaciones de arribo.",
    headline:
      "Seguimiento satelital de vehículos en tiempo real con WebSockets e interfaz de alta precisión para la toma de decisiones.",
    tags: ["TypeScript", "Next.js", "WebSockets Pub/Sub", "Telemetría GPS", "OpenStreetMap", "Node.js API"],
    liveUrl: "https://gps-based-transit-optimization.onlinestornsoftware.win/",
  },
  {
    id: "canchas-deportivas",
    title: "GESTIÓN DE CANCHAS DEPORTIVAS",
    year: "2026",
    subtitle: "SISTEMA DE RESERVAS Y ADMINISTRACIÓN",
    bgImage: "/images/project_3.png",
    posterImage: "/images/project_3.png",
    description:
      "Aplicativo integral orientado a la gestión de instalaciones deportivas, control de reservas en tiempo real, administración de horarios, pagos e informes de ocupación.",
    headline:
      "Sistema web intuitivo para la automatización de reservas de canchas, gestión de disponibilidad y control operativo.",
    tags: ["React", "TypeScript", "Node.js", "Gestión de Reservas", "PostgreSQL"],
  },
]

export const capabilities: Capability[] = [
  {
    number: "(01)",
    title: "Arquitectura Backend y Sistemas",
    description:
      "Diseño de APIs REST y GraphQL de alto rendimiento, esquemas de bases de datos relacionales (PostgreSQL, Redis), flujos de autenticación y servicios backend concurrentes en Node.js.",
    image: "/images/capabilities/1.avif",
  },
  {
    number: "(02)",
    title: "Desarrollo Web Full-Stack",
    description:
      "Desarrollo de aplicaciones de extremo a extremo, conectando frontends modernos en Next.js/React con backends de servidor altamente resilientes en TypeScript.",
    image: "/images/capabilities/2.png",
  },
  {
    number: "(03)",
    title: "Bases de Datos y Cloud DevOps",
    description:
      "Modelado relacional y NoSQL, optimización de consultas, contenedorización con Docker, automatización de integración continua (CI/CD) y despliegue en la nube (AWS, Vercel).",
    image: "/images/capabilities/3.jpeg",
  },
  {
    number: "(04)",
    title: "Sistemas de UI/UX y Animaciones",
    description:
      "Creación de interfaces limpias y adaptables con microanimaciones CSS fluidas, diseños mobile-first, componentes accesibles y modos oscuros.",
    image: "/images/capabilities/4.png",
  },
  {
    number: "(05)",
    title: "Auditorías de Código y Rendimiento",
    description:
      "Pruebas de carga backend, afinamiento de consultas a bases de datos, corrección de fugas de memoria, optimización de Core Web Vitals y refactorización de código legado.",
    image: "/images/capabilities/5.png",
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
