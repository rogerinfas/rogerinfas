export default function ExperienceCard() {
  const experiences = [
    {
      company: "ACIDE PERU",
      period: "2025 – PRESENTE",
      role: "Ingeniero de Software",
      description: "Liderazgo técnico en el diseño e implementación de ERPs/CRMs personalizados. Integración estratégica con Odoo y Shopify para clientes corporativos.",
    },
    {
      company: "TechNova Solutions S.A.C.",
      period: "2025",
      role: "Desarrollador Backend",
      description: "Diseño de APIs seguras con NestJS y WebSockets. Arquitectura de seguridad basada en JWT y control de acceso RBAC.",
    },
    {
      company: "Floreas Technologies (México)",
      period: "2025",
      role: "Desarrollador Frontend",
      description: "Desarrollo de aplicaciones web transaccionales de alto tráfico para LATAM con Vue.js y TailwindCSS.",
    },
    {
      company: "MF Gastronomía y Calidad",
      period: "2024 – 2025",
      role: "Asistente de TI",
      description: "Mantenimiento de infraestructura web y automatización de procesos de recepción de pedidos.",
    },
  ]

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-foreground/50">[ 03 / TRAYECTORIA PROFESIONAL ]</span>
        <span className="text-xs uppercase tracking-widest text-foreground/40 font-mono">EXPERIENCIA</span>
      </div>

      <div className="divide-y divide-border border-b border-border">
        {experiences.map((exp, index) => (
          <div key={index} className="py-8 px-4 group hover:bg-secondary-background/40 transition-colors rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-3">
                <span className="text-xs font-mono tracking-widest text-foreground/50 block mb-1">{exp.period}</span>
                <span className="text-xs uppercase tracking-wider text-foreground/70 font-semibold">{exp.role}</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-2xl md:text-3xl font-heading uppercase tracking-wide group-hover:font-serif group-hover:italic transition-all">
                  {exp.company}
                </h3>
              </div>
              <div className="lg:col-span-5 text-sm text-foreground/75 leading-relaxed">
                {exp.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
