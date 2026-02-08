"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function AboutSabinaSection() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="relative px-6 py-24 md:py-32">
      {/* Subtle section divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(340, 80%, 65%, 0.15), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-12">
          <div
            className="w-8 h-px"
            style={{ backgroundColor: "hsl(340, 80%, 65%)", opacity: 0.4 }}
            aria-hidden="true"
          />
          <span
            className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase"
            style={{ color: "hsl(340, 50%, 55%)" }}
          >
            The Woman I Adore
          </span>
        </div>

        {/* Two column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Photo */}
          <div className="reveal lg:w-1/2">
            <div className="aspect-[3/4] rounded-lg w-full max-w-sm mx-auto lg:mx-0 overflow-hidden relative">
              <Image
                src="/images/about.jpeg"
                alt="Sabina - The woman I adore"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Text content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2
              className="reveal font-serif text-3xl md:text-4xl font-bold mb-6 text-balance"
              style={{ color: "hsl(0, 0%, 92%)" }}
            >
              Beautiful, ambitious, and entirely unforgettable
            </h2>

            <p
              className="reveal font-sans text-base leading-relaxed mb-6"
              style={{ color: "hsl(0, 0%, 55%)" }}
            >
              My baby is not just the woman I love &mdash; she is a force of nature. A quiet
              storm of ambition wrapped in the most beautiful soul you will ever meet. She
              has dreams that could fill entire oceans, and a heart so pure it makes the
              world around her softer.
            </p>

            <p
              className="reveal font-sans text-base leading-relaxed mb-6"
              style={{ color: "hsl(0, 0%, 55%)" }}
            >
              She is the kind of woman who makes you believe that extraordinary things are
              possible. The kind who works in silence and lets her results speak volumes. The
              kind who carries the weight of her ambitions with grace and still finds time to
              make you feel like the most important person alive.
            </p>

            <p
              className="reveal font-sans text-base leading-relaxed mb-6"
              style={{ color: "hsl(0, 0%, 55%)" }}
            >
              When she loves, she loves with everything. When she dreams, she dreams with no
              ceiling. And when she walks into a room, every other light dims just a little
              because nothing outshines my mummy.
            </p>

            <p
              className="reveal font-serif text-lg italic"
              style={{ color: "hsl(340, 40%, 55%)" }}
            >
              She is my peace in the chaos, my home when I am far away, and the reason I
              believe that the best is yet to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
