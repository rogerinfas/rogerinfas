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
  /** Etiqueta de estado (p. ej. "En desarrollo") cuando no hay demo desplegada. */
  badge?: string
  demoCredentials?: {
    email?: string
    username?: string
    password: string
  }
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
    id: "warpweft",
    title: "WARPWEFT — ERP TEXTIL",
    year: "2026",
    subtitle: "ERP MULTI-EMPRESA PARA CONFECCIÓN Y TALLERES",
    bgImage: "/images/project_4.png",
    posterImage: "/images/project_4.png",
    description:
      "ERP para el rubro textil y confección: empresas, clientes y proveedores, talleres, trabajadores y planillas, materiales, prendas y control de medidas, cotizaciones con PDF, órdenes de compra, finanzas y reportes en Excel. Backend con arquitectura DDD/CQRS, RBAC y auditoría; panel administrativo con dashboard, KPIs y tipos generados desde el OpenAPI.",
    headline:
      "De la cotización a la planilla: operación textil completa con backend auditable y panel administrativo en tiempo real.",
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Better Auth", "Tailwind CSS", "Docker"],
    badge: "En desarrollo",
  },
  {
    id: "tourism-hub",
    title: "TOURISM HUB — OPERADORA TURÍSTICA",
    year: "2026",
    subtitle: "SUITE INTEGRAL PARA OPERACIÓN TURÍSTICA",
    bgImage: "/images/project_5.png",
    posterImage: "/images/project_5.png",
    description:
      "Ecosistema para operar una agencia de turismo de punta a punta: cotizaciones y reservas con itinerarios editables, tours multidestino con tarifarios y costeo, proveedores, salidas con manifiestos, cobranzas multimoneda, liquidación de costos e incidentes en ruta. Backend en .NET con monolito modular, DDD y PostgreSQL multiesquema; panel tipo suite de aplicaciones con tipos generados desde el OpenAPI.",
    headline:
      "De la cotización a la liquidación: operación turística completa con costos reales, cobranzas y control por reserva.",
    tags: ["Next.js", ".NET", "C#", "PostgreSQL", "SignalR", "TypeScript", "Tailwind CSS", "Docker"],
    liveUrl: "https://tourismhub-staging-frontend.acide.win/login",
    badge: "En desarrollo",
    demoCredentials: {
      email: "admin@tourism-hub.dev",
      password: "Admin123!",
    },
  },
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
    demoCredentials: {
      username: "orgadmin",
      password: "OrgAdmin123!",
    },
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
    demoCredentials: {
      email: "user@gps-transit.com",
      password: "User123!",
    },
  },
  {
    id: "misti",
    title: "MISTI — GESTIÓN DE CANCHAS",
    year: "2026",
    subtitle: "PLATAFORMA ADMINISTRATIVA PARA ALQUILER DE CANCHAS",
    bgImage: "/images/project_3.png",
    posterImage: "/images/project_3.png",
    description:
      "Plataforma administrativa monocliente para gestionar el alquiler de canchas deportivas, incluyendo sedes, canchas, horarios, tarifas, clientes, reservas y pagos.",
    headline:
      "Una solución centralizada para ordenar la operación diaria de complejos deportivos y administrar reservas, clientes y pagos desde un solo lugar.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NestJS", "Prisma", "PostgreSQL", "Better Auth", "Docker", "Traefik"],
    liveUrl: "https://misti.webcoresys.com/auth/login",
    demoCredentials: {
      email: "admin@admin.com",
      password: "ChooseASafePassword123!",
    },
  },
]

export const capabilities: Capability[] = [
  {
    number: "(01)",
    title: "Arquitectura Backend y Sistemas",
    description:
      "APIs rápidas, PostgreSQL y auth sólida en Node.js.",
    image: "/images/capabilities/backend.svg",
  },
  {
    number: "(02)",
    title: "Desarrollo Web Full-Stack",
    description:
      "Next.js/React + backend resiliente, de punta a punta.",
    image: "/images/capabilities/fullstack.svg",
  },
  {
    number: "(03)",
    title: "Bases de Datos y Cloud DevOps",
    description:
      "Modelado, Docker, CI/CD y nube (AWS, Vercel).",
    image: "/images/capabilities/cloud.svg",
  },
  {
    number: "(04)",
    title: "Sistemas de UI/UX y Animaciones",
    description:
      "Interfaces limpias, mobile-first y accesibles.",
    image: "/images/capabilities/ui-motion.svg",
  },
  {
    number: "(05)",
    title: "Auditorías de Código y Rendimiento",
    description:
      "Consultas, Core Web Vitals y legado optimizados.",
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
  { name: "Valor", href: "#valor" },
  { name: "Contacto", href: "#contact" },
]
