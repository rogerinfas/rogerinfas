import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function HeroCard() {
  return (
    <div className="md:col-span-2 lg:col-span-2 row-span-2 bg-secondary-background/60 rounded-2xl p-8 sm:p-12 border border-border flex flex-col justify-between transition-all hover:border-foreground/30 relative overflow-hidden group">
      <div>
        <div className="text-xs uppercase tracking-[0.25em] text-foreground/50 font-semibold mb-6">
          [ PORTAFOLIO DE INGENIERÍA ]
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading tracking-tight text-foreground leading-[1.1] mb-6">
          ROGER INFA <br />
          <span className="font-serif italic font-normal text-foreground/80">SÁNCHEZ</span>
        </h1>
        <h2 className="text-lg sm:text-xl font-serif italic text-foreground/70 mb-8 border-l-2 border-foreground/30 pl-4 py-1">
          Ingeniero de Software & Arquitecto de Sistemas Escalables
        </h2>
        <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-lg">
          Más de 3 años de experiencia en el diseño e integración de arquitecturas desacopladas, microservicios y soluciones B2B de alto rendimiento.
        </p>
      </div>

      <div className="mt-10 flex items-center gap-6 flex-wrap">
        <Link
          className="inline-flex items-center gap-3 bg-main text-main-foreground rounded-full px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all hover:opacity-90 hover:scale-105"
          href="#projects"
        >
          Explorar Proyectos <ArrowUpRight size={18} />
        </Link>
        <Link
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/70 hover:text-foreground underline underline-offset-8 transition-colors"
          href="mailto:contactorogeris@gmail.com"
        >
          Contactar Directamente
        </Link>
      </div>
    </div>
  )
}
