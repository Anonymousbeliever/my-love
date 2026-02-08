"use client"

import { useEffect, useState } from "react"

interface CelebrationHeart {
  id: number
  x: number
  size: number
  delay: number
  duration: number
  emoji: string
}

const HEART_EMOJIS = ["\u2764\uFE0F", "\uD83E\uDE77", "\uD83D\uDC95", "\uD83D\uDC96", "\u2763\uFE0F"]

function randomHearts(count: number, baseId: number): CelebrationHeart[] {
  return Array.from({ length: count }, (_, i) => ({
    id: baseId + i,
    x: Math.random() * 100,
    size: Math.random() * 24 + 12,
    delay: Math.random() * 2,
    duration: Math.random() * 4 + 3,
    emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
  }))
}

export function Celebration() {
  const [hearts, setHearts] = useState<CelebrationHeart[]>([])
  const [showMessage, setShowMessage] = useState(false)
  const [showSubtext, setShowSubtext] = useState(false)
  const [showFinal, setShowFinal] = useState(false)

  useEffect(() => {
    setHearts(randomHearts(45, 0))

    const msgTimer = setTimeout(() => setShowMessage(true), 600)
    const subTimer = setTimeout(() => setShowSubtext(true), 1600)
    const finalTimer = setTimeout(() => setShowFinal(true), 2800)

    const interval = setInterval(() => {
      setHearts((prev) => [...prev, ...randomHearts(6, Date.now())])
    }, 2500)

    // Try to play music
    try {
      const audio = new Audio(
        "https://cdn.pixabay.com/audio/2022/02/23/audio_ea70ad08e0.mp3"
      )
      audio.volume = 0.3
      audio.loop = true
      audio.play().catch(() => {})
    } catch {
      // Audio not available
    }

    return () => {
      clearTimeout(msgTimer)
      clearTimeout(subTimer)
      clearTimeout(finalTimer)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ backgroundColor: "hsla(0, 0%, 2%, 0.97)" }}
      />

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsla(340, 50%, 30%, 0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Floating hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 pointer-events-none select-none"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            animation: `float-up ${heart.duration}s linear ${heart.delay}s forwards`,
          }}
        >
          {heart.emoji}
        </div>
      ))}

      {/* Main message */}
      <div className="relative z-10 text-center px-6 max-w-xl">
        {showMessage && (
          <div className="animate-fade-in-up">
            <div
              className="text-6xl md:text-8xl mb-8 animate-pulse-heart inline-block"
              aria-hidden="true"
            >
              {"\uD83D\uDC8D"}
            </div>
            <h2
              className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight"
              style={{ color: "hsl(0, 0%, 95%)" }}
            >
              She said{" "}
              <span style={{ color: "hsl(340, 80%, 65%)" }}>Yes</span>
            </h2>
          </div>
        )}

        {showSubtext && (
          <div className="animate-fade-in-up mt-6">
            <p
              className="font-serif text-xl md:text-2xl italic leading-relaxed"
              style={{ color: "hsl(340, 50%, 55%)" }}
            >
              You just made me the happiest man alive, baby.
            </p>
            <p
              className="font-sans text-base md:text-lg mt-4 leading-relaxed max-w-md mx-auto"
              style={{ color: "hsl(0, 0%, 50%)" }}
            >
              I knew you would say yes, my love. Because what we have is rare, it is real,
              and it is forever. Every love story is beautiful, but ours
              is my absolute favorite.
            </p>
          </div>
        )}

        {showFinal && (
          <div className="animate-fade-in-up mt-10">
            <p
              className="font-sans text-sm leading-relaxed max-w-sm mx-auto mb-8"
              style={{ color: "hsl(0, 0%, 40%)" }}
            >
              Even from miles away, you make my heart feel full, mummy. I cannot wait for the
              day I get to hold you and never let go. Until then, know that every beat of my
              heart belongs to you.
            </p>
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
              style={{
                backgroundColor: "hsl(0, 0%, 6%)",
                border: "1px solid hsl(340, 60%, 40%, 0.3)",
              }}
            >
              <span className="animate-pulse-heart inline-block" aria-hidden="true">
                {"\u2764\uFE0F"}
              </span>
              <span
                className="font-serif text-sm tracking-widest uppercase"
                style={{ color: "hsl(340, 40%, 55%)" }}
              >
                Forever & Always, My Love
              </span>
              <span className="animate-pulse-heart inline-block" aria-hidden="true">
                {"\u2764\uFE0F"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
