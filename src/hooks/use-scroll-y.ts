import { useState, useEffect } from "react"

/**
 * Tracks window.scrollY at ~60fps for smooth parallax transforms.
 * Uses passive scroll listener for zero-jank performance.
 */
export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollY
}
