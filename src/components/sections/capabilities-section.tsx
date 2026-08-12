"use client"

import { useState } from "react"
import Image from "next/image"
import { capabilities } from "@/lib/data"

interface CapabilitiesSectionProps {
  scrollY: number
}

export function CapabilitiesSection({ scrollY }: CapabilitiesSectionProps) {
  const [expandedCapability, setExpandedCapability] = useState(0)

  return (
    <section id="capabilities" className="bg-[#F4F4F0] text-black px-6 sm:px-12 md:px-16 py-24 md:py-32">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Tag */}
        <p className="text-xs font-mono uppercase tracking-widest text-black/50 flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-black inline-block"></span>
          <span>Where we can add value</span>
        </p>

        {/* 2-Column Split: Interactive Accordion + Floating Parallax Asset Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Expandable Accordion */}
          <div className="lg:col-span-7 divide-y divide-black/15 border-t border-b border-black/15">
            {capabilities.map((cap, idx) => {
              const isExpanded = expandedCapability === idx
              return (
                <div
                  key={idx}
                  onClick={() => setExpandedCapability(idx)}
                  className="py-6 cursor-pointer group transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-black/40">{cap.number}</span>
                    <h4 className={`text-2xl sm:text-4xl font-sans tracking-tight transition-colors ${
                      isExpanded ? "font-normal text-black" : "font-light text-black/70 group-hover:text-black"
                    }`}>
                      {cap.title}
                    </h4>
                  </div>

                  {/* Expandable Paragraph Description */}
                  {isExpanded && (
                    <div className="pl-10 pt-4 max-w-xl animate-fadeIn">
                      <p className="text-sm sm:text-base font-light leading-relaxed text-black/75">
                        {cap.description}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Column: Floating Parallax Asset Preview Image */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/10 shadow-lg border border-black/10 transition-all duration-500">
              <div
                className="absolute inset-[-10%] will-change-transform"
                style={{
                  transform: `translate3d(0, ${(scrollY - 2400) * 0.1}px, 0)`,
                }}
              >
                <Image
                  src={capabilities[expandedCapability].image}
                  alt={capabilities[expandedCapability].title}
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1.5 rounded-lg uppercase z-10">
                {capabilities[expandedCapability].title}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
