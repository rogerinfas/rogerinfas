"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/data"

interface FeaturedProjectsSectionProps {
  scrollY: number
}

export function FeaturedProjectsSection({ scrollY }: FeaturedProjectsSectionProps) {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0)

  return (
    <section id="work" className="relative bg-[#EBEBE6] text-black px-6 sm:px-12 md:px-16 py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <h3 className="text-4xl sm:text-6xl font-sans font-light tracking-tight">
          Featured Projects
        </h3>

        {/* 2-Column Split Layout: Left Floating Parallax Card + Right Project List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
          
          {/* Left Column: Interactive Project Preview Card with Parallax Image Shift */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-[#141414] text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 transition-all duration-500">
              
              {/* Poster Image Container with Internal Parallax Shift */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/40">
                <div
                  className="absolute inset-0 will-change-transform scale-110"
                  style={{
                    transform: `translate3d(0, ${(scrollY - 1200) * 0.08}px, 0)`,
                  }}
                >
                  <Image
                    src={projects[activeProjectIdx].posterImage || projects[activeProjectIdx].bgImage}
                    alt={projects[activeProjectIdx].title}
                    fill
                    className="object-cover transition-all duration-500"
                  />
                </div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-black text-[10px] font-mono px-2.5 py-1 rounded-md uppercase font-semibold z-10">
                  {projects[activeProjectIdx].title}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-sm font-light text-white/80 leading-relaxed">
                {projects[activeProjectIdx].description}
              </p>

              {/* Click to View Button */}
              <a
                href={`#${projects[activeProjectIdx].id}`}
                className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all hover:bg-white/90"
              >
                <span>Click to view</span>
                <ArrowRight className="size-3.5" />
              </a>

            </div>
          </div>

          {/* Right Column: Interactive Project Names List */}
          <div className="lg:col-span-7 divide-y divide-black/15 border-t border-b border-black/15">
            {projects.map((proj, idx) => {
              const isSelected = activeProjectIdx === idx
              return (
                <div
                  key={proj.id}
                  onClick={() => setActiveProjectIdx(idx)}
                  onMouseEnter={() => setActiveProjectIdx(idx)}
                  className={`py-6 px-4 flex items-center justify-between cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "bg-black/10 rounded-lg pl-6 translate-x-1"
                      : "hover:bg-black/5 rounded-lg"
                  }`}
                >
                  <h4 className="text-2xl sm:text-4xl font-sans font-normal tracking-tight">
                    {proj.title}
                  </h4>
                  <div className="flex items-center gap-4 text-xs font-mono text-black/60">
                    <span>{proj.year}</span>
                    <ArrowUpRight className={`size-4 transition-transform ${isSelected ? "opacity-100 translate-x-0.5 -translate-y-0.5" : "opacity-40"}`} />
                  </div>
                </div>
              )
            })}
          </div>

        </div>


      </div>
    </section>
  )
}
