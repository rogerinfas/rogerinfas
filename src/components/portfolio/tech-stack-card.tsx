import { Database, Cloud } from "lucide-react"

export default function TechStackCard() {
  return (
    <div className="lg:col-span-1 bg-secondary-background rounded-base p-6 shadow-shadow border border-border flex flex-col gap-6 justify-center transition-transform hover:-translate-y-1">
      <div className="flex gap-4 items-start">
        <Database className="text-foreground size-8 shrink-0" />
        <div>
          <h4 className="font-heading text-lg">Bases de Datos</h4>
          <p className="text-xs text-foreground/70">PostgreSQL, SQL Server, MongoDB.</p>
        </div>
      </div>
      <div className="flex gap-4 items-start">
        <Cloud className="text-foreground size-8 shrink-0" />
        <div>
          <h4 className="font-heading text-lg">Cloud & DevOps</h4>
          <p className="text-xs text-foreground/70">AWS, Docker, CI/CD pipelines.</p>
        </div>
      </div>
    </div>
  )
}
