"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ArrowRight } from "lucide-react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Home")
  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      title: "MERLA",
      year: "2026",
      subtitle: "FEATURED PROJECT",
      bgImage: "/images/project_merla_bg.png",
      headline:
        "Komma Komma is a product design & web-experience creative studio created for brands that refuse to blend in.",
    },
    {
      title: "HANNA STÍNA",
      year: "2026",
      subtitle: "FEATURED PROJECT",
      bgImage: "/images/project_hanna_bg.png",
      headline:
        "An image-led portfolio for interior architect Hanna Stína, built around large photography and room to breathe.",
    },
    {
      title: "TÖLUM ÍSLENSKU",
      year: "2026",
      subtitle: "FEATURED PROJECT",
      bgImage: "/images/project_tolum_bg.png",
      headline:
        "A pin campaign that gives Icelandic learners a visible way to ask for the conversation they are trying to have.",
    },
  ]

  const navItems = ["Home", "Work", "Studio", "Contact"]

  const activeProject = projects[currentSlide]

  return (
    <div className="relative min-h-screen w-full bg-[#EDEDED] overflow-hidden flex font-sans selection:bg-white selection:text-black">
      
      {/* MAIN SITE CANVAS FRAME - SHRINKS INTO ROUNDED CARD WHEN MENU IS OPEN */}
      <div
        onClick={() => menuOpen && setMenuOpen(false)}
        className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#0a0f0a] text-white flex flex-col justify-between overflow-hidden ${
          menuOpen
            ? "h-[calc(100vh-28px)] my-3.5 ml-3.5 flex-1 rounded-[20px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-white/20 cursor-pointer pointer-events-auto select-none"
            : "h-screen w-full rounded-none shadow-none border-none"
        }`}
      >
        {/* Fullscreen Full-Bleed Project Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={activeProject.bgImage}
            alt={activeProject.title}
            fill
            priority
            className="object-cover object-center scale-100 filter brightness-[0.75] contrast-[1.1] transition-all duration-1000"
          />
          {/* Soft Vignette & Smooth Gradient Overlays for Readability */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/25 to-black/80 pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
        </div>

        {/* Main Content Container Inside Canvas */}
        <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-10 lg:p-12">
          
          {/* TOP NAVIGATION BAR */}
          <header className="flex items-center justify-between w-full">
            {/* Logo - Double Quote Symbol */}
            <Link
              href="/"
              className="text-3xl sm:text-4xl font-serif tracking-tighter hover:opacity-80 transition-opacity flex items-center justify-center size-9 text-white drop-shadow-md"
              aria-label="Komma Studio Logo"
            >
              <span className="font-bold text-3xl sm:text-4xl leading-none">”</span>
            </Link>

            {/* Right Actions - Hidden when menu is open */}
            <div
              className={`flex items-center gap-3 sm:gap-4 transition-opacity duration-300 ${
                menuOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
              }`}
            >
              <a
                href="https://cal.eu/kommakomma"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-[#18181b]/70 px-3.5 py-1.5 text-[11px] font-mono tracking-wide uppercase backdrop-blur-md shadow-lg transition-all hover:border-white/35 hover:bg-[#18181b]/90 hover:scale-[1.02]"
              >
                <span>Book a call</span>
                <span className="inline-flex items-center justify-center size-4 rounded bg-white/10 text-white text-[10px]">
                  ➔
                </span>
              </a>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setMenuOpen(true)
                }}
                className="flex size-9 items-center justify-center rounded-md border border-white/15 bg-[#18181b]/70 backdrop-blur-md shadow-lg transition-all hover:border-white/35 hover:scale-[1.02] cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <div className="flex flex-col gap-1 w-3.5 items-center">
                  <span className="w-full h-[1.5px] bg-white rounded-full"></span>
                  <span className="w-full h-[1.5px] bg-white rounded-full"></span>
                </div>
              </button>
            </div>
          </header>

          {/* CENTER OVERLAY METADATA LINE */}
          <div className="relative flex flex-1 items-center justify-between px-2 sm:px-6 text-[11px] font-mono tracking-[0.25em] text-white/85 z-20 pointer-events-none">
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
              <span>VIEW PROJECT</span>
              <span className="inline-flex items-center justify-center size-5 rounded-md border border-white/30 text-[10px] group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="size-3" />
              </span>
            </button>
          </div>

          {/* BOTTOM SECTION: HEADLINE & SLIDE PAGINATION */}
          <footer className="grid grid-cols-1 md:grid-cols-12 items-end gap-6 w-full pt-4">
            
            {/* Left Large Editorial Text */}
            <div className="md:col-span-8 lg:col-span-7">
              <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-snug tracking-tight text-white/95 max-w-2xl font-sans drop-shadow-md">
                {activeProject.headline}
              </p>
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
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentSlide(idx)
                      }}
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
      </div>

      {/* RIGHT SIDE MENU PANEL - ALWAYS MOUNTED WITH SMOOTH WIDTH TRANSITION */}
      <div
        className={`h-screen bg-[#EDEDED] text-black flex flex-col justify-between shrink-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? "w-[300px] sm:w-[360px] md:w-[400px] p-8 sm:p-10 opacity-100 pointer-events-auto"
            : "w-0 p-0 opacity-0 pointer-events-none overflow-hidden"
        }`}
      >
        {/* Drawer Top Header with X Close */}
        <div className="flex justify-end min-w-[240px]">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-black hover:opacity-60 transition-opacity p-1 cursor-pointer"
            aria-label="Close Navigation Menu"
          >
            <X className="size-6 stroke-[1.5]" />
          </button>
        </div>

        {/* Menu Items List */}
        <div className="flex flex-col gap-2 my-auto min-w-[240px]">
          {navItems.map((item) => {
            const isActive = activeTab === item
            return (
              <button
                key={item}
                onClick={() => {
                  setActiveTab(item)
                  setMenuOpen(false)
                }}
                className={`text-left text-3xl sm:text-4xl font-sans tracking-tight transition-all px-4 py-2 ${
                  isActive
                    ? "bg-[#E54838] text-white font-normal"
                    : "text-black hover:opacity-60 font-normal"
                }`}
              >
                {item}
              </button>
            )
          })}
        </div>

        {/* Drawer Footer Details */}
        <div className="border-t border-black/15 pt-6 grid grid-cols-2 gap-4 text-left min-w-[240px]">
          
          {/* Column 1: Legal */}
          <div>
            <p className="text-[10px] font-mono uppercase text-black/50 tracking-wider mb-2">Legal</p>
            <div className="space-y-1">
              <a href="#terms" className="text-xs text-black/85 hover:text-black block transition-colors">
                Terms of use
              </a>
              <a href="#transparency" className="text-xs text-black/85 hover:text-black block transition-colors">
                Transparency Statement
              </a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <p className="text-[10px] font-mono uppercase text-black/50 tracking-wider mb-2">Contact</p>
            <div className="space-y-1">
              <a href="mailto:hello@kommakomma.is" className="text-xs text-black/85 hover:text-black block transition-colors">
                hello@kommakomma.is
              </a>
              <a href="https://cal.eu/kommakomma" target="_blank" rel="noreferrer" className="text-xs text-black/85 hover:text-black block transition-colors">
                Book a call?
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
