import type { ReactNode } from "react"

type SectionProps = {
  children: ReactNode
  id?: string
  className?: string
  container?: boolean
  tone?: "light" | "mist" | "navy"
}

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  light: "bg-white text-ink",
  mist: "bg-mist text-ink",
  navy: "bg-navy text-white",
}

export default function Section({ children, id, className = "", container = true, tone = "light" }: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      {container ? <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-12">{children}</div> : children}
    </section>
  )
}
