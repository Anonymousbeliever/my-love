"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Heart } from "lucide-react"

const GALLERY_ITEMS = [
  { 
    id: 1, 
    image: "/images/smile.jpeg",
    title: "That Smile",
    caption: "The one that stops time. The one that makes everything else disappear. The one I fell in love with.",
    poem: "When you smile at me, baby, the whole world goes quiet."
  },
  { 
    id: 2, 
    image: "/images/us.jpeg",
    title: "Our Kiss",
    caption: "Every time our lips meet, the world fades away. Every time I kiss you, I fall deeper. Every kiss with you feels like coming home.",
    poem: "In your kiss, I found everything I was searching for. And I never want to let go."
  },
]

export function GallerySection() {
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

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center justify-center gap-3 mb-8">
          <div
            className="w-12 h-px"
            style={{ backgroundColor: "hsl(340, 80%, 65%)", opacity: 0.4 }}
            aria-hidden="true"
          />
          <Heart
            className="w-4 h-4"
            style={{ color: "hsl(340, 60%, 55%)", opacity: 0.6 }}
          />
          <div
            className="w-12 h-px"
            style={{ backgroundColor: "hsl(340, 80%, 65%)", opacity: 0.4 }}
            aria-hidden="true"
          />
        </div>

        <h2
          className="reveal font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-center"
          style={{ color: "hsl(0, 0%, 95%)" }}
        >
          Two Moments, One Heart
        </h2>

        <p
          className="reveal font-serif text-lg md:text-xl italic mb-20 max-w-2xl mx-auto text-center leading-relaxed"
          style={{ color: "hsl(340, 40%, 55%)" }}
        >
          In a world full of fleeting moments, these two images hold my entire universe.
        </p>

        {/* Gallery - Two column romantic layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {GALLERY_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className="reveal group"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Image container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 50%, hsla(0, 0%, 0%, 0.3) 100%)",
                  }}
                />
              </div>

              {/* Text content */}
              <div className="text-center px-4">
                <h3
                  className="font-serif text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "hsl(0, 0%, 92%)" }}
                >
                  {item.title}
                </h3>
                
                <p
                  className="font-sans text-base leading-relaxed mb-6"
                  style={{ color: "hsl(0, 0%, 55%)" }}
                >
                  {item.caption}
                </p>

                {/* Decorative divider */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div
                    className="w-8 h-px"
                    style={{ backgroundColor: "hsl(340, 80%, 65%)", opacity: 0.3 }}
                  />
                  <Heart
                    className="w-3 h-3"
                    style={{ color: "hsl(340, 60%, 55%)", opacity: 0.4 }}
                  />
                  <div
                    className="w-8 h-px"
                    style={{ backgroundColor: "hsl(340, 80%, 65%)", opacity: 0.3 }}
                  />
                </div>

                <p
                  className="font-serif text-base md:text-lg italic"
                  style={{ color: "hsl(340, 50%, 50%)" }}
                >
                  &ldquo;{item.poem}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="reveal mt-20 text-center">
          <p
            className="font-sans text-sm max-w-lg mx-auto leading-relaxed"
            style={{ color: "hsl(0, 0%, 40%)" }}
          >
            These images are not just photographs, baby. They are proof that magic exists.
            That love is real. That I found my forever in you.
          </p>
        </div>
      </div>
    </section>
  )
}
