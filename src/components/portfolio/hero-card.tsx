import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function HeroCard() {
  return (
    <div className="py-12 border-b border-border space-y-12">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] font-semibold text-foreground/50 border-b border-border/40 pb-4">
        <span>[ ESTUDIO DE INGENIERÍA DE SOFTWARE ]</span>
        <span className="font-mono text-foreground/40">AREQUIPA, PE / REMOTE</span>
      </div>

      <div className="space-y-6">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-heading tracking-tighter text-foreground leading-none">
          ROGER INFA <br />
          <span className="font-serif italic font-normal text-foreground/80">SÁNCHEZ</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 items-end">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-foreground/75 leading-tight">
            Desarrollo de Arquitecturas Escalables, Integración de APIs & Soluciones B2B
          </h2>
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
              Ingeniero de Software con más de 3 años de experiencia especializado en el diseño de microservicios, optimización de bases de datos y desarrollo full-stack de alto rendimiento.
            </p>
            <div className="flex items-center gap-6">
              <Link
                className="inline-flex items-center gap-3 bg-main text-main-foreground rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-all hover:opacity-90 hover:scale-105"
                href="#projects"
              >
                Ver Trabajos Seleccionados <ArrowUpRight size={16} />
              </Link>
              <Link
                className="inline-flex items-center text-xs uppercase tracking-widest text-foreground/70 hover:text-foreground underline underline-offset-8 transition-colors"
                href="mailto:contactorogeris@gmail.com"
              >
                Iniciar Proyecto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
