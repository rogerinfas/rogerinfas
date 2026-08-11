import { Marquee } from "@devnomic/marquee"
import "@/styling/marquee.css"

export default function MarqueeCard() {
  const techs = ["NESTJS", "PYTHON", "REACT", "NEXT.JS", "TYPESCRIPT", "DOCKER", "AWS", "POSTGRESQL", "MONGODB"]

  return (
    <div className="md:col-span-3 lg:col-span-2 bg-main text-main-foreground rounded-2xl flex flex-col justify-center overflow-hidden border border-border transition-all hover:border-foreground/30 relative min-h-[180px]">
      <Marquee
        className="md:[&_.animate-marquee-left]:gap-16 [&_.animate-marquee-left]:gap-10 py-6"
        direction="left"
      >
        {techs.map((tech, id) => (
          <div key={id} className="flex items-center gap-6">
            <span className="text-2xl md:text-3xl font-heading tracking-widest uppercase opacity-90">{tech}</span>
            <span className="text-xs opacity-40 font-serif italic">•</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
