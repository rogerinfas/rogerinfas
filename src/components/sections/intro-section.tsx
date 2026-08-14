"use client"

import Image from "next/image"

interface IntroSectionProps {
  scrollY: number
}

export function IntroSection({ scrollY }: IntroSectionProps) {
  return (
    <section id="studio" className="relative bg-[#F4F4F0] text-black px-6 sm:px-12 md:px-16 py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        
        {/* Small Section Subtitle Tag */}
        <div className="flex items-center gap-2 text-xs font-mono text-black/50 uppercase tracking-widest">
          <span>Introducción</span>
        </div>

        {/* Typography Statement Layout matching Original */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-normal tracking-tight leading-[1.12]">
            Tú <span className="text-black/40 italic font-serif font-light">imaginas</span> el producto<br />
            Yo <span className="font-serif italic font-light">construyo</span><br />
            lo que realmente importa.
          </h2>
        </div>

        {/* Two Paragraph Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pt-8 border-t border-black/15 text-base sm:text-lg font-light leading-relaxed text-black/80">
          <p>
            I am Roger Infa Sanchez, a Full-Stack Developer with a deep passion for backend architecture, scalable APIs, and system performance.
          </p>
          <p>
            While I engineer complete end-to-end web applications with modern Next.js and React frontends, I thrive most when designing resilient server workflows, database schemas (PostgreSQL), and cloud infrastructure.
          </p>
        </div>

      </div>
    </section>
  )
}
