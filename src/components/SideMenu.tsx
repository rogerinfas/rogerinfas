import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { navItems } from "@/lib/data"

interface SideMenuProps {
  menuOpen: boolean
  activeTab: string
  onClose: () => void
  onNavigate: (href: string, tabName: string) => void
}

export function SideMenu({ menuOpen, activeTab, onClose, onNavigate }: SideMenuProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const firstItemRef = useRef<HTMLButtonElement | null>(null)

  // Esc cierra + foco inicial en el botón cerrar (navegación por teclado)
  useEffect(() => {
    if (!menuOpen) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      // Trampa de foco simple dentro del panel lateral
      if (e.key === "Tab") {
        const panel = document.getElementById("menu-lateral")
        if (!panel) return
        const focusables = Array.from(
          panel.querySelectorAll<HTMLElement>('button, a[href]')
        ).filter((el) => !el.hasAttribute("disabled"))
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [menuOpen, onClose])

  return (
    <aside
      id="menu-lateral"
      role="dialog"
      aria-modal="true"
      aria-label="Menú lateral"
      aria-hidden={!menuOpen}
      className={`fixed top-0 right-0 h-screen bg-[#F4F4F0] text-black z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
        menuOpen
          ? "w-[300px] sm:w-[360px] md:w-[400px] opacity-100 pointer-events-auto border-l border-black/10"
          : "w-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-[300px] sm:w-[360px] md:w-[400px] h-full p-8 sm:p-10 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-black/60">Menú</p>
          <button
            ref={closeRef}
            onClick={onClose}
            className="text-black hover:opacity-60 transition-opacity p-2 -m-1 cursor-pointer rounded-md focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label="Cerrar menú lateral"
          >
            <X className="size-6 stroke-[1.5]" />
          </button>
        </div>

        <nav aria-label="Navegación principal" className="flex flex-col gap-2 mt-10 sm:mt-14 mb-auto">
          {navItems.map((item, idx) => {
            const isActive = activeTab === item.name
            return (
              <button
                key={item.name}
                ref={idx === 0 ? firstItemRef : undefined}
                onClick={() => onNavigate(item.href, item.name)}
                aria-current={isActive ? "page" : undefined}
                tabIndex={menuOpen ? 0 : -1}
                className={`group text-left text-3xl sm:text-4xl font-heading tracking-tight transition-all duration-200 px-4 py-2 cursor-pointer flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  isActive
                    ? "bg-[#C23A2A] text-white font-medium"
                    : "text-black hover:translate-x-2 hover:text-[#C23A2A] font-normal"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`text-base overflow-hidden transition-all duration-200 ${
                    isActive ? "opacity-100 w-4" : "opacity-0 w-0 group-hover:opacity-100 group-hover:w-4"
                  }`}
                >
                  →
                </span>
                {item.name}
              </button>
            )
          })}
        </nav>

        <div className="border-t border-black/15 pt-6 grid grid-cols-2 gap-4 text-left">
          <div>
            <p className="text-[10px] font-mono uppercase text-black/60 tracking-wider mb-2">Perfiles</p>
            <div className="space-y-1.5">
              <a
                href="https://github.com/rogerinfas"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={menuOpen ? 0 : -1}
                className="link-underline text-xs text-black/80 hover:text-black inline-block transition-colors font-medium rounded-sm"
              >
                GitHub ↗
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/roger-infa-sanchez/"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={menuOpen ? 0 : -1}
                className="link-underline text-xs text-black/80 hover:text-black inline-block transition-colors font-medium rounded-sm"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono uppercase text-black/60 tracking-wider mb-2">Contacto Directo</p>
            <div className="space-y-1">
              <a
                href="mailto:contactorogeris@gmail.com"
                tabIndex={menuOpen ? 0 : -1}
                className="link-underline text-xs text-black/80 hover:text-black inline-block transition-colors font-medium truncate max-w-full rounded-sm"
              >
                contactorogeris@gmail.com
              </a>
              <span className="text-xs text-black/60 block">Dev Full-Stack (Especialista Backend)</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
