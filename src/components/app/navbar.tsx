import Link from "next/link"
import { ThemeSwitcher } from "@/components/app/theme-switcher"

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 mx-auto flex h-[80px] w-full items-center border-b border-border bg-background/90 backdrop-blur-md px-6 md:px-12">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
        <Link
          className="text-lg md:text-xl font-heading tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity"
          href={"/"}
        >
          ROGER INFA <span className="font-serif italic font-normal text-foreground/70">STUDIO</span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="items-center text-xs uppercase tracking-widest font-medium lg:flex gap-8 hidden text-foreground/80">
            <Link className="hover:text-foreground hover:underline underline-offset-4 transition-all" href="#about">Sobre mí</Link>
            <Link className="hover:text-foreground hover:underline underline-offset-4 transition-all" href="#projects">Proyectos</Link>
            <Link className="hover:text-foreground hover:underline underline-offset-4 transition-all" href="#experience">Experiencia</Link>
            <Link className="hover:text-foreground hover:underline underline-offset-4 transition-all" href="#skills">Habilidades</Link>
          </div>

          <div className="flex items-center gap-4 border-l border-border pl-6">
            <a
              target="_blank"
              href="https://github.com/rogerinfas"
              className="text-xs uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors hidden sm:block"
            >
              GitHub
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/roger-infa-sanchez"
              className="text-xs uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors hidden sm:block"
            >
              LinkedIn
            </a>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
