"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Plane, Home, Heart } from "lucide-react"

const DESTINATIONS: Array<{
  name: string
  description: string
  image: string
  objectFit?: "contain" | "cover"
}> = [
  {
    name: "Thailand",
    description:
      "Golden temples, turquoise waters, and street food under lantern-lit skies. I want to watch the sunset with you in Phuket, baby, ride a longtail boat in Phi Phi, and get lost in the magic of Bangkok together.",
    image: "/images/thailand.jpg",
  },
  {
    name: "Bali",
    description:
      "Rice terraces at dawn, hidden waterfalls, and mornings wrapped in peace. Bali was made for two souls like ours, my love \u2014 souls who want to slow down, hold hands, and just breathe in the beauty of being alive together.",
    image: "/images/bali.jpg",
  },
  {
    name: "South Africa",
    description:
      "From Table Mountain to garden routes along dramatic coastlines. I want to stand at the edge of the world with you, mummy, feel the wind on our faces, and know that every adventure is better because you are in it.",
    image: "/images/south-africa.jpg",
  },
  {
    name: "Everywhere Else",
    description:
      "Paris, Tokyo, Santorini, Maldives, New York... the entire world is waiting for us, baby. I do not care where we go. As long as your hand is in mine, every destination becomes paradise.",
    image: "/images/world.png",
    objectFit: "contain",
  },
]

export function DreamsSection() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="relative px-6 py-24 md:py-32">
      {/* Section divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(340, 80%, 65%, 0.15), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-6">
          <div
            className="w-8 h-px"
            style={{ backgroundColor: "hsl(340, 80%, 65%)", opacity: 0.4 }}
            aria-hidden="true"
          />
          <span
            className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase"
            style={{ color: "hsl(340, 50%, 55%)" }}
          >
            Our Dreams
          </span>
        </div>

        <h2
          className="reveal font-serif text-3xl md:text-5xl font-bold mb-4 text-balance"
          style={{ color: "hsl(0, 0%, 92%)" }}
        >
          The world is ours to explore
        </h2>

        <p
          className="reveal font-sans text-base mb-14 max-w-lg leading-relaxed"
          style={{ color: "hsl(0, 0%, 45%)" }}
        >
          Every great love story has adventures waiting to be written. Here are the
          places I dream of discovering with you, baby, hand in hand, passport in the other.
        </p>

        <div className="reveal flex items-center gap-2 mb-10">
          <Plane
            className="w-4 h-4"
            style={{ color: "hsl(340, 60%, 55%)", opacity: 0.6 }}
          />
          <span
            className="font-sans text-xs tracking-widest uppercase"
            style={{ color: "hsl(0, 0%, 30%)" }}
          >
            Dream Destinations
          </span>
        </div>

        {/* Destination cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.name}
              className="reveal group rounded-lg overflow-hidden relative"
              style={{
                backgroundColor: "hsl(0, 0%, 5%)",
                border: "1px solid hsl(0, 0%, 10%)",
              }}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden" style={{ backgroundColor: dest.objectFit === "contain" ? "hsl(0, 0%, 3%)" : undefined }}>
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className={`transition-transform duration-700 group-hover:scale-105 ${dest.objectFit === "contain" ? "object-contain" : "object-cover"}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, hsl(0, 0%, 5%) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <h3
                    className="font-serif text-xl md:text-2xl font-bold"
                    style={{ color: "hsl(0, 0%, 95%)" }}
                  >
                    {dest.name}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "hsl(0, 0%, 50%)" }}
                >
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* THE LIFE WE WILL BUILD section */}
        <div className="mt-24 md:mt-32">
          <div className="reveal flex items-center gap-2 mb-10">
            <Home
              className="w-4 h-4"
              style={{ color: "hsl(340, 60%, 55%)", opacity: 0.6 }}
            />
            <span
              className="font-sans text-xs tracking-widest uppercase"
              style={{ color: "hsl(0, 0%, 30%)" }}
            >
              The Life We Will Build
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Dream home image */}
            <div className="reveal lg:w-1/2">
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                <Image
                  src="/images/dream-home.jpg"
                  alt="Our dream home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, hsl(0, 0%, 3%) 0%, transparent 50%)",
                  }}
                />
              </div>
            </div>

            {/* Dream life text */}
            <div className="reveal lg:w-1/2 flex flex-col justify-center">
              <h3
                className="font-serif text-2xl md:text-3xl font-bold mb-5 text-balance"
                style={{ color: "hsl(0, 0%, 92%)" }}
              >
                Our mansion on the hill
              </h3>

              <p
                className="font-sans text-base leading-relaxed mb-5"
                style={{ color: "hsl(0, 0%, 50%)" }}
              >
                I see it so clearly, baby. A beautiful home that we built together, not
                just with money but with love, with patience, with every sacrifice that
                brought us here. A mansion with big windows and warm lights, where our
                laughter echoes through every room.
              </p>

              <p
                className="font-sans text-base leading-relaxed mb-5"
                style={{ color: "hsl(0, 0%, 50%)" }}
              >
                Our dream cars parked in the driveway. Morning coffee on the terrace while
                the sun rises over a life we created from nothing but faith in each other.
                I want to give you every beautiful thing this world has to offer, my love.
              </p>

              <p
                className="font-sans text-base leading-relaxed mb-5"
                style={{ color: "hsl(0, 0%, 50%)" }}
              >
                But more than the house, more than the cars, more than any material dream &mdash;
                I want to grow old with you, mummy. I want to be the old couple sitting on
                the porch, still holding hands, still laughing at the same jokes, still
                looking at each other like it is the very first time.
              </p>

              <p
                className="font-serif text-lg italic"
                style={{ color: "hsl(340, 40%, 55%)" }}
              >
                That is the real dream, baby. Not the mansion. Not the cars. Just you, me,
                and forever.
              </p>
            </div>
          </div>
        </div>

        {/* Closing dream quote */}
        <div className="reveal mt-20 text-center">
          <Heart
            className="w-4 h-4 mx-auto mb-4 animate-pulse-heart"
            style={{ color: "hsl(340, 80%, 65%)", opacity: 0.3 }}
          />
          <p
            className="font-serif text-xl md:text-2xl italic max-w-lg mx-auto"
            style={{ color: "hsl(340, 40%, 50%)" }}
          >
            &ldquo;I do not need to see the whole world. I just need to see it with you, my love.
            And when we come back home, I want that home to be ours.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
