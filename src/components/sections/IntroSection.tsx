import { useReveal } from "@/hooks/use-reveal"
import { Reveal } from "@/components/Reveal"
import { MagneticText } from "@/components/MagneticText"

interface IntroSectionProps {
  scrollY: number
}

export function IntroSection({ scrollY }: IntroSectionProps) {
  const { ref: headlineRef, isVisible: headlineVisible } = useReveal<HTMLHeadingElement>(0.4)

  return (
    <section id="studio" className="relative bg-[#F4F4F0] text-black px-6 sm:px-12 md:px-16 py-24 md:py-32 overflow-hidden">

      {/* Subtle Parallax Global Background Layer */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none will-change-transform scale-110"
        style={{
          transform: `translate3d(0, ${(scrollY - 500) * 0.12}px, 0)`,
        }}
      >
        <img
          src="/images/bg_global.png"
          alt="Global background parallax"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">

        {/* Small Section Subtitle Tag */}
        <Reveal className="flex items-center gap-2 text-xs font-mono text-black/50 uppercase tracking-widest">
          <span>Introducción</span>
        </Reveal>

        {/* Typography Statement Layout */}
        <div className="space-y-4">
          <h2
            ref={headlineRef}
            className="text-4xl sm:text-6xl lg:text-7xl font-sans font-normal tracking-tight leading-[1.12]"
          >
            <span
              className="inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transitionDelay: "0ms",
                opacity: headlineVisible ? 1 : 0,
                transform: headlineVisible ? "translateY(0)" : "translateY(24px)",
                filter: headlineVisible ? "blur(0px)" : "blur(6px)",
              }}
            >
              <MagneticText as="span" radius={90} strength={0.45}>
                Tú{" "}
                <span
                  className="italic font-serif font-light bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-left-bottom text-black/40 transition-[background-size] duration-[900ms] ease-out"
                  style={{
                    backgroundSize: headlineVisible ? "100% 1px" : "0% 1px",
                    transitionDelay: "500ms",
                  }}
                >
                  imaginas
                </span>{" "}
                el producto
              </MagneticText>
            </span>
            <br />
            <span
              className="inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transitionDelay: "150ms",
                opacity: headlineVisible ? 1 : 0,
                transform: headlineVisible ? "translateY(0)" : "translateY(24px)",
                filter: headlineVisible ? "blur(0px)" : "blur(6px)",
              }}
            >
              <MagneticText as="span" radius={90} strength={0.45}>
                Yo{" "}
                <span
                  className="font-serif italic font-light bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-left-bottom transition-[background-size] duration-[900ms] ease-out"
                  style={{
                    backgroundSize: headlineVisible ? "100% 1px" : "0% 1px",
                    transitionDelay: "650ms",
                  }}
                >
                  construyo
                </span>
              </MagneticText>
            </span>
            <br />
            <span
              className="inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transitionDelay: "300ms",
                opacity: headlineVisible ? 1 : 0,
                transform: headlineVisible ? "translateY(0)" : "translateY(24px)",
                filter: headlineVisible ? "blur(0px)" : "blur(6px)",
              }}
            >
              <MagneticText text="lo que realmente importa." radius={90} strength={0.45} />
            </span>
          </h2>
        </div>

        {/* Two Paragraph Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pt-8 border-t border-black/15 text-base sm:text-lg font-light leading-relaxed text-black/80">
          <Reveal delay={100}>
            <p>
              Soy Roger Infa Sanchez, Full-Stack Developer con una pasión profunda por la arquitectura backend, las APIs escalables y el rendimiento de sistemas.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Construyo aplicaciones web completas de extremo a extremo con frontends modernos en Next.js y React, pero disfruto más diseñando flujos de servidor resilientes, esquemas de base de datos (PostgreSQL) e infraestructura en la nube.
            </p>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
