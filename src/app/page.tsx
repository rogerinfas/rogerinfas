"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Menu, X, ArrowRight } from "lucide-react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      title: "MERLA",
      year: "2026",
      subtitle: "FEATURED PROJECT",
      poster: "/images/merla_poster_card.png",
      headline:
        "Komma Komma is a product design & web-experience creative studio created for brands that refuse to blend in.",
      description:
        "Radio Frequency Identification system for modern retail intelligence. Built to significantly speed up warehouse inventory count.",
    },
    {
      title: "SOLARIS",
      year: "2025",
      subtitle: "ARCHITECTURAL BRANDING",
      poster: "/images/merla_poster_card.png",
      headline:
        "We engineer digital identities, physical installations, and immersive platforms that reshape contemporary design.",
      description:
        "Next-generation solar energy analytics platform with real-time telemetry and generative visual data displays.",
    },
    {
      title: "AURA LABS",
      year: "2026",
      subtitle: "SPATIAL COMPUTING",
      poster: "/images/merla_poster_card.png",
      headline:
        "Crafting boundary-pushing web experiences with raw precision, high typography, and atmospheric sound design.",
      description:
        "Spatial audio synthesis interface designed for creative producers and high-end interactive installations.",
    },
  ]

  const activeProject = projects[currentSlide]

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0f0a] text-white font-sans selection:bg-white selection:text-black">
      
      {/* Fullscreen Dark Forest Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dark_forest_bg.png"
          alt="Dark Forest Foliage Background"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-[0.70] contrast-[1.15] blur-[0.4px] transition-all duration-1000"
        />
        {/* Soft Vignette & Smooth Gradient Overlays for Feathered Edges */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/35 to-black/85 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-black/90 via-black/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between p-6 sm:p-10 lg:p-12">
        
        {/* TOP NAVIGATION BAR WITH SOFT BLURRED BACKGROUND */}
        <header className="flex items-center justify-between w-full">
          {/* Logo - Double Quote Symbol */}
          <Link
            href="/"
            className="text-3xl sm:text-4xl font-serif tracking-tighter hover:opacity-80 transition-opacity flex items-center justify-center size-9 text-white drop-shadow-md"
            aria-label="Komma Studio Logo"
          >
            <span className="font-bold text-3xl sm:text-4xl leading-none">”</span>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="mailto:hello@kommakomma.studio"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-[#18181b]/70 px-3.5 py-1.5 text-[11px] font-mono tracking-wide uppercase backdrop-blur-md shadow-lg transition-all hover:border-white/35 hover:bg-[#18181b]/90 hover:scale-[1.02]"
            >
              <span>Book a call</span>
              <span className="inline-flex items-center justify-center size-4 rounded bg-white/10 text-white text-[10px]">
                ➔
              </span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex size-9 items-center justify-center rounded-md border border-white/15 bg-[#18181b]/70 backdrop-blur-md shadow-lg transition-all hover:border-white/35 hover:scale-[1.02] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? (
                <X className="size-4" />
              ) : (
                <div className="flex flex-col gap-1 w-3.5 items-center">
                  <span className="w-full h-[1.5px] bg-white rounded-full"></span>
                  <span className="w-full h-[1.5px] bg-white rounded-full"></span>
                </div>
              )}
            </button>
          </div>
        </header>

        {/* CENTER HERO POSTER ARTWORK & OVERLAY METADATA */}
        <div className="relative flex flex-1 items-center justify-center py-10">
          
          {/* HORIZONTAL METADATA BAR OVERLAY */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-between px-6 lg:px-16 text-[11px] font-mono tracking-[0.25em] text-white/75 pointer-events-none z-20">
            <span className="uppercase">{activeProject.subtitle}</span>
            <span className="uppercase font-semibold tracking-[0.3em]">{activeProject.title}</span>
            <span className="uppercase">{activeProject.year}</span>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % projects.length)}
              className="pointer-events-auto flex items-center gap-2 uppercase hover:text-white transition-colors group cursor-pointer"
            >
              <span>VIEW PROJECT</span>
              <span className="inline-flex items-center justify-center size-5 rounded-md border border-white/30 text-[10px] group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="size-3" />
              </span>
            </button>
          </div>

          {/* FLOATING CENTER POSTER CARD WITH SOFT FEATHERED SHADOW */}
          <div className="group relative z-10 w-[260px] sm:w-[310px] md:w-[350px] lg:w-[380px] aspect-[3/4] rounded-sm overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] border border-white/10 transition-all duration-700 hover:scale-[1.015] cursor-pointer">
            <Image
              src={activeProject.poster}
              alt={activeProject.title}
              fill
              priority
              className="object-cover object-center filter transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle paper finish inner vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 opacity-70 pointer-events-none" />
          </div>
        </div>

        {/* BOTTOM SECTION: HEADLINE & SLIDE PAGINATION */}
        <footer className="grid grid-cols-1 md:grid-cols-12 items-end gap-6 w-full pt-4">
          
          {/* Left Large Editorial Text */}
          <div className="md:col-span-8 lg:col-span-7">
            <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-snug tracking-tight text-white/95 max-w-2xl font-sans drop-shadow-md">
              {activeProject.headline}
            </p>
          </div>

          {/* Mobile Metadata Link (visible on mobile only) */}
          <div className="flex md:hidden items-center justify-between text-[11px] font-mono tracking-widest text-white/70 py-2 border-t border-white/10">
            <span>{activeProject.subtitle}</span>
            <span className="font-bold text-white">{activeProject.title}</span>
            <span>{activeProject.year}</span>
          </div>

          {/* Right Slide Pagination / Controls */}
          <div className="md:col-span-4 lg:col-span-5 flex items-center justify-between md:justify-end gap-6">
            <div className="flex items-center gap-4">
              {/* Progress Line */}
              <div className="h-[2px] w-24 sm:w-32 bg-white/20 relative overflow-hidden rounded-full">
                <div
                  className="h-full bg-white transition-all duration-500"
                  style={{ width: `${((currentSlide + 1) / projects.length) * 100}%` }}
                />
              </div>

              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`size-2 rounded-full transition-all ${
                      currentSlide === idx ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </footer>

      </div>

      {/* Fullscreen Mobile / Drawer Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-12 animate-in fade-in duration-300">
          <div className="flex justify-between items-center">
            <span className="font-serif text-3xl">”</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="size-9 flex items-center justify-center rounded-md border border-white/20 text-white"
            >
              <X className="size-4" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-3xl sm:text-5xl font-light tracking-tight">
            <Link href="#featured" onClick={() => setMenuOpen(false)} className="hover:opacity-60 transition-opacity">
              Featured Work
            </Link>
            <Link href="#studio" onClick={() => setMenuOpen(false)} className="hover:opacity-60 transition-opacity">
              Studio & Philosophy
            </Link>
            <Link href="#services" onClick={() => setMenuOpen(false)} className="hover:opacity-60 transition-opacity">
              Capabilities
            </Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)} className="hover:opacity-60 transition-opacity">
              Contact & Inquiries
            </Link>
          </nav>

          <div className="flex justify-between text-xs font-mono tracking-widest text-white/50 border-t border-white/10 pt-6">
            <span>KOMMA KOMMA STUDIO</span>
            <span>2026 EDITION</span>
          </div>
        </div>
      )}

    </div>
  )
}
