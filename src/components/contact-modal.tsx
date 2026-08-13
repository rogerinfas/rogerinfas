"use client"

import { useState } from "react"
import { X, Send, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const PROJECT_TYPES = [
  "Full-Stack Web App",
  "Backend & API Architecture",
  "Database & Performance",
  "Consultation / Technical Role",
]

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0])
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. Roger will get back to you shortly.",
      })
    }, 1200)
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
              Get in Touch
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-light tracking-tight mt-0.5">
              Contact Roger Infa Sanchez
            </h3>
          </div>
          <button
            onClick={onClose}
            className="size-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
            aria-label="Close contact modal"
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
            <h4 className="text-2xl font-sans font-medium">Message Sent Successfully</h4>
            <p className="text-sm text-white/70 max-w-md">
              Thank you for reaching out, <span className="text-white font-semibold">{name}</span>. Your message regarding <span className="text-[#E54838] font-mono">{selectedType}</span> has been received.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-white text-black px-6 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white/90 transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Project / Opportunity Type Selection */}
            <div>
              <label className="block text-xs font-mono uppercase text-white/50 tracking-wider mb-2">
                What are you looking to build or discuss?
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
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-white/50 tracking-wider mb-1.5">
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-white/50 tracking-wider mb-1.5">
                Project Details / Message *
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="Tell me about your project goals, technical requirements, or schedule..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors resize-none"
              />
            </div>

            {/* Submit Actions */}
            <div className="flex items-center justify-between pt-2">
              <a
                href={`mailto:contactorogeris@gmail.com?subject=${encodeURIComponent(
                  `[Portfolio Contact] ${selectedType}`
                )}&body=${encodeURIComponent(message)}`}
                className="text-xs font-mono text-white/50 hover:text-white underline transition-colors"
              >
                Or send direct email ↗
              </a>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all hover:bg-white/90 hover:scale-[1.02] disabled:opacity-50 cursor-pointer shadow-lg"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
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
