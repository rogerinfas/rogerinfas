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
    <div className="min-h-screen bg-background text-foreground font-base selection:bg-main selection:text-main-foreground pb-20">
      {/* Navbar area spacing */}
      <div className="h-[100px]"></div>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          <HeroCard />
          <BackendCard />
          <FrontendCard />
          <MarqueeCard />
          <TechStackCard />
          <ContactCard />
          <ExperienceCard />
          <ProjectsCard />
          <EducationCard />
        </div>
      </main>

      <Footer />
    </div>
  )
}
