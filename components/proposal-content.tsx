"use client"

import { useState } from "react"
import { HeroSection } from "./sections/hero"
import { OurStorySection } from "./sections/our-story"
import { AboutSabinaSection } from "./sections/about-sabina"
import { GallerySection } from "./sections/gallery"
import { DreamsSection } from "./sections/dreams"
import { ProposalSection } from "./sections/proposal"
import { CountdownFooter } from "./sections/countdown-footer"
import { QuoteDivider } from "./sections/quote-divider"
import { Celebration } from "./celebration"

export function ProposalContent() {
  const [accepted, setAccepted] = useState(false)

  if (accepted) {
    return <Celebration />
  }

  return (
    <div className="relative z-10">
      <HeroSection />
      <OurStorySection />
      <QuoteDivider
        quote="She wasn't looking for a knight. She was looking for a sword. I just happen to be lucky enough to stand beside her."
      />
      <AboutSabinaSection />
      <GallerySection />
      <QuoteDivider
        quote="Everywhere I go, I carry you in my heart. And soon, I'll carry you around the whole world."
      />
      <DreamsSection />
      <QuoteDivider
        quote="Distance means so little when someone means so much. Every mile between us is a mile I would cross a thousand times for you."
      />
      <CountdownFooter />
      <ProposalSection onAccept={() => setAccepted(true)} />
    </div>
  )
}
