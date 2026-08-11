import projects from "@/data/reviews"

export default function ProjectsCard() {
  return (
    <div id="projects" className="md:col-span-2 lg:col-span-2 row-span-2 bg-secondary-background/60 rounded-2xl p-8 sm:p-10 border border-border flex flex-col justify-between transition-all hover:border-foreground/30">
      <div>
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <h2 className="text-2xl font-serif italic">Proyectos Destacados</h2>
          <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-semibold">[ SELECCIÓN ]</span>
        </div>
        <div className="space-y-5 max-h-[360px] overflow-y-auto pr-2 scrollbar-thin">
          {projects.map((project, index) => (
            <div key={index} className="p-4 rounded-xl border border-border/60 bg-background/40 hover:border-foreground/20 transition-all">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-base font-heading uppercase tracking-wide">
                  {project.fullName}
                </h4>
                <span className="text-[10px] text-foreground/50 uppercase tracking-widest font-mono">0{index + 1}</span>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 font-semibold mb-2">{project.jobTitle}</p>
              <p className="text-xs text-foreground/75 leading-relaxed">
                {project.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
