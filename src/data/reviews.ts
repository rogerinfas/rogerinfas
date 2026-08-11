import thumbnail from "../../public/pfps/17.jpg" // Placeholder for now

export interface Project {
  fullName: string
  jobTitle: string
  pfp: typeof thumbnail
  review: string
  techs: string[]
  githubUrl?: string
  liveUrl?: string
  category: "Enterprise" | "SaaS" | "FullStack" | "Backend" | "Bot"
  featured?: boolean
}

const projects: Project[] = [
  {
    fullName: "ERP Personal & Corporativo",
    jobTitle: "NestJS, DDD, Clean Architecture, PostgreSQL",
    pfp: thumbnail,
    review: "Sistema ERP escalable con módulos financieros, control de caja, facturación y conciliaciones bancarias. Diseñado bajo principios CQRS y patrones Unit of Work.",
    techs: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "CQRS"],
    githubUrl: "https://github.com/rogerinfas",
    category: "Enterprise",
    featured: true,
  },
  {
    fullName: "Football Hours SaaS",
    jobTitle: "React, NestJS, PostgreSQL, WebSockets",
    pfp: thumbnail,
    review: "Plataforma de alquiler de campos deportivos en tiempo real con gestión de roles de administración, reservas con prevención de solapamientos, pasarela de pagos y autenticación segura.",
    techs: ["React", "NestJS", "PostgreSQL", "TailwindCSS", "WebSockets"],
    githubUrl: "https://github.com/rogerinfas",
    category: "SaaS",
    featured: true,
  },
  {
    fullName: "NestJS Auth Enterprise Template",
    jobTitle: "NestJS, Google OAuth2, JWT, RBAC",
    pfp: thumbnail,
    review: "Plantilla robusta para microservicios con autenticación JWT, flujo OAuth2 de Google, gestión de refresh tokens rotativos, RBAC (Control de acceso basado en roles) y documentación Swagger.",
    techs: ["NestJS", "JWT", "OAuth2", "Redis", "Swagger"],
    githubUrl: "https://github.com/rogerinfas",
    category: "Backend",
    featured: true,
  },
  {
    fullName: "OdontoWeb SaaS",
    jobTitle: "NestJS, MySQL, WhatsApp Cloud API",
    pfp: thumbnail,
    review: "Sistema integral de gestión de citas dentales e historias clínicas electrónicas con notificaciones automáticas y recordatorios interactivos por WhatsApp API.",
    techs: ["NestJS", "MySQL", "WhatsApp API", "Docker"],
    githubUrl: "https://github.com/rogerinfas",
    category: "FullStack",
    featured: true,
  },
  {
    fullName: "DreamSocial Network",
    jobTitle: "NestJS, PostgreSQL, AWS S3, React",
    pfp: thumbnail,
    review: "Red social universitaria orientada al intercambio de contenido académico, feed dinámico, almacenamiento multimedia en AWS S3 y sistema de hilos de comentarios.",
    techs: ["React", "NestJS", "PostgreSQL", "AWS S3"],
    githubUrl: "https://github.com/rogerinfas",
    category: "FullStack",
  },
  {
    fullName: "SyncOrder Realtime App",
    jobTitle: "Flask, WebSockets, TailwindCSS",
    pfp: thumbnail,
    review: "Gestor operacional de pedidos para restaurantes e inventarios en tiempo real con panel de métricas y cambios de estado por WebSocket.",
    techs: ["Flask", "Python", "TailwindCSS", "WebSockets"],
    githubUrl: "https://github.com/rogerinfas",
    category: "SaaS",
  },
  {
    fullName: "AutoMsgTG Bot",
    jobTitle: "Python, Telethon, Asyncio",
    pfp: thumbnail,
    review: "Motor de automatización y difusión programada para Telegram con concurrencia multi-sesión, rotación de proxys y gestión inteligente de rate limits.",
    techs: ["Python", "Telethon", "Asyncio", "SQLite"],
    githubUrl: "https://github.com/rogerinfas",
    category: "Bot",
  },
]

export default projects
