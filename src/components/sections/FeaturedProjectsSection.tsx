import { memo, useState } from "react"
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
      onClick={(e) => {
        e.stopPropagation()
        copy()
      }}
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

/* ---------- Panel expandible (memoizado, escala a N) ---------- */

interface PanelProps {
  project: Project
  index: number
  total: number
  active: boolean
  onActivate: (id: string) => void
}

const WorkPanel = memo(function WorkPanel({ project, index, total, active, onActivate }: PanelProps) {
  const number = String(index + 1).padStart(2, "0")
  const detailId = `proyecto-detalle-${project.id}`

  return (
    <div
      onClick={() => onActivate(project.id)}
      className={`work-panel group relative cursor-pointer overflow-hidden rounded-2xl bg-[#1A1A1C] text-white ${
        active ? "is-active shadow-[0_0_90px_-18px_rgba(229,72,56,0.55)]" : "hover:border-white/20 border border-transparent"
      }`}
    >
      {/* Fondo fotográfico */}
      <img
        src={project.posterImage || project.bgImage}
        alt=""
        aria-hidden="true"
        loading={index < 2 ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          active ? "opacity-60 scale-100" : "opacity-35 scale-105 group-hover:opacity-50 group-hover:scale-100"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/25" aria-hidden="true" />

      {/* Riel colapsado: número + título vertical */}
      <div
        aria-hidden={active}
        className={`absolute inset-0 flex flex-col items-center justify-between py-5 transition-opacity duration-300 motion-reduce:transition-none lg:justify-start lg:gap-6 lg:py-6 ${
          active ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <span className="font-mono text-[11px] tabular-nums text-white/70">
          {number}
        </span>
        <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/90 lg:[writing-mode:vertical-rl] lg:rotate-180">
          {project.title}
        </span>
        <span className="hidden size-9 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors duration-200 group-hover:border-white group-hover:bg-white group-hover:text-black lg:flex" aria-hidden="true">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      {/* Contenido expandido */}
      <div
        id={detailId}
        className={`relative flex h-full flex-col justify-end gap-4 p-6 transition-opacity delay-150 duration-500 motion-reduce:transition-none sm:p-8 ${
          active ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
        }`}
      >
        <div className="space-y-2">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/60">
            <span className="text-[#FF6B5B]">{number}/{String(total).padStart(2, "0")}</span>
            <span>{project.year}</span>
            <span className="hidden sm:inline">{project.subtitle}</span>
          </p>
          <h4 className="max-w-xl font-heading text-3xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {project.title}
          </h4>
          <p className="max-w-xl text-sm font-light leading-relaxed text-white/75 sm:text-base">
            {project.headline}
          </p>
        </div>

        {active && (
          <div className="max-w-xl space-y-4">
            <p className="hidden text-sm font-light leading-relaxed text-white/60 md:block lg:line-clamp-2">
              {project.description}
            </p>

            {project.demoCredentials && (
              <div className="grid max-w-md gap-2 sm:grid-cols-2">
                <CopyField
                  label={project.demoCredentials.username ? "Usuario" : "Correo"}
                  value={project.demoCredentials.username ?? project.demoCredentials.email ?? ""}
                />
                <CopyField label="Contraseña" value={project.demoCredentials.password} />
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2.5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-black transition-colors duration-200 hover:bg-[#E54838] hover:text-white"
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
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/25 px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
                >
                  Código
                </a>
              )}
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 xl:inline">
                {(project.tags ?? []).slice(0, 4).join(" · ")}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Botón accesible real (el div onClick es solo mejora para puntero) */}
      <button
        type="button"
        aria-expanded={active}
        aria-controls={detailId}
        aria-label={`${active ? "Contraer" : "Expandir"} proyecto: ${project.title}`}
        onClick={(e) => {
          e.stopPropagation()
          onActivate(project.id)
        }}
        onFocus={() => {
          if (!active) onActivate(project.id)
        }}
        className="absolute inset-0 cursor-pointer rounded-2xl"
      >
        <span className="sr-only">{project.title}</span>
      </button>
    </div>
  )
})

/* ---------- Sección: banda oscura + galería de paneles ---------- */

export function FeaturedProjectsSection(_props: FeaturedProjectsSectionProps) {
  const [activeId, setActiveId] = useState<string>(projects[0]?.id ?? "")

  const visible = projects

  const activeIndex = Math.max(
    0,
    visible.findIndex((p) => p.id === activeId)
  )
  const activeProject = visible[activeIndex] ?? visible[0]

  const activate = (id: string) => setActiveId(id)

  const step = (dir: 1 | -1) => {
    if (visible.length === 0) return
    const next = (activeIndex + dir + visible.length) % visible.length
    setActiveId(visible[next].id)
  }

  const onRegionKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault()
      step(1)
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      step(-1)
    } else if (e.key === "Home") {
      e.preventDefault()
      if (visible[0]) setActiveId(visible[0].id)
    } else if (e.key === "End") {
      e.preventDefault()
      if (visible[visible.length - 1]) setActiveId(visible[visible.length - 1].id)
    }
  }

  const marquee = [...visible, ...visible]

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="relative overflow-hidden bg-[#0D0D0E] px-6 pb-24 pt-20 text-white sm:px-12 md:px-16 md:pb-32"
    >
      {/* Número fantasma del proyecto activo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 right-2 select-none font-heading text-[26vw] font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.14)] lg:text-[19vw]"
      >
        {String(activeIndex + 1).padStart(2, "0")}
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-8" variant="left">
            <p className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-white/50">
              <span className="inline-block size-1.5 rounded-full bg-[#E54838]" aria-hidden="true" />
              Proyectos destacados
            </p>
            <h3 id="work-title" className="text-4xl font-heading font-semibold leading-[1.02] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Toca un proyecto.
              <span className="text-white/40"> Mira cómo respira.</span>
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
                onClick={() => step(1)}
                className="flex size-11 items-center justify-center rounded-full border border-white/20 transition-colors duration-200 hover:bg-white hover:text-black cursor-pointer"
                aria-label="Proyecto siguiente"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-white/50" aria-live="polite">
              <span aria-hidden="true">
                {String(activeIndex + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
              </span>
              <span className="sr-only">
                Proyecto {activeIndex + 1} de {visible.length}
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

        {/* Galería de paneles */}
        {visible.length === 0 ? (
          <p className="mt-8 rounded-2xl border border-dashed border-white/20 px-6 py-12 text-center text-sm text-white/60">
            Sin proyectos con ese filtro por ahora.
          </p>
        ) : (
          <div
            role="region"
            aria-roledescription="carrusel"
            aria-label="Galería de proyectos. Usa las flechas izquierda y derecha para navegar."
            tabIndex={0}
            onKeyDown={onRegionKeyDown}
            className="mt-8 flex min-h-[70vh] flex-col gap-3 lg:h-[72vh] lg:min-h-[560px] lg:flex-row"
          >
            {visible.map((project, i) => (
              <WorkPanel
                key={project.id}
                project={project}
                index={i}
                total={visible.length}
                active={project.id === activeProject?.id}
                onActivate={activate}
              />
            ))}
          </div>
        )}

        {/* Segmentos */}
        {visible.length > 1 && (
          <div className="mt-6 flex items-center gap-2" role="group" aria-label="Ir a un proyecto">
            {visible.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveId(p.id)}
                aria-label={`Ir al proyecto ${i + 1}: ${p.title}`}
                aria-current={p.id === activeProject?.id ? "true" : undefined}
                className="group flex h-8 flex-1 items-center cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className={`h-[3px] w-full rounded-full transition-colors duration-300 ${
                    p.id === activeProject?.id
                      ? "bg-[#E54838]"
                      : "bg-white/15 group-hover:bg-white/35"
                  }`}
                />
              </button>
            ))}
          </div>
        )}

        <p className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
          <KeyRound className="size-3" aria-hidden="true" />
          Cada demo incluye credenciales listas para copiar y probar.
        </p>
      </div>
    </section>
  )
}
