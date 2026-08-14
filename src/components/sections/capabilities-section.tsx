"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { capabilities } from "@/lib/data"

interface CapabilitiesSectionProps {
  scrollY: number
}

export function CapabilitiesSection({ scrollY }: CapabilitiesSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const [sectionTop, setSectionTop] = useState(0)

  // Measure section offset for the floating preview scroll tracking
  useEffect(() => {
    const measure = () => {
      if (sectionRef.current) {
        setSectionTop(sectionRef.current.offsetTop)
      }
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  // Animate panel height open/close
  useEffect(() => {
    panelRefs.current.forEach((panel, idx) => {
      if (!panel) return
      const inner = panel.firstElementChild as HTMLElement
      if (!inner) return
      if (idx === expandedIdx) {
        panel.style.height = inner.scrollHeight + "px"
        panel.style.opacity = "1"
      } else {
        panel.style.height = "0px"
        panel.style.opacity = "0"
      }
    })
  }, [expandedIdx])

  const handleClick = useCallback((idx: number) => {
    setActiveIdx(idx)
    setExpandedIdx((prev) => (prev === idx ? null : idx))
  }, [])

  // Floating preview Y offset driven by scroll
  const previewY = (scrollY - sectionTop) * 0.12

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative bg-[#F4F4F0] text-black overflow-visible px-6 sm:px-12 md:px-16"
      style={{ paddingBlock: "clamp(6rem, 15vh, 11rem)" }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Eyebrow with pulsing dot */}
        <p className="inline-flex items-center gap-3 text-sm font-medium leading-none text-black/70">
          <span
            className="inline-block size-1.5 rounded-full bg-black"
            style={{ animation: "servicesDot 1.15s ease-in-out infinite" }}
          />
          <span>Dónde puedo aportar valor</span>
        </p>

        {/* 2-Column Split: Editorial Accordion (Left) + Floating Parallax Image Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Original Editorial Typography List */}
          <div className="lg:col-span-7 flex flex-col items-start gap-1">
            {capabilities.map((cap, idx) => {
              const isActive = activeIdx === idx
              const isExpanded = expandedIdx === idx
              return (
                <div key={idx} className="w-full">
                  {/* Accordion Row Button */}
                  <button
                    type="button"
                    id={`capability-button-${idx}`}
                    aria-expanded={isExpanded}
                    aria-controls={`capability-panel-${idx}`}
                    onClick={() => handleClick(idx)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className="w-full text-left cursor-pointer transition-colors duration-200 ease-out py-2 group flex items-baseline gap-6 sm:gap-8"
                  >
                    <span className="tabular-nums font-mono text-xs text-black/40 w-8 shrink-0">
                      {cap.number}
                    </span>
                    <span
                      className={`text-2xl sm:text-4xl md:text-5xl font-sans tracking-tight transition-colors duration-200 ${
                        isActive || isExpanded ? "font-normal text-black" : "font-light text-black/50 group-hover:text-black/80"
                      }`}
                    >
                      {cap.title}
                    </span>
                  </button>

                  {/* Expandable Panel */}
                  <div
                    ref={(el) => { panelRefs.current[idx] = el }}
                    id={`capability-panel-${idx}`}
                    role="region"
                    aria-labelledby={`capability-button-${idx}`}
                    className="w-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ height: 0, opacity: 0 }}
                  >
                    <div className="pl-14 sm:pl-16 pt-2 pb-6 max-w-xl">
                      <p className="text-sm sm:text-base font-light leading-relaxed text-black/75">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Floating Parallax Image Card */}
          <div className="lg:col-span-5 hidden lg:block sticky top-28">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/10 shadow-xl border border-black/10 transition-all duration-500">
              <div
                className="absolute inset-[-10%] will-change-transform"
                style={{
                  transform: `translate3d(0, ${previewY * 0.4}px, 0)`,
                }}
              >
                {capabilities.map((cap, idx) => (
                  <Image
                    key={idx}
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className={`object-cover object-center transition-all duration-500 ${
                      activeIdx === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                    priority={idx === 0}
                  />
                ))}
              </div>
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1.5 rounded-lg uppercase z-10 font-semibold shadow-md">
                {capabilities[activeIdx].number} {capabilities[activeIdx].title}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
