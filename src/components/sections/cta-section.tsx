"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface CtaSectionProps {
  scrollY: number
  onContactClick?: () => void
}

export function CtaSection({ scrollY, onContactClick }: CtaSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [sectionTop, setSectionTop] = useState(3000)

  useEffect(() => {
    const measure = () => {
      if (sectionRef.current) {
        setSectionTop(sectionRef.current.offsetTop)
      }
    }
    measure()
    setTimeout(measure, 500) // measure again after layout stabilizes
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  // Calc distance from section top to window scroll, applied to the parallax
  const parallaxY = (scrollY - sectionTop) * 0.15

  return (
    <section ref={sectionRef} id="contact" className="relative bg-[#141414] text-white px-6 sm:px-12 md:px-16 py-28 md:py-36 overflow-hidden">
      
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_50%)] z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
        <div className="space-y-6">
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight max-w-2xl">
            ¿Tienes un proyecto o rol técnico en mente?
          </h3>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-lg text-sm font-mono uppercase tracking-wider font-semibold transition-all hover:bg-white/90 hover:scale-105 cursor-pointer shadow-xl"
          >
            <span>Construyamos juntos</span>
            <ArrowRight className="size-4" />
          </button>
        </div>

        <div className="size-48 md:size-64 opacity-15 font-mono font-bold text-[140px] leading-none select-none flex items-center justify-center tracking-tighter">
          RIS
        </div>
      </div>
    </section>
  )
}
