import HeroCard from "@/components/portfolio/hero-card"
import BackendCard from "@/components/portfolio/backend-card"
import FrontendCard from "@/components/portfolio/frontend-card"
import MarqueeCard from "@/components/portfolio/marquee-card"
import TechStackCard from "@/components/portfolio/tech-stack-card"
import ContactCard from "@/components/portfolio/contact-card"
import ExperienceCard from "@/components/portfolio/experience-card"
import ProjectsCard from "@/components/portfolio/projects-card"
import EducationCard from "@/components/portfolio/education-card"
import Footer from "@/components/portfolio/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-base selection:bg-main selection:text-main-foreground pb-24">
      {/* Spacer for fixed Navbar */}
      <div className="h-[100px]"></div>

      <main className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-28">
        {/* 1. Hero / Header Section */}
        <HeroCard />

        {/* 2. Marquee Banner */}
        <MarqueeCard />

        {/* 3. Section 01: Habilidades & Dominio Técnico */}
        <section id="skills" className="space-y-12">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-foreground/50">[ 01 / DOMINIO TÉCNICO ]</span>
            <span className="text-xs uppercase tracking-widest text-foreground/40 font-mono">HABILIDADES</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BackendCard />
            <FrontendCard />
            <TechStackCard />
          </div>
        </section>

        {/* 4. Section 02: Proyectos Destacados */}
        <section id="projects" className="space-y-12">
          <ProjectsCard />
        </section>

        {/* 5. Section 03: Trayectoria Profesional */}
        <section id="experience" className="space-y-12">
          <ExperienceCard />
        </section>

        {/* 6. Section 04: Educación & Certificaciones */}
        <section className="space-y-12">
          <EducationCard />
        </section>

        {/* 7. Section 05: Contacto */}
        <section id="contact">
          <ContactCard />
        </section>
      </main>

      <Footer />
    </div>
  )
}
