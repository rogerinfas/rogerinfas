import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"
import { useMagnetic } from "@/hooks/use-magnetic"

interface HeroSectionProps {
  scrollY: number
}

const SLIDE_DURATION = 6000

export function HeroSection({ scrollY }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const nextMagnetic = useMagnetic<HTMLButtonElement>(0.3)
  const regionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  // 6-Second Auto-play Timer — se pausa con hover/foco y se detiene con reduced-motion
  useEffect(() => {
    if (paused || reducedMotion) return
    setProgress(0)
    const startTime = Date.now()

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const currentProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
      setProgress(currentProgress)

      if (elapsed >= SLIDE_DURATION) {
        setCurrentSlide((prev) => (prev + 1) % projects.length)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [currentSlide, paused, reducedMotion])

  const activeProject = projects[currentSlide]
  const parallaxY = reducedMotion ? 0 : Math.min(scrollY, typeof window !== "undefined" ? window.innerHeight : 800) * 0.12

  return (
    <section
      ref={regionRef as React.RefObject<HTMLElement>}
      id="home"
      data-theme="dark"
      aria-roledescription="carrusel"
      aria-label="Proyectos destacados"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative h-svh min-h-[640px] w-full flex flex-col justify-between overflow-hidden"
    >
      
      {/* Background Images with Parallax Motion (estático con reduced-motion) */}
      <div
        className="absolute -inset-y-[12%] inset-x-0 z-0 will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0) scale(1.06)`,
        }}
      >
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            aria-hidden={currentSlide !== idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={proj.bgImage}
              alt=""
              fetchPriority={idx === 0 ? "high" : "low"}
              loading={idx === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`w-full h-full object-cover object-center brightness-[0.82] contrast-[1.04] ${
                currentSlide === idx && !reducedMotion ? "hero-slow-zoom" : ""
              }`}
            />
          </div>
        ))}
      </div>

      {/* Vignette & Gradient Overlays for Legibility */}
      <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/75 pointer-events-none z-15" />
      <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-black/80 via-black/35 to-transparent pointer-events-none z-15" />
      <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none z-15" />

      {/* Hero Content Layer */}
      <div className="relative z-30 flex h-full flex-col justify-between p-6 sm:p-10 lg:p-12 pt-24 sm:pt-28">
        
        {/* Center Metadata Line */}
        <div key={`meta-${currentSlide}`} aria-live="polite" className="relative flex flex-1 flex-col items-start justify-center gap-2 px-2 text-[11px] font-mono tracking-[0.25em] text-white/90 pointer-events-none sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6" style={{ animation: reducedMotion ? undefined : "fadeIn 500ms cubic-bezier(0.16,1,0.3,1)" }}>
          <span className="uppercase hidden md:inline text-white/70">{activeProject.subtitle}</span>
          <span className="uppercase font-bold tracking-[0.2em] sm:tracking-[0.3em] text-white text-xl sm:text-lg drop-shadow-lg leading-tight max-w-full">{activeProject.title}</span>
          <span className="uppercase text-white/70">{activeProject.year} · {activeProject.subtitle}</span>
          <button
            ref={nextMagnetic.ref}
            onMouseMove={nextMagnetic.onMouseMove}
            onMouseLeave={nextMagnetic.onMouseLeave}
            onClick={(e) => {
              e.stopPropagation()
              setCurrentSlide((prev) => (prev + 1) % projects.length)
            }}
            className="pointer-events-auto hidden sm:flex min-h-[44px] items-center gap-2 uppercase text-white/90 hover:text-white transition-colors duration-200 group cursor-pointer rounded-sm"
            aria-label="Ver siguiente proyecto"
          >
            <span>VER PROYECTO</span>
            <span className="inline-flex items-center justify-center size-5 rounded-md border border-white/30 text-[10px] group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
              <ArrowRight className="size-3" />
            </span>
          </button>
        </div>

        {/* Bottom Editorial Headline & Progress Controls */}
        <footer className="grid grid-cols-1 md:grid-cols-12 items-end gap-6 w-full pt-4">
          <div className="md:col-span-8 lg:col-span-7">
            <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.28em] text-white/75">
              Full-Stack Developer · Backend Focus
            </p>
            <h1 className="mb-4 max-w-3xl text-4xl font-heading font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Construyo sistemas digitales que funcionan en el mundo real.
            </h1>
            <p
              key={`headline-${currentSlide}`}
              className="max-w-2xl text-base font-light leading-relaxed tracking-tight text-white/85 sm:text-xl"
              style={{ animation: reducedMotion ? undefined : "fadeIn 500ms cubic-bezier(0.16,1,0.3,1)" }}
            >
              Para negocios que necesitan ordenar su operación y equipos técnicos que buscan un backend sólido, claro y preparado para crecer.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-5 flex items-center justify-between md:justify-end gap-6">
            <div className="flex items-center gap-4">
              {/* Progress Bar */}
              <div className="h-[3px] w-28 sm:w-40 bg-white/25 relative overflow-hidden rounded-full" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)} aria-label="Progreso del carrusel">
                <div
                  className="h-full bg-white transition-[width] duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Dots */}
              <div className="flex items-center gap-1" role="tablist" aria-label="Elegir proyecto">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    role="tab"
                    aria-selected={currentSlide === idx}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentSlide(idx)
                    }}
                    className="flex size-8 items-center justify-center cursor-pointer rounded-full"
                    aria-label={`Ir al proyecto ${idx + 1} de ${projects.length}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`size-2.5 rounded-full transition-all duration-200 ${
                        currentSlide === idx ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </footer>

      </div>
    </section>
  )
}
