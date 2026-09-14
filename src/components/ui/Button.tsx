import type { ReactNode } from "react"
import { useRouter } from "../../router"

type Variant = "primary" | "secondary" | "ghost"

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: Variant
  type?: "button" | "submit"
  className?: string
  full?: boolean
  disabled?: boolean
}

const base =
  "group inline-flex items-center justify-center gap-2.5 font-medium tracking-tight transition-all duration-200 text-[15px] px-7 py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"

const variants: Record<Variant, string> = {
  primary:
    "bg-orange text-navy hover:bg-orange-600 hover:text-white shadow-[0_1px_0_rgba(0,0,0,0.04)]",
  secondary:
    "border border-current/30 text-current hover:bg-current/[0.06] backdrop-blur-sm",
  ghost: "text-current hover:text-orange",
}

const Arrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="transition-transform duration-200 group-hover:translate-x-1"
    aria-hidden="true"
  >
    <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  full = false,
  disabled = false,
}: ButtonProps) {
  const { navigate } = useRouter()
  const cls = `${base} ${variants[variant]} ${full ? "w-full" : ""} ${className}`

  if (to) {
    return (
      <a
        href={to}
        className={cls}
        onClick={(e) => {
          e.preventDefault()
          onClick?.()
          navigate(to)
        }}
      >
        {children}
        <Arrow />
      </a>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
        <Arrow />
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
      <Arrow />
    </button>
  )
}
