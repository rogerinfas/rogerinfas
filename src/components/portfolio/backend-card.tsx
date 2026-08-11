export default function BackendCard() {
  return (
    <div className="p-8 border border-border rounded-2xl bg-secondary-background/40 hover:border-foreground/30 transition-all space-y-4">
      <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-mono font-semibold block">
        [ 01.A / BACKEND ]
      </span>
      <h3 className="text-2xl font-serif italic">Desarrollo Backend Avanzado</h3>
      <p className="text-sm text-foreground/75 leading-relaxed">
        NestJS, Python (Flask/FastAPI), C#, Java. Diseño e implementación de arquitecturas limpias, microservicios y APIs RESTful seguras con autenticación JWT y RBAC.
      </p>
    </div>
  )
}
