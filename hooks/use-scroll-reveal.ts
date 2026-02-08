"use client"

import { useEffect, useRef } from "react"

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )

    const revealElements = el.querySelectorAll(".reveal")
    for (const revealEl of revealElements) {
      observer.observe(revealEl)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
