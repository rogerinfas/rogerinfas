import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  return (
    <div className="pt-16 border-t border-black/15">
      <div className="bg-[#EAE8E1] p-8 sm:p-12 rounded-2xl space-y-8 shadow-sm">
        
        {/* Header line with Navigation Controls & Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-black/50">
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setTestimonialIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
              }
              className="size-7 rounded-md border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() =>
                setTestimonialIdx((prev) => (prev + 1) % testimonials.length)
              }
              className="size-7 rounded-md border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
          <span>0{testimonialIdx + 1} / 0{testimonials.length}</span>
        </div>

        {/* Testimonial Quote */}
        <p className="text-xl sm:text-2xl font-light leading-relaxed text-black/90 max-w-4xl">
          &ldquo;{testimonials[testimonialIdx].quote}&rdquo;
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4 pt-4 border-t border-black/10">
          <div className="size-10 rounded-full bg-black text-white text-xs font-mono font-bold flex items-center justify-center tracking-wider shrink-0 select-none shadow-sm">
            {testimonials[testimonialIdx].name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
          <div>
            <h5 className="font-semibold text-sm">{testimonials[testimonialIdx].name}</h5>
            <p className="text-xs font-mono text-black/50">{testimonials[testimonialIdx].role}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
