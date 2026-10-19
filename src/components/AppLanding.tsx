import { useState, useCallback } from "react"
import { useScrollY } from "@/hooks/use-scroll-y"
import { Header } from "@/components/Header"
import { SideMenu } from "@/components/SideMenu"
import { HeroSection } from "@/components/sections/HeroSection"
import { IntroSection } from "@/components/sections/IntroSection"
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection"
import { ValueSection } from "@/components/sections/ValueSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { CtaSection } from "@/components/sections/CtaSection"
import { FooterSection } from "@/components/sections/FooterSection"
import { ContactModal } from "@/components/ContactModal"
import { Toaster } from "sonner"

export function AppLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Inicio")
  const scrollY = useScrollY()

  const scrollToSection = useCallback((href: string, tabName: string) => {
    setActiveTab(tabName)
    setMenuOpen(false)
    if (href === "#contact") {
      setContactModalOpen(true)
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-[#F4F4F0] text-black font-sans selection:bg-black selection:text-white overflow-x-clip">
      
      <Header
        menuOpen={menuOpen}
        onMenuOpen={() => setMenuOpen(true)}
        onContactClick={() => setContactModalOpen(true)}
      />

      <SideMenu
        menuOpen={menuOpen}
        activeTab={activeTab}
        onClose={() => setMenuOpen(false)}
        onNavigate={scrollToSection}
      />

      {/* MAIN SITE CANVAS CONTAINER */}
      <main
        id="contenido"
        className={`relative transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#F4F4F0] text-white ${
          menuOpen
            ? "mr-[300px] sm:mr-[360px] md:mr-[400px] my-3.5 ml-3.5 rounded-[20px] shadow-lg overflow-hidden cursor-pointer"
            : "mr-0 my-0 ml-0 rounded-none shadow-none"
        }`}
        onClick={() => menuOpen && setMenuOpen(false)}
      >
        <HeroSection scrollY={scrollY} />
        <IntroSection scrollY={scrollY} />
        <FeaturedProjectsSection scrollY={scrollY} />

        {/* Value + Testimonials share the same background section wrapper */}
        <section className="bg-[#F4F4F0]">
          <ValueSection />
          <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-16 pb-24 md:pb-32">
            <TestimonialsSection />
          </div>
        </section>

        <CtaSection scrollY={scrollY} onContactClick={() => setContactModalOpen(true)} />
        <FooterSection onNavigate={scrollToSection} />
      </main>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      <Toaster position="bottom-right" theme="dark" />

    </div>
  )
}
