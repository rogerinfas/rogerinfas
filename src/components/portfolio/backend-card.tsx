import { Server } from "lucide-react"

export default function BackendCard() {
  return (
    <div className="bg-secondary-background rounded-base p-6 shadow-shadow border border-border flex flex-col transition-transform hover:-translate-y-1">
      <div className="size-12 bg-background rounded-2xl flex items-center justify-center mb-4">
        <Server className="text-foreground size-6" />
      </div>
      <h3 className="text-xl font-heading mb-2">Desarrollo Backend Avanzado</h3>
      <p className="text-sm text-foreground/70 leading-relaxed">
        NestJS, Python (Flask/FastAPI), C#, Java. Microservicios y APIs RESTful seguras.
      </p>
    </div>
  )
}
