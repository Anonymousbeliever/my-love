"use client"

import { useCallback, useRef, useState } from "react"

const MESSAGES = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you being serious?",
  "This is not the right answer!",
]

export function NoButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hasEscaped, setHasEscaped] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const escapeButton = useCallback(() => {
    // Keep the button within visible boundaries
    const maxDistance = 200 // Maximum pixels the button can move from center
    const minDistance = 100 // Minimum distance to ensure it actually moves
    
    // Generate random angle
    const angle = Math.random() * 2 * Math.PI
    
    // Generate random distance between min and max
    const distance = minDistance + Math.random() * (maxDistance - minDistance)
    
    // Calculate new position using polar coordinates
    const newX = Math.cos(angle) * distance
    const newY = Math.sin(angle) * distance

    setPosition({ x: newX, y: newY })
    setHasEscaped(true)
    setMessageIndex((prev) => (prev + 1) % MESSAGES.length)
  }, [])

  return (
    <button
      ref={buttonRef}
      className="px-8 py-3 rounded-full text-base font-sans font-medium transition-all duration-300 ease-out border border-[hsl(0,0%,20%)] text-[hsl(0,0%,55%)] hover:text-[hsl(0,0%,70%)]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        position: hasEscaped ? "fixed" : "relative",
        zIndex: hasEscaped ? 50 : 1,
        top: hasEscaped ? "50%" : undefined,
        left: hasEscaped ? "50%" : undefined,
        backgroundColor: "hsl(0, 0%, 8%)",
      }}
      onMouseEnter={escapeButton}
      onTouchStart={(e) => {
        e.preventDefault()
        escapeButton()
      }}
      aria-label="No button - this button playfully moves away"
    >
      {MESSAGES[messageIndex]}
    </button>
  )
}
