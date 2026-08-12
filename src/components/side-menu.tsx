"use client"

import { X } from "lucide-react"
import { navItems } from "@/lib/data"

interface SideMenuProps {
  menuOpen: boolean
  activeTab: string
  onClose: () => void
  onNavigate: (href: string, tabName: string) => void
}

export function SideMenu({ menuOpen, activeTab, onClose, onNavigate }: SideMenuProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-screen bg-[#F4F4F0] text-black z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
        menuOpen
          ? "w-[300px] sm:w-[360px] md:w-[400px] opacity-100 pointer-events-auto border-l border-black/5"
          : "w-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-[300px] sm:w-[360px] md:w-[400px] h-full p-8 sm:p-10 flex flex-col justify-between">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-black hover:opacity-60 transition-opacity p-1 cursor-pointer"
            aria-label="Close Navigation Menu"
          >
            <X className="size-6 stroke-[1.5]" />
          </button>
        </div>

        <div className="flex flex-col gap-2.5 mt-10 sm:mt-14 mb-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.name
            return (
              <button
                key={item.name}
                onClick={() => onNavigate(item.href, item.name)}
                className={`text-left text-3xl sm:text-4xl font-sans tracking-tight transition-all px-4 py-2 cursor-pointer ${
                  isActive
                    ? "bg-[#E54838] text-white font-normal"
                    : "text-black hover:opacity-60 font-normal"
                }`}
              >
                {item.name}
              </button>
            )
          })}
        </div>

        <div className="border-t border-black/15 pt-6 grid grid-cols-2 gap-4 text-left">
          <div>
            <p className="text-[10px] font-mono uppercase text-black/50 tracking-wider mb-2">Legal</p>
            <div className="space-y-1">
              <a href="#terms" className="text-xs text-black/85 hover:text-black block transition-colors">
                Terms of use
              </a>
              <a href="#transparency" className="text-xs text-black/85 hover:text-black block transition-colors">
                Transparency Statement
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono uppercase text-black/50 tracking-wider mb-2">Contact</p>
            <div className="space-y-1">
              <a href="mailto:hello@kommakomma.is" className="text-xs text-black/85 hover:text-black block transition-colors">
                hello@kommakomma.is
              </a>
              <a href="https://cal.eu/kommakomma" target="_blank" rel="noreferrer" className="text-xs text-black/85 hover:text-black block transition-colors">
                Book a call?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
