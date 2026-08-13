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
      className="relative bg-[#F4F4F0] text-black overflow-visible"
      style={{ paddingBlock: "clamp(6rem, 15vh, 11rem)" }}
    >
      <div
        className="mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          gap: "0 clamp(1rem, 1.5vw, 1.5rem)",
          maxWidth: "100rem",
          paddingInline: "1.5rem",
        }}
      >
        {/* Eyebrow with pulsing dot */}
        <p
          className="inline-flex items-center gap-3 text-sm font-medium leading-none"
          style={{ gridColumn: "2 / span 10", marginBottom: "clamp(3rem, 7vh, 4.8rem)" }}
        >
          <span
            className="inline-block size-1.5 rounded-full bg-current"
            style={{ animation: "servicesDot 1.15s ease-in-out infinite" }}
          />
          <span>Where we can add value</span>
        </p>

        {/* Body: 10-col sub-grid */}
        <div
          style={{
            gridColumn: "2 / span 10",
            display: "grid",
            gridTemplateColumns: "repeat(10, minmax(0, 1fr))",
            gap: "0 clamp(1rem, 1.5vw, 1.5rem)",
            alignItems: "start",
          }}
        >
          {/* Left Column: Accordion List */}
          <div
            className="flex flex-col items-start"
            style={{
              gridColumn: "1 / span 6",
              gap: "clamp(0.18rem, 1vh, 0.55rem)",
              containerType: "inline-size",
            }}
          >
            {capabilities.map((cap, idx) => {
              const isActive = activeIdx === idx
              const isExpanded = expandedIdx === idx
              return (
                <div key={idx} className="w-full">
                  {/* Accordion Button Row */}
                  <button
                    type="button"
                    id={`capability-button-${idx}`}
                    aria-expanded={isExpanded}
                    aria-controls={`capability-panel-${idx}`}
                    onClick={() => handleClick(idx)}
                    className="w-full text-left cursor-pointer transition-colors duration-200 ease-out"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "max-content minmax(0, 1fr)",
                      columnGap: "clamp(1rem, 6vw, 50px)",
                      alignItems: "center",
                      padding: 0,
                      border: 0,
                      background: "transparent",
                      fontWeight: 500,
                      lineHeight: 1,
                      whiteSpace: "nowrap",
                      color: isActive || isExpanded ? "#131313" : "#13131380",
                    }}
                  >
                    <span
                      className="tabular-nums"
                      style={{ width: "4ch", fontSize: 14, fontWeight: 500 }}
                    >
                      {cap.number}
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(1.45rem, calc((100cqw - 80px) / 11.5), 3rem)",
                        lineHeight: 1,
                      }}
                    >
                      {cap.title}
                    </span>
                  </button>

                  {/* Expandable Panel with animated height */}
                  <div
                    ref={(el) => { panelRefs.current[idx] = el }}
                    id={`capability-panel-${idx}`}
                    role="region"
                    aria-labelledby={`capability-button-${idx}`}
                    className="w-full overflow-hidden"
                    style={{
                      height: 0,
                      opacity: 0,
                      transition: "height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "max-content minmax(0, 1fr)",
                        columnGap: "clamp(1rem, 6vw, 50px)",
                        alignItems: "flex-end",
                      }}
                    >
                      {/* Invisible spacer to align with index column */}
                      <span
                        aria-hidden="true"
                        className="tabular-nums invisible"
                        style={{ width: "4ch", fontSize: 14, fontWeight: 500 }}
                      >
                        {cap.number}
                      </span>
                      <p
                        className="text-sm font-normal leading-snug text-[#131313]"
                        style={{
                          maxWidth: "28rem",
                          paddingTop: 50,
                          paddingBottom: 30,
                          opacity: isExpanded ? 1 : 0,
                          transition: "opacity 0.5s ease 0.15s",
                        }}
                      >
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Floating Scroll-Driven Preview Image */}
          <div
            className="relative self-stretch pointer-events-none hidden lg:block"
            style={{ gridColumn: "8 / span 3", minHeight: "100%" }}
          >
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{
                width: "clamp(9rem, 18vw, 21rem)",
                aspectRatio: expandedIdx !== null ? "1 / 1.5" : "1 / 0.95",
                transform: `translate3d(0, ${previewY}px, 0)`,
                willChange: "transform",
                transition: "aspect-ratio 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {capabilities.map((cap, idx) => (
                <Image
                  key={idx}
                  src={cap.image}
                  alt={cap.title}
                  fill
                  className="object-cover object-center"
                  style={{
                    opacity: activeIdx === idx ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    willChange: "opacity",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
