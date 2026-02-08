"use client"

import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const generated: Sparkle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }))
    setSparkles(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: "hsl(340, 80%, 65%)",
            animation: `sparkle-fade ${sparkle.duration}s ease-in-out ${sparkle.delay}s infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  )
}
