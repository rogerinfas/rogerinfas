export default function FrontendCard() {
  return (
    <div className="bg-secondary-background/60 rounded-2xl p-8 border border-border flex flex-col justify-between transition-all hover:border-foreground/30">
      <div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-semibold block mb-4">
          [ 02 / ESPECIFICACIÓN ]
        </span>
        <h3 className="text-2xl font-serif italic mb-3">Arquitectura Frontend</h3>
        <p className="text-sm text-foreground/70 leading-relaxed">
          React.js, Next.js, Vue.js, TailwindCSS. Interfaces web dinámicas, accesibles y optimizadas para SEO y Core Web Vitals.
        </p>
      </div>
    </div>
  )
}
