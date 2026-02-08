"use client"

import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center overflow-hidden">
      {/* Subtle radial glow behind text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsla(340, 50%, 30%, 0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Small decorative label */}
      <p
        className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase mb-8 animate-fade-in-up"
        style={{ color: "hsl(0, 0%, 35%)" }}
      >
        A love letter to my baby
      </p>

      {/* Main name */}
      <h1
        className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-balance leading-none mb-4 animate-fade-in-up"
        style={{
          color: "hsl(0, 0%, 95%)",
          animationDelay: "0.2s",
          animationFillMode: "backwards",
        }}
      >
        Sabina
      </h1>

      {/* Accent line */}
      <div
        className="w-20 h-px mx-auto mb-6 animate-fade-in-up"
        style={{
          backgroundColor: "hsl(340, 80%, 65%)",
          opacity: 0.5,
          animationDelay: "0.4s",
          animationFillMode: "backwards",
        }}
        aria-hidden="true"
      />

      {/* Tagline */}
      <p
        className="font-serif text-lg md:text-2xl italic max-w-md animate-fade-in-up"
        style={{
          color: "hsl(340, 40%, 55%)",
          animationDelay: "0.5s",
          animationFillMode: "backwards",
        }}
      >
        The woman who made my world beautiful
      </p>

      {/* Subtitle */}
      <p
        className="font-sans text-sm md:text-base mt-6 max-w-sm leading-relaxed animate-fade-in-up"
        style={{
          color: "hsl(0, 0%, 45%)",
          animationDelay: "0.7s",
          animationFillMode: "backwards",
        }}
      >
        This is not just a website, my love. This is a story. Our story.
        Scroll down and let me tell you why you mean everything to me.
      </p>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-gentle-float"
      >
        <span
          className="font-sans text-[10px] tracking-[0.2em] uppercase"
          style={{ color: "hsl(0, 0%, 25%)" }}
        >
          Scroll
        </span>
        <ChevronDown
          className="w-4 h-4"
          style={{ color: "hsl(340, 60%, 50%)", opacity: 0.5 }}
        />
      </div>
    </section>
  )
}
