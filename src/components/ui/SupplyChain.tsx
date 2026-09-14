import { useEffect, useRef, useState } from "react"
import { supplyChain } from "../../data/content"

// Animated 7-stage supply-chain process. Dark navy context.
export default function SupplyChain() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.25 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {/* Desktop: horizontal timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* connecting line */}
          <svg
            className="absolute left-0 top-[13px] h-px w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 1"
            aria-hidden="true"
          >
            <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="rgba(255,255,255,0.14)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <line
              x1="0"
              y1="0.5"
              x2="100"
              y2="0.5"
              stroke="#f7941d"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              className={`draw-line ${visible ? "is-visible" : ""}`}
            />
          </svg>
          <ol className="relative grid grid-cols-7 gap-4">
            {supplyChain.map((step, i) => (
              <li key={step.n} className="pr-4">
                <span
                  className={`block h-[9px] w-[9px] rounded-full border transition-all duration-500 ${
                    visible ? "border-orange bg-orange" : "border-white/30 bg-transparent"
                  }`}
                  style={{ transitionDelay: `${i * 160}ms` }}
                  aria-hidden="true"
                />
                <div className="mt-6 font-mono text-xs text-orange">{step.n}</div>
                <h3 className="mt-2 font-display text-[15px] font-semibold uppercase tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Mobile / tablet: vertical timeline */}
      <ol className="relative space-y-8 lg:hidden">
        <span className="absolute left-[4px] top-2 bottom-2 w-px bg-white/12" aria-hidden="true" />
        {supplyChain.map((step) => (
          <li key={step.n} className="relative pl-8">
            <span className="absolute left-0 top-1.5 h-[9px] w-[9px] rounded-full border border-orange bg-orange" aria-hidden="true" />
            <div className="font-mono text-xs text-orange">{step.n}</div>
            <h3 className="mt-1 font-display text-base font-semibold uppercase tracking-wide text-white">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-white/55">{step.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
