import { about, whyOzj, IMG } from "../data/content"
import ozjTruckImg from "../imports/OZJ.png"
import rigImg from "../imports/gabriel-xavier-XquCLVbTYLE-unsplash.jpg"
import PageHero from "../components/PageHero"
import Section from "../components/ui/Section"
import Eyebrow from "../components/ui/Eyebrow"
import Reveal from "../components/ui/Reveal"
import { FinalCTA } from "./Home"

function Highlight({ before, mark }: { before: string; mark: string }) {
  return (
    <>
      {before}
      <span className="text-orange">{mark}</span>
    </>
  )
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="An institutional approach to energy supply."
        intro="An energy, procurement and technical services company built to keep essential operations running — through disciplined sourcing, coordinated logistics and dependable delivery."
        image={rigImg}
        alt="Offshore energy operations at sea"
      />

      {/* ABOUT OZJ */}
      <Section tone="light" className="py-24 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-navy lg:text-[56px]">
              <Highlight before="ABOUT " mark="OZJ" />
            </h2>
            <div className="mt-7 space-y-6 text-lg leading-relaxed text-ink/75">
              {about.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-2xl font-bold text-navy">Our Vision</h3>
                <span className="mt-3 block h-[3px] w-10 bg-orange" aria-hidden="true" />
                <p className="mt-4 text-[17px] leading-relaxed text-ink/75">{about.vision}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-navy">Our Mission</h3>
                <span className="mt-3 block h-[3px] w-10 bg-orange" aria-hidden="true" />
                <p className="mt-4 text-[17px] leading-relaxed text-ink/75">{about.mission}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden bg-navy">
              <img
                src={ozjTruckImg}
                alt="OZJ Oil & Gas branded tanker fleet at a port facility"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" aria-hidden="true" />
              <span className="absolute left-5 top-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/85">
                OZJ Fleet
              </span>
            </div>
          </Reveal>
        </div>

        {/* Stats row */}
        <Reveal className="mt-20 border-y border-hair">
          <div className="grid divide-y divide-hair sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {about.stats.map((s) => (
              <div key={s.label} className="px-6 py-10 text-center">
                <div className="font-display text-5xl font-extrabold tracking-tight text-orange lg:text-6xl">{s.figure}</div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/45">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* WHY OZJ */}
      <Section tone="mist" className="py-24 lg:py-32">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-navy lg:text-[52px]">
            <Highlight before="WHY " mark="OZJ" />
          </h2>
          <p className="mt-4 font-display text-xl font-semibold text-ink/70 lg:text-2xl">
            An institutional approach to energy supply.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-14 gap-y-10 md:grid-cols-2">
          {whyOzj.map((item, i) => (
            <Reveal key={item.n} delay={i * 70}>
              <div className="flex gap-5 border-t border-hair pt-6">
                <span className="font-mono text-[13px] font-medium text-orange">{item.n}</span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-navy">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  )
}
