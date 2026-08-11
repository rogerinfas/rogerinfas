export default function TechStackCard() {
  return (
    <div className="lg:col-span-1 bg-secondary-background/60 rounded-2xl p-8 border border-border flex flex-col justify-between transition-all hover:border-foreground/30">
      <div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-semibold block mb-4">
          [ 03 / INFRAESTRUCTURA ]
        </span>
        <div className="space-y-4">
          <div>
            <h4 className="font-heading text-base uppercase tracking-wider">Bases de Datos</h4>
            <p className="text-xs text-foreground/60 mt-1">PostgreSQL, SQL Server, MongoDB, Redis.</p>
          </div>
          <div className="border-t border-border pt-3">
            <h4 className="font-heading text-base uppercase tracking-wider">Cloud & CI/CD</h4>
            <p className="text-xs text-foreground/60 mt-1">AWS, Google Cloud, Docker, GitHub Actions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
