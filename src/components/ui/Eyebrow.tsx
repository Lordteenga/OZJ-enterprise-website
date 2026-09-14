type EyebrowProps = {
  children: React.ReactNode
  className?: string
  tone?: "navy" | "light"
}

export default function Eyebrow({ children, className = "", tone = "navy" }: EyebrowProps) {
  const color = tone === "light" ? "text-white/70" : "text-ink/55"
  return (
    <div className={`flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] ${color} ${className}`}>
      <span className="h-px w-6 bg-orange" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}
