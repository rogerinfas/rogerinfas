import { Children, cloneElement, isValidElement, useCallback, useRef, type ReactNode } from "react"

interface MagneticTextProps {
  text?: string
  children?: ReactNode
  className?: string
  letterClassName?: string
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p"
  radius?: number
  strength?: number
}

/**
 * Splits text into per-letter spans that get pulled toward the cursor
 * when it passes nearby, and spring back on mouse leave. Rects are cached
 * on enter (not recomputed every mousemove) to keep it cheap.
 *
 * Accepts either a flat `text` string, or mixed `children` (strings plus
 * elements, e.g. a word wrapped in its own styled span) — string parts are
 * split into letters, element parts are kept intact and moved as one unit
 * so they don't lose their own styling/animation.
 */
export function MagneticText({
  text,
  children,
  className = "",
  letterClassName = "",
  as = "span",
  radius = 90,
  strength = 0.45,
}: MagneticTextProps) {
  const lettersRef = useRef<(HTMLElement | null)[]>([])
  const centersRef = useRef<{ cx: number; cy: number }[]>([])

  const registerRef = (i: number) => (el: HTMLElement | null) => {
    lettersRef.current[i] = el
  }

  const measure = useCallback(() => {
    centersRef.current = lettersRef.current.map((el) => {
      if (!el) return { cx: 0, cy: 0 }
      const r = el.getBoundingClientRect()
      return { cx: r.left + r.width / 2, cy: r.top + r.height / 2 }
    })
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (centersRef.current.length === 0) measure()
      const { clientX, clientY } = e
      lettersRef.current.forEach((el, i) => {
        if (!el) return
        const { cx, cy } = centersRef.current[i]
        const dx = clientX - cx
        const dy = clientY - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < radius) {
          const pull = (1 - dist / radius) * strength
          el.style.transform = `translate3d(${dx * pull}px, ${dy * pull}px, 0) scale(${1 + pull * 0.3})`
        } else {
          el.style.transform = "translate3d(0, 0, 0) scale(1)"
        }
      })
    },
    [measure, radius, strength]
  )

  const handleMouseLeave = useCallback(() => {
    lettersRef.current.forEach((el) => {
      if (!el) return
      el.style.transform = "translate3d(0, 0, 0) scale(1)"
    })
  }, [])

  let idx = 0

  const renderString = (str: string) =>
    str.split("").map((char) => {
      const i = idx++
      return (
        <span
          key={i}
          ref={registerRef(i)}
          className={`inline-block will-change-transform transition-transform duration-200 ease-out ${letterClassName}`}
          style={char === " " ? { whiteSpace: "pre" } : undefined}
        >
          {char}
        </span>
      )
    })

  const renderNode = (node: ReactNode): ReactNode => {
    if (typeof node === "string") return renderString(node)
    if (Array.isArray(node)) return node.map((n) => renderNode(n))
    if (isValidElement(node)) {
      const i = idx++
      const props = node.props as { className?: string }
      return cloneElement(node as any, {
        key: i,
        ref: registerRef(i),
        className: `${props.className ?? ""} inline-block will-change-transform transition-transform duration-200 ease-out`.trim(),
      })
    }
    return node
  }

  const content = text !== undefined ? renderString(text) : Children.toArray(children).map((n) => renderNode(n))

  const Tag = as as any

  return (
    <Tag className={className} onMouseMove={handleMouseMove} onMouseEnter={measure} onMouseLeave={handleMouseLeave}>
      {content}
    </Tag>
  )
}
