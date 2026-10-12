import { useState, useEffect } from "react"

/**
 * Tracks window.scrollY at ~60fps for smooth parallax transforms.
 * Uses passive scroll listener for zero-jank performance.
 */
export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let raf = 0
    let queued = false
    const update = () => {
      raf = 0
      queued = false
      setScrollY(window.scrollY)
    }
    const handleScroll = () => {
      if (queued) return
      queued = true
      raf = window.requestAnimationFrame(update)
    }
    handleScroll()
    // Sync once on mount (rAF already queued) + direct set for SSR safety
    setScrollY(typeof window !== "undefined" ? window.scrollY : 0)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  return scrollY
}
