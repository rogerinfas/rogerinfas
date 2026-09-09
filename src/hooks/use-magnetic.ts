import { useRef } from "react"

/**
 * Attaches a subtle magnetic pull to a button: it drifts a fraction of the
 * cursor's offset from center, then snaps back on mouse leave.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.25) {
  const ref = useRef<T | null>(null)

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    node.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`
  }

  const onMouseLeave = () => {
    const node = ref.current
    if (!node) return
    node.style.transform = "translate3d(0, 0, 0)"
  }

  return { ref, onMouseMove, onMouseLeave }
}
