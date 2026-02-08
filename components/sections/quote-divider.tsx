"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface QuoteDividerProps {
  quote: string
  attribution?: string
}

export function QuoteDivider({ quote, attribution }: QuoteDividerProps) {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="relative px-6 py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative quotes */}
        <div
          className="reveal font-serif text-6xl md:text-8xl leading-none select-none mb-2"
          style={{ color: "hsl(340, 60%, 45%)", opacity: 0.15 }}
          aria-hidden="true"
        >
          &ldquo;
        </div>

        <p
          className="reveal font-serif text-xl md:text-3xl italic leading-relaxed text-balance -mt-8"
          style={{ color: "hsl(0, 0%, 75%)" }}
        >
          {quote}
        </p>

        {attribution && (
          <p
            className="reveal font-sans text-xs tracking-[0.2em] uppercase mt-6"
            style={{ color: "hsl(0, 0%, 30%)" }}
          >
            {attribution}
          </p>
        )}
      </div>
    </section>
  )
}
