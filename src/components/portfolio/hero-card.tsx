import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, Code2 } from "lucide-react"

export default function HeroCard() {
  return (
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
  )
}
