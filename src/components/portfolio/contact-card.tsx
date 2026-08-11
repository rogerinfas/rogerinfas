import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function ContactCard() {
  return (
    <Link 
      href="mailto:contactorogeris@gmail.com" 
      className="lg:col-span-1 bg-secondary-background/80 rounded-2xl p-8 border border-border flex flex-col justify-between transition-all hover:border-foreground/40 group cursor-pointer"
    >
      <div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-semibold block mb-4">
          [ CONTACTO DIRECTO ]
        </span>
        <h3 className="text-2xl font-serif italic mb-2 group-hover:underline underline-offset-4">¿Iniciamos una colaboración?</h3>
        <p className="text-xs text-foreground/60 leading-relaxed">
          Disponible para roles de Ingeniería Senior y proyectos B2B.
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-foreground/80">
        <span>Enviar mensaje</span>
        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </Link>
  )
}
