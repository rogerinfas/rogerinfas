import { Fragment, useEffect, useRef, useState } from "react"
import { ArrowUpRight, Copy, Check, KeyRound } from "lucide-react"
import { toast } from "sonner"
import { projects } from "@/lib/data"
import { Reveal } from "@/components/Reveal"
import { useMagnetic } from "@/hooks/use-magnetic"

interface FeaturedProjectsSectionProps {
  scrollY: number
}

const STICKY_GAP = 12
const STICKY_STEP = 16

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
      className="group/copy flex w-full items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-left font-mono text-xs transition-colors hover:border-white/25 hover:bg-white/[0.08] cursor-pointer"
      aria-label={`Copiar ${label.toLowerCase()}`}
    >
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40">{label}</span>
        <span className="block truncate text-white/90">{value}</span>
      </span>
      {copied ? <Check className="size-3.5 shrink-0 text-[#E54838]" /> : <Copy className="size-3.5 shrink-0 text-white/40 transition-colors group-hover/copy:text-white" />}
    </button>
  )
}

function ProjectCard({ project, index, progress }: { project: (typeof projects)[number]; index: number; progress: number }) {
  const demoMagnetic = useMagnetic<HTMLAnchorElement>(0.3)
  const ribbon = [...(project.tags ?? []), ...(project.tags ?? [])]
  const number = String(index + 1).padStart(2, "0")

  return (
    <article
      className="relative overflow-hidden rounded-3xl bg-[#141414] text-white shadow-2xl ring-1 ring-white/10 will-change-transform"
      style={{
        transform: `scale(${1 - progress * 0.06}) translateY(${progress * -8}px)`,
        transformOrigin: "top center",
        transition: "transform 80ms linear",
      }}
    >
      <div className="grid lg:grid-cols-12">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/img relative block aspect-[4/3] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[420px]"
          aria-label={`Abrir demo de ${project.title}`}
        >
          <img
            src={project.posterImage || project.bgImage}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#141414]" />
          <div className="absolute left-5 top-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]">
            <span className="rounded-md bg-white/90 px-2.5 py-1 font-semibold text-black">{number} / 0{projects.length}</span>
            <span className="rounded-md bg-black/60 px-2.5 py-1 text-white/80 backdrop-blur-md">{project.year}</span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 lg:right-auto">
            <p className="max-w-xs font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">{project.subtitle}</p>
            <span className="hidden size-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover/img:rotate-45 sm:flex">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </a>

        <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:col-span-5">
          <div className="space-y-3">
            <h4 className="text-2xl font-normal leading-tight tracking-tight sm:text-3xl">{project.title}</h4>
            <p className="text-base font-light leading-relaxed text-white/85">{project.headline}</p>
            <p className="text-sm font-light leading-relaxed text-white/60 lg:line-clamp-4">{project.description}</p>
          </div>

          <div className="space-y-4">
            {project.demoCredentials && (
              <div className="space-y-2">
                <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#E54838]">
                  <KeyRound className="size-3" />
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

            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  ref={demoMagnetic.ref}
                  onMouseMove={demoMagnetic.onMouseMove}
                  onMouseLeave={demoMagnetic.onMouseLeave}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-black transition-transform duration-200 ease-out hover:bg-white/90"
                >
                  <span>Ver demo</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-mono font-medium uppercase tracking-wider text-white transition-all hover:bg-white/20"
                >
                  Código
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {project.tags && (
        <div className="relative overflow-hidden border-t border-white/10 py-2.5" aria-hidden="true">
          <div className="flex w-max gap-6 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] text-white/45" style={{ animation: `projectRibbon ${project.tags.length * 4}s linear infinite` }}>
            {ribbon.map((tag, i) => (
              <span key={`${tag}-${i}`} className="flex items-center gap-6">
                {tag}
                <span className="size-1 rounded-full bg-[#E54838]" />
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

export function FeaturedProjectsSection({ scrollY }: FeaturedProjectsSectionProps) {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const slotRefs = useRef<(HTMLDivElement | null)[]>([])
  const [slots, setSlots] = useState<{ top: number; height: number }[]>([])
  const [headerHeight, setHeaderHeight] = useState(0)
  const [stacking, setStacking] = useState(false)

  useEffect(() => {
    const measure = () => {
      setStacking(window.matchMedia("(min-width: 1024px)").matches)
      setHeaderHeight(headerRef.current?.offsetHeight ?? 0)
      setSlots(
        slotRefs.current.map((anchor) => {
          const card = anchor?.nextElementSibling as HTMLElement | null
          if (!anchor || !card) return { top: 0, height: 0 }
          return { top: anchor.getBoundingClientRect().top + window.scrollY, height: card.offsetHeight }
        })
      )
    }
    measure()
    window.addEventListener("resize", measure)
    window.addEventListener("load", measure)
    return () => {
      window.removeEventListener("resize", measure)
      window.removeEventListener("load", measure)
    }
  }, [])

  return (
    <section id="work" className="relative bg-[#EBEBE6] px-6 pb-24 text-black sm:px-12 md:px-16 md:pb-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header pins at the top; the cards stack underneath it */}
        <div
          ref={headerRef}
          className="z-20 mb-10 grid gap-4 border-b border-black/15 bg-[#EBEBE6] pb-5 pt-20 md:grid-cols-12 md:items-end lg:sticky lg:top-0"
        >
          <Reveal className="md:col-span-8" variant="left">
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.25em] text-black/50">Proyectos destacados</p>
            <h3 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Sistemas en producción, no maquetas.
            </h3>
          </Reveal>
          <Reveal delay={120} className="md:col-span-4 md:text-right" variant="right">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/50">
              0{projects.length} proyectos · demo con acceso
            </p>
          </Reveal>
        </div>

        <div>
          {projects.map((project, index) => {
            const slot = slots[index]
            const stickyTop = headerHeight + STICKY_GAP + index * STICKY_STEP
            const isLast = index === projects.length - 1
            const progress =
              stacking && slot && !isLast ? Math.min(1, Math.max(0, (scrollY - (slot.top - stickyTop)) / slot.height)) : 0

            return (
              <Fragment key={project.id}>
                {/* Non-sticky anchor: gives a stable page offset to measure against */}
                <div
                  ref={(el) => {
                    slotRefs.current[index] = el
                  }}
                  aria-hidden="true"
                  className="h-0"
                />
                <div className="mb-6 lg:sticky lg:mb-8" style={{ top: stacking ? `${stickyTop}px` : undefined }}>
                  <Reveal variant="up">
                    <ProjectCard project={project} index={index} progress={progress} />
                  </Reveal>
                </div>
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}
