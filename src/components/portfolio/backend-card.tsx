export default function BackendCard() {
  return (
    <div className="bg-secondary-background/60 rounded-2xl p-8 border border-border flex flex-col justify-between transition-all hover:border-foreground/30">
      <div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-semibold block mb-4">
          [ 01 / ESPECIFICACIÓN ]
        </span>
        <h3 className="text-2xl font-serif italic mb-3">Backend & Microservicios</h3>
        <p className="text-sm text-foreground/70 leading-relaxed">
          NestJS, Python (Flask/FastAPI), C#, Java. Diseño e implementación de APIs RESTful de baja latencia y alta concurrencia.
        </p>
      </div>
    </div>
  )
}
