import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  delay?: number
  id?: string
}

export default function Reveal({ children, className = "", as, delay = 0, id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Fallbacks so content can never stay permanently hidden.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }
    const safety = window.setTimeout(() => setVisible(true), 1200)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    )
    obs.observe(el)
    return () => {
      window.clearTimeout(safety)
      obs.disconnect()
    }
  }, [])

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
