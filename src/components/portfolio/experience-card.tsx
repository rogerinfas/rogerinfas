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
  ]

  return (
    <div id="experience" className="md:col-span-2 lg:col-span-2 row-span-2 bg-secondary-background/60 rounded-2xl p-8 sm:p-10 border border-border flex flex-col justify-between transition-all hover:border-foreground/30">
      <div>
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <h2 className="text-2xl font-serif italic">Experiencia Profesional</h2>
          <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-semibold">[ TRAYECTORIA ]</span>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-heading tracking-wide uppercase group-hover:text-foreground/80 transition-colors">{exp.company}</h3>
                <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-mono">{exp.period}</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-2">{exp.role}</p>
              <p className="text-xs text-foreground/75 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
