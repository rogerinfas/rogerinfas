export default function FrontendCard() {
  return (
    <div className="p-8 border border-border rounded-2xl bg-secondary-background/40 hover:border-foreground/30 transition-all space-y-4">
      <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-mono font-semibold block">
        [ 01.B / FRONTEND ]
      </span>
      <h3 className="text-2xl font-serif italic">Arquitectura Frontend</h3>
      <p className="text-sm text-foreground/75 leading-relaxed">
        React.js, Next.js, Vue.js, TailwindCSS. Desarrollo de interfaces dinámicas, accesibles, adaptativas y optimizadas para rendimiento y SEO.
      </p>
    </div>
  )
}
