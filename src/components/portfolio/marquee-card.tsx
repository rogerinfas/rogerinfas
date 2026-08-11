import { Marquee } from "@devnomic/marquee"
import "@/styling/marquee.css"

export default function MarqueeCard() {
  const techs = ["NestJS", "Python", "React", "Next.js", "TypeScript", "Docker", "AWS", "PostgreSQL", "MongoDB"]

  return (
    <div className="md:col-span-3 lg:col-span-2 bg-main text-main-foreground rounded-base shadow-shadow flex flex-col justify-center overflow-hidden border border-border/20 transition-transform hover:-translate-y-1 relative min-h-[180px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
      <Marquee
        className="md:[&_.animate-marquee-left]:gap-12 [&_.animate-marquee-left]:gap-8 py-4"
        direction="left"
      >
        {techs.map((tech, id) => (
          <span key={id} className="text-3xl md:text-4xl font-heading tracking-tighter opacity-90">{tech}</span>
        ))}
      </Marquee>
    </div>
  )
}
