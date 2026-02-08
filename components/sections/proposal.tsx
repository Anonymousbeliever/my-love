"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { NoButton } from "@/components/no-button"

interface ProposalSectionProps {
  onAccept: () => void
}

export function ProposalSection({ onAccept }: ProposalSectionProps) {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="relative px-6 py-24 md:py-40">
      {/* Section divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(340, 80%, 65%, 0.15), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsla(340, 50%, 30%, 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Heart */}
        <div className="reveal mb-8">
          <span
            className="text-5xl md:text-6xl animate-pulse-heart inline-block"
            role="img"
            aria-label="heart"
          >
            {"\u2764\uFE0F"}
          </span>
        </div>

        {/* The question */}
        <h2
          className="reveal font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6"
          style={{ color: "hsl(0, 0%, 95%)" }}
        >
          So, baby...
        </h2>

        <p
          className="reveal font-serif text-xl md:text-3xl italic mb-4"
          style={{ color: "hsl(340, 50%, 55%)" }}
        >
          Will you be my Valentine?
        </p>

        <p
          className="reveal font-sans text-sm mb-6 max-w-md mx-auto leading-relaxed"
          style={{ color: "hsl(0, 0%, 40%)" }}
        >
          I know we are miles apart right now, my love. I know I cannot hold your hand as I ask you
          this. But distance has never stopped me from loving you with everything I have.
          So even from here, across the distance, through a screen, with my whole heart &mdash;
        </p>

        <p
          className="reveal font-sans text-sm mb-12 max-w-md mx-auto leading-relaxed"
          style={{ color: "hsl(0, 0%, 45%)" }}
        >
          After every laugh we have shared, every late night call, every &ldquo;I miss
          you&rdquo; that carried the weight of an ocean between us, every dream we have
          painted together, mummy &mdash; I already know the answer. But I still want to hear
          you say it.
        </p>

        {/* Buttons */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onAccept}
            className="px-12 py-4 rounded-full text-lg font-sans font-semibold transition-all duration-300 animate-soft-glow cursor-pointer"
            style={{
              backgroundColor: "hsl(340, 60%, 55%)",
              color: "hsl(0, 0%, 100%)",
              border: "1px solid hsl(340, 60%, 60%)",
            }}
            aria-label="Yes, I accept"
          >
            {"Yes \u2764\uFE0F"}
          </button>

          <NoButton />
        </div>

        {/* Playful note */}
        <p
          className="reveal mt-8 font-sans text-xs italic"
          style={{ color: "hsl(0, 0%, 22%)" }}
        >
          (Hint: only one of these buttons actually works)
        </p>
      </div>
    </section>
  )
}
