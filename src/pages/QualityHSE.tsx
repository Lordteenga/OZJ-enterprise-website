import { IMG } from "../data/content"
import PageHero from "../components/PageHero"
import Section from "../components/ui/Section"
import Eyebrow from "../components/ui/Eyebrow"
import Reveal from "../components/ui/Reveal"
import Button from "../components/ui/Button"
import { FinalCTA } from "./Home"

const sections = [
  {
    n: "01",
    title: "Product Quality",
    desc: "Product specification is checked against agreed client requirements and applicable regulatory or industry criteria before and during supply.",
    points: ["Specification confirmation", "Client requirement matching", "Applicable industry criteria"],
  },
  {
    n: "02",
    title: "Quantity Control",
    desc: "Delivery quantities are managed through appropriate measurement and reconciliation processes across the supply chain.",
    points: ["Measurement at key stages", "Loading and delivery checks", "Quantity reconciliation"],
  },
  {
    n: "03",
    title: "Documentation",
    desc: "Supporting delivery, product and transaction documentation is maintained in line with the agreed supply process.",
    points: ["Delivery documentation", "Product records", "Transaction records"],
  },
  {
    n: "04",
    title: "HSE",
    desc: "Operations are planned with appropriate health, safety and environmental controls, including client-specific requirements.",
    points: ["Operational planning", "Safety controls", "Client-specific HSE requirements"],
  },
  {
    n: "05",
    title: "Traceability",
    desc: "Supply-chain steps are coordinated from sourcing and loading through transportation, delivery and reconciliation.",
    points: ["Sourcing to delivery visibility", "Coordinated handovers", "End-to-end reconciliation"],
  },
  {
    n: "06",
    title: "Supply-Chain Control",
    desc: "Each transaction is coordinated around product, quantity, timing, logistics and documentation to maintain control at every stage.",
    points: ["Integrated coordination", "Defined process stages", "Controlled execution"],
  },
]

const flow = ["Client Requirement", "Sourcing", "Verification", "Loading", "Logistics", "Delivery", "Reconciliation"]

export default function QualityHSE() {
  return (
    <>
      <PageHero
        eyebrow="Quality & HSE"
        title="Professional execution is built into the supply chain."
        intro="Product, quantity, documentation, HSE and traceability are coordinated at every stage — from client requirement through to reconciliation."
        image={IMG("1581092160607-ee22621dd758", 2000, 1200)}
        alt="Engineer reviewing technical documentation at an industrial facility"
      />

      {/* Technical control diagram */}
      <Section tone="navy" className="relative overflow-hidden py-20 lg:py-24">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative">
          <Eyebrow tone="light">Supply-chain control</Eyebrow>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4">
            {flow.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="border border-hair-light px-3.5 py-2 font-mono text-xs uppercase tracking-[0.12em] text-white/80">
                  {step}
                </span>
                {i < flow.length - 1 && (
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                    <path d="M1 6h14M11 2l4 4-4 4" stroke="#f7941d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pillars */}
      <Section tone="light" className="py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <Eyebrow>The framework</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-ink lg:text-[48px]">
            Controlled at every stage.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-hair">
          {sections.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 60}>
              <div className="grid gap-6 border-b border-hair py-10 lg:grid-cols-[auto_1fr_1.2fr] lg:gap-14">
                <span className="font-mono text-sm text-orange">{s.n}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">{s.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <span key={p} className="border border-hair bg-mist px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-ink/60">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-ink/70 lg:text-base">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Button to="/contact" variant="primary">
            Discuss your requirements
          </Button>
        </div>
      </Section>

      <FinalCTA />
    </>
  )
}
