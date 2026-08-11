import Link from "next/link"
import { ThemeSwitcher } from "@/components/app/theme-switcher"

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex h-[70px] w-full items-center border-b border-border/40 bg-background/80 backdrop-blur-xl px-6">
      <div className="mx-auto flex w-[1400px] max-w-full items-center justify-between">
        <Link className="text-xl font-heading font-bold text-foreground" href="/">
          React App
        </Link>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Navbar
