import { useEffect, useState } from "react"
import { Reveal } from "@/components/Reveal"
import { useReveal } from "@/hooks/use-reveal"

const STEP_DURATION = 5200
const EASE = "cubic-bezier(0.16,1,0.3,1)"

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

function Node({ x, y, w, label, sub, visible, delay = 0 }: { x: number; y: number; w: number; label: string; sub: string; visible: boolean; delay?: number }) {
  return (
    <g
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: `opacity 700ms ${EASE} ${delay}ms, transform 700ms ${EASE} ${delay}ms`,
      }}
    >
      <rect x={x} y={y} width={w} height={44} rx={8} fill="#141414" stroke="white" strokeOpacity={0.28} />
      <text x={x + 14} y={y + 19} fill="white" fontSize={11} fontFamily="ui-monospace, monospace" letterSpacing={1}>{label}</text>
      <text x={x + 14} y={y + 34} fill="white" fillOpacity={0.45} fontSize={9} fontFamily="ui-monospace, monospace">{sub}</text>
    </g>
  )
}

function Link({ d, visible, live, delay = 0 }: { d: string; visible: boolean; live: boolean; delay?: number }) {
  return (
    <g style={{ opacity: visible ? 1 : 0, transition: `opacity 700ms ${EASE} ${delay}ms` }}>
      <path d={d} fill="none" stroke="white" strokeOpacity={live ? 0.35 : 0.2} strokeWidth={1} strokeDasharray={live ? undefined : "4 5"} style={{ transition: "stroke-opacity 600ms" }} />
      {live && (
        <path d={d} fill="none" stroke="#E54838" strokeWidth={1.5} strokeDasharray="6 18" strokeLinecap="round" style={{ animation: "blueprintFlow 1.4s linear infinite" }} />
      )}
    </g>
  )
}

function Blueprint({ step }: { step: number }) {
  const s1 = step >= 0
  const s2 = step >= 1
  const s3 = step >= 2
  const s4 = step >= 3
  const chips = ["objetivos", "flujos", "prioridades"]

  return (
    <svg viewBox="0 0 480 340" className="h-full w-full" role="img" aria-label={`Diagrama del sistema, fase ${steps[step].phase}`}>
      <defs>
        <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="white" strokeOpacity={0.06} />
        </pattern>
      </defs>
      <rect width="480" height="340" fill="url(#bp-grid)" />

      {/* Step 1: the raw need and what we extract from it */}
      <g style={{ opacity: s1 ? (s2 ? 0.45 : 1) : 0, transition: `opacity 700ms ${EASE}` }}>
        <rect x={28} y={28} width={150} height={78} rx={8} fill="none" stroke="white" strokeOpacity={0.35} strokeDasharray="5 5" />
        <text x={42} y={50} fill="white" fontSize={11} fontFamily="ui-monospace, monospace" letterSpacing={1}>NECESIDAD</text>
        <rect x={42} y={60} width={110} height={4} rx={2} fill="white" fillOpacity={0.25} />
        <rect x={42} y={72} width={78} height={4} rx={2} fill="white" fillOpacity={0.25} />
        <rect x={42} y={84} width={94} height={4} rx={2} fill="white" fillOpacity={0.25} />
        {chips.map((c, i) => (
          <g
            key={c}
            style={{
              opacity: s1 ? 1 : 0,
              transform: s1 ? "translateX(0)" : "translateX(-8px)",
              transition: `opacity 600ms ${EASE} ${250 + i * 160}ms, transform 600ms ${EASE} ${250 + i * 160}ms`,
            }}
          >
            <path d={`M178 ${66} C 200 ${66}, 200 ${44 + i * 26}, 214 ${44 + i * 26}`} fill="none" stroke="white" strokeOpacity={0.25} />
            <rect x={214} y={34 + i * 26} width={c.length * 7 + 18} height={20} rx={10} fill="#E54838" fillOpacity={0.14} stroke="#E54838" strokeOpacity={0.5} />
            <text x={223} y={48 + i * 26} fill="#E54838" fontSize={10} fontFamily="ui-monospace, monospace">{c}</text>
          </g>
        ))}
      </g>

      {/* Step 4: the production boundary around the system */}
      <g style={{ opacity: s4 ? 1 : 0, transition: `opacity 800ms ${EASE} 200ms` }}>
        <rect x={150} y={128} width={200} height={190} rx={14} fill="#E54838" fillOpacity={0.05} stroke="#E54838" strokeOpacity={0.45} strokeDasharray="3 6" />
        <text x={166} y={148} fill="#E54838" fontSize={10} fontFamily="ui-monospace, monospace" letterSpacing={1.5}>PRODUCCIÓN</text>
        <circle cx={332} cy={144} r={4} fill="#E54838" style={{ animation: "servicesDot 1.15s ease-in-out infinite" }} />
        <text x={296} y={148} fill="white" fillOpacity={0.7} fontSize={9} fontFamily="ui-monospace, monospace">online</text>
      </g>

      {/* Step 2/3: architecture and live connections */}
      <Link d="M118 214 L 190 214" visible={s2} live={s3} delay={200} />
      <Link d="M250 236 L 250 262" visible={s2} live={s3} delay={280} />
      <Link d="M310 214 L 374 214" visible={s2} live={s3} delay={360} />

      <Node x={30} y={192} w={88} label="APP WEB" sub="Next.js" visible={s2} delay={0} />
      <Node x={190} y={192} w={120} label="API" sub="Node · auth · roles" visible={s2} delay={120} />
      <Node x={190} y={262} w={120} label="POSTGRESQL" sub="esquema · índices" visible={s2} delay={240} />
      <Node x={374} y={192} w={90} label="EXTERNOS" sub="pagos · GPS" visible={s2} delay={360} />

      {/* Step 3: validation marks */}
      {[
        [118, 192],
        [310, 192],
        [310, 262],
      ].map(([x, y], i) => (
        <g
          key={i}
          style={{
            opacity: s3 ? 1 : 0,
            transform: s3 ? "scale(1)" : "scale(0.5)",
            transformOrigin: `${x}px ${y}px`,
            transition: `opacity 500ms ${EASE} ${200 + i * 150}ms, transform 500ms ${EASE} ${200 + i * 150}ms`,
          }}
        >
          <circle cx={x} cy={y} r={8} fill="#F4F4F0" />
          <path d={`M${x - 3.5} ${y} l2.5 2.5 l4.5 -5`} fill="none" stroke="#141414" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}

      {/* Step 4: hand-off artifacts */}
      <g style={{ opacity: s4 ? 1 : 0, transform: s4 ? "translateY(0)" : "translateY(8px)", transition: `opacity 700ms ${EASE} 500ms, transform 700ms ${EASE} 500ms` }}>
        <rect x={374} y={272} width={90} height={22} rx={6} fill="none" stroke="white" strokeOpacity={0.3} />
        <text x={386} y={287} fill="white" fillOpacity={0.8} fontSize={9} fontFamily="ui-monospace, monospace">docs + soporte</text>
      </g>
    </svg>
  )
}

export function ProcessSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const { ref: stageRef, isVisible: stageVisible } = useReveal<HTMLDivElement>(0.3)

  useEffect(() => {
    if (!stageVisible || paused) return
    const id = window.setInterval(() => setActive((prev) => (prev + 1) % steps.length), STEP_DURATION)
    return () => window.clearInterval(id)
  }, [stageVisible, paused, active])

  return (
    <section id="approach" className="relative overflow-hidden bg-[#F4F4F0] px-6 py-24 text-black sm:px-12 md:px-16 md:py-32">
      <div className="relative mx-auto max-w-6xl space-y-20">
        <div className="grid gap-8 border-b border-black/15 pb-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-5" variant="left">
            <p className="mb-4 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-black/50">
              <span className="inline-block size-1.5 rounded-full bg-[#E54838]" style={{ animation: "servicesDot 1.15s ease-in-out infinite" }} />
              Cómo trabajo
            </p>
            <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-6xl">
              Claridad para decidir. Técnica para construir.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7 md:self-end" variant="right">
            <p className="text-base font-light leading-relaxed text-black/70 sm:text-lg">
              Trabajo entre dos mundos: traduzco necesidades de negocio para equipos técnicos y explico decisiones de arquitectura de forma sencilla para quienes no viven en el software.
            </p>
          </Reveal>
        </div>

        {/* Process stage: step list drives a system blueprint that assembles itself */}
        <div ref={stageRef} className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div
            className="flex flex-col lg:col-span-5"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {steps.map((step, index) => {
              const isActive = active === index
              const isDone = index < active
              return (
                <Reveal key={step.number} delay={index * 90} variant="left">
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    aria-current={isActive ? "step" : undefined}
                    className="group relative w-full cursor-pointer border-t border-black/15 py-5 text-left transition-colors duration-300 last:border-b"
                  >
                    <div className="flex items-baseline gap-5 sm:gap-7">
                      <span
                        className={`w-8 shrink-0 font-mono text-xs tabular-nums transition-colors duration-300 ${isActive ? "text-[#E54838]" : isDone ? "text-black/70" : "text-black/35"
                          }`}
                      >
                        {isDone ? "✓" : step.number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-4">
                          <h3
                            className={`text-2xl tracking-tight transition-all duration-300 sm:text-3xl ${isActive ? "font-normal text-black" : "font-light text-black/50 group-hover:translate-x-1 group-hover:text-black/80"
                              }`}
                          >
                            {step.title}
                          </h3>
                          <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-black/40 sm:block">{step.phase}</span>
                        </div>
                        <div
                          className="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                          style={{ gridTemplateRows: isActive ? "1fr" : "0fr", opacity: isActive ? 1 : 0 }}
                        >
                          <p className="overflow-hidden text-sm font-light leading-relaxed text-black/70 sm:text-base">
                            <span className="block pt-3">{step.text}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <span className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
                      <span
                        key={isActive ? `${active}-${paused}` : "idle"}
                        className="block h-full origin-left bg-[#E54838]"
                        style={
                          isActive
                            ? paused
                              ? { transform: "scaleX(1)" }
                              : { animation: `processProgress ${STEP_DURATION}ms linear forwards` }
                            : { transform: "scaleX(0)" }
                        }
                      />
                    </span>
                  </button>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="order-first lg:order-none lg:col-span-7" variant="scale" delay={150}>
            <div className="relative overflow-hidden rounded-2xl bg-[#141414] shadow-xl lg:sticky lg:top-28">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                <span className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#E54838]" />
                  blueprint · {steps[active].phase}
                </span>
                <span className="tabular-nums">{steps[active].number} / 0{steps.length}</span>
              </div>
              <div className="aspect-[480/340]">
                <Blueprint step={active} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Outcomes: before → after, the way a client actually feels the change */}
        <div className="grid gap-10 border-t border-black/15 pt-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4" variant="left">
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.25em] text-black/50">Qué puedes esperar</p>
            <h3 className="text-3xl font-light tracking-tight sm:text-5xl">Resultados que se sienten en la operación.</h3>
          </Reveal>
          <div className="lg:col-span-8">
            <div className="mb-3 hidden grid-cols-[1fr_auto_1fr] gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 sm:grid">
              <span>Antes</span>
              <span className="w-8" />
              <span>Con el sistema</span>
            </div>
            {outcomes.map((o, index) => (
              <Reveal key={o.after} delay={index * 110} variant="right" className="group grid items-center gap-3 border-t border-black/15 py-6 last:border-b sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
                <p className="text-sm font-light leading-relaxed text-black/45 transition-colors duration-500 group-hover:text-black/35 sm:text-base">
                  <span
                    className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-no-repeat transition-[background-size] duration-700 ease-out group-hover:bg-[length:100%_1px]"
                    style={{ backgroundPosition: "0 58%" }}
                  >
                    {o.before}
                  </span>
                </p>
                <span className="flex w-8 items-center justify-center font-mono text-[#E54838] transition-transform duration-500 group-hover:translate-x-1.5" aria-hidden="true">
                  <span className="rotate-90 sm:rotate-0">→</span>
                </span>
                <p className="text-sm font-normal leading-relaxed text-black sm:text-base">
                  {o.after}
                </p>
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
