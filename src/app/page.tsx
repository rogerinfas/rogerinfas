"use client"

import { useState, useCallback } from "react"
import { useScrollY } from "@/hooks/use-scroll-y"
import { Header } from "@/components/header"
import { SideMenu } from "@/components/side-menu"
import { HeroSection } from "@/components/sections/hero-section"
import { IntroSection } from "@/components/sections/intro-section"
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section"
import { CapabilitiesSection } from "@/components/sections/capabilities-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CtaSection } from "@/components/sections/cta-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Home")
  const scrollY = useScrollY()

  const scrollToSection = useCallback((href: string, tabName: string) => {
    setActiveTab(tabName)
    setMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-[#F4F4F0] text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      <Header menuOpen={menuOpen} onMenuOpen={() => setMenuOpen(true)} />

      <SideMenu
        menuOpen={menuOpen}
        activeTab={activeTab}
        onClose={() => setMenuOpen(false)}
        onNavigate={scrollToSection}
      />

      {/* MAIN SITE CANVAS CONTAINER */}
      <main
        className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#F4F4F0] text-white ${
          menuOpen
            ? "mr-[300px] sm:mr-[360px] md:mr-[400px] my-3.5 ml-3.5 rounded-[20px] shadow-lg border-none overflow-hidden cursor-pointer"
            : "mr-0 my-0 ml-0 rounded-none shadow-none border-none"
        }`}
        onClick={() => menuOpen && setMenuOpen(false)}
      >
        <HeroSection scrollY={scrollY} />
        <IntroSection scrollY={scrollY} />
        <FeaturedProjectsSection scrollY={scrollY} />

        {/* Capabilities + Testimonials share the same background section wrapper */}
        <section className="bg-[#F4F4F0]">
          <CapabilitiesSection scrollY={scrollY} />
          <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-16 pb-24 md:pb-32">
            <TestimonialsSection />
          </div>
        </section>

        <CtaSection scrollY={scrollY} />
        <FooterSection onNavigate={scrollToSection} />
      </main>

    </div>
  )
}
