import { useState } from "react"
import { X, Send, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const PROJECT_TYPES = [
  "Aplicación Web Full-Stack",
  "Arquitectura Backend y APIs",
  "Bases de Datos y Rendimiento",
  "Consultoría / Rol Técnico",
]

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0])
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Por favor completa todos los campos requeridos.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          projectType: selectedType,
          message: message.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "No se pudo enviar el mensaje.")
      }

      setIsSubmitted(true)
      toast.success("¡Mensaje enviado con éxito!", {
        description: "Gracias por escribir. Te responderé a la brevedad.",
      })
    } catch (err: unknown) {
      console.error("Error al enviar formulario:", err)
      const errorMsg = err instanceof Error ? err.message : "Ocurrió un error inesperado al enviar."
      toast.error("Error al enviar", {
        description: errorMsg,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setName("")
    setEmail("")
    setMessage("")
    setIsSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-md transition-all duration-300 animate-in fade-in">
      
      {/* Modal Container */}
      <div
        className="relative w-full max-w-2xl bg-[#141414] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/10 overflow-hidden space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Background Monogram Watermark */}
        <div className="absolute -bottom-10 -right-10 text-[180px] font-mono font-bold opacity-5 pointer-events-none select-none">
          RIS
        </div>

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E54838]">
              Ponte en Contacto
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-light tracking-tight mt-0.5">
              Contactar a Roger Infa Sanchez
            </h3>
          </div>
          <button
            onClick={onClose}
            className="size-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
            aria-label="Cerrar modal de contacto"
          >
            <X className="size-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Modal Body */}
        {isSubmitted ? (
          <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in zoom-in-95">
            <div className="size-16 rounded-full bg-[#E54838]/20 text-[#E54838] flex items-center justify-center">
              <CheckCircle2 className="size-10" />
            </div>
            <h4 className="text-2xl font-sans font-medium">¡Mensaje Enviado con Éxito!</h4>
            <p className="text-sm text-white/70 max-w-md">
              Gracias por escribir, <span className="text-white font-semibold">{name}</span>. He recibido tu mensaje sobre <span className="text-[#E54838] font-mono">{selectedType}</span>. Te responderé lo antes posible.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-white text-black px-6 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white/90 transition-all cursor-pointer"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Project / Opportunity Type Selection */}
            <div>
              <label className="block text-xs font-mono uppercase text-white/50 tracking-wider mb-2">
                ¿Qué deseas construir o consultar?
              </label>
              <div className="flex flex-wrap gap-2">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-all cursor-pointer ${
                      selectedType === type
                        ? "bg-[#E54838] border-[#E54838] text-white font-medium shadow-sm"
                        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-white/50 tracking-wider mb-1.5">
                  Tu Nombre *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Juan Pérez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-white/50 tracking-wider mb-1.5">
                  Tu Correo Electrónico *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="juan@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-white/50 tracking-wider mb-1.5">
                Detalles del Proyecto / Mensaje *
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="Cuéntame sobre tus objetivos, requisitos técnicos o fechas..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors resize-none"
              />
            </div>

            {/* Submit Actions */}
            <div className="flex items-center justify-between pt-2">
              <a
                href={`mailto:contactorogeris@gmail.com?subject=${encodeURIComponent(
                  `[Contacto Portfolio] ${selectedType}`
                )}&body=${encodeURIComponent(message)}`}
                className="text-xs font-mono text-white/50 hover:text-white underline transition-colors"
              >
                O enviar correo directo ↗
              </a>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all hover:bg-white/90 hover:scale-[1.02] disabled:opacity-50 cursor-pointer shadow-lg"
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <Send className="size-3.5" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  )
}
