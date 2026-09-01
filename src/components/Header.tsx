import { useState, useEffect } from "react"

interface HeaderProps {
  menuOpen: boolean
  onMenuOpen: () => void
  onContactClick?: () => void
}

export function Header({ menuOpen, onMenuOpen, onContactClick }: HeaderProps) {
  const [isDarkSection, setIsDarkSection] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Header sits around 40px - 60px from top of window
      const headerY = 60
      const darkSections = document.querySelectorAll("#home, #contact, footer")
      let dark = false
      darkSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect()
        if (rect.top <= headerY && rect.bottom >= headerY) {
          dark = true
        }
      })
      setIsDarkSection(dark)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-40 p-6 sm:p-10 lg:p-12 flex items-center justify-between pointer-events-none">
      {/* Logo - Roger Infa Monogram Logo */}
      <a
        href="/"
        className={`pointer-events-auto text-xl sm:text-2xl font-mono font-bold tracking-widest uppercase hover:opacity-80 transition-colors duration-300 select-none ${
          isDarkSection ? "text-white drop-shadow-md" : "text-black"
        }`}
        aria-label="Roger Infa Sanchez Home"
      >
        ROGER<span className="text-[#E54838]">.</span>INFA
      </a>

      {/* Right Actions */}
      <div
        className={`pointer-events-auto flex items-center gap-5 sm:gap-6 transition-opacity duration-300 ${
          menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Contáctame Button */}
        <button
          onClick={onContactClick}
          className={`inline-flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium tracking-tight shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer group ${
            isDarkSection
              ? "bg-[#141414] text-white border border-white/20 hover:bg-black"
              : "bg-white text-black border border-black/15 hover:bg-black hover:text-white"
          }`}
        >
          <span className="text-xs sm:text-sm font-sans font-normal">Contáctame</span>
          <span
            className={`flex size-5 items-center justify-center rounded-[3px] p-0.5 transition-colors duration-300 ${
              isDarkSection
                ? "bg-white text-black"
                : "bg-black text-white group-hover:bg-white group-hover:text-black"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="size-3.5 fill-current transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M10.685 3.42h3.776l7.862 8.583-7.862 8.583h-3.776l7.083-7.193h-16.1v-2.748H17.8L10.685 3.42Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>

        {/* Hamburger Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onMenuOpen()
          }}
          className="flex flex-col justify-center gap-[6px] p-2 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Abrir menú"
        >
          <span
            className={`w-7 h-[2px] rounded-full transition-colors duration-300 ${
              isDarkSection ? "bg-white" : "bg-black"
            }`}
          />
          <span
            className={`w-7 h-[2px] rounded-full transition-colors duration-300 ${
              isDarkSection ? "bg-white" : "bg-black"
            }`}
          />
        </button>
      </div>
    </header>
  )
}
