import { useState } from "react"
import { capabilities } from "@/lib/data"
import { Reveal } from "@/components/Reveal"

const steps = [
  {
    number: "01",
    phase: "Descubrimiento",
    title: "Entiendo el problema",
    text: "Tu necesidad → objetivos y prioridades claras.",
  },
  {
    number: "02",
    phase: "Arquitectura",
    title: "Diseño la solución",
    text: "Datos, APIs e integraciones que el equipo sí usa.",
  },
  {
    number: "03",
    phase: "Construcción",
    title: "Construyo y valido",
    text: "Entregas por etapas, flujos críticos probados.",
  },
  {
    number: "04",
    phase: "Operación",
    title: "Despliego y acompaño",
    text: "Documentado y listo para crecer.",
  },
]

const outcomes = [
  {
    before: "Excel, WhatsApp y horarios cruzados.",
    after: "Reservas, pagos y horarios en un sistema.",
  },
  {
    before: "Datos duplicados y consultas lentas.",
    after: "APIs y base de datos listas para crecer.",
  },
  {
    before: "Pantallas que el equipo evita.",
    after: "Interfaces que el equipo sí usa.",
  },
]

type Tab = "steps" | "skills"

export function ValueSection() {
  const [tab, setTab] = useState<Tab>("steps")

  return (
    <section id="valor" className="relative bg-[#F4F4F0] px-6 py-24 text-black sm:px-12 md:px-16 md:py-32">
      <div className="relative mx-auto max-w-6xl space-y-10">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-7" variant="left">
            <p className="mb-4 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-black/50">
              <span className="inline-block size-1.5 rounded-full bg-[#E54838]" style={{ animation: "servicesDot 1.15s ease-in-out infinite" }} />
              Valor
            </p>
            <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-6xl">
              Cómo trabajo y dónde aporto valor.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:self-end" variant="right">
            <p className="text-base font-light leading-relaxed text-black/70 sm:text-lg">
              Del problema al sistema en producción, sin humo.
            </p>
          </Reveal>
        </div>

        <Reveal variant="up">
          <div role="tablist" aria-label="Valor" className="inline-flex rounded-full border border-black/15 bg-white/60 p-1">
            {(
              [
                { id: "steps", label: "Cómo trabajo" },
                { id: "skills", label: "Habilidades" },
              ] as { id: Tab; label: string }[]
            ).map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                aria-controls={`valor-panel-${t.id}`}
                id={`valor-tab-${t.id}`}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-all duration-300 cursor-pointer ${
                  tab === t.id ? "bg-black text-white shadow" : "text-black/60 hover:text-black"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {tab === "steps" ? (
          <div
            key="steps"
            role="tabpanel"
            id="valor-panel-steps"
            aria-labelledby="valor-tab-steps"
            className="grid gap-px overflow-hidden rounded-2xl border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-4"
            style={{ animation: "fadeIn 500ms cubic-bezier(0.16,1,0.3,1)" }}
          >
            {steps.map((step) => (
              <div key={step.number} className="bg-[#F4F4F0] p-6 sm:p-7">
                <p className="font-mono text-4xl font-light tabular-nums text-black/25">{step.number}</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#E54838]">{step.phase}</p>
                <h3 className="mt-1 text-lg font-normal tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-black/70">{step.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <div
            key="skills"
            role="tabpanel"
            id="valor-panel-skills"
            aria-labelledby="valor-tab-skills"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            style={{ animation: "fadeIn 500ms cubic-bezier(0.16,1,0.3,1)" }}
          >
            {capabilities.map((cap) => (
              <div key={cap.number} className="rounded-2xl border border-black/15 bg-white/60 p-6">
                <img src={cap.image} alt="" aria-hidden="true" className="h-10 w-10 object-contain" loading="lazy" />
                <h3 className="mt-4 text-lg font-normal tracking-tight">{cap.title}</h3>
                <p className="mt-1.5 text-sm font-light leading-relaxed text-black/70">{cap.description}</p>
              </div>
            ))}
            <div className="flex items-center rounded-2xl bg-black p-6 text-white">
              <p className="text-sm font-light leading-relaxed text-white/85">
                ¿Tu reto no encaja aquí? <span className="font-normal text-white">Cuéntamelo</span> — si no soy la persona, te digo a quién buscar.
              </p>
            </div>
          </div>
        )}

        <div className="border-t border-black/15 pt-8">
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-6">
            {outcomes.map((o, index) => (
              <Reveal key={o.after} delay={index * 100} variant="up">
                <p className="text-sm font-light leading-relaxed text-black/45 line-through decoration-black/25">{o.before}</p>
                <p className="mt-1 text-sm font-normal leading-relaxed text-black sm:text-base">→ {o.after}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="flex flex-col gap-4 text-sm font-mono text-black/60 sm:flex-row sm:items-center sm:justify-between" delay={100}>
          <span><span className="mr-2 inline-block size-2 rounded-full bg-[#E54838]" style={{ animation: "servicesDot 1.15s ease-in-out infinite" }} />Disponible para proyectos y oportunidades remotas.</span>
          <span>Perú · UTC-5</span>
        </Reveal>
      </div>
    </section>
  )
}
