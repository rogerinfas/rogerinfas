import Link from "next/link"
import { Mail } from "lucide-react"

export default function ContactCard() {
  return (
    <Link 
      href="mailto:contactorogeris@gmail.com" 
      className="lg:col-span-1 bg-foreground text-background rounded-base p-6 shadow-shadow flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02] cursor-pointer group"
    >
      <Mail className="size-12 mb-4 group-hover:scale-110 transition-transform" />
      <h3 className="text-2xl font-heading tracking-tight mb-2">¿Interesado en mi perfil?</h3>
      <p className="text-sm opacity-80">Envíame un correo para discutir oportunidades B2B y roles Senior.</p>
    </Link>
  )
}
