"use client"

import Image from "next/image"

interface IntroSectionProps {
  scrollY: number
}

export function IntroSection({ scrollY }: IntroSectionProps) {
  return (
    <section id="studio" className="relative bg-[#F4F4F0] text-black px-6 sm:px-12 md:px-16 py-24 md:py-32 overflow-hidden">
      
      {/* Subtle Parallax Background Layer */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none will-change-transform scale-110"
        style={{
          transform: `translate3d(0, ${(scrollY - 500) * 0.15}px, 0)`,
        }}
      >
        <Image
          src="/images/dark_forest_bg.png"
          alt="Nature parallax"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        
        {/* Small Section Subtitle Tag */}
        <div className="flex items-center gap-2 text-xs font-mono text-black/50 uppercase tracking-widest">
          <span>Introduction</span>
        </div>

        {/* Typography Statement Layout matching Original */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-normal tracking-tight leading-[1.12]">
            You <span className="text-black/40 italic font-serif font-light">only</span> quote<br />
            We <span className="font-serif italic font-light">design</span><br />
            what&apos;s important.
          </h2>
        </div>

        {/* Two Paragraph Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pt-8 border-t border-black/15 text-base sm:text-lg font-light leading-relaxed text-black/80">
          <p>
            Komma Komma is a product design and web-experience studio run by Oliver &amp; Freyr. We make visual identities, websites, and campaigns for people who care how their work is seen.
          </p>
          <p>
            We work with founders and creative teams who have outgrown the template and want a presence that feels bespoke, shaped around the brand.
          </p>
        </div>

      </div>
    </section>
  )
}
