"use client"

import { useState, useEffect } from "react"

interface FooterSectionProps {
  onNavigate: (href: string, tabName: string) => void
}

export function FooterSection({ onNavigate }: FooterSectionProps) {
  const [timeString, setTimeString] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZoneName: "short",
      })
      setTimeString(formatted)
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="bg-[#0D0D0E] text-white/70 px-6 sm:px-12 md:px-16 pt-20 pb-12 border-t border-white/10 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono">
          <div>
            <p className="uppercase text-white/40 mb-3">Contact Info</p>
            <div className="space-y-1 text-white/80">
              <a href="mailto:contactorogeris@gmail.com" className="block hover:text-white transition-colors truncate">
                contactorogeris@gmail.com
              </a>
              <a href="https://github.com/rogerinfas" target="_blank" rel="noreferrer" className="block hover:text-white transition-colors">
                GitHub @rogerinfas ↗
              </a>
            </div>
          </div>

          <div>
            <p className="uppercase text-white/40 mb-3">Navigation</p>
            <div className="space-y-1 text-white/80">
              <button onClick={() => onNavigate("#home", "Home")} className="block hover:text-white cursor-pointer">HOME</button>
              <button onClick={() => onNavigate("#work", "Work")} className="block hover:text-white cursor-pointer">WORK</button>
              <button onClick={() => onNavigate("#studio", "About")} className="block hover:text-white cursor-pointer">ABOUT</button>
              <button onClick={() => onNavigate("#capabilities", "Capabilities")} className="block hover:text-white cursor-pointer">CAPABILITIES</button>
              <button onClick={() => onNavigate("#contact", "Contact")} className="block hover:text-white cursor-pointer">CONTACT</button>
            </div>
          </div>

          <div>
            <p className="uppercase text-white/40 mb-3">Location &amp; Time</p>
            <div className="space-y-1 text-white/80">
              <p>Full-Stack (Backend Focus)</p>
              <p className="text-white font-semibold">{timeString || "00:00:00 UTC"}</p>
              <p className="text-white/50">Remote / Worldwide</p>
            </div>
          </div>

          <div>
            <p className="uppercase text-white/40 mb-3">Copyright</p>
            <div className="space-y-1 text-white/80">
              <p>© {new Date().getFullYear()} Roger Infa Sanchez</p>
              <p>Built with Next.js &amp; Tailwind</p>
            </div>
          </div>
        </div>

        {/* Massive Bottom Typography */}
        <div className="pt-8 border-t border-white/10 text-center">
          <h1 className="text-4xl sm:text-7xl md:text-[90px] lg:text-[120px] font-sans font-bold tracking-tighter text-white/90 select-none leading-none">
            ROGER INFA SANCHEZ
          </h1>
        </div>

      </div>
    </footer>
  )
}
