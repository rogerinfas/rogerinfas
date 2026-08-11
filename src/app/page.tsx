import { Marquee } from "@devnomic/marquee"
import { ArrowUpRight, Mail, Github, Linkedin, FileText, Code2, Server, Database, Cloud } from "lucide-react"

import "@/styling/marquee.css"

import Link from "next/link"
import projects from "@/data/reviews"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-base selection:bg-main selection:text-main-foreground pb-20">
      
      {/* Navbar area placeholder for spacing since layout has a fixed Navbar */}
      <div className="h-[100px]"></div>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* 1. Hero / Profile Card (Large, spans 2x2) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 bg-secondary-background rounded-base p-8 sm:p-10 shadow-shadow flex flex-col justify-between border border-border transition-transform hover:-translate-y-1 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <Code2 size={200} />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight text-foreground mb-4">
                Roger Infa Sánchez
              </h1>
              <h2 className="text-xl sm:text-2xl font-heading text-[#9A7B56] dark:text-[#D4C5B0] mb-6 uppercase tracking-wider">
                Ingeniero de Software
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-md">
                Más de 3 años de experiencia en el diseño de arquitecturas escalables, integración de sistemas complejos y creación de soluciones empresariales B2B. Orientado al alto rendimiento y código limpio.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Link
                className="inline-flex items-center gap-2 bg-main text-main-foreground rounded-full px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                href="#projects"
              >
                Ver Proyectos <ArrowUpRight size={20} />
              </Link>
              <Link
                className="inline-flex items-center justify-center size-12 bg-foreground text-background rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                href="https://github.com/rogerinfas"
                target="_blank"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                className="inline-flex items-center justify-center size-12 bg-[#0077b5] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                href="https://linkedin.com/in/roger-infa-sanchez"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* 2. Backend Card */}
          <div className="bg-secondary-background rounded-base p-6 shadow-shadow border border-border flex flex-col transition-transform hover:-translate-y-1">
            <div className="size-12 bg-background rounded-2xl flex items-center justify-center mb-4">
              <Server className="text-foreground size-6" />
            </div>
            <h3 className="text-xl font-heading mb-2">Desarrollo Backend Avanzado</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              NestJS, Python (Flask/FastAPI), C#, Java. Microservicios y APIs RESTful seguras.
            </p>
          </div>

          {/* 3. Frontend Card */}
          <div className="bg-secondary-background rounded-base p-6 shadow-shadow border border-border flex flex-col transition-transform hover:-translate-y-1">
            <div className="size-12 bg-background rounded-2xl flex items-center justify-center mb-4">
              <Code2 className="text-foreground size-6" />
            </div>
            <h3 className="text-xl font-heading mb-2">Arquitectura Frontend</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              React.js, Next.js, Vue.js. Interfaces escalables, de alto rendimiento y accesibles.
            </p>
          </div>

          {/* 4. Marquee Tech Stack (Spans 2 cols on Desktop) */}
          <div className="md:col-span-3 lg:col-span-2 bg-main text-main-foreground rounded-base shadow-shadow flex flex-col justify-center overflow-hidden border border-border/20 transition-transform hover:-translate-y-1 relative min-h-[180px]">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
             <Marquee
                className="md:[&_.animate-marquee-left]:gap-12 [&_.animate-marquee-left]:gap-8 py-4"
                direction="left"
              >
                {["NestJS", "Python", "React", "Next.js", "TypeScript", "Docker", "AWS", "PostgreSQL", "MongoDB"].map((tech, id) => (
                  <span key={id} className="text-3xl md:text-4xl font-heading tracking-tighter opacity-90">{tech}</span>
                ))}
              </Marquee>
          </div>

          {/* 5. Cloud & DB Stack */}
          <div className="lg:col-span-1 bg-secondary-background rounded-base p-6 shadow-shadow border border-border flex flex-col gap-6 justify-center transition-transform hover:-translate-y-1">
             <div className="flex gap-4 items-start">
               <Database className="text-foreground size-8 shrink-0" />
               <div>
                  <h4 className="font-heading text-lg">Bases de Datos</h4>
                  <p className="text-xs text-foreground/70">PostgreSQL, SQL Server, MongoDB.</p>
               </div>
             </div>
             <div className="flex gap-4 items-start">
               <Cloud className="text-foreground size-8 shrink-0" />
               <div>
                  <h4 className="font-heading text-lg">Cloud & DevOps</h4>
                  <p className="text-xs text-foreground/70">AWS, Docker, CI/CD pipelines.</p>
               </div>
             </div>
          </div>

          {/* 6. CTA / Contact Card */}
          <Link href="mailto:contactorogeris@gmail.com" className="lg:col-span-1 bg-foreground text-background rounded-base p-6 shadow-shadow flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02] cursor-pointer group">
            <Mail className="size-12 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-heading tracking-tight mb-2">¿Interesado en mi perfil?</h3>
            <p className="text-sm opacity-80">Envíame un correo para discutir oportunidades B2B y roles Senior.</p>
          </Link>

          {/* 7. Experience Card (Spans 2x2) */}
          <div id="experience" className="md:col-span-2 lg:col-span-2 row-span-2 bg-secondary-background rounded-base p-8 sm:p-10 shadow-shadow border border-border flex flex-col">
            <h2 className="text-3xl font-heading mb-8">Experiencia Profesional</h2>
            <div className="flex flex-col gap-8 flex-1 overflow-y-auto pr-2 scrollbar-thin">
              <div className="relative pl-6 border-l-2 border-[#BFA181]/40">
                <div className="absolute -left-[5px] top-1.5 size-2 bg-[#BFA181] rounded-full"></div>
                <h3 className="text-xl font-heading text-foreground">ACIDE PERU</h3>
                <p className="text-xs font-semibold text-main mb-2 uppercase tracking-wide">Oct 2025 – Actualidad | Ingeniero de Software</p>
                <p className="text-sm text-foreground/80 leading-relaxed">Liderazgo técnico en el diseño y desarrollo de ERPs y CRMs. Integración estratégica con Odoo y Shopify, optimizando los procesos operativos para clientes corporativos.</p>
              </div>
              <div className="relative pl-6 border-l-2 border-border">
                <div className="absolute -left-[5px] top-1.5 size-2 bg-border rounded-full"></div>
                <h3 className="text-xl font-heading">TechNova Solutions S.A.C.</h3>
                <p className="text-xs font-semibold text-foreground/50 mb-2 uppercase tracking-wide">Feb 2025 – Jul 2025 | Desarrollador Backend</p>
                <p className="text-sm text-foreground/80 leading-relaxed">Diseño de APIs seguras con NestJS y WebSockets. Implementación de seguridad estricta basada en JWT y RBAC.</p>
              </div>
              <div className="relative pl-6 border-l-2 border-border">
                <div className="absolute -left-[5px] top-1.5 size-2 bg-border rounded-full"></div>
                <h3 className="text-xl font-heading">Floreas Technologies (México)</h3>
                <p className="text-xs font-semibold text-foreground/50 mb-2 uppercase tracking-wide">May 2025 – Jul 2025 | Desarrollador Frontend</p>
                <p className="text-sm text-foreground/80 leading-relaxed">Desarrollo de interfaces con Vue.js y TailwindCSS. Colaboración en aplicaciones transaccionales de alto tráfico para LATAM.</p>
              </div>
            </div>
          </div>

          {/* 8. Projects Card (Spans 2x2) */}
          <div id="projects" className="md:col-span-2 lg:col-span-2 row-span-2 bg-secondary-background rounded-base p-8 sm:p-10 shadow-shadow border border-border flex flex-col">
            <h2 className="text-3xl font-heading mb-8">Proyectos Destacados</h2>
            <div className="grid grid-cols-1 gap-4 flex-1 overflow-y-auto pr-2 scrollbar-thin">
              {projects.map((project, index) => (
                <div key={index} className="bg-background rounded-2xl p-5 border border-border transition-colors hover:border-foreground/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-secondary-background rounded-xl">
                      <FileText className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading leading-none text-foreground">
                        {project.fullName}
                      </h4>
                      <p className="text-xs text-[#9A7B56] dark:text-[#D4C5B0] font-semibold mt-1">{project.jobTitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {project.review}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 9. Education Card (Full width on bottom) */}
          <div className="md:col-span-3 lg:col-span-4 bg-secondary-background rounded-base p-8 sm:p-10 shadow-shadow border border-border flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <h2 className="text-3xl font-heading mb-2">Educación y Certificaciones</h2>
              <p className="text-foreground/70 max-w-xl">Formación académica continua y certificaciones especializadas en desarrollo de software y arquitecturas cloud.</p>
            </div>
            
            <Accordion
              className="w-full md:w-[500px] bg-background rounded-2xl px-6 py-2 border border-border"
              type="single"
              collapsible
            >
              <AccordionItem className="border-b border-border" value="edu-1">
                <AccordionTrigger className="text-left font-heading py-4 text-base hover:text-main">
                  Universidad La Salle (Est. 2021 - Presente)
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/70 pb-4">
                  Ingeniería de Software. Desarrollo de proyecto de tesis enfocado en optimización de rutas de transporte urbano implementando algoritmos de geolocalización.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="border-none" value="cert-1">
                <AccordionTrigger className="text-left font-heading py-4 text-base hover:text-main">
                  Certificaciones Especializadas (Udemy & Cisco)
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/70 pb-4 space-y-2">
                  <p className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-main"></span> Flask y MySQL – Proyecto Web Completo (2025)</p>
                  <p className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-main"></span> APIs RESTful con Python, FastAPI y JWT (2025)</p>
                  <p className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-main"></span> Cisco Networking Academy (2022)</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </main>
      
      <footer className="mt-20 text-center text-sm text-foreground/50">
        <p>&copy; {new Date().getFullYear()} Roger Infa Sánchez. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
