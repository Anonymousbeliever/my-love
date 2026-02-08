"use client"

import { useEffect, useState } from "react"

interface FloatingHeart {
  id: number
  x: number
  size: number
  delay: number
  duration: number
  opacity: number
}

export function FloatingHeartsBg() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  useEffect(() => {
    const generated: FloatingHeart[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 12 + 8,
      delay: Math.random() * 8,
      duration: Math.random() * 10 + 15,
      opacity: Math.random() * 0.08 + 0.03,
    }))
    setHearts(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animation: `float-up ${heart.duration}s linear ${heart.delay}s infinite`,
            color: "hsl(340, 80%, 65%)",
          }}
        >
          {"<3"}
        </div>
      ))}
    </div>
  )
}
