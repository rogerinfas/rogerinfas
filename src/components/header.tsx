"use client"

import Link from "next/link"
import { navItems } from "@/lib/data"

interface HeaderProps {
  menuOpen: boolean
  onMenuOpen: () => void
  onContactClick?: () => void
}

export function Header({ menuOpen, onMenuOpen, onContactClick }: HeaderProps) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 p-6 sm:p-10 lg:p-12 flex items-center justify-between pointer-events-none">
      {/* Logo - Roger Infa Monogram Logo */}
      <Link
        href="/"
        className="pointer-events-auto text-xl sm:text-2xl font-mono font-bold text-white tracking-widest uppercase hover:opacity-80 transition-opacity drop-shadow-md select-none mix-blend-difference"
        aria-label="Roger Infa Sanchez Home"
      >
        ROGER<span className="text-[#E54838]">.</span>INFA
      </Link>

      {/* Right Actions: Dark 'Contact me' button */}
      <div
        className={`pointer-events-auto flex items-center gap-5 sm:gap-6 transition-opacity duration-300 ${
          menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-3 rounded-md bg-[#141414] px-4 py-2 text-sm font-medium tracking-tight text-white shadow-md transition-all hover:bg-black hover:scale-[1.02] cursor-pointer group"
        >
          <span className="text-xs sm:text-sm font-sans font-normal">Contact me</span>
          <span className="flex size-5 items-center justify-center rounded-[3px] bg-white text-black p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="size-3.5 fill-black transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M10.685 3.42h3.776l7.862 8.583-7.862 8.583h-3.776l7.083-7.193h-16.1v-2.748H17.8L10.685 3.42Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onMenuOpen()
          }}
          className="flex flex-col justify-center gap-[6px] p-2 cursor-pointer hover:opacity-80 transition-opacity mix-blend-difference"
          aria-label="open menu"
        >
          <span className="w-7 h-[2px] bg-white rounded-full"></span>
          <span className="w-7 h-[2px] bg-white rounded-full"></span>
        </button>
      </div>
    </header>
  )
}
