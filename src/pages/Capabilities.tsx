import { capabilities, extraCapabilities, IMG } from "../data/content"
import PageHero from "../components/PageHero"
import Section from "../components/ui/Section"
import Eyebrow from "../components/ui/Eyebrow"
import Button from "../components/ui/Button"
import Reveal from "../components/ui/Reveal"
import { FinalCTA } from "./Home"

const allCaps = [...capabilities, ...extraCapabilities]

function CapabilityBlock({ cap, index }: { cap: (typeof allCaps)[number]; index: number }) {
  const flip = index % 2 === 1
  const process = ["Requirement", "Sourcing", "Verification", "Loading", "Logistics", "Delivery"]
  return (
    <Reveal id={cap.slug} className="scroll-mt-24">
      <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-navy">
          <img src={cap.image} alt={cap.alt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
          <span className="absolute left-6 top-6 font-mono text-sm text-white/85">{cap.n}</span>
        </div>

        <div>
          <Eyebrow>Capability {cap.n}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-ink lg:text-[42px]">
            {cap.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">{cap.overview}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange">What we coordinate</h3>
              <ul className="mt-4 space-y-2.5">
                {cap.coordinate.map((c) => (
                  <li key={c} className="flex gap-3 text-[15px] leading-snug text-ink/75">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange">Typical client requirements</h3>
              <ul className="mt-4 space-y-2.5">
                {cap.requirements.map((c) => (
                  <li key={c} className="flex gap-3 text-[15px] leading-snug text-ink/75">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy/40" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">Supply process</h3>
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2">
              {process.map((p, i) => (
                <div key={p} className="flex items-center gap-2">
                  <span className="border border-hair px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-ink/60">{p}</span>
                  {i < process.length - 1 && <span className="text-orange">→</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9">
            <Button to="/contact" variant="primary">
              Request this supply
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Capabilities() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Energy and procurement solutions built around operational requirements."
        intro="From commercial diesel to offshore fuel logistics and broader procurement, each capability is coordinated around product, quantity, timing, logistics and documentation."
        image={IMG("1610978398445-b5d3f2b8e5c2", 2000, 1200)}
        alt="Industrial fuel storage tank farm at dusk"
      />

      <Section tone="light" className="space-y-24 py-24 lg:space-y-32 lg:py-32">
        {allCaps.map((cap, i) => (
          <CapabilityBlock key={cap.slug} cap={cap} index={i} />
        ))}
      </Section>

      <FinalCTA />
    </>
  )
}
