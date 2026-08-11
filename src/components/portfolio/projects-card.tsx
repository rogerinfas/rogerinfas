import projects from "@/data/reviews"
import { ArrowUpRight } from "lucide-react"

export default function ProjectsCard() {
  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-foreground/50">[ 02 / PROYECTOS SELECCIONADOS ]</span>
        <span className="text-xs uppercase tracking-widest text-foreground/40 font-mono">ÍNDICE ({projects.length})</span>
      </div>

      <div className="divide-y divide-border border-b border-border">
        {projects.map((project, index) => (
          <div key={index} className="py-8 group transition-colors hover:bg-secondary-background/40 px-4 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Number */}
              <div className="lg:col-span-1 text-xs font-mono text-foreground/40 group-hover:text-foreground transition-colors">
                0{index + 1}
              </div>

              {/* Title & Tech */}
              <div className="lg:col-span-5 space-y-2">
                <h3 className="text-2xl md:text-4xl font-heading uppercase tracking-wide group-hover:font-serif group-hover:italic transition-all">
                  {project.fullName}
                </h3>
                <p className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">{project.jobTitle}</p>
              </div>

              {/* Description */}
              <div className="lg:col-span-5 text-sm text-foreground/75 leading-relaxed">
                {project.review}
              </div>

              {/* Icon */}
              <div className="lg:col-span-1 flex justify-end">
                <div className="size-10 rounded-full border border-border flex items-center justify-center group-hover:bg-main group-hover:text-main-foreground transition-all">
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
