import { memo, useMemo, useRef, useState } from "react"
import { ArrowUpRight, ArrowRight, Copy, Check, KeyRound } from "lucide-react"
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
      className="group/copy flex w-full items-center justify-between gap-3 rounded-lg border border-black/15 bg-white px-3 py-2 text-left font-mono text-xs transition-colors duration-200 hover:border-black/35 cursor-pointer"
      aria-label={`Copiar ${label.toLowerCase()}`}
    >
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-[0.2em] text-black/50">{label}</span>
        <span className="block truncate text-black/90">{value}</span>
      </span>
      {copied ? (
        <Check className="size-3.5 shrink-0 text-[#C23A2A]" aria-hidden="true" />
      ) : (
        <Copy className="size-3.5 shrink-0 text-black/40 transition-colors group-hover/copy:text-black" aria-hidden="true" />
      )}
    </button>
  )
}

/* ---------- Detalle expandible de cada proyecto ---------- */

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Imagen inline solo en móvil (en desktop vive en el preview lateral) */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group/detail-img relative block overflow-hidden rounded-xl lg:hidden"
        aria-label={`Abrir demo de ${project.title} en pestaña nueva`}
      >
        <img
          src={project.posterImage || project.bgImage}
          alt=""
          loading="lazy"
          decoding="async"
          className="aspect-[16/9] w-full object-cover transition-transform duration-300 ease-out group-hover/detail-img:scale-[1.03]"
        />
      </a>

      <div className="space-y-4">
        <p className="text-sm font-light leading-relaxed text-black/70">{project.description}</p>
        {project.tags && (
          <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías del proyecto">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-black/15 bg-white px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-black/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="space-y-3">
        {project.demoCredentials && (
          <div className="space-y-2">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C23A2A]">
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

        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-black px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#C23A2A]"
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
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-black/20 px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-black transition-colors duration-200 hover:border-black hover:bg-black hover:text-white"
            >
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

/* ---------- Fila del índice (memoizada para listas largas) ---------- */

interface RowProps {
  project: Project
  index: number
  total: number
  active: boolean
  expanded: boolean
  onActivate: (id: string) => void
  onToggle: (id: string) => void
  registerRef: (id: string, el: HTMLButtonElement | null) => void
}

const ProjectRow = memo(function ProjectRow({
  project,
  index,
  total,
  active,
  expanded,
  onActivate,
  onToggle,
  registerRef,
}: RowProps) {
  const number = String(index + 1).padStart(2, "0")
  const visibleTags = (project.tags ?? []).slice(0, 3)
  const extraTags = (project.tags ?? []).length - visibleTags.length
  const detailId = `proyecto-detalle-${project.id}`

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
        active ? "border-black bg-black/[0.035]" : "border-black/12 bg-transparent hover:border-black/30"
      }`}
    >
      <button
        ref={(el) => registerRef(project.id, el)}
        type="button"
        aria-expanded={expanded}
        aria-controls={detailId}
        onClick={() => onToggle(project.id)}
        onMouseEnter={() => onActivate(project.id)}
        onFocus={() => onActivate(project.id)}
        className="group flex w-full cursor-pointer items-center gap-4 px-5 py-5 text-left sm:gap-6 sm:px-7 sm:py-6"
      >
        <span
          aria-hidden="true"
          className={`font-mono text-xs tabular-nums transition-colors duration-200 ${
            active ? "text-[#C23A2A]" : "text-black/40"
          }`}
        >
          {number}
          <span className="text-black/30">/{String(total).padStart(2, "0")}</span>
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-heading text-xl font-semibold tracking-tight text-black sm:text-2xl">
              {project.title}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
              {project.year}
            </span>
          </span>
          <span className="mt-1 block truncate font-mono text-[11px] uppercase tracking-[0.18em] text-black/55">
            {project.subtitle}
          </span>
          <span className="mt-2 hidden flex-wrap gap-1.5 sm:flex" aria-hidden="true">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-black/[0.05] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-black/60"
              >
                {tag}
              </span>
            ))}
            {extraTags > 0 && (
              <span className="rounded-full bg-black/[0.05] px-2 py-0.5 font-mono text-[10px] text-black/60">
                +{extraTags}
              </span>
            )}
          </span>
        </span>

        <span
          aria-hidden="true"
          className={`flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
            expanded
              ? "rotate-45 border-black bg-black text-white"
              : "border-black/20 text-black group-hover:border-black group-hover:bg-black group-hover:text-white"
          }`}
        >
          <ArrowUpRight className="size-4" />
        </span>
      </button>

      {/* Detalle colapsable con animación solo de grid-rows (sin medir alturas) */}
      <div
        id={detailId}
        className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-black/10 px-5 py-6 sm:px-7">
            {expanded && <ProjectDetail project={project} />}
          </div>
        </div>
      </div>
    </div>
  )
})

/* ---------- Sección: índice editorial + preview fijo ---------- */

export function FeaturedProjectsSection(_props: FeaturedProjectsSectionProps) {
  const [activeId, setActiveId] = useState<string>(projects[0]?.id ?? "")
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>("Todos")
  const rowRefs = useRef(new Map<string, HTMLButtonElement>())

  // Todas las etiquetas en una sola pasada (escala a N proyectos)
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

  const activeProject =
    visible.find((p) => p.id === activeId) ??
    visible.find((p) => p.id === expandedId) ??
    visible[0] ??
    projects[0]

  const registerRef = (id: string, el: HTMLButtonElement | null) => {
    if (el) rowRefs.current.set(id, el)
    else rowRefs.current.delete(id)
  }

  const toggle = (id: string) => {
    setActiveId(id)
    setExpandedId((prev) => (prev === id ? null : id))
  }

  // Flechas ↑↓ / Inicio / Fin mueven el foco y el preview dentro del índice
  const onListKeyDown = (e: React.KeyboardEvent) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) return
    e.preventDefault()
    const ids = visible.map((p) => p.id)
    const current = ids.indexOf((document.activeElement?.closest("[data-row-id]") as HTMLElement | null)?.dataset.rowId ?? activeId)
    const base = current === -1 ? 0 : current
    let next = base
    if (e.key === "ArrowDown") next = (base + 1) % ids.length
    if (e.key === "ArrowUp") next = (base - 1 + ids.length) % ids.length
    if (e.key === "Home") next = 0
    if (e.key === "End") next = ids.length - 1
    const id = ids[next]
    setActiveId(id)
    rowRefs.current.get(id)?.focus()
  }

  return (
    <section id="work" aria-labelledby="work-title" className="relative bg-[#EBEBE6] px-6 pb-24 text-black sm:px-12 md:px-16 md:pb-32">
      <div className="mx-auto max-w-6xl">
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
              {String(visible.length).padStart(2, "0")} proyecto{visible.length === 1 ? "" : "s"}
              {filter !== "Todos" ? ` · ${filter}` : " · demo con acceso"}
            </p>
          </Reveal>
        </div>

        {/* Filtros por tecnología */}
        <div className="flex flex-wrap gap-2 pt-6" role="group" aria-label="Filtrar proyectos por tecnología">
          {["Todos", ...allTags].map((tag) => {
            const selected = filter === tag
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setFilter(tag)
                  setExpandedId(null)
                }}
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

        {visible.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-black/20 px-6 py-12 text-center text-sm text-black/60">
            Sin proyectos con ese filtro por ahora.
          </p>
        ) : (
          <div className="grid gap-8 pt-6 lg:grid-cols-12">
            {/* Índice */}
            <div
              className="space-y-3 lg:col-span-7"
              role="list"
              aria-label="Índice de proyectos"
              onKeyDown={onListKeyDown}
            >
              {visible.map((project, i) => (
                <div key={project.id} role="listitem" data-row-id={project.id}>
                  <Reveal delay={Math.min(i * 60, 240)} variant="up">
                    <ProjectRow
                      project={project}
                      index={i}
                      total={visible.length}
                      active={activeProject?.id === project.id}
                      expanded={expandedId === project.id}
                      onActivate={setActiveId}
                      onToggle={toggle}
                      registerRef={registerRef}
                    />
                  </Reveal>
                </div>
              ))}
            </div>

            {/* Preview fijo (desktop): sigue al proyecto activo */}
            <div className="hidden lg:col-span-5 lg:block">
              <div className="sticky top-24 overflow-hidden rounded-2xl bg-[#141414] text-white shadow-sm">
                {activeProject && (
                  <div key={activeProject.id}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {visible.map((p) => (
                        <img
                          key={p.id}
                          src={p.posterImage || p.bgImage}
                          alt=""
                          aria-hidden={p.id !== activeProject.id}
                          loading={p.id === visible[0]?.id ? "eager" : "lazy"}
                          decoding="async"
                          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 motion-reduce:transition-none ${
                            p.id === activeProject.id ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" aria-hidden="true" />
                      <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]">
                        <span className="rounded-md bg-white/90 px-2.5 py-1 font-semibold text-black">
                          {String(visible.findIndex((p) => p.id === activeProject.id) + 1).padStart(2, "0")}/
                          {String(visible.length).padStart(2, "0")}
                        </span>
                        <span className="rounded-md bg-black/60 px-2.5 py-1 text-white/85 backdrop-blur-md">
                          {activeProject.year}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 p-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
                        {activeProject.subtitle}
                      </p>
                      <h4 className="font-heading text-2xl font-semibold tracking-tight">
                        {activeProject.title}
                      </h4>
                      <p className="text-sm font-light leading-relaxed text-white/70">
                        {activeProject.headline}
                      </p>
                      {activeProject.liveUrl && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-black transition-colors duration-200 hover:bg-[#FF6B5B] hover:text-white"
                        >
                          Ver demo
                          <ArrowRight className="size-3.5" aria-hidden="true" />
                        </a>
                      )}
                      <p className="font-mono text-[11px] text-white/40">
                        Selecciona una fila para ver detalles y credenciales demo.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
