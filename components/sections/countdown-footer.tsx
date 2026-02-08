"use client"

import { useEffect, useState, useRef } from "react"
import { Heart } from "lucide-react"

interface TimeElapsed {
  days: number
  hours: number
  minutes: number
  seconds: number
  months: number
  weeks: number
}

const START_DATE = new Date("2025-05-05T00:00:00")

function getTimeElapsed(): TimeElapsed {
  const now = new Date()
  const start = new Date(START_DATE)

  // Total elapsed time in milliseconds
  const totalMs = now.getTime() - start.getTime()

  // Calculate full calendar months
  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth())

  // Adjust if the day of month hasn't been reached yet this month
  if (now.getDate() < start.getDate()) {
    months--
  }

  // Calculate total elapsed time in all units from May 5th
  const totalSeconds = Math.floor(totalMs / 1000)
  const totalMinutes = Math.floor(totalMs / (1000 * 60))
  const totalHours = Math.floor(totalMs / (1000 * 60 * 60))
  const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24))
  const totalWeeks = Math.floor(totalDays / 7)

  return {
    months,
    weeks: totalWeeks,
    days: totalDays,
    hours: totalHours,
    minutes: totalMinutes,
    seconds: totalSeconds
  }
}

const INITIAL_TIME: TimeElapsed = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  months: 0,
  weeks: 0,
}

const TIME_BLOCKS: { key: keyof TimeElapsed; label: string; highlight?: boolean }[] = [
  { key: "months", label: "Months", highlight: true },
  { key: "weeks", label: "Weeks" },
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds", highlight: true },
]

export function CountdownFooter() {
  const sectionRef = useRef<HTMLElement>(null)
  const [time, setTime] = useState<TimeElapsed>(INITIAL_TIME)
  const [mounted, setMounted] = useState(false)

  // Hydrate time and start ticking
  useEffect(() => {
    setTime(getTimeElapsed())
    setMounted(true)
    const interval = setInterval(() => {
      setTime(getTimeElapsed())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Scroll reveal - runs after mount so elements exist in DOM
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    )

    const revealEls = el.querySelectorAll(".reveal")
    for (const revealEl of revealEls) {
      observer.observe(revealEl)
    }

    return () => observer.disconnect()
  }, [mounted])

  return (
    <section ref={sectionRef} className="relative px-6 py-28 md:py-40">
      {/* Top divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(340, 80%, 65%, 0.15), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsla(340, 50%, 30%, 0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Section label */}
        <div className="reveal flex items-center justify-center gap-3 mb-10">
          <div
            className="w-8 h-px"
            style={{ backgroundColor: "hsl(340, 80%, 65%)", opacity: 0.4 }}
            aria-hidden="true"
          />
          <span
            className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase"
            style={{ color: "hsl(340, 50%, 55%)" }}
          >
            Every Second Counts
          </span>
          <div
            className="w-8 h-px"
            style={{ backgroundColor: "hsl(340, 80%, 65%)", opacity: 0.4 }}
            aria-hidden="true"
          />
        </div>

        {/* Main heading */}
        <h2
          className="reveal font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance"
          style={{ color: "hsl(0, 0%, 95%)" }}
        >
          Since May 5, 2025
        </h2>

        <p
          className="reveal font-serif text-lg md:text-2xl italic mb-16"
          style={{ color: "hsl(340, 40%, 55%)" }}
        >
          Every second has been yours, my love
        </p>

        {/* Big counter blocks - flexible grid that wraps */}
        <div className="reveal flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {TIME_BLOCKS.map((block) => (
            <div
              key={block.key}
              className="flex flex-col items-center gap-2 py-5 px-6 rounded-lg min-w-[100px]"
              style={{
                backgroundColor: "hsl(0, 0%, 5%)",
                border: block.highlight
                  ? "1px solid hsl(340, 60%, 40%, 0.15)"
                  : "1px solid hsl(0, 0%, 10%)",
              }}
            >
              <span
                className={`font-sans text-3xl md:text-4xl lg:text-5xl font-bold tabular-nums ${
                  block.key === "seconds" ? "animate-count-pulse" : ""
                }`}
                style={{
                  color: block.highlight
                    ? "hsl(340, 60%, 55%)"
                    : "hsl(0, 0%, 90%)",
                }}
              >
                {time[block.key].toLocaleString()}
              </span>
              <span
                className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] uppercase whitespace-nowrap"
                style={{
                  color: block.highlight
                    ? "hsl(340, 40%, 45%)"
                    : "hsl(0, 0%, 35%)",
                }}
              >
                {block.label}
              </span>
            </div>
          ))}
        </div>

        {/* Romantic message */}
        <div className="reveal max-w-lg mx-auto mb-12">
          <p
            className="font-sans text-base leading-relaxed mb-4"
            style={{ color: "hsl(0, 0%, 45%)" }}
          >
            Every second on that clock is a second I have spent being grateful for you,
            baby. Some of those seconds were spent missing you across the distance, some were
            spent laughing on our late-night calls, and some were spent dreaming about the
            day I finally get to hold you and never let go.
          </p>
          <p
            className="font-sans text-base leading-relaxed"
            style={{ color: "hsl(0, 0%, 45%)" }}
          >
            But not a single one was wasted. Because every moment with you in my heart is a
            moment worth living, my love.
          </p>
        </div>

        {/* Promise */}
        <div className="reveal">
          <Heart
            className="w-4 h-4 mx-auto mb-4 animate-pulse-heart"
            style={{ color: "hsl(340, 80%, 65%)", opacity: 0.3 }}
          />
          <p
            className="font-serif text-lg md:text-xl italic max-w-md mx-auto"
            style={{ color: "hsl(340, 40%, 50%)" }}
          >
            And I plan to keep counting for the rest of my life, mummy.
          </p>
        </div>
      </div>
    </section>
  )
}
