"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ArrowRight, ArrowUpRight } from "lucide-react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Home")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  const projects = [
    {
      id: "merla",
      title: "MERLA",
      year: "2026",
      subtitle: "FEATURED PROJECT",
      bgImage: "/images/dark_forest_bg.png",
      posterImage: "/images/merla_poster_card.png",
      headline:
        "Komma Komma is a product design & web-experience creative studio created for brands that refuse to blend in.",
    },
    {
      id: "hanna-stina",
      title: "HANNA STÍNA",
      year: "2026",
      subtitle: "FEATURED PROJECT",
      bgImage: "/images/project_hanna_bg.png",
      posterImage: null,
      headline:
        "An image-led portfolio for interior architect Hanna Stína, built around large photography and room to breathe.",
    },
    {
      id: "tolum-islensku",
      title: "TÖLUM ÍSLENSKU",
      year: "2026",
      subtitle: "FEATURED PROJECT",
      bgImage: "/images/project_tolum_bg.png",
      posterImage: null,
      headline:
        "A pin campaign that gives Icelandic learners a visible way to ask for the conversation they are trying to have.",
    },
  ]

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "Studio", href: "#studio" },
    { name: "Contact", href: "#contact" },
  ]

  // 5-Second Auto-play Timer & Smooth Progress Bar Animation
  const SLIDE_DURATION = 5000

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
  }, [currentSlide, projects.length])

  const activeProject = projects[currentSlide]

  const scrollToSection = (href: string, tabName: string) => {
    setActiveTab(tabName)
    setMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-[#EDEDED] text-black font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* ALWAYS-VISIBLE FIXED TOP NAVBAR MATCHING EXACT SPECIFICATION */}
      <header className="fixed top-0 inset-x-0 z-40 p-6 sm:p-10 lg:p-12 flex items-center justify-between pointer-events-none">
        {/* Logo - Double Quote Symbol directly on screen */}
        <Link
          href="/"
          className="pointer-events-auto text-4xl sm:text-5xl font-bold font-serif text-white tracking-tighter hover:opacity-80 transition-opacity drop-shadow-md select-none mix-blend-difference"
          aria-label="Komma Studio Logo"
        >
          ”
        </Link>

        {/* Right Actions: Dark 'Book a call' button with white arrow box & 2 parallel lines */}
        <div
          className={`pointer-events-auto flex items-center gap-5 sm:gap-6 transition-opacity duration-300 ${
            menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <a
            href="https://cal.eu/kommakomma"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-md bg-[#141414] px-4 py-2 text-sm font-medium tracking-tight text-white shadow-md transition-all hover:bg-black hover:scale-[1.02]"
          >
            <span className="text-xs sm:text-sm font-sans font-normal">Book a call</span>
            <span className="flex size-5 items-center justify-center rounded-[3px] bg-white text-black">
              <ArrowRight className="size-3.5 stroke-[2.5]" />
            </span>
          </a>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setMenuOpen(true)
            }}
            className="flex flex-col justify-center gap-[6px] p-2 cursor-pointer hover:opacity-80 transition-opacity mix-blend-difference"
            aria-label="Open Navigation Menu"
          >
            <span className="w-7 h-[2px] bg-white rounded-full"></span>
            <span className="w-7 h-[2px] bg-white rounded-full"></span>
          </button>
        </div>
      </header>

      {/* FIXED SIDE MENU PANEL */}
      <div
        className={`fixed top-0 right-0 h-screen bg-[#EDEDED] text-black z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          menuOpen
            ? "w-[300px] sm:w-[360px] md:w-[400px] opacity-100 pointer-events-auto shadow-2xl"
            : "w-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-[300px] sm:w-[360px] md:w-[400px] h-full p-8 sm:p-10 flex flex-col justify-between">
          {/* Drawer Top Header with X Close */}
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-black hover:opacity-60 transition-opacity p-1 cursor-pointer"
              aria-label="Close Navigation Menu"
            >
              <X className="size-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Menu Items List */}
          <div className="flex flex-col gap-2 my-auto">
            {navItems.map((item) => {
              const isActive = activeTab === item.name
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.name)}
                  className={`text-left text-3xl sm:text-4xl font-sans tracking-tight transition-all px-4 py-2 cursor-pointer ${
                    isActive
                      ? "bg-[#E54838] text-white font-normal"
                      : "text-black hover:opacity-60 font-normal"
                  }`}
                >
                  {item.name}
                </button>
              )
            })}
          </div>

          {/* Drawer Footer Details */}
          <div className="border-t border-black/15 pt-6 grid grid-cols-2 gap-4 text-left">
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

      {/* MAIN SITE CANVAS CONTAINER */}
      <main
        className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#0a0f0a] text-white ${
          menuOpen
            ? "mr-[300px] sm:mr-[360px] md:mr-[400px] my-3.5 ml-3.5 rounded-[20px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-white/20 overflow-hidden cursor-pointer"
            : "mr-0 my-0 ml-0 rounded-none shadow-none border-transparent"
        }`}
        onClick={() => menuOpen && setMenuOpen(false)}
      >
        {/* SECTION 1: HERO CAROUSEL */}
        <section id="home" className="relative h-screen w-full flex flex-col justify-between overflow-hidden">
          
          {/* Background Images with Fading Transition */}
          <div className="absolute inset-0 z-0">
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
                  className="object-cover object-center brightness-[0.75] contrast-[1.1]"
                />
              </div>
            ))}
            
            {/* Center Floating Poster Card (for Merla) */}
            {activeProject.posterImage && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[220px] sm:w-[280px] md:w-[320px] lg:w-[350px] aspect-[3/4] rounded-lg overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02] border border-white/10">
                <Image
                  src={activeProject.posterImage}
                  alt={`${activeProject.title} Poster`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Overlays */}
            <div className="absolute inset-0 bg-radial from-transparent via-black/25 to-black/80 pointer-events-none z-15" />
            <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none z-15" />
            <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-15" />
          </div>

          {/* Hero Content Overlay */}
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
                <span>VIEW PROJECT</span>
                <span className="inline-flex items-center justify-center size-5 rounded-md border border-white/30 text-[10px] group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight className="size-3" />
                </span>
              </button>
            </div>

            {/* Bottom Headline & 5s Animated Progress Controls */}
            <footer className="grid grid-cols-1 md:grid-cols-12 items-end gap-6 w-full pt-4">
              <div className="md:col-span-8 lg:col-span-7">
                <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-snug tracking-tight text-white/95 max-w-2xl font-sans drop-shadow-md">
                  {activeProject.headline}
                </p>
              </div>

              <div className="md:col-span-4 lg:col-span-5 flex items-center justify-between md:justify-end gap-6">
                <div className="flex items-center gap-4">
                  {/* Smooth 5-Second Progress Line */}
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
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </footer>

          </div>
        </section>

        {/* SECTION 2: INTRO / ABOUT */}
        <section id="studio" className="bg-[#EDEDED] text-black px-6 sm:px-12 py-24 md:py-32">
          <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight leading-[1.1] max-w-4xl">
              You <span className="font-serif italic">quote</span> We only design what’s important.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-8 border-t border-black/15 text-lg sm:text-xl font-light leading-relaxed text-black/80">
              <p>
                Komma Komma is a product design and web-experience studio run by Oliver & Freyr. We make visual identities, websites, and campaigns for people who care how their work is seen.
              </p>
              <p>
                We work with founders and creative teams who have outgrown the template and want a presence that feels bespoke, shaped around the brand.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: FEATURED PROJECTS */}
        <section id="work" className="bg-[#E5E3DD] text-black px-6 sm:px-12 py-24 md:py-32">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="flex items-center justify-between border-b border-black/15 pb-6">
              <h3 className="text-2xl sm:text-3xl font-mono uppercase tracking-wider text-black/60">Featured Projects</h3>
              <span className="text-xs font-mono text-black/40">01 / 05</span>
            </div>

            <div className="divide-y divide-black/15">
              {[
                { name: "Merla", category: "Retail & RFID", year: "2026" },
                { name: "Hanna Stína", category: "Architecture & Interior", year: "2026" },
                { name: "Dagens", category: "Editorial & Media", year: "2025" },
                { name: "Tölum Íslensku", category: "Campaign & Pin", year: "2025" },
                { name: "Perla", category: "Brand Identity", year: "2024" },
              ].map((proj, idx) => (
                <div
                  key={idx}
                  className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-pointer transition-colors hover:px-4 hover:bg-black/5 rounded-lg"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-xs font-mono text-black/40">(0{idx + 1})</span>
                    <h4 className="text-3xl sm:text-5xl font-sans font-normal tracking-tight group-hover:translate-x-2 transition-transform">
                      {proj.name}
                    </h4>
                  </div>

                  <div className="flex items-center gap-6 text-sm font-mono text-black/60">
                    <span>{proj.category}</span>
                    <span>{proj.year}</span>
                    <ArrowUpRight className="size-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: CAPABILITIES & TESTIMONIAL */}
        <section className="bg-[#EDEDED] text-black px-6 sm:px-12 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Capabilities List */}
            <div className="lg:col-span-6 space-y-8">
              <p className="text-xs font-mono uppercase tracking-widest text-black/40">Where we can add value</p>
              <div className="space-y-4">
                {[
                  "Brand Strategy",
                  "Brand Identity",
                  "Brand Presence",
                  "Website Design",
                  "Website Development",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-3 border-b border-black/10">
                    <span className="text-xs font-mono text-black/40">(0{idx + 1})</span>
                    <span className="text-2xl sm:text-3xl font-sans font-light tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="lg:col-span-6 bg-[#E0DED7] p-8 sm:p-12 rounded-2xl space-y-8 shadow-sm">
              <p className="text-xl sm:text-2xl font-light leading-relaxed text-black/90">
                “We have worked with Komma Komma on a couple of projects now, and somehow they always delivered beyond what we expected. They are consistent, easy to work with, and have great attention to detail.”
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-black/10">
                <div className="size-12 rounded-full bg-black/10 overflow-hidden relative">
                  <Image
                    src="/images/project_hanna_bg.png"
                    alt="Kristín Eva Ólafsdóttir"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-sm">Kristín Eva Ólafsdóttir</h5>
                  <p className="text-xs font-mono text-black/50">CEO at Geysir</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5: CTA / LET'S TALK */}
        <section id="contact" className="bg-[#18181B] text-white px-6 sm:px-12 py-28 md:py-36 relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
            <div className="space-y-6">
              <h3 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight">
                Do you have a project in mind?
              </h3>
              <a
                href="https://cal.eu/kommakomma"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-lg text-sm font-mono uppercase tracking-wider font-semibold transition-all hover:bg-white/90 hover:scale-105"
              >
                <span>Let's talk</span>
                <ArrowRight className="size-4" />
              </a>
            </div>

            {/* Decorative Vector Graphic */}
            <div className="size-48 md:size-64 opacity-20 font-serif text-[180px] leading-none select-none flex items-center justify-center">
              ”
            </div>
          </div>
        </section>

        {/* SECTION 6: FOOTER */}
        <footer className="bg-[#0D0D0E] text-white/70 px-6 sm:px-12 pt-20 pb-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto space-y-16">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono">
              <div>
                <p className="uppercase text-white/40 mb-3">Contact Info</p>
                <div className="space-y-1 text-white/80">
                  <p>hello@kommakomma.is</p>
                  <p>Book a call</p>
                </div>
              </div>

              <div>
                <p className="uppercase text-white/40 mb-3">Navigation</p>
                <div className="space-y-1 text-white/80">
                  <button onClick={() => scrollToSection("#home", "Home")} className="block hover:text-white">HOME</button>
                  <button onClick={() => scrollToSection("#work", "Work")} className="block hover:text-white">WORK</button>
                  <button onClick={() => scrollToSection("#studio", "Studio")} className="block hover:text-white">STUDIO</button>
                  <button onClick={() => scrollToSection("#contact", "Contact")} className="block hover:text-white">CONTACT</button>
                </div>
              </div>

              <div>
                <p className="uppercase text-white/40 mb-3">Studio</p>
                <div className="space-y-1 text-white/80">
                  <p>Reykjavík, IS</p>
                  <p>17:23 GMT</p>
                  <p>64.1470° N, 21.9408° W</p>
                </div>
              </div>

              <div>
                <p className="uppercase text-white/40 mb-3">Privacy Policy</p>
                <div className="space-y-1 text-white/80">
                  <p>Copyright © 2026 Komma Komma</p>
                  <p>Terms of use</p>
                </div>
              </div>
            </div>

            {/* Massive Bottom Typography */}
            <div className="pt-8 border-t border-white/10 text-center">
              <h1 className="text-6xl sm:text-9xl md:text-[140px] font-sans font-bold tracking-tighter text-white/90 select-none leading-none">
                KOMMA KOMMA
              </h1>
            </div>

          </div>
        </footer>

      </main>

    </div>
  )
}
