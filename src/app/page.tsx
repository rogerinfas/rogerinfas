import { Marquee } from "@devnomic/marquee"
import { ArrowUpRight, Mail, Github, Linkedin, FileText } from "lucide-react"

import "@/styling/marquee.css"

import Link from "next/link"

import projects from "@/data/reviews"

import HeroComponents from "@/components/app/hero-components"
import { sharedComponents } from "@/components/app/mdx-components"
import Star8 from "@/components/stars/s8"
import Star9 from "@/components/stars/s9"
import Star11 from "@/components/stars/s11"
import Star14 from "@/components/stars/s14"
import Star16 from "@/components/stars/s16"
import Star20 from "@/components/stars/s20"
import Star22 from "@/components/stars/s22"
import Star26 from "@/components/stars/s26"
import Star29 from "@/components/stars/s29"
import Star32 from "@/components/stars/s32"
import Star37 from "@/components/stars/s37"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="text-foreground font-base prose-headings:font-heading prose-h1:2xl:text-6xl prose-h1:xl:text-5xl prose-h1:md:text-5xl prose-h1:sm:text-[33px] prose-h1:text-2xl prose-h2:2xl:text-4xl prose-h2:lg:text-4xl prose-h2:md:text-3xl prose-h2:text-2xl prose-h3:2xl:text-4xl prose-h3:xl:text-3xl prose-h3:lg:text-3xl prose-h3:md:text-2xl prose-h3:sm:text-xl">
      <main id="about" className="relative flex min-h-[100dvh] flex-col overflow-hidden items-center justify-center bg-background px-5 md:py-[200px] py-[100px] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
        <HeroComponents className="xl:-left-[130px] md:-left-[200px] lg:block hidden" />
        <HeroComponents
          className="xl:-right-[130px] md:-right-[200px] lg:block hidden"
          reverse
        />
        <div className="mx-auto w-container max-w-full">
          <div className="flex flex-col items-center text-center">
            <h1 className="leading-normal">
              Hola, soy <br />{" "}
              <span className="relative px-2 sm:mr-2 mr-0 md:[&_svg]:size-[45px] sm:[&_svg]:size-7 bg-main/50 rounded-base border-2 border-border/40 dark:border-border/70">
                Roger Infa Sánchez
                <Star9
                  className="absolute sm:block hidden md:-bottom-4 md:-right-5 -bottom-2.5 -right-2.5"
                  color="var(--main)"
                  pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
                />
                <Star9
                  className="absolute sm:block hidden md:-top-4 md:-left-5 -top-2.5 -left-2.5"
                  color="var(--main)"
                  pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
                />
              </span>{" "}
            </h1>
            <h2 className="mt-5 text-2xl md:text-4xl font-heading">
              Desarrollador de Software
            </h2>

            <p className="leading-snug w-full max-w-2xl mx-auto md:mt-[30px] md:mb-[40px] sm:mt-8 my-6 sm:mb-8 2xl:text-2xl xl:text-xl lg:text-xl md:w-full md:text-xl sm:text-lg text-lg">
              Especializado en integración de APIs, arquitecturas desacopladas y tecnologías modernas.
              Más de 3 años creando soluciones eficientes y escalables.
            </p>

            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                className="flex items-center gap-2.5 w-max text-main-foreground rounded-base border-2 border-border bg-main md:px-10 px-4 md:py-3 py-2 md:text-[22px] text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                href={"#projects"}
              >
                Ver Proyectos
                <ArrowUpRight className="md:size-[30px] size-5" />
              </Link>
              <Link
                className="flex items-center gap-2.5 w-max text-foreground rounded-base border-2 border-border bg-secondary-background dark:bg-background md:px-10 px-4 md:py-3 py-2 md:text-[22px] text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                href={"mailto:contactorogeris@gmail.com"}
              >
                Contactar
                <Mail className="md:size-[30px] size-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <div id="skills">
        <Marquee
          className="border-t-4 border-border md:[&_.animate-marquee-left]:gap-[50px]! [&_.animate-marquee-left]:gap-[35px]! bg-secondary-background md:py-4 py-3"
          direction="left"
        >
          {["NestJS", "Python", "React", "Next.js", "TypeScript", "Docker", "AWS", "PostgreSQL", "MongoDB"].map((tech, id) => {
            return (
              <div
                className="flex items-center md:gap-[50px] gap-[35px] xl:[&_span]:text-3xl md:[&_span]:text-2xl sm:[&_span]:text-xl [&_span]:text-base lg:[&_svg]:size-[50px] md:[&_svg]:size-10 [&_svg]:size-[30px]"
                key={id}
              >
                <span>{tech}</span>
                <Star32 className="text-foreground" />
              </div>
            )
          })}
        </Marquee>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-t-4 border-border">
          <section className="border-b-4 md:border-r-4 border-border md:bg-background 2xl:p-14 2xl:py-16 xl:p-10 xl:py-10 lg:p-8 lg:py-10 p-5 py-7 border-r-0 bg-main md:text-foreground text-main-foreground">
            <div className="flex items-center sm:gap-6 gap-4 sm:mb-6 mb-4">
              <div className="xl:size-[70px] lg:size-[55px] sm:size-12 size-10 flex items-center justify-center">
                <BackendIcon />
              </div>
              <h3>Backend Expert</h3>
            </div>
            <p className="2xl:text-2xl xl:text-xl md:text-base sm:text-lg text-base">
              NestJS, Python (Flask/FastAPI), C#, Java. Arquitecturas limpias y servicios desacoplados.
            </p>
          </section>

          <section className="border-b-4 border-border md:text-main-foreground md:dark:text-main-foreground md:bg-main text-main-foreground dark:text-foreground 2xl:p-14 2xl:py-16 xl:p-10 xl:py-10 lg:p-8 lg:py-10 p-5 py-7 bg-background">
            <div className="flex items-center sm:gap-6 gap-4 sm:mb-6 mb-4">
              <div className="xl:size-[70px] lg:size-[55px] sm:size-12 size-10 flex items-center justify-center">
                <FrontendIcon />
              </div>
              <h3>Frontend Moderno</h3>
            </div>
            <p className="2xl:text-2xl xl:text-xl md:text-base sm:text-lg text-base">
              React.js, Next.js, Vue.js, TailwindCSS. Interfaces dinámicas y experiencias de usuario fluidas.
            </p>
          </section>

          <section className="md:border-r-4 md:border-b-0 border-border bg-main dark:text-main-foreground 2xl:p-14 2xl:py-16 xl:p-10 xl:py-10 lg:p-8 lg:py-10 p-5 py-7 border-b-4">
            <div className="flex items-center sm:gap-6 gap-4 sm:mb-6 mb-4">
              <div className="xl:size-[70px] lg:size-[55px] sm:size-12 size-10 flex items-center justify-center">
                <DatabaseIcon />
              </div>
              <h3>Bases de Datos</h3>
            </div>
            <p className="2xl:text-2xl xl:text-xl md:text-base sm:text-lg text-base">
              SQL (PostgreSQL, MySQL, SQL Server) y NoSQL (MongoDB). Optimización y modelado eficiente.
            </p>
          </section>

          <section className="bg-background 2xl:p-14 2xl:py-16 xl:p-10 xl:py-10 lg:p-8 lg:py-10 p-5 py-7">
            <div className="flex items-center sm:gap-6 gap-4 sm:mb-6 mb-4">
              <div className="xl:size-[70px] lg:size-[55px] sm:size-12 size-10 flex items-center justify-center">
                <CloudIcon />
              </div>
              <h3>Cloud & DevOps</h3>
            </div>
            <p className="2xl:text-2xl xl:text-xl md:text-base sm:text-lg text-base">
              Docker, AWS, Google Cloud. Despliegue continuo y gestión de infraestructura.
            </p>
          </section>
        </div>

        <section id="experience" className="border-b-4 border-b-border bg-background py-16 lg:py-[100px]">
          <h2 className="mb-10 px-5 text-center">
            Experiencia Profesional
          </h2>

          <div className="mx-auto max-w-[900px] px-5 flex flex-col gap-8">
            <div className="border-l-4 border-main pl-6 relative">
              <div className="absolute -left-[11px] top-0 size-5 bg-main rounded-full border-2 border-black"></div>
              <h3 className="text-xl font-bold">ACIDE PERU</h3>
              <p className="text-sm font-bold text-gray-600 mb-2">Oct 2025 – Actualidad | Desarrollador de Software</p>
              <p>Desarrollo de ERPs y CRMs a medida. Implementación de Odoo, Shopify y soluciones Low-Code para PYMEs.</p>
            </div>
            <div className="border-l-4 border-black pl-6 relative">
              <div className="absolute -left-[11px] top-0 size-5 bg-black rounded-full border-2 border-white"></div>
              <h3 className="text-xl font-bold">TechNova Solutions S.A.C.</h3>
              <p className="text-sm font-bold text-gray-600 mb-2">Feb 2025 – Jul 2025 | Desarrollador Backend</p>
              <p>Diseño de APIs seguras con NestJS y WebSockets. Implementación de seguridad JWT y RBAC.</p>
            </div>
            <div className="border-l-4 border-black pl-6 relative">
              <div className="absolute -left-[11px] top-0 size-5 bg-black rounded-full border-2 border-white"></div>
              <h3 className="text-xl font-bold">Floreas Technologies (México)</h3>
              <p className="text-sm font-bold text-gray-600 mb-2">May 2025 – Jul 2025 | Desarrollador Frontend</p>
              <p>Desarrollo de interfaces con Vue.js y TailwindCSS. Colaboración en aplicaciones transaccionales para LATAM.</p>
            </div>
            <div className="border-l-4 border-black pl-6 relative">
              <div className="absolute -left-[11px] top-0 size-5 bg-black rounded-full border-2 border-white"></div>
              <h3 className="text-xl font-bold">MF Gastronomía y Calidad</h3>
              <p className="text-sm font-bold text-gray-600 mb-2">May 2024 – Feb 2025 | Asistente de TI</p>
              <p>Mantenimiento web y automatización de pedidos mediante scripts personalizados.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="inset-0 flex relative overflow-hidden w-full px-5 flex-col items-center justify-center bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] z-0">
          <Star20
            color="var(--main)"
            stroke="black"
            strokeWidth={3}
            size={250}
            className="absolute top-[120px] lg:block hidden -left-[125px] -z-10"
          />
          <div className="mx-auto w-container max-w-full py-16 lg:py-[100px]">
            <h2 className="sm:mb-20 mb-14 text-center">
              Proyectos Destacados
            </h2>
            <div className="grid-cols-1 grid lg:grid-cols-2 gap-0 lg:gap-8">
              {projects.map((project, index) => (
                <div key={index} className="min-h-20 w-full mx-auto mb-4 lg:min-h-48 lg:mb-0 rounded-base border-2 border-border bg-background p-5 shadow-shadow">
                  <div className="flex items-center sm:gap-5 gap-3">
                    <div className="p-2 bg-main border-2 border-black rounded-base">
                      <FileText className="size-6 text-main-foreground" />
                    </div>
                    <div>
                      <h4 className="sm:text-lg text-base font-heading">
                        {project.fullName}
                      </h4>
                      <p className="text-xs sm:text-sm font-bold opacity-70">{project.jobTitle}</p>
                    </div>
                  </div>
                  <div className="sm:mt-5 mt-3 sm:text-base text-sm break-words">
                    {project.review}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t-4 z-0 border-t-border border-b-4 border-b-border bg-background py-16 lg:py-[100px]">
          <h2 className="sm:mb-20 mb-14 px-5 text-center">
            Educación y Certificaciones
          </h2>

          <div className="mx-auto not-prose grid w-[700px] max-w-full px-5">
            <Accordion
              className="text-base sm:text-lg"
              type="single"
              collapsible
            >
              <AccordionItem className="mb-2" value="edu-1">
                <AccordionTrigger className="text-left font-bold">
                  Universidad La Salle (2021 - Presente)
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  Ingeniería de Software. Desarrollando tesis sobre transporte urbano con Flutter y Geolocalización.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="mb-2" value="cert-1">
                <AccordionTrigger className="text-left font-bold">
                  Certificaciones Udemy & Cisco
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  - Flask y MySQL – Proyecto Web Completo (2025)<br />
                  - APIs RESTful con Python, FastAPI y JWT (2025)<br />
                  - Cisco Networking Academy (2022)
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="contact" className="inset-0 w-full flex flex-col items-center justify-center bg-main  bg-[linear-gradient(to_right,#00000033_1px,transparent_1px),linear-gradient(to_bottom,#00000033_1px,transparent_1px)] bg-[size:70px_70px] px-5 lg:py-[200px] md:py-[150px] sm:py-[100px] py-[100px]">
          <h2 className="text-center font-heading not-prose 2xl:text-5xl xl:text-5xl md:text-4xl sm:text-3xl text-[22px] text-main-foreground mb-12">
            ¿Listo para trabajar juntos?
          </h2>

          <div className="flex gap-4">
            <Link
              className="flex items-center gap-2.5 w-max text-foreground rounded-base border-2 border-border bg-background md:px-10 px-4 md:py-3 py-2 md:text-[22px] text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              href={"mailto:contactorogeris@gmail.com"}
            >
              Envíame un correo
              <Mail className="md:size-[30px] size-5" />
            </Link>
          </div>
        </section>
      </div>
      <footer className="z-30 border-t-4 border-border bg-secondary-background px-5 py-5 text-center sm:text-base text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/rogerinfas" target="_blank" className="hover:text-main transition-colors"><Github /></a>
          <a href="https://linkedin.com/in/roger-infa-sanchez" target="_blank" className="hover:text-main transition-colors"><Linkedin /></a>
        </div>
        &copy; {new Date().getFullYear()} Roger Infa Sánchez. Todos los derechos reservados.
      </footer>
    </div>
  )
}

const BackendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
)

const FrontendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
)

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s 9-1.34 9-3V5"></path>
  </svg>
)

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
)
