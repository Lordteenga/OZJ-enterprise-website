import { useEffect, useState } from "react"
import { Link, useRouter } from "../router"
import { nav } from "../data/content"
import Logo from "./Logo"

export default function Nav() {
  const { path } = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [path])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const isActive = (to: string) => {
    const base = to.split("#")[0]
    if (base === "/") return false
    return path.startsWith(base)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-hair bg-white/95 backdrop-blur-md" : "border-b border-transparent bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-[1360px] items-center justify-between px-6 sm:px-8 lg:px-12">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`relative text-[14px] font-medium tracking-tight transition-colors hover:text-navy ${
                isActive(item.to) ? "text-navy" : "text-ink/70"
              }`}
            >
              {item.label}
              {isActive(item.to) && <span className="absolute -bottom-[26px] left-0 h-[2px] w-full bg-orange" aria-hidden="true" />}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy px-6 py-3 font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-orange hover:text-navy"
          >
            Request Supply
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="grid h-11 w-11 place-items-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative flex h-4 w-6 flex-col justify-between">
            <span className={`h-[2px] w-full bg-navy transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-full bg-navy transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-full bg-navy transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-[76px] z-40 origin-top bg-navy transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col px-6 pt-6" aria-label="Mobile">
          {nav.map((item, i) => (
            <Link
              key={item.label}
              to={item.to}
              className="border-b border-hair-light py-5 font-display text-2xl font-semibold text-white transition-colors hover:text-orange"
              onClick={() => setOpen(false)}
            >
              <span className="mr-4 font-mono text-xs text-orange">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-orange px-6 py-4 font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-navy"
            onClick={() => setOpen(false)}
          >
            Request Supply
          </Link>
        </nav>
      </div>
    </header>
  )
}
