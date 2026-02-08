import { Sparkles } from "@/components/sparkles"
import { FloatingHeartsBg } from "@/components/floating-hearts-bg"
import { ProposalContent } from "@/components/proposal-content"

export default function Page() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, hsl(340, 30%, 8%) 0%, hsl(0, 0%, 2%) 50%, hsl(0, 0%, 1%) 100%)",
      }}
    >
      {/* Subtle ambient glow at top */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, hsla(340, 60%, 40%, 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Sparkles />
      <FloatingHeartsBg />
      <ProposalContent />
    </main>
  )
}
