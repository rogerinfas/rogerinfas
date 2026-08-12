"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Home")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const [activeProjectIdx, setActiveProjectIdx] = useState(0)
  const [expandedCapability, setExpandedCapability] = useState(0)
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // Listen to window scroll position for 60fps Parallax effects across the page
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      id: "merla",
      title: "MERLA",
      year: "2026",
      subtitle: "FEATURED PROJECT",
      bgImage: "/images/project_merla_bg.png",
      posterImage: "/images/merla_poster_card.png",
      description:
        "An RFID platform that counts a warehouse in seconds instead of days, with the brand and site to match.",
      headline:
        "Komma Komma is a product design & web-experience creative studio created for brands that refuse to blend in.",
    },
    {
      id: "hanna-stina",
      title: "HANNA STÍNA",
      year: "2026",
      subtitle: "FEATURED PROJECT",
      bgImage: "/images/project_hanna_bg.png",
      posterImage: "/images/project_hanna_bg.png",
      description:
        "An image-led portfolio for interior architect Hanna Stína, built around large photography and room to breathe.",
      headline:
        "An image-led portfolio for interior architect Hanna Stína, built around large photography and room to breathe.",
    },
    {
      id: "tolum-islensku",
      title: "TÖLUM ÍSLENSKU",
      year: "2026",
      subtitle: "FEATURED PROJECT",
      bgImage: "/images/project_tolum_bg.png",
      posterImage: "/images/project_tolum_bg.png",
      description:
        "A pin campaign that gives Icelandic learners a visible way to ask for the conversation they are trying to have.",
      headline:
        "A pin campaign that gives Icelandic learners a visible way to ask for the conversation they are trying to have.",
    },
    {
      id: "dagens",
      title: "DAGENS",
      year: "2025",
      subtitle: "FEATURED PROJECT",
      bgImage: "/images/dark_forest_bg.png",
      posterImage: "/images/dark_forest_bg.png",
      description:
        "A modern editorial publication platform designed for deep reading and rich visual stories.",
      headline:
        "A modern editorial publication platform designed for deep reading and rich visual stories.",
    },
    {
      id: "perla",
      title: "PERLA",
      year: "2024",
      subtitle: "FEATURED PROJECT",
      bgImage: "/images/project_merla_bg.png",
      posterImage: "/images/merla_poster_card.png",
      description:
        "Comprehensive brand identity and digital presence for premium sustainable goods.",
      headline:
        "Comprehensive brand identity and digital presence for premium sustainable goods.",
    },
  ]

  const capabilities = [
    {
      number: "(01)",
      title: "Brand Strategy",
      description:
        "Before anything visual, we work out what the brand stands for and who it is actually talking to. Skip this part and the design becomes decoration with nothing underneath it.",
      image: "/images/merla_poster_card.png",
    },
    {
      number: "(02)",
      title: "Brand Identity",
      description:
        "We build cohesive visual systems, logo suites, typography, color palettes, and comprehensive guidelines that give your brand a distinct voice.",
      image: "/images/project_hanna_bg.png",
    },
    {
      number: "(03)",
      title: "Brand Presence",
      description:
        "From digital campaigns to social direction and physical touchpoints, we ensure your brand delivers a consistent, memorable impression.",
      image: "/images/project_tolum_bg.png",
    },
    {
      number: "(04)",
      title: "Website Design",
      description:
        "Art directed, typography-first web layouts tailored around your content, created to engage visitors and express brand personality.",
      image: "/images/dark_forest_bg.png",
    },
    {
      number: "(05)",
      title: "Website Development",
      description:
        "Custom, high-performance web engineering with Next.js, smooth animations, responsive interfaces, and seamless content systems.",
      image: "/images/project_merla_bg.png",
    },
  ]

  const testimonials = [
    {
      quote:
        "We have worked with Komma Komma on a couple of projects now, and somehow they always delivered beyond what we expected. They are consistent, easy to work with, and have great attention to detail.",
      name: "Kristín Eva Ólafsdóttir",
      role: "CEO at Gagarin",
    },
    {
      quote:
        "Their approach to editorial web design and brand strategy gave our company a presence that truly stands out in our industry.",
      name: "Oliver Jónsson",
      role: "Founder at Merla",
    },
    {
      quote:
        "Working with the team was an absolute delight. They translated complex ideas into an elegant, intuitive experience.",
      name: "Hanna Stína",
      role: "Lead Architect",
    },
  ]

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "Studio", href: "#studio" },
    { name: "Contact", href: "#contact" },
  ]

  // 5-Second Auto-play Timer for Hero Carousel
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
    <div className="relative min-h-screen w-full bg-[#F4F4F0] text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* ALWAYS-VISIBLE FIXED TOP NAVBAR MATCHING ASTRO COMPONENT HTML SPECIFICATION */}
      <header className="fixed top-0 inset-x-0 z-40 p-6 sm:p-10 lg:p-12 flex items-center justify-between pointer-events-none">
        {/* Logo - Double Quote Symbol directly on screen */}
        <Link
          href="/"
          className="pointer-events-auto text-4xl sm:text-5xl font-bold font-serif text-white tracking-tighter hover:opacity-80 transition-opacity drop-shadow-md select-none mix-blend-difference"
          aria-label="Komma Komma home"
        >
          ”
        </Link>

        {/* Right Actions: Dark 'Book a call' button with exact Astro SVG arrow & 2 parallel lines */}
        <div
          className={`pointer-events-auto flex items-center gap-5 sm:gap-6 transition-opacity duration-300 ${
            menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <a
            href="https://cal.eu/kommakomma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-md bg-[#141414] px-4 py-2 text-sm font-medium tracking-tight text-white shadow-md transition-all hover:bg-black hover:scale-[1.02] group"
          >
            <span className="text-xs sm:text-sm font-sans font-normal">Book a call</span>
            <span className="flex size-5 items-center justify-center rounded-[3px] bg-white text-black p-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="size-3.5 fill-black transition-transform group-hover:translate-x-0.5"
              >
                <path
                  d="M10.685 3.42h3.776l7.862 8.583-7.862 8.583h-3.776l7.083-7.193h-16.1v-2.748H17.8L10.685 3.42Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setMenuOpen(true)
            }}
            className="flex flex-col justify-center gap-[6px] p-2 cursor-pointer hover:opacity-80 transition-opacity mix-blend-difference"
            aria-label="open menu"
          >
            <span className="w-7 h-[2px] bg-white rounded-full"></span>
            <span className="w-7 h-[2px] bg-white rounded-full"></span>
          </button>
        </div>
      </header>

      {/* FIXED SIDE MENU PANEL */}
      <div
        className={`fixed top-0 right-0 h-screen bg-[#F4F4F0] text-black z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          menuOpen
            ? "w-[300px] sm:w-[360px] md:w-[400px] opacity-100 pointer-events-auto shadow-2xl"
            : "w-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-[300px] sm:w-[360px] md:w-[400px] h-full p-8 sm:p-10 flex flex-col justify-between">
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-black hover:opacity-60 transition-opacity p-1 cursor-pointer"
              aria-label="Close Navigation Menu"
            >
              <X className="size-6 stroke-[1.5]" />
            </button>
          </div>

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
        {/* SECTION 1: HERO CAROUSEL WITH PARALLAX BACKGROUND */}
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
                <span>VIEW PROJECT</span>
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
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </footer>

          </div>
        </section>

        {/* SECTION 2: INTRO / STUDIO SECTION WITH NATURE PARALLAX BACKGROUND */}
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
                what’s important.
              </h2>
            </div>

            {/* Two Paragraph Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pt-8 border-t border-black/15 text-base sm:text-lg font-light leading-relaxed text-black/80">
              <p>
                Komma Komma is a product design and web-experience studio run by Oliver & Freyr. We make visual identities, websites, and campaigns for people who care how their work is seen.
              </p>
              <p>
                We work with founders and creative teams who have outgrown the template and want a presence that feels bespoke, shaped around the brand.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 3: FEATURED PROJECTS WITH PARALLAX IMAGE STACK */}
        <section id="work" className="relative bg-[#EBEBE6] text-black px-6 sm:px-12 md:px-16 py-24 md:py-32 overflow-hidden">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <h3 className="text-4xl sm:text-6xl font-sans font-light tracking-tight">
              Featured Projects
            </h3>

            {/* 2-Column Split Layout: Left Floating Parallax Card + Right Project List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
              
              {/* Left Column: Interactive Project Preview Card with Parallax Image Shift */}
              <div className="lg:col-span-5 sticky top-28">
                <div className="bg-[#141414] text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 transition-all duration-500">
                  
                  {/* Poster Image Container with Internal Parallax Shift */}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/40">
                    <div
                      className="absolute inset-0 will-change-transform scale-110"
                      style={{
                        transform: `translate3d(0, ${(scrollY - 1200) * 0.08}px, 0)`,
                      }}
                    >
                      <Image
                        src={projects[activeProjectIdx].posterImage || projects[activeProjectIdx].bgImage}
                        alt={projects[activeProjectIdx].title}
                        fill
                        className="object-cover transition-all duration-500"
                      />
                    </div>
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-black text-[10px] font-mono px-2.5 py-1 rounded-md uppercase font-semibold z-10">
                      {projects[activeProjectIdx].title}
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-sm font-light text-white/80 leading-relaxed">
                    {projects[activeProjectIdx].description}
                  </p>

                  {/* Click to View Button */}
                  <a
                    href={`#${projects[activeProjectIdx].id}`}
                    className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all hover:bg-white/90"
                  >
                    <span>Click to view</span>
                    <ArrowRight className="size-3.5" />
                  </a>

                </div>
              </div>

              {/* Right Column: Interactive Project Names List */}
              <div className="lg:col-span-7 divide-y divide-black/15 border-t border-b border-black/15">
                {projects.map((proj, idx) => {
                  const isSelected = activeProjectIdx === idx
                  return (
                    <div
                      key={proj.id}
                      onClick={() => setActiveProjectIdx(idx)}
                      onMouseEnter={() => setActiveProjectIdx(idx)}
                      className={`py-6 px-4 flex items-center justify-between cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? "bg-black/10 rounded-lg pl-6 translate-x-1"
                          : "hover:bg-black/5 rounded-lg"
                      }`}
                    >
                      <h4 className="text-2xl sm:text-4xl font-sans font-normal tracking-tight">
                        {proj.title}
                      </h4>
                      <div className="flex items-center gap-4 text-xs font-mono text-black/60">
                        <span>{proj.year}</span>
                        <ArrowUpRight className={`size-4 transition-transform ${isSelected ? "opacity-100 translate-x-0.5 -translate-y-0.5" : "opacity-40"}`} />
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>

            {/* VERTICAL PARALLAX IMAGE CAROUSEL / GALLERY STACK */}
            <div className="pt-16 space-y-16">
              <p className="text-xs font-mono uppercase tracking-widest text-black/50">Project Gallery Stack</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.slice(0, 4).map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-black/10 group cursor-pointer"
                  >
                    {/* Parallax Image inside Card */}
                    <div
                      className="absolute inset-[-15%] will-change-transform"
                      style={{
                        transform: `translate3d(0, ${(scrollY - 1600 - idx * 200) * 0.12}px, 0) scale(1.05)`,
                      }}
                    >
                      <Image
                        src={proj.bgImage}
                        alt={proj.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Card Gradient & Metadata Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white z-10">
                      <span className="text-[10px] font-mono uppercase tracking-widest opacity-80">{proj.year}</span>
                      <h4 className="text-2xl sm:text-3xl font-sans font-medium tracking-tight">{proj.title}</h4>
                      <p className="text-xs font-light opacity-90 line-clamp-2 mt-1">{proj.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: CAPABILITIES ACCORDION & PARALLAX FLOATING ASSET CARD */}
        <section id="capabilities" className="bg-[#F4F4F0] text-black px-6 sm:px-12 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Section Tag */}
            <p className="text-xs font-mono uppercase tracking-widest text-black/50 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-black inline-block"></span>
              <span>Where we can add value</span>
            </p>

            {/* 2-Column Split: Interactive Accordion + Floating Parallax Asset Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Expandable Accordion */}
              <div className="lg:col-span-7 divide-y divide-black/15 border-t border-b border-black/15">
                {capabilities.map((cap, idx) => {
                  const isExpanded = expandedCapability === idx
                  return (
                    <div
                      key={idx}
                      onClick={() => setExpandedCapability(idx)}
                      className="py-6 cursor-pointer group transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-black/40">{cap.number}</span>
                        <h4 className={`text-2xl sm:text-4xl font-sans tracking-tight transition-colors ${
                          isExpanded ? "font-normal text-black" : "font-light text-black/70 group-hover:text-black"
                        }`}>
                          {cap.title}
                        </h4>
                      </div>

                      {/* Expandable Paragraph Description */}
                      {isExpanded && (
                        <div className="pl-10 pt-4 max-w-xl animate-fadeIn">
                          <p className="text-sm sm:text-base font-light leading-relaxed text-black/75">
                            {cap.description}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Right Column: Floating Parallax Asset Preview Image */}
              <div className="lg:col-span-5 sticky top-28">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/10 shadow-lg border border-black/10 transition-all duration-500">
                  <div
                    className="absolute inset-[-10%] will-change-transform"
                    style={{
                      transform: `translate3d(0, ${(scrollY - 2400) * 0.1}px, 0)`,
                    }}
                  >
                    <Image
                      src={capabilities[expandedCapability].image}
                      alt={capabilities[expandedCapability].title}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1.5 rounded-lg uppercase z-10">
                    {capabilities[expandedCapability].title}
                  </div>
                </div>
              </div>

            </div>

            {/* TESTIMONIAL CAROUSEL CARD WITH CONTROLS */}
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
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      onClick={() =>
                        setTestimonialIdx((prev) => (prev + 1) % testimonials.length)
                      }
                      className="size-7 rounded-md border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                  <span>0{testimonialIdx + 1} / 0{testimonials.length}</span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xl sm:text-2xl font-light leading-relaxed text-black/90 max-w-4xl">
                  “{testimonials[testimonialIdx].quote}”
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-black/10">
                  <div className="size-10 rounded-full bg-black/10 overflow-hidden relative">
                    <Image
                      src="/images/project_hanna_bg.png"
                      alt={testimonials[testimonialIdx].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">{testimonials[testimonialIdx].name}</h5>
                    <p className="text-xs font-mono text-black/50">{testimonials[testimonialIdx].role}</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5: CTA / LET'S TALK WITH PARALLAX NATURE BACKGROUND */}
        <section id="contact" className="relative bg-[#141414] text-white px-6 sm:px-12 md:px-16 py-28 md:py-36 overflow-hidden">
          
          {/* Nature Background Image Parallax Layer */}
          <div
            className="absolute inset-0 opacity-30 z-0 pointer-events-none will-change-transform scale-110"
            style={{
              transform: `translate3d(0, ${(scrollY - 3000) * 0.22}px, 0)`,
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
                <span>Let's talk</span>
                <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="size-48 md:size-64 opacity-20 font-serif text-[180px] leading-none select-none flex items-center justify-center">
              ”
            </div>
          </div>
        </section>

        {/* SECTION 6: FOOTER */}
        <footer className="bg-[#0D0D0E] text-white/70 px-6 sm:px-12 md:px-16 pt-20 pb-12 border-t border-white/10 relative z-10">
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
