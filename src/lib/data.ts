export interface Project {
  id: string
  title: string
  year: string
  /** Qué es, en una línea corta. */
  subtitle: string
  bgImage: string
  /** Captura real del sistema. */
  posterImage: string
  description: string
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
    title: "WarpWeft",
    year: "2026",
    subtitle: "ERP para talleres de confección",
    bgImage: "/images/project_4.png",
    posterImage: "/images/projects/warpweft.webp",
    description:
      "Pensado para talleres que hoy llevan cotizaciones, medidas y planillas en Excel. Cubre el flujo completo: cotización con PDF, orden de pedido, asignación a talleres, avance por trabajador, pago semanal y balance del mes. Hice el backend en NestJS con DDD/CQRS, permisos por rol y auditoría de cada cambio, y el panel en Next.js.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "Prisma", "Better Auth", "Docker"],
    badge: "En desarrollo",
  },
  {
    id: "tourism-hub",
    title: "Tourism Hub",
    year: "2026",
    subtitle: "Operación de una agencia de turismo",
    bgImage: "/images/project_5.png",
    posterImage: "/images/projects/tourism-hub.webp",
    description:
      "Una agencia cotiza, reserva proveedores, sale con el grupo y al final tiene que cuadrar cuánto costó todo. Tourism Hub cubre ese ciclo: itinerarios editables, tarifarios, salidas con manifiesto, cobros en varias monedas y liquidación por reserva. Backend en .NET como monolito modular, con un esquema de PostgreSQL por módulo y notificaciones con SignalR.",
    tags: [".NET", "C#", "PostgreSQL", "SignalR", "Next.js", "Docker"],
    liveUrl: "https://tourismhub-staging-frontend.acide.win/login",
    badge: "En desarrollo",
    demoCredentials: {
      email: "admin@tourism-hub.dev",
      password: "Admin123!",
    },
  },
  {
    id: "saas-core",
    title: "SaaS Core",
    year: "2026",
    subtitle: "Base multi-tenant para productos SaaS",
    bgImage: "/images/project_1.png",
    posterImage: "/images/projects/saas-core.webp",
    description:
      "Lo que todo SaaS necesita y nadie quiere rehacer: organizaciones, usuarios, roles y permisos, invitaciones, auditoría, planes con límites y cobro con Culqi. Lo armé una vez para arrancar cada producto nuevo desde aquí.",
    tags: ["Node.js", "Next.js", "PostgreSQL", "Redis", "Multi-tenant"],
    liveUrl: "https://admin.saas.webcoresys.com/",
    demoCredentials: {
      username: "orgadmin",
      password: "OrgAdmin123!",
    },
  },
  {
    id: "transigo-gps",
    title: "TransiGo",
    year: "2026",
    subtitle: "Monitoreo GPS de transporte público",
    bgImage: "/images/project_2.png",
    posterImage: "/images/projects/transigo.webp",
    description:
      "Mapa en vivo de buses en Arequipa. Cada unidad publica su posición por WebSockets y el panel calcula cuánto falta para que llegue al paradero más cercano. Incluye un editor de rutas sobre OpenStreetMap con trazado por calles (OSRM).",
    tags: ["Node.js", "WebSockets", "Next.js", "OpenStreetMap", "OSRM"],
    liveUrl: "https://gps-based-transit-optimization.onlinestornsoftware.win/",
    demoCredentials: {
      email: "user@gps-transit.com",
      password: "User123!",
    },
  },
  {
    id: "misti",
    title: "Misti",
    year: "2026",
    subtitle: "Reservas para complejos deportivos",
    bgImage: "/images/project_3.png",
    posterImage: "/images/projects/misti.webp",
    description:
      "Sedes, canchas, horarios, tarifas, bloqueos, reservas y pagos en un solo panel, con una agenda del día por cancha para ver de un vistazo qué está libre. Lo desplegué yo mismo con Docker y Traefik.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "Prisma", "Docker", "Traefik"],
    liveUrl: "https://misti.webcoresys.com/auth/login",
    demoCredentials: {
      email: "admin@admin.com",
      password: "ChooseASafePassword123!",
    },
  },
  {
    id: "school-admin",
    title: "School Admin",
    year: "2026",
    subtitle: "Gestión escolar para un colegio de Arequipa",
    bgImage: "/images/project_6.png",
    posterImage: "/images/projects/school-admin.webp",
    description:
      "Proyecto del curso de gestión de proyectos, hecho con un colegio real como cliente. Admisión con tablero kanban de postulantes, matrícula con expediente familiar, horarios y carga docente, asistencia del personal por reconocimiento facial y cobranzas.",
    tags: ["NestJS", "Next.js", "PostgreSQL", "Prisma", "Docker"],
    githubUrl: "https://github.com/rogerinfas/software-project-management-course-project",
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
