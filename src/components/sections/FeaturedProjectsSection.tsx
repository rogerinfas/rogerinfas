import { useState, useEffect } from "react"
import { ArrowUpRight, Check, Copy, KeyRound, Plus, Minus, Maximize2, X } from "lucide-react"
import { toast } from "sonner"
import { projects, type Project } from "@/lib/data"
import { Reveal } from "@/components/Reveal"

interface FeaturedProjectsSectionProps {
  scrollY: number
}

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async (e: React.MouseEvent) => {
    e.stopPropagation()
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
        <span className="block text-[10px] uppercase tracking-wider text-white/40">{label}</span>
        <span className="block truncate text-white/90">{value}</span>
      </span>
      {copied ? (
        <Check className="size-3.5 shrink-0 text-[#E54838]" aria-hidden="true" />
      ) : (
        <Copy className="size-3.5 shrink-0 text-white/40 transition-colors hover:text-white" aria-hidden="true" />
      )}
    </button>
  )
}

export function FeaturedProjectsSection(_props: FeaturedProjectsSectionProps) {
  // Por defecto el primer proyecto viene expandido
  const [expandedId, setExpandedId] = useState<string | null>(projects[0]?.id ?? null)
  // Hover preview para desktop
  const [hoveredIndex, setHoveredIndex] = useState<number>(0)
  // Estado para el modal lightbox de captura ampliada
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null)

  // Cerrar lightbox con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxProject(null)
    }
    if (lightboxProject) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [lightboxProject])

  const toggleExpand = (id: string, index: number) => {
    setExpandedId((prev) => (prev === id ? null : id))
    setHoveredIndex(index)
  }

  const activeHoverProject = projects[hoveredIndex] ?? projects[0]

  return (
    <section
      id="work"
      data-theme="dark"
      aria-labelledby="work-title"
      className="relative overflow-hidden bg-[#0D0D0E] px-6 py-24 text-white sm:px-12 md:px-16 md:py-32"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Cabecera sobria y profesional */}
        <div className="mb-14 border-b border-white/10 pb-8 sm:flex sm:items-end sm:justify-between">
          <Reveal variant="left">
            <p className="mb-2 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/50">
              <span className="inline-block size-1.5 rounded-full bg-[#E54838]" aria-hidden="true" />
              Proyectos seleccionados
            </p>
            <h3 id="work-title" className="text-3xl font-heading font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Sistemas en producción y código real
            </h3>
          </Reveal>
          <Reveal delay={100} variant="right">
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-white/40 sm:mt-0">
              {projects.length} casos · clic en la captura para ampliar
            </p>
          </Reveal>
        </div>

        {/* Layout en 2 columnas: Lista Editorial a la izquierda, Preview sticky interactiva a la derecha */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Columna Izquierda: Filas editoriales interactivas */}
          <div className="space-y-0 lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {projects.map((project: Project, index: number) => {
              const isExpanded = expandedId === project.id

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`group transition-colors duration-200 ${
                    isExpanded ? "bg-white/[0.02]" : "hover:bg-white/[0.015]"
                  }`}
                >
                  {/* Fila principal clicable */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(project.id, index)}
                    className="flex w-full items-start justify-between gap-4 py-6 text-left cursor-pointer transition-transform"
                    aria-expanded={isExpanded}
                    aria-controls={`project-detail-${project.id}`}
                  >
                    <div className="flex items-start gap-4 sm:gap-6 min-w-0">
                      <span className="font-mono text-xs text-white/35 pt-1 select-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-heading text-xl font-medium tracking-tight text-white group-hover:text-[#FF6B5B] transition-colors sm:text-2xl">
                            {project.title}
                          </h4>
                          {project.badge && (
                            <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white/70">
                              {project.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm font-light text-white/60">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 pt-1">
                      <span className="font-mono text-xs text-white/40 hidden sm:inline">
                        {project.year}
                      </span>
                      <span
                        className={`flex size-7 items-center justify-center rounded-full border border-white/20 text-white/70 transition-transform duration-200 ${
                          isExpanded ? "rotate-90 bg-white/10 text-white" : "group-hover:border-white/50"
                        }`}
                        aria-hidden="true"
                      >
                        {isExpanded ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                      </span>
                    </div>
                  </button>

                  {/* Detalle desplegable (animado) */}
                  {isExpanded && (
                    <div
                      id={`project-detail-${project.id}`}
                      className="pb-7 pl-9 sm:pl-12 pr-2 space-y-5"
                      style={{ animation: "fadeIn 350ms cubic-bezier(0.16,1,0.3,1)" }}
                    >
                      {/* Imagen visible en móvil directamente dentro del acordeón (clic para ampliar) */}
                      <div
                        onClick={() => setLightboxProject(project)}
                        className="group/img relative lg:hidden overflow-hidden rounded-xl border border-white/10 bg-black/60 cursor-pointer"
                      >
                        <img
                          src={project.posterImage}
                          alt={`Captura de ${project.title}`}
                          className="w-full h-auto max-h-[360px] object-contain transition-transform duration-300 group-hover/img:scale-[1.01]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono">
                          <Maximize2 className="size-4" />
                          <span>Toca para ver en grande</span>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base font-light leading-relaxed text-white/80 max-w-xl">
                        {project.description}
                      </p>

                      {/* Stack de tecnologías */}
                      {project.tags && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-white/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Credenciales demo si existen */}
                      {project.demoCredentials && (
                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 max-w-md space-y-2.5">
                          <p className="flex items-center gap-2 font-mono text-[11px] text-[#FF6B5B]">
                            <KeyRound className="size-3.5" aria-hidden="true" />
                            Acceso de prueba listo para usar
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

                      {/* Botones de acción directos */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-white px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-[#E54838] hover:text-white"
                          >
                            Abrir demo en vivo
                            <ArrowUpRight className="size-3.5" aria-hidden="true" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-white/20 px-4 py-2 font-mono text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                          >
                            <svg className="size-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            Repositorio
                          </a>
                        )}
                        {!project.liveUrl && !project.githubUrl && (
                          <a
                            href={`mailto:contactorogeris@gmail.com?subject=Consulta%20sobre%20${encodeURIComponent(project.title)}`}
                            className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-white/15 px-4 py-2 font-mono text-xs text-white/70 hover:text-white hover:border-white/30 transition-colors"
                          >
                            Solicitar demostración guiada ↗
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Columna Derecha (Desktop): Preview Sticky limpia de la interfaz real con clic para ampliar */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 space-y-4">
            <div
              onClick={() => setLightboxProject(activeHoverProject)}
              className="group/preview overflow-hidden rounded-2xl border border-white/15 bg-[#141415] shadow-2xl cursor-zoom-in transition-all duration-300 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setLightboxProject(activeHoverProject)
                }
              }}
              aria-label={`Ampliar captura de pantalla de ${activeHoverProject.title}`}
            >
              {/* Barra superior estilo ventana/browser limpia */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-white/20" />
                  <span className="size-2.5 rounded-full bg-white/20" />
                  <span className="size-2.5 rounded-full bg-white/20" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 truncate max-w-[200px]">
                  {activeHoverProject.title} · Preview
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-white/40 group-hover/preview:text-[#FF6B5B] transition-colors">
                  <Maximize2 className="size-3" />
                  <span>Ampliar</span>
                </span>
              </div>

              {/* Imagen con overlay sutil al hover para invitar al clic */}
              <div className="relative aspect-[16/10] bg-black/60 overflow-hidden flex items-center justify-center p-1.5">
                <img
                  key={activeHoverProject.id}
                  src={activeHoverProject.posterImage}
                  alt={`Captura real de ${activeHoverProject.title}`}
                  className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover/preview:scale-[1.01]"
                  style={{ animation: "fadeIn 300ms ease-out" }}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/75 px-4 py-2 font-mono text-xs text-white backdrop-blur-sm border border-white/20 shadow-lg">
                    <Maximize2 className="size-3.5" />
                    <span>Clic para ver en pantalla completa</span>
                  </span>
                </div>
              </div>

              {/* Pie de la preview */}
              <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
                <div>
                  <p className="font-heading text-sm font-medium text-white">
                    {activeHoverProject.title}
                  </p>
                  <p className="text-xs text-white/50 font-light">
                    {activeHoverProject.subtitle}
                  </p>
                </div>
                {activeHoverProject.liveUrl && (
                  <a
                    href={activeHoverProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-white/70 hover:text-white transition-colors"
                  >
                    Visitar demo <ArrowUpRight className="size-3" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-center font-mono text-[11px] text-white/35 flex items-center justify-center gap-1.5">
              <Maximize2 className="size-3" />
              <span>Haz clic en la imagen para ver todos los detalles en grande</span>
            </p>
          </div>
        </div>
      </div>

      {/* Modal Lightbox de Pantalla Completa */}
      {lightboxProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Captura en tamaño completo de ${lightboxProject.title}`}
          onClick={() => setLightboxProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md"
          style={{ animation: "fadeIn 200ms ease-out" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] max-w-6xl w-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#121214] shadow-2xl"
          >
            {/* Header del Lightbox */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-3">
              <div className="flex items-center gap-3">
                <span className="font-heading text-base font-semibold text-white">
                  {lightboxProject.title}
                </span>
                <span className="font-mono text-xs text-white/40 hidden sm:inline">
                  · {lightboxProject.subtitle}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {lightboxProject.liveUrl && (
                  <a
                    href={lightboxProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded bg-white/10 px-3 py-1 font-mono text-xs text-white hover:bg-white/20 transition-colors"
                  >
                    Abrir demo <ArrowUpRight className="size-3" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setLightboxProject(null)}
                  className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
                  aria-label="Cerrar vista grande"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* Contenedor de la Imagen con scroll natural si excede el alto */}
            <div className="overflow-auto p-2 sm:p-4 bg-black/50 flex items-center justify-center">
              <img
                src={lightboxProject.posterImage}
                alt={`Captura completa de ${lightboxProject.title}`}
                className="max-h-[78vh] w-auto rounded-lg object-contain shadow-xl"
              />
            </div>

            {/* Footer con atajo para salir */}
            <div className="border-t border-white/10 bg-white/[0.02] px-5 py-2.5 flex items-center justify-between text-[11px] font-mono text-white/40">
              <span>Resolución original del sistema</span>
              <span>Presiona <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 text-white/70">ESC</kbd> o clic fuera para cerrar</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
