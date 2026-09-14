import { IMG, industrialProducts, petroleumProducts } from "../data/content"
import PageHero from "../components/PageHero"
import Section from "../components/ui/Section"
import Eyebrow from "../components/ui/Eyebrow"
import Button from "../components/ui/Button"
import Reveal from "../components/ui/Reveal"

const workflow = [
  { n: "01", title: "Requirement", desc: "Capture product, specification, quantity, location and timing." },
  { n: "02", title: "Sourcing", desc: "Identify suitable supply and commercial options." },
  { n: "03", title: "Supplier Coordination", desc: "Coordinate suppliers against the agreed requirement." },
  { n: "04", title: "Verification", desc: "Confirm product specification and quantity." },
  { n: "05", title: "Logistics", desc: "Coordinate transportation and marine logistics." },
  { n: "06", title: "Delivery", desc: "Execute controlled delivery and handover." },
]

export default function Procurement() {
  return (
    <>
      <PageHero
        eyebrow="Procurement"
        title="Beyond Diesel. A broader supply platform."
        intro="In addition to Diesel (AGO), OZJ can support sourcing across petroleum products, Oil & Gas equipment, electrical materials and industrial supplies — subject to client specification and product availability."
        image={IMG("1553413077-190dd305871c", 2000, 1200)}
        alt="Industrial warehouse and procurement logistics"
      />

      {/* Product categories */}
      <Section tone="light" className="py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <Eyebrow>What we can source</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-ink lg:text-[48px]">
            Petroleum products and industrial procurement.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="border border-hair bg-mist p-8 lg:p-10">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange">Petroleum Products</h3>
            <ul className="mt-6 grid gap-px overflow-hidden border border-hair bg-hair sm:grid-cols-2">
              {petroleumProducts.map((p) => (
                <li key={p} className="bg-white px-5 py-4 text-[15px] font-medium text-ink/80">{p}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="border border-hair bg-mist p-8 lg:p-10">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange">Industrial &amp; Technical</h3>
            <ul className="mt-6 grid gap-px overflow-hidden border border-hair bg-hair">
              {industrialProducts.map((p) => (
                <li key={p} className="bg-white px-5 py-4 text-[15px] font-medium text-ink/80">{p}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink/55">
              Sourcing and supply are subject to client specification and product availability.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Sourcing workflow */}
      <Section tone="navy" className="relative overflow-hidden py-24 lg:py-32">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative">
          <Reveal className="max-w-3xl">
            <Eyebrow tone="light">How it works</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-white lg:text-[48px]">
              An elegant sourcing workflow.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-hair-light bg-hair-light sm:grid-cols-2 lg:grid-cols-3">
            {workflow.map((step) => (
              <Reveal key={step.n} className="bg-navy p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-sm text-orange">{step.n}</span>
                  <span className="h-px w-10 bg-hair-light" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold uppercase tracking-wide text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{step.desc}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Button to="/contact" variant="primary">
              Discuss a Procurement Requirement
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
