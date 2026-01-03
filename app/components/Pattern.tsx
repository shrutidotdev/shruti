"use client"

interface PatternProps {
  side: "left" | "right"
  className?: string
  topOffset?: string
}

export default function Pattern({ side, className = "", topOffset = "0" }: PatternProps) {
  return (
    <div
      className={`absolute ${side}-0 w-w-15 h-full overflow-hidden sm:block hidden ${className}`}
      style={{ top: topOffset }}
    >
      <div
        className="absolute opacity-1 inset-0 w-w-15 h-full border dark:border-[#eee] border-[#000]/70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px)",
        }}
      />
    </div>
  )
}
