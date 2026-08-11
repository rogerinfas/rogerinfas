export default function ExperienceCard() {
  const experiences = [
    {
      company: "ACIDE PERU",
      period: "Oct 2025 – Actualidad | Ingeniero de Software",
      description: "Liderazgo técnico en el diseño y desarrollo de ERPs y CRMs. Integración estratégica con Odoo y Shopify, optimizando los procesos operativos para clientes corporativos.",
      highlighted: true,
    },
    {
      company: "TechNova Solutions S.A.C.",
      period: "Feb 2025 – Jul 2025 | Desarrollador Backend",
      description: "Diseño de APIs seguras con NestJS y WebSockets. Implementación de seguridad estricta basada en JWT y RBAC.",
      highlighted: false,
    },
    {
      company: "Floreas Technologies (México)",
      period: "May 2025 – Jul 2025 | Desarrollador Frontend",
      description: "Desarrollo de interfaces con Vue.js y TailwindCSS. Colaboración en aplicaciones transaccionales de alto tráfico para LATAM.",
      highlighted: false,
    },
  ]

  return (
    <div id="experience" className="md:col-span-2 lg:col-span-2 row-span-2 bg-secondary-background rounded-base p-8 sm:p-10 shadow-shadow border border-border flex flex-col">
      <h2 className="text-3xl font-heading mb-8">Experiencia Profesional</h2>
      <div className="flex flex-col gap-8 flex-1 overflow-y-auto pr-2 scrollbar-thin">
        {experiences.map((exp, index) => (
          <div key={index} className={`relative pl-6 border-l-2 ${exp.highlighted ? 'border-[#BFA181]/40' : 'border-border'}`}>
            <div className={`absolute -left-[5px] top-1.5 size-2 rounded-full ${exp.highlighted ? 'bg-[#BFA181]' : 'bg-border'}`}></div>
            <h3 className="text-xl font-heading text-foreground">{exp.company}</h3>
            <p className={`text-xs font-semibold mb-2 uppercase tracking-wide ${exp.highlighted ? 'text-main' : 'text-foreground/50'}`}>{exp.period}</p>
            <p className="text-sm text-foreground/80 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
