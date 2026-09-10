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
    image: "/images/capabilities/backend.svg",
  },
  {
    number: "(02)",
    title: "Desarrollo Web Full-Stack",
    description:
      "Desarrollo de aplicaciones de extremo a extremo, conectando frontends modernos en Next.js/React con backends de servidor altamente resilientes en TypeScript.",
    image: "/images/capabilities/fullstack.svg",
  },
  {
    number: "(03)",
    title: "Bases de Datos y Cloud DevOps",
    description:
      "Modelado relacional y NoSQL, optimización de consultas, contenedorización con Docker, automatización de integración continua (CI/CD) y despliegue en la nube (AWS, Vercel).",
    image: "/images/capabilities/cloud.svg",
  },
  {
    number: "(04)",
    title: "Sistemas de UI/UX y Animaciones",
    description:
      "Creación de interfaces limpias y adaptables con microanimaciones CSS fluidas, diseños mobile-first, componentes accesibles y modos oscuros.",
    image: "/images/capabilities/ui-motion.svg",
  },
  {
    number: "(05)",
    title: "Auditorías de Código y Rendimiento",
    description:
      "Pruebas de carga backend, afinamiento de consultas a bases de datos, corrección de fugas de memoria, optimización de Core Web Vitals y refactorización de código legado.",
    image: "/images/capabilities/performance.svg",
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      "Trabajar con Roger nos ayudó a ordenar un sistema que ya se había vuelto difícil de mantener. Diseñó la base de datos y las APIs pensando en la operación diaria de nuestra empresa de transporte en Arequipa, incluso cuando aumentaban las consultas y el seguimiento de unidades.",
    name: "Gabriel Torres",
    role: "Responsable de Tecnología · Empresa de transporte, Arequipa",
  },
  {
    quote:
      "Roger entendió rápido las necesidades de nuestro negocio local y convirtió varios procesos manuales en una plataforma sencilla de usar. Hoy podemos atender reservas y consultas de clientes de Yanahuara, Cayma y Cerro Colorado sin depender de hojas de cálculo.",
    name: "Valentina Ríos",
    role: "Fundadora · Servicios y reservas, Arequipa",
  },
  {
    quote:
      "Lo que más valoro de Roger es que no se queda solo en la interfaz. Puede conversar sobre la experiencia del usuario y, al mismo tiempo, resolver el modelo de datos, la API y el despliegue para que el producto funcione de verdad.",
    name: "Andrés Molina",
    role: "Ingeniero de Software · Consultora tecnológica, Arequipa",
  },
  {
    quote:
      "Roger nos ayudó a convertir un proceso de atención que llevábamos por WhatsApp y archivos separados en una herramienta mucho más ordenada. Su trabajo fue claro, práctico y pensado para el ritmo real de un negocio local.",
    name: "Patricia Salazar",
    role: "Administradora · Negocio gastronómico, Arequipa",
  },
  {
    quote:
      "Necesitábamos una plataforma que pudiera crecer sin complicar al equipo. Roger propuso una solución sencilla para comenzar, pero con una arquitectura preparada para sumar usuarios, reportes e integraciones más adelante.",
    name: "Luis Cáceres",
    role: "Coordinador de Operaciones · Empresa de servicios, Arequipa",
  },
]

export const navItems: NavItem[] = [
  { name: "Inicio", href: "#home" },
  { name: "Proyectos", href: "#work" },
  { name: "Sobre mí", href: "#studio" },
  { name: "Habilidades", href: "#capabilities" },
  { name: "Contacto", href: "#contact" },
]
