"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface CtaSectionProps {
  scrollY: number
}

export function CtaSection({ scrollY }: CtaSectionProps) {
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
      
      {/* Nature Background Image Parallax Layer */}
      {/* We use inset-[-25%] so the image is taller than the container, giving it room to travel without showing the edges */}
      <div
        className="absolute inset-[-25%] opacity-30 z-0 pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0)`,
        }}
      >
        <Image
          src="/images/dark_forest_bg.png"
          alt="Dark forest nature parallax"
          fill
          className="object-cover object-center brightness-[0.7]"
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
        <div className="space-y-6">
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight">
            Do you have a project in mind?
          </h3>
          <a
            href="https://cal.eu/kommakomma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-lg text-sm font-mono uppercase tracking-wider font-semibold transition-all hover:bg-white/90 hover:scale-105 shadow-xl"
          >
            <span>Let&apos;s talk</span>
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="size-48 md:size-64 opacity-20 font-serif text-[180px] leading-none select-none flex items-center justify-center">
          &ldquo;
        </div>
      </div>
    </section>
  )
}
