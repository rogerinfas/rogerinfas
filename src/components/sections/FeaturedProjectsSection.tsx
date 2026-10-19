import { memo, useEffect, useMemo, useRef, useState } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight, Copy, Check, KeyRound } from "lucide-react"
import { toast } from "sonner"
import { projects, type Project } from "@/lib/data"
import { Reveal } from "@/components/Reveal"

interface FeaturedProjectsSectionProps {
  scrollY: number
}

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
      className="group/copy flex w-full items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-left font-mono text-xs transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.08] cursor-pointer"
      aria-label={`Copiar ${label.toLowerCase()}`}
    >
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40">{label}</span>
        <span className="block truncate text-white/90">{value}</span>
      </span>
      {copied ? (
        <Check className="size-3.5 shrink-0 text-[#FF6B5B]" aria-hidden="true" />
      ) : (
        <Copy className="size-3.5 shrink-0 text-white/40 transition-colors group-hover/copy:text-white" aria-hidden="true" />
      )}
    </button>
  )
}

/* ---------- Tarjeta de proyecto (memoizada, escala a N) ---------- */

const ProjectCard = memo(function ProjectCard({
  project,
  index,
  total,
  registerRef,
}: {
  project: Project
  index: number
  total: number
  registerRef: (id: string, el: HTMLElement | null) => void
}) {
  const number = String(index + 1).padStart(2, "0")

  return (
    <article
      ref={(el) => registerRef(project.id, el)}
      role="group"
      aria-roledescription="diapositiva"
      aria-label={`${index + 1} de ${total}: ${project.title}`}
      data-card-id={project.id}
      className="group/card w-[84vw] shrink-0 snap-center overflow-hidden rounded-2xl bg-[#141414] text-white shadow-sm sm:w-[62vw] lg:w-[calc(50%-10px)] xl:w-[calc(50%-12px)]"
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/9] overflow-hidden"
        aria-label={`Abrir demo de ${project.title} en pestaña nueva`}
        tabIndex={-1}
      >
        <img
          src={project.posterImage || project.bgImage}
          alt=""
          loading={index < 2 ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none group-hover/card:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]">
          <span className="rounded-md bg-white/90 px-2.5 py-1 font-semibold text-black">
            {number}/{String(total).padStart(2, "0")}
          </span>
          <span className="rounded-md bg-black/60 px-2.5 py-1 text-white/85 backdrop-blur-md">
            {project.year}
          </span>
        </div>
        <span className="absolute bottom-4 right-4 flex size-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 motion-reduce:transition-none group-hover/card:rotate-45" aria-hidden="true">
          <ArrowUpRight className="size-4" />
        </span>
      </a>

      <div className="space-y-4 p-5 sm:p-6">
        <div className="space-y-1.5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
            {project.subtitle}
          </p>
          <h4 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
            {project.title}
          </h4>
          <p className="text-sm font-light leading-relaxed text-white/70">{project.headline}</p>
        </div>

        <p className="text-sm font-light leading-relaxed text-white/55 lg:line-clamp-3">
          {project.description}
        </p>

        {project.demoCredentials && (
          <div className="space-y-2">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#FF6B5B]">
              <KeyRound className="size-3" aria-hidden="true" />
              Acceso demo · clic para copiar
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              <CopyField
                label={project.demoCredentials.username ? "Usuario" : "Correo"}
                value={project.demoCredentials.username ?? project.demoCredentials.email ?? ""}
              />
              <CopyField label="Contraseña" value={project.demoCredentials.password} />
            </div>
          </div>
        )}

        {project.tags && (
          <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías del proyecto">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/12 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/60"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-black transition-colors duration-200 hover:bg-[#FF6B5B] hover:text-white"
            >
              Ver demo
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-white transition-colors duration-200 hover:bg-white/10"
            >
              Código
            </a>
          )}
        </div>
      </div>
    </article>
  )
})

/* ---------- Sección: rail horizontal con snap + progreso ---------- */

export function FeaturedProjectsSection(_props: FeaturedProjectsSectionProps) {
  const [filter, setFilter] = useState<string>("Todos")
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const railRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef(new Map<string, HTMLElement>())

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const allTags = useMemo(() => {
    const seen = new Set<string>()
    const ordered: string[] = []
    for (const p of projects) {
      for (const t of p.tags ?? []) {
        if (!seen.has(t)) {
          seen.add(t)
          ordered.push(t)
        }
      }
    }
    return ordered
  }, [])

  const visible = useMemo(
    () => (filter === "Todos" ? projects : projects.filter((p) => (p.tags ?? []).includes(filter))),
    [filter]
  )

  const registerRef = (id: string, el: HTMLElement | null) => {
    if (el) cardRefs.current.set(id, el)
    else cardRefs.current.delete(id)
  }

  // Tarjeta más visible = actual (anuncia sin mover el foco)
  useEffect(() => {
    const rail = railRef.current
    if (!rail || visible.length === 0) return
    const entries = new Map<string, number>()
    const observer = new IntersectionObserver(
      (obs) => {
        for (const e of obs) {
          const id = (e.target as HTMLElement).dataset.cardId
          if (id) entries.set(id, e.intersectionRatio)
        }
        let best = ""
        let bestRatio = -1
        entries.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        })
        const idx = visible.findIndex((p) => p.id === best)
        if (idx >= 0) setCurrent(idx)
      },
      { root: rail, threshold: [0.4, 0.6, 0.8] }
    )
    cardRefs.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [visible])

  // Progreso + estado de flechas desde el scroll (sin secuestrarlo)
  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    let raf = 0
    const update = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = rail.scrollWidth - rail.clientWidth
        setProgress(max > 0 ? Math.min(1, Math.max(0, rail.scrollLeft / max)) : 0)
        setCanPrev(rail.scrollLeft > 8)
        setCanNext(rail.scrollLeft < max - 8)
      })
    }
    update()
    rail.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      cancelAnimationFrame(raf)
      rail.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [visible])

  const scrollToCard = (index: number) => {
    const rail = railRef.current
    const clamped = Math.max(0, Math.min(index, visible.length - 1))
    const el = cardRefs.current.get(visible[clamped]?.id ?? "")
    if (!rail || !el) return
    rail.scrollTo({
      left: el.offsetLeft - (rail.clientWidth - el.clientWidth) / 2,
      behavior: reducedMotion ? "auto" : "smooth",
    })
  }

  const onRailKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault()
      scrollToCard(current + 1)
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      scrollToCard(current - 1)
    } else if (e.key === "Home") {
      e.preventDefault()
      scrollToCard(0)
    } else if (e.key === "End") {
      e.preventDefault()
      scrollToCard(visible.length - 1)
    }
  }

  const selectFilter = (tag: string) => {
    setFilter(tag)
    setCurrent(0)
    setProgress(0)
    railRef.current?.scrollTo({ left: 0, behavior: "auto" })
  }

  return (
    <section id="work" aria-labelledby="work-title" className="relative overflow-x-clip bg-[#EBEBE6] pb-24 text-black md:pb-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-12 md:px-16">
        {/* Encabezado */}
        <div className="grid gap-4 border-b border-black/15 pb-5 pt-20 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-8" variant="left">
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.25em] text-black/60">
              Proyectos destacados
            </p>
            <h3 id="work-title" className="text-3xl font-heading font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
              Sistemas en producción, no maquetas.
            </h3>
          </Reveal>
          <Reveal delay={120} className="md:col-span-4 md:text-right" variant="right">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/60" aria-live="polite">
              <span aria-hidden="true">
                {String(current + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
              </span>
              <span className="sr-only">
                Mostrando proyecto {current + 1} de {visible.length}
                {filter !== "Todos" ? `, filtrado por ${filter}` : ""}
              </span>
            </p>
          </Reveal>
        </div>

        {/* Filtros + controles */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar proyectos por tecnología">
            {["Todos", ...allTags].map((tag) => {
              const selected = filter === tag
              return (
                <button
                  key={tag}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => selectFilter(tag)}
                  className={`min-h-[36px] rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-200 cursor-pointer ${
                    selected
                      ? "border-black bg-black text-white"
                      : "border-black/20 bg-transparent text-black/65 hover:border-black hover:text-black"
                  }`}
                >
                  {tag}
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToCard(current - 1)}
              disabled={!canPrev}
              className="flex size-11 items-center justify-center rounded-full border border-black/20 transition-colors duration-200 hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black cursor-pointer"
              aria-label="Proyecto anterior"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollToCard(current + 1)}
              disabled={!canNext}
              className="flex size-11 items-center justify-center rounded-full border border-black/20 transition-colors duration-200 hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black cursor-pointer"
              aria-label="Proyecto siguiente"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Rail: scroll nativo con snap — arrastrable en táctil y touchpad */}
      {visible.length === 0 ? (
        <p className="mx-auto mt-6 max-w-6xl px-6 text-sm text-black/60 sm:px-12 md:px-16">
          Sin proyectos con ese filtro por ahora.
        </p>
      ) : (
        <div className="mt-6">
          <div
            ref={railRef}
            role="region"
            aria-roledescription="carrusel"
            aria-label="Carrusel de proyectos. Usa las flechas para navegar."
            tabIndex={0}
            onKeyDown={onRailKeyDown}
            className="flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 pt-1 [scrollbar-width:thin] active:cursor-grabbing sm:px-12 md:px-[max(4rem,calc((100vw-72rem)/2+4rem))]"
          >
            {visible.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                total={visible.length}
                registerRef={registerRef}
              />
            ))}
          </div>

          {/* Progreso + dots */}
          <div className="mx-auto mt-5 flex max-w-6xl items-center gap-4 px-6 sm:px-12 md:px-16">
            <div
              className="h-[3px] flex-1 overflow-hidden rounded-full bg-black/15"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress * 100)}
              aria-label="Progreso del carrusel de proyectos"
            >
              <div className="h-full rounded-full bg-black" style={{ width: `${progress * 100}%` }} />
            </div>
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Ir a un proyecto">
              {visible.map((p, i) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Ir al proyecto ${i + 1}`}
                  onClick={() => scrollToCard(i)}
                  className="flex size-8 items-center justify-center rounded-full cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      i === current ? "w-6 bg-black" : "w-1.5 bg-black/25 hover:bg-black/50"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
