import type { ReactNode } from "react"
import { useReveal } from "@/hooks/use-reveal"

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "span" | "p"
}

/**
 * Fades, lifts, and un-blurs its children once they scroll into view.
 * One-shot: replays only on remount, not on every re-entry.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()
  const Tag = as as any

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-6 blur-sm"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
