import { Link } from "../router"
import { contact, nav } from "../data/content"
import Logo from "./Logo"

const services = ["Energy", "Procurement", "Marine", "Technical Services"]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1360px] px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              Energy, procurement and technical services for organisations whose operations depend on reliable delivery.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/ozj-oil-gas/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OZJ Oil & Gas on LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-hair-light text-white/60 transition-colors hover:border-orange hover:text-orange"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ozj_ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OZJ Oil & Gas on Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-hair-light text-white/60 transition-colors hover:border-orange hover:text-orange"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange">Navigate</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li className="pt-2">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-orange/70">UK Office</p>
                <address className="not-italic leading-relaxed">
                  Dormy House, Dunmow Road<br />
                  Hertfordshire CM23 5HR<br />
                  United Kingdom
                </address>
              </li>
              <li>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-orange/70">Nigeria Office</p>
                <address className="not-italic leading-relaxed">
                  12 Wile Ariyo Street<br />
                  Lekki Phase 1, Lagos<br />
                  Nigeria
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-hair-light pt-8">
          <p className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
            Quality products. <span className="text-white/45">Reliable supply.</span>{" "}
            <span className="text-orange">Professional execution.</span>
          </p>
          <div className="mt-6 flex flex-col justify-between gap-3 text-xs text-white/45 sm:flex-row sm:items-center">
            <span>© {new Date().getFullYear()} OZJ Enterprise Limited. All rights reserved.</span>
            <span className="font-mono uppercase tracking-[0.16em]">OZJ Oil &amp; Gas</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
