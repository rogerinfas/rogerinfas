"use client"

interface FooterSectionProps {
  onNavigate: (href: string, tabName: string) => void
}

export function FooterSection({ onNavigate }: FooterSectionProps) {
  return (
    <footer className="bg-[#0D0D0E] text-white/70 px-6 sm:px-12 md:px-16 pt-20 pb-12 border-t border-white/10 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono">
          <div>
            <p className="uppercase text-white/40 mb-3">Contact Info</p>
            <div className="space-y-1 text-white/80">
              <p>hello@kommakomma.is</p>
              <p>Book a call</p>
            </div>
          </div>

          <div>
            <p className="uppercase text-white/40 mb-3">Navigation</p>
            <div className="space-y-1 text-white/80">
              <button onClick={() => onNavigate("#home", "Home")} className="block hover:text-white">HOME</button>
              <button onClick={() => onNavigate("#work", "Work")} className="block hover:text-white">WORK</button>
              <button onClick={() => onNavigate("#studio", "Studio")} className="block hover:text-white">STUDIO</button>
              <button onClick={() => onNavigate("#contact", "Contact")} className="block hover:text-white">CONTACT</button>
            </div>
          </div>

          <div>
            <p className="uppercase text-white/40 mb-3">Studio</p>
            <div className="space-y-1 text-white/80">
              <p>Reykjavík, IS</p>
              <p>17:23 GMT</p>
              <p>64.1470° N, 21.9408° W</p>
            </div>
          </div>

          <div>
            <p className="uppercase text-white/40 mb-3">Privacy Policy</p>
            <div className="space-y-1 text-white/80">
              <p>Copyright © 2026 Komma Komma</p>
              <p>Terms of use</p>
            </div>
          </div>
        </div>

        {/* Massive Bottom Typography */}
        <div className="pt-8 border-t border-white/10 text-center">
          <h1 className="text-6xl sm:text-9xl md:text-[140px] font-sans font-bold tracking-tighter text-white/90 select-none leading-none">
            KOMMA KOMMA
          </h1>
        </div>

      </div>
    </footer>
  )
}
