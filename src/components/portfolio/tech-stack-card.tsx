export default function TechStackCard() {
  return (
    <div className="p-8 border border-border rounded-2xl bg-secondary-background/40 hover:border-foreground/30 transition-all space-y-4">
      <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-mono font-semibold block">
        [ 01.C / DATA & CLOUD ]
      </span>
      <h3 className="text-2xl font-serif italic">Bases de Datos & Cloud</h3>
      <p className="text-sm text-foreground/75 leading-relaxed">
        PostgreSQL, MySQL, SQL Server, MongoDB. Despliegues en AWS y Google Cloud con contenedores Docker y flujos CI/CD automatizados.
      </p>
    </div>
  )
}
