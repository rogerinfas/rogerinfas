import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function ContactCard() {
  return (
    <div className="py-16 border-t border-b border-border space-y-12 text-center md:text-left">
      <div className="flex items-center justify-between border-b border-border/40 pb-4">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-foreground/50">[ 05 / CONTACTO & COLABORACIÓN ]</span>
        <span className="text-xs uppercase tracking-widest text-foreground/40 font-mono">ENVIAR CORREO</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8 space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading tracking-tight uppercase leading-none">
            ¿LISTO PARA INICIAR <br />
            <span className="font-serif italic font-normal text-foreground/80">UN NUEVO PROYECTO?</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-xl">
            Disponible para integrar equipos de alto rendimiento, liderar desarrollo backend y construir soluciones B2B a medida.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col md:items-end justify-end space-y-4">
          <Link
            className="inline-flex items-center justify-center gap-3 bg-main text-main-foreground rounded-full px-10 py-5 text-sm font-semibold uppercase tracking-widest transition-all hover:opacity-90 hover:scale-105 w-full md:w-auto"
            href="mailto:contactorogeris@gmail.com"
          >
            contactorogeris@gmail.com <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}
