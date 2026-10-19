import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  const prev = useCallback(() => {
    setTestimonialIdx((p) => (p === 0 ? testimonials.length - 1 : p - 1))
  }, [])

  const next = useCallback(() => {
    setTestimonialIdx((p) => (p + 1) % testimonials.length)
  }, [])

  // Teclado: flechas cambian testimonio cuando el carrusel tiene foco
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.getElementById("testimonios")
      if (!el?.contains(document.activeElement)) return
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [prev, next])

  const t = testimonials[testimonialIdx]

  return (
    <div
      id="testimonios"
      aria-roledescription="carrusel"
      aria-label={`Testimonios de clientes, ${testimonialIdx + 1} de ${testimonials.length}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="pt-16 border-t border-black/15"
    >
      <div className="bg-[#EAE8E1] p-8 sm:p-12 rounded-[20px] space-y-8 shadow-sm">
        
        {/* Header line with Navigation Controls & Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-black/60">
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="size-9 rounded-md border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              onClick={next}
              className="size-9 rounded-md border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
          <span aria-live="polite" aria-atomic="true">0{testimonialIdx + 1} / 0{testimonials.length}</span>
        </div>

        {/* Testimonial Quote */}
        <blockquote className="max-w-4xl">
          <p key={testimonialIdx} className="text-xl sm:text-2xl font-light leading-relaxed text-black/90 text-balance">
            &ldquo;{t.quote}&rdquo;
          </p>
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center gap-4 pt-4 border-t border-black/10">
          <div aria-hidden="true" className="size-10 rounded-full bg-black text-white text-xs font-mono font-bold flex items-center justify-center tracking-wider shrink-0 select-none shadow-sm">
            {t.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
          <div>
            <h5 className="font-semibold text-sm">{t.name}</h5>
            <p className="text-xs font-mono text-black/60">{t.role}</p>
          </div>
        </div>

        {/* Dots — acceso directo por teclado */}
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Elegir testimonio">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === testimonialIdx}
              aria-label={`Testimonio ${i + 1}`}
              onClick={() => setTestimonialIdx(i)}
              className="flex size-8 items-center justify-center rounded-full cursor-pointer"
            >
              <span
                aria-hidden="true"
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === testimonialIdx ? "w-6 bg-black" : "w-1.5 bg-black/25 hover:bg-black/50"
                }`}
              />
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}
