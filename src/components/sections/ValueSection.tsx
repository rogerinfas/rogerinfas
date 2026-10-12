import { capabilities } from "@/lib/data"
import { Reveal } from "@/components/Reveal"

const steps = [
  {
    number: "01",
    phase: "Descubrimiento",
    title: "Entiendo el problema",
    text: "Convierto una necesidad de negocio o un reto técnico en objetivos claros, flujos y prioridades.",
  },
  {
    number: "02",
    phase: "Arquitectura",
    title: "Diseño la solución",
    text: "Defino arquitectura, datos, integraciones y una experiencia que el equipo pueda usar de verdad.",
  },
  {
    number: "03",
    phase: "Construcción",
    title: "Construyo y valido",
    text: "Desarrollo por etapas, pruebo los flujos críticos y mantengo la comunicación durante todo el proceso.",
  },
  {
    number: "04",
    phase: "Operación",
    title: "Despliego y acompaño",
    text: "Dejo el sistema listo para operar, documentado y preparado para futuras mejoras.",
  },
]

const outcomes = [
  {
    before: "Reservas en Excel, cobros en WhatsApp y horarios que se cruzan.",
    after: "Reservas, clientes, horarios y pagos en un solo sistema con estados claros.",
  },
  {
    before: "Consultas lentas, datos duplicados y nadie sabe qué tabla manda.",
    after: "APIs y base de datos preparadas para crecer sin perder claridad.",
  },
  {
    before: "Pantallas que el equipo evita porque no ayudan a trabajar.",
    after: "Interfaces útiles para personas técnicas y equipos operativos.",
  },
]

export function ValueSection() {
  return (
    <section id="valor" className="relative bg-[#F4F4F0] px-6 py-24 text-black sm:px-12 md:px-16 md:py-32">
      <div className="relative mx-auto max-w-6xl space-y-16">
        <div className="grid gap-8 border-b border-black/15 pb-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-5" variant="left">
            <p className="mb-4 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-black/50">
              <span className="inline-block size-1.5 rounded-full bg-[#E54838]" style={{ animation: "servicesDot 1.15s ease-in-out infinite" }} />
              Valor
            </p>
            <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-6xl">
              Cómo trabajo y dónde aporto valor.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7 md:self-end" variant="right">
            <p className="text-base font-light leading-relaxed text-black/70 sm:text-lg">
              Trabajo entre dos mundos: traduzco necesidades de negocio para equipos técnicos y explico decisiones de arquitectura de forma sencilla para quienes no viven en el software.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal variant="left">
              <p className="mb-6 text-xs font-mono uppercase tracking-[0.25em] text-black/50">Cómo trabajo</p>
            </Reveal>
            <ol className="flex flex-col">
              {steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 80} variant="left">
                  <li className="border-t border-black/15 py-5 last:border-b">
                    <div className="flex items-baseline gap-5 sm:gap-7">
                      <span className="w-8 shrink-0 font-mono text-xs tabular-nums text-black/40">
                        {step.number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="text-xl font-normal tracking-tight sm:text-2xl">{step.title}</h3>
                          <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-black/40 sm:block">{step.phase}</span>
                        </div>
                        <p className="pt-2 text-sm font-light leading-relaxed text-black/70 sm:text-base">{step.text}</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <Reveal variant="right">
              <p className="mb-6 text-xs font-mono uppercase tracking-[0.25em] text-black/50">Dónde aporto valor</p>
            </Reveal>
            <ul className="flex flex-col">
              {capabilities.map((cap, index) => (
                <Reveal key={cap.number} delay={index * 80} variant="right">
                  <li className="border-t border-black/15 py-5 last:border-b">
                    <div className="flex items-baseline gap-5 sm:gap-7">
                      <span className="w-8 shrink-0 font-mono text-xs tabular-nums text-black/40">
                        {cap.number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-normal tracking-tight sm:text-2xl">{cap.title}</h3>
                        <p className="pt-2 text-sm font-light leading-relaxed text-black/70 sm:text-base">{cap.description}</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-black/15 pt-10">
          <Reveal variant="left">
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.25em] text-black/50">Qué puedes esperar</p>
          </Reveal>
          <div className="mb-3 hidden grid-cols-[1fr_auto_1fr] gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 sm:grid">
            <span>Antes</span>
            <span className="w-8" />
            <span>Con el sistema</span>
          </div>
          {outcomes.map((o, index) => (
            <Reveal key={o.after} delay={index * 100} variant="right" className="group grid items-center gap-3 border-t border-black/15 py-6 last:border-b sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
              <p className="text-sm font-light leading-relaxed text-black/45 sm:text-base">{o.before}</p>
              <span className="flex w-8 items-center justify-center font-mono text-[#E54838]" aria-hidden="true">
                <span className="rotate-90 sm:rotate-0">→</span>
              </span>
              <p className="text-sm font-normal leading-relaxed text-black sm:text-base">{o.after}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-col gap-4 text-sm font-mono text-black/60 sm:flex-row sm:items-center sm:justify-between" delay={100}>
          <span><span className="mr-2 inline-block size-2 rounded-full bg-[#E54838]" style={{ animation: "servicesDot 1.15s ease-in-out infinite" }} />Disponible para proyectos y oportunidades remotas.</span>
          <span>Perú · UTC-5</span>
        </Reveal>
      </div>
    </section>
  )
}
