import type { ReactNode } from "react"
import { useReveal } from "@/hooks/use-reveal"

type RevealVariant = "up" | "left" | "right" | "scale"

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "span" | "p"
  variant?: RevealVariant
}

const hiddenState: Record<RevealVariant, string> = {
  up: "opacity-0 translate-y-6 blur-sm",
  left: "opacity-0 -translate-x-8 blur-sm",
  right: "opacity-0 translate-x-8 blur-sm",
  scale: "opacity-0 scale-95 blur-sm",
}

const visibleState: Record<RevealVariant, string> = {
  up: "opacity-100 translate-y-0 blur-none",
  left: "opacity-100 translate-x-0 blur-none",
  right: "opacity-100 translate-x-0 blur-none",
  scale: "opacity-100 scale-100 blur-none",
}

/**
 * Fades, shifts, and un-blurs its children once they scroll into view.
 * One-shot: replays only on remount, not on every re-entry.
 */
export function Reveal({ children, delay = 0, className = "", as = "div", variant = "up" }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()
  const Tag = as as any

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? visibleState[variant] : hiddenState[variant]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
