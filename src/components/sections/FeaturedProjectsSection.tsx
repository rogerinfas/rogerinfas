import { memo, useCallback, useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight, Copy, Check, KeyRound, Pause, Play } from "lucide-react"
import { toast } from "sonner"
import { projects, type Project } from "@/lib/data"
import { Reveal } from "@/components/Reveal"

interface FeaturedProjectsSectionProps {
  scrollY: number
}

const AUTOPLAY_MS = 6000
const DRAG_THRESHOLD = 60

/* ---------- Credenciales demo con copiar al clic ---------- */

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      toast.success(`${label} copiado`)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      toast.error("No se pudo copiar")
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="flex w-full items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-left font-mono text-xs transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.08] cursor-pointer"
      aria-label={`Copiar ${label.toLowerCase()}`}
    >
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40">{label}</span>
        <span className="block truncate text-white/90">{value}</span>
      </span>
      {copied ? (
        <Check className="size-3.5 shrink-0 text-[#FF6B5B]" aria-hidden="true" />
      ) : (
        <Copy className="size-3.5 shrink-0 text-white/40 transition-colors hover:text-white" aria-hidden="true" />
      )}
    </button>
  )
}

/* ---------- Tarjeta del coverflow (memoizada) ---------- */

const CoverCard = memo(function CoverCard({
  project,
  index,
  total,
  offset,
  onSelect,
}: {
  project: Project
  index: number
  total: number
  offset: number
  onSelect: (id: string) => void
}) {
  const abs = Math.abs(offset)
  const hidden = abs > 2
  const active = offset === 0

  return (
    <div
      aria-hidden={!active}
      onClick={() => {
        if (!active) onSelect(project.id)
        else if (project.liveUrl) window.open(project.liveUrl, "_blank", "noopener,noreferrer")
      }}
      style={{
        transform: `translateX(-50%) translateX(${offset * 62}%) scale(${1 - Math.min(abs, 2) * 0.14}) rotateY(${-offset * 32}deg)`,
        zIndex: 20 - Math.min(abs, 3) * 5,
        opacity: hidden ? 0 : 1 - Math.min(abs, 2) * 0.35,
        pointerEvents: hidden ? "none" : "auto",
      }}
      className={`absolute left-1/2 top-1/2 w-[min(76vw,400px)] -translate-y-1/2 overflow-hidden rounded-2xl bg-[#1A1A1C] shadow-2xl transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        active ? "cursor-pointer" : "cursor-pointer"
      }`}
    >
      <div className="relative aspect-[4/5] sm:aspect-[4/4.4]">
        <img
          src={project.posterImage || project.bgImage}
          alt=""
          loading={index < 2 ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" aria-hidden="true" />
        <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]">
          <span className="rounded-md bg-white/90 px-2.5 py-1 font-semibold text-black">
            {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 space-y-1 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
            {project.year} · {project.subtitle}
          </p>
          <p className="font-heading text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
            {project.title}
          </p>
          {active && project.liveUrl && (
            <p className="inline-flex items-center gap-1.5 pt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80">
              Clic para abrir demo
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </p>
          )}
        </div>
        {active && (
          <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-[#E54838]/80" aria-hidden="true" />
        )}
      </div>
    </div>
  )
})

/* ---------- Sección: coverflow 3D + autoplay controlable ---------- */

export function FeaturedProjectsSection(_props: FeaturedProjectsSectionProps) {
  const n = projects.length
  const [activeIndex, setActiveIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [pausedByHover, setPausedByHover] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const dragStartX = useRef<number | null>(null)
  const dragDelta = useRef(0)

  const activeProject: Project = projects[activeIndex] ?? projects[0]

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const goTo = useCallback(
    (index: number) => setActiveIndex(((index % n) + n) % n),
    [n]
  )
  const step = useCallback((dir: 1 | -1) => goTo(activeIndex + dir), [activeIndex, goTo])

  // Autoplay: solo si el usuario no lo pausó, sin hover/foco, sin reduced-motion y pestaña visible
  useEffect(() => {
    if (!playing || pausedByHover || reducedMotion || n <= 1) return
    if (typeof document !== "undefined" && document.hidden) return
    const timer = window.setTimeout(() => goTo(activeIndex + 1), AUTOPLAY_MS)
    const onVis = () => {
      if (document.hidden) window.clearTimeout(timer)
    }
    document.addEventListener("visibilitychange", onVis)
    return () => {
      window.clearTimeout(timer)
      document.removeEventListener("visibilitychange", onVis)
    }
  }, [playing, pausedByHover, reducedMotion, activeIndex, goTo, n])

  // Arrastre horizontal sobre el escenario (no secuestra el scroll vertical)
  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX
    dragDelta.current = 0
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return
    dragDelta.current = e.clientX - dragStartX.current
  }
  const endDrag = () => {
    if (dragStartX.current === null) return
    if (dragDelta.current <= -DRAG_THRESHOLD) step(1)
    else if (dragDelta.current >= DRAG_THRESHOLD) step(-1)
    dragStartX.current = null
    dragDelta.current = 0
  }

  const onStageKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault()
      step(1)
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      step(-1)
    } else if (e.key === "Home") {
      e.preventDefault()
      goTo(0)
    } else if (e.key === "End") {
      e.preventDefault()
      goTo(n - 1)
    }
  }

  const offsetOf = (i: number) => {
    const half = Math.floor(n / 2)
    return ((i - activeIndex + half + n) % n) - half
  }

  const marquee = [...projects, ...projects]

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="relative overflow-hidden bg-[#0D0D0E] px-6 pb-24 pt-20 text-white sm:px-12 md:px-16 md:pb-32"
    >
      {/* Resplandor ambiental detrás del escenario */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-40 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-[#E54838]/15 blur-[140px]"
      />
      {/* Número fantasma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 right-2 select-none font-heading text-[26vw] font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.14)] lg:text-[19vw]"
      >
        {String(activeIndex + 1).padStart(2, "0")}
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-8" variant="left">
            <p className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-white/50">
              <span className="inline-block size-1.5 rounded-full bg-[#E54838]" aria-hidden="true" />
              Proyectos destacados
            </p>
            <h3 id="work-title" className="text-4xl font-heading font-semibold leading-[1.02] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Arrastra. Explora.
              <span className="text-white/40"> Entra a cada sistema.</span>
            </h3>
          </Reveal>
          <Reveal delay={120} className="md:col-span-4 md:text-right" variant="right">
            <div className="flex items-center gap-2 md:justify-end">
              <button
                type="button"
                onClick={() => step(-1)}
                className="flex size-11 items-center justify-center rounded-full border border-white/20 transition-colors duration-200 hover:bg-white hover:text-black cursor-pointer"
                aria-label="Proyecto anterior"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                className="relative flex size-11 items-center justify-center overflow-hidden rounded-full bg-white text-black transition-transform duration-200 hover:scale-105 cursor-pointer"
                aria-label={playing ? "Pausar carrusel" : "Reanudar carrusel"}
                aria-pressed={playing}
              >
                {playing ? (
                  <Pause className="size-4" aria-hidden="true" />
                ) : (
                  <Play className="size-4" aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="flex size-11 items-center justify-center rounded-full border border-white/20 transition-colors duration-200 hover:bg-white hover:text-black cursor-pointer"
                aria-label="Proyecto siguiente"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-white/50" aria-live="polite">
              <span aria-hidden="true">
                {String(activeIndex + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
              </span>
              <span className="sr-only">
                Proyecto {activeIndex + 1} de {n}: {activeProject.title}
              </span>
            </p>
          </Reveal>
        </div>

        {/* Marquesina de títulos */}
        <div className="relative mt-8 overflow-hidden border-y border-white/10 py-3" aria-hidden="true">
          <div
            className="flex w-max gap-8 whitespace-nowrap font-heading text-lg font-medium uppercase tracking-[0.14em] text-white/35"
            style={{ animation: "projectRibbon 30s linear infinite" }}
          >
            {marquee.map((p, i) => (
              <span key={`${p.id}-${i}`} className="flex items-center gap-8">
                {p.title}
                <span className="size-1.5 rounded-full bg-[#E54838]" />
              </span>
            ))}
          </div>
        </div>

        {/* Escenario 3D */}
        <div
          ref={stageRef}
          role="region"
          aria-roledescription="carrusel"
          aria-label={`Carrusel de proyectos, ${activeIndex + 1} de ${n}: ${activeProject.title}. Usa las flechas para navegar o arrastra.`}
          tabIndex={0}
          onKeyDown={onStageKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={() => {
            endDrag()
            setPausedByHover(false)
          }}
          onMouseEnter={() => setPausedByHover(true)}
          onMouseLeave={() => setPausedByHover(false)}
          onFocusCapture={() => setPausedByHover(true)}
          onBlurCapture={() => setPausedByHover(false)}
          className="relative mt-6 h-[480px] touch-pan-y select-none overflow-visible [perspective:1400px] sm:h-[520px]"
        >
          <div className="absolute inset-0 [transform-style:preserve-3d]">
            {projects.map((p, i) => (
              <CoverCard
                key={p.id}
                project={p}
                index={i}
                total={n}
                offset={offsetOf(i)}
                onSelect={(id) => goTo(projects.findIndex((x) => x.id === id))}
              />
            ))}
          </div>
        </div>

        {/* Barra de autoplay + segmentos */}
        <div className="mt-2 flex items-center gap-4">
          <div
            className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/15"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={playing && !pausedByHover && !reducedMotion ? undefined : 0}
            aria-label={playing ? "Tiempo para el siguiente proyecto" : "Carrusel en pausa"}
          >
            {playing && !pausedByHover && !reducedMotion && (
              <div
                key={activeIndex}
                className="h-full rounded-full bg-[#E54838]"
                style={{
                  animation: `coverProgress ${AUTOPLAY_MS}ms linear both`,
                }}
              />
            )}
          </div>
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Ir a un proyecto">
            {projects.map((p, i) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Ir al proyecto ${i + 1}: ${p.title}`}
                onClick={() => goTo(i)}
                className="flex size-8 items-center justify-center rounded-full cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === activeIndex ? "w-6 bg-[#E54838]" : "w-1.5 bg-white/25 hover:bg-white/60"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Detalle del proyecto activo */}
        <div key={activeProject.id} className="mt-8 grid gap-6 lg:grid-cols-12" style={{ animation: "fadeIn 500ms cubic-bezier(0.16,1,0.3,1)" }}>
          <div className="space-y-3 lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
              {activeProject.subtitle}
            </p>
            <h4 className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              {activeProject.title}
            </h4>
            <p className="max-w-2xl text-sm font-light leading-relaxed text-white/70 sm:text-base">
              {activeProject.description}
            </p>
            {activeProject.tags && (
              <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías del proyecto">
                {activeProject.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/12 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/60"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="space-y-3 lg:col-span-5">
            {activeProject.demoCredentials && (
              <div className="space-y-2">
                <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#FF6B5B]">
                  <KeyRound className="size-3" aria-hidden="true" />
                  Acceso demo · clic para copiar
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  <CopyField
                    label={activeProject.demoCredentials.username ? "Usuario" : "Correo"}
                    value={activeProject.demoCredentials.username ?? activeProject.demoCredentials.email ?? ""}
                  />
                  <CopyField label="Contraseña" value={activeProject.demoCredentials.password} />
                </div>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-2.5">
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-black transition-colors duration-200 hover:bg-[#E54838] hover:text-white"
                >
                  Ver demo
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              )}
              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-white transition-colors duration-200 hover:bg-white/10"
                >
                  Código
                </a>
              )}
            </div>
          </div>
        </div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
          Arrastra las tarjetas o usa ← → · clic en la tarjeta central abre la demo.
        </p>
      </div>

      <style>{`@keyframes coverProgress { from { width: 0%; } to { width: 100%; } }`}</style>
    </section>
  )
}
