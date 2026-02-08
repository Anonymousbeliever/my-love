"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Heart } from "lucide-react"

export function OurStorySection() {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="relative px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
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
            Our Story
          </span>
        </div>

        {/* Opening quote */}
        <blockquote className="reveal mb-16">
          <p
            className="font-serif text-2xl md:text-4xl lg:text-5xl leading-tight text-balance"
            style={{ color: "hsl(0, 0%, 90%)" }}
          >
            &ldquo;I didn&apos;t know what I was looking for until I found you. And then,
            everything made sense &mdash; the good days, the hard days, and everything in between.&rdquo;
          </p>
        </blockquote>

        {/* Story paragraphs */}
        <div className="space-y-8">
          <p
            className="reveal font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "hsl(0, 0%, 55%)" }}
          >
            May 5th, 2025. That was the day the universe decided to finally get things right.
            I remember every detail of that day, the feeling, the quiet electricity, the undeniable sense that something extraordinary
            had just begun. You walked into my life, baby, and suddenly, all the noise went quiet.
          </p>

          <p
            className="reveal font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "hsl(0, 0%, 55%)" }}
          >
            My love, you are the kind of person people write about. Not because you try to be,
            but because you simply are. You carry a grace that makes the room softer, a
            laugh that turns ordinary moments into memories, and a heart so full of love
            that everyone around you can feel it.
          </p>

          <div className="reveal flex items-center justify-center py-6">
            <Heart
              className="w-5 h-5 animate-pulse-heart"
              style={{ color: "hsl(340, 80%, 65%)", opacity: 0.4 }}
            />
          </div>

          <p
            className="reveal font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "hsl(0, 0%, 55%)" }}
          >
            I know the miles between us are not always kind. There are nights when the
            distance feels heavy, when I reach for my phone just to hear your voice because
            the silence without you is too loud. Long distance is not easy, baby &mdash; but you
            make it worth every single second. Every late-night call, every &ldquo;good
            morning&rdquo; text across time zones, every moment I count down until I see
            you again &mdash; it all reminds me that what we have is stronger than any distance.
          </p>

          <p
            className="reveal font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "hsl(0, 0%, 55%)" }}
          >
            Some nights I just lie there, staring at the ceiling, wishing I could close
            the gap between us with my bare hands. I replay your laugh in my head. I scroll
            through our photos. I read our old messages and smile like a fool. Because even
            from far away, mummy, you make me feel more at home than any place ever could.
          </p>

          <div className="reveal flex items-center justify-center py-6">
            <Heart
              className="w-5 h-5 animate-pulse-heart"
              style={{ color: "hsl(340, 80%, 65%)", opacity: 0.4 }}
            />
          </div>

          <p
            className="reveal font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "hsl(0, 0%, 55%)" }}
          >
            I won&apos;t lie to you and say it&apos;s always been easy. We&apos;ve had our storms,
            baby. Arguments that felt like they might break us. Moments so scary I thought I might
            lose you. Nights where words cut deeper than we ever intended, where the distance
            between us felt like an ocean we couldn&apos;t cross. There were times when I wondered
            if we were strong enough, if love alone could carry us through the hurt.
          </p>

          <p
            className="reveal font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "hsl(0, 0%, 55%)" }}
          >
            But here&apos;s what I learned, my love: the couples who make it aren&apos;t the ones
            who never fight. They&apos;re the ones who choose each other even after the worst fight.
            They&apos;re the ones who come back, who apologize, who hold each other tighter after
            the storm passes. Every argument we&apos;ve survived has taught me something &mdash; that
            you&apos;re worth fighting for, not against. That our love is stronger than our worst
            moments. That even when we hurt each other, we still choose to heal together.
          </p>

          <p
            className="reveal font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "hsl(0, 0%, 55%)" }}
          >
            We&apos;ve grown through every high and every low. We&apos;ve learned each other&apos;s
            triggers, our weaknesses, the things that make us vulnerable. And instead of using them
            as weapons, we&apos;ve learned to protect them, to hold them with care. You&apos;ve seen
            me at my worst, baby, and you stayed. I&apos;ve seen you at yours, and I chose to stay too.
            That&apos;s not weakness &mdash; that&apos;s the kind of love that builds forever.
          </p>

          <p
            className="reveal font-serif text-lg md:text-xl italic leading-relaxed"
            style={{ color: "hsl(340, 40%, 55%)" }}
          >
            Our love isn&apos;t perfect. But it&apos;s real. It&apos;s messy and beautiful and
            worth every tear, every sleepless night, every moment of doubt that led us back to
            certainty. It&apos;s ours.
          </p>

          <div className="reveal flex items-center justify-center py-6">
            <Heart
              className="w-5 h-5 animate-pulse-heart"
              style={{ color: "hsl(340, 80%, 65%)", opacity: 0.4 }}
            />
          </div>

          <p
            className="reveal font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "hsl(0, 0%, 55%)" }}
          >
            Every morning I wake up grateful. Grateful that of all the people in this
            world, you chose me. Grateful that your smile is the first thing I think about,
            and your voice is the last comfort before I sleep. You didn&apos;t just give me
            love, my love &mdash; you gave me a reason to be better, to dream bigger, to believe
            that the best things in life are not things at all, but people. And my person
            is you.
          </p>

          <p
            className="reveal font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "hsl(0, 0%, 55%)" }}
          >
            They say love is a journey. Ours started with a spark, grew into a flame, and now
            it&apos;s the kind of fire that nothing can ever put out. Not distance, not time,
            not the storms we&apos;ve weathered, not even our worst arguments. We&apos;ve been
            tested, baby, and we came out stronger. Because with you, even the hardest days,
            even the scariest moments, have taught me something beautiful &mdash; that real love
            doesn&apos;t run when things get difficult. It stays. It fights. It chooses you,
            over and over again. And one day soon, we will close this distance for good &mdash;
            and I will never let go of you again.
          </p>
        </div>
      </div>
    </section>
  )
}
