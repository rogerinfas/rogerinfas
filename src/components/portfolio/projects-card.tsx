import { FileText } from "lucide-react"
import projects from "@/data/reviews"

export default function ProjectsCard() {
  return (
    <div id="projects" className="md:col-span-2 lg:col-span-2 row-span-2 bg-secondary-background rounded-base p-8 sm:p-10 shadow-shadow border border-border flex flex-col">
      <h2 className="text-3xl font-heading mb-8">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 gap-4 flex-1 overflow-y-auto pr-2 scrollbar-thin">
        {projects.map((project, index) => (
          <div key={index} className="bg-background rounded-2xl p-5 border border-border transition-colors hover:border-foreground/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-secondary-background rounded-xl">
                <FileText className="size-5" />
              </div>
              <div>
                <h4 className="text-lg font-heading leading-none text-foreground">
                  {project.fullName}
                </h4>
                <p className="text-xs text-[#9A7B56] dark:text-[#D4C5B0] font-semibold mt-1">{project.jobTitle}</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {project.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
