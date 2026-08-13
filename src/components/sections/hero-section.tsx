"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"
import type { Project } from "@/lib/data"

interface HeroSectionProps {
  scrollY: number
}

const SLIDE_DURATION = 5000

export function HeroSection({ scrollY }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  // 5-Second Auto-play Timer for Hero Carousel
  useEffect(() => {
    setProgress(0)
    const startTime = Date.now()

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const currentProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
      setProgress(currentProgress)

      if (elapsed >= SLIDE_DURATION) {
        setCurrentSlide((prev) => (prev + 1) % projects.length)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [currentSlide])

  const activeProject = projects[currentSlide]

  return (
    <section id="home" className="relative h-screen w-full flex flex-col justify-between overflow-hidden">
      
      {/* Background Images with Parallax Motion */}
      <div
        className="absolute inset-0 z-0 will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(1.08)`,
        }}
      >
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={proj.bgImage}
              alt={proj.title}
              fill
              priority={idx === 0}
              className="object-cover object-center brightness-[0.8] contrast-[1.05]"
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
        <div className="relative flex flex-1 items-center justify-between px-2 sm:px-6 text-[11px] font-mono tracking-[0.25em] text-white/85 pointer-events-none">
          <span className="uppercase">{activeProject.subtitle}</span>
          <span className="uppercase font-bold tracking-[0.3em] text-white text-base sm:text-lg drop-shadow-lg">{activeProject.title}</span>
          <span className="uppercase">{activeProject.year}</span>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setCurrentSlide((prev) => (prev + 1) % projects.length)
            }}
            className="pointer-events-auto hidden sm:flex items-center gap-2 uppercase hover:text-white transition-colors group cursor-pointer"
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
            <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-snug tracking-tight text-white/95 max-w-2xl font-sans drop-shadow-md">
              {activeProject.headline}
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-5 flex items-center justify-between md:justify-end gap-6">
            <div className="flex items-center gap-4">
              {/* Smooth 5-Second Progress Bar */}
              <div className="h-[2px] w-28 sm:w-40 bg-white/20 relative overflow-hidden rounded-full">
                <div
                  className="h-full bg-white transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentSlide(idx)
                    }}
                    className={`size-2.5 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Ir a la diapositiva ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </footer>

      </div>
    </section>
  )
}
