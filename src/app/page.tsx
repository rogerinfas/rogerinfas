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
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* Fullscreen Dark Forest Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dark_forest_bg.png"
          alt="Dark Forest Foliage Background"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-[0.75] contrast-[1.1] transition-all duration-1000"
        />
        {/* Subtle Dark Vignette & Atmospheric Radial Gradient */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between p-6 sm:p-10 lg:p-14">
        
        {/* TOP NAVIGATION BAR */}
        <header className="flex items-center justify-between w-full">
          {/* Logo - Quote Icon */}
          <Link
            href="/"
            className="text-3xl sm:text-4xl font-serif tracking-tighter hover:opacity-80 transition-opacity flex items-center justify-center size-10"
            aria-label="Komma Studio Logo"
          >
            <span className="font-bold text-4xl leading-none selection:bg-transparent">”</span>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="mailto:hello@kommakomma.studio"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-xs font-mono tracking-wider uppercase backdrop-blur-md transition-all hover:border-white/50 hover:bg-black/60 hover:scale-105"
            >
              <span>Book a call</span>
              <ArrowUpRight className="size-3.5" />
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md transition-all hover:border-white/50 hover:scale-105"
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <X className="size-4" /> : <div className="flex flex-col gap-1.5 w-4 items-center">
                <span className="w-full h-[1.5px] bg-white rounded-full"></span>
                <span className="w-full h-[1.5px] bg-white rounded-full"></span>
              </div>}
            </button>
          </div>
        </header>

        {/* CENTER HERO POSTER ARTWORK & OVERLAY METADATA */}
        <div className="relative flex flex-1 items-center justify-center py-12">
          
          {/* HORIZONTAL METADATA BAR OVERLAY */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-between px-4 lg:px-12 text-xs font-mono tracking-widest text-white/80 pointer-events-none z-20">
            <span className="uppercase tracking-[0.25em]">{activeProject.subtitle}</span>
            <span className="uppercase tracking-[0.25em] font-semibold">{activeProject.title}</span>
            <span className="uppercase tracking-[0.25em]">{activeProject.year}</span>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % projects.length)}
              className="pointer-events-auto flex items-center gap-2 uppercase tracking-[0.2em] hover:text-white transition-colors group cursor-pointer"
            >
              <span>VIEW PROJECT</span>
              <span className="inline-flex items-center justify-center size-5 rounded-full border border-white/30 text-[10px] group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="size-3" />
              </span>
            </button>
          </div>

          {/* FLOATING CENTER POSTER CARD */}
          <div className="group relative z-10 w-[270px] sm:w-[320px] md:w-[360px] lg:w-[400px] aspect-[3/4] rounded-md overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/10 transition-transform duration-700 hover:scale-[1.02] cursor-pointer">
            <Image
              src={activeProject.poster}
              alt={activeProject.title}
              fill
              priority
              className="object-cover object-center filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />
            {/* Soft inner glow highlight */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10 opacity-60 pointer-events-none" />
          </div>
        </div>

        {/* BOTTOM SECTION: HEADLINE & SLIDE PAGINATION */}
        <footer className="grid grid-cols-1 md:grid-cols-12 items-end gap-6 w-full pt-6">
          
          {/* Left Large Editorial Text */}
          <div className="md:col-span-8 lg:col-span-7">
            <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-snug tracking-tight text-white/95 max-w-2xl font-sans">
              {activeProject.headline}
            </p>
          </div>

          {/* Mobile Metadata Link (visible on mobile only) */}
          <div className="flex md:hidden items-center justify-between text-xs font-mono tracking-widest text-white/70 py-2 border-t border-white/10">
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
              className="size-10 flex items-center justify-center rounded-full border border-white/20 text-white"
            >
              <X className="size-5" />
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
