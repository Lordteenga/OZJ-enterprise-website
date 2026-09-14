import { useEffect, useRef } from "react"
import { Link } from "../router"
import { industrySectors, about } from "../data/content"
import rigImg from "../imports/gabriel-xavier-XquCLVbTYLE-unsplash.jpg"
import aboutImg from "../imports/OZJ.png"
import iconCommercial from "../imports/download.svg"
import iconOffshore from "../imports/download__1_.svg"
import iconTankFarm from "../imports/download__2_.svg"
import iconVessel from "../imports/download__3_.svg"
import logoApple from "../imports/Apple_Inc..svg"
import logoChevron from "../imports/Chevron_Corporation.svg"
import logoIntel from "../imports/Intel_Corporation.svg"
import logoIBM from "../imports/International_Business_Machines_Corporation.svg"
import logoIFF from "../imports/International_Flavors___Fragrances__Inc..svg"
import logoMastercard from "../imports/Mastercard_Incorporated.svg"
import logoOracle from "../imports/Oracle_Corporation.svg"
import logoVisa from "../imports/Visa_Inc..svg"
import Section from "../components/ui/Section"
import Eyebrow from "../components/ui/Eyebrow"
import Button from "../components/ui/Button"
import Reveal from "../components/ui/Reveal"
import Counter from "../components/ui/Counter"
import SupplyChain from "../components/ui/SupplyChain"

/* ---------------- Oil Price Widget ---------------- */
function OilPriceWidget() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://www.oil-price.net/widgets/brent_crude_price_large/gen.php?lang=en"
    ref.current.appendChild(script)
    return () => { script.remove() }
  }, [])
  return <div ref={ref} className="w-full" />
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy pt-[76px]">
      <img
        src={rigImg}
        alt="Offshore oil and gas platform operating at sea"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[1360px] items-end gap-12 px-6 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:px-12 lg:pb-24">
        <div>
          <Eyebrow tone="light">Energy • Procurement • Marine • Technical Services</Eyebrow>
          <h1 className="mt-7 max-w-3xl font-display text-[40px] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[76px]">
            Reliable energy supply for operations that cannot stop.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
            OZJ Enterprise Limited delivers dependable diesel, marine, offshore and procurement solutions through
            disciplined sourcing, logistics coordination and professional execution.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button to="/contact" variant="primary">
              Request a Supply Solution
            </Button>
            <span className="text-white">
              <Button to="/capabilities" variant="secondary">
                Explore Our Capabilities
              </Button>
            </span>
          </div>
        </div>

        {/* Oil price panel — hidden until widget is confirmed working */}
        <div className="hidden" aria-hidden="true" />
      </div>
    </section>
  )
}

/* ---------------- Trust strip ---------------- */
function TrustStrip() {
  const items = [
    { big: <><Counter target={30} suffix="+" /> Years</>, small: "Industry experience" },
    { big: "24/7", small: "Supply support" },
    { big: "Commercial · Offshore · Marine", small: "Operating coverage", wide: true },
    { big: "Quality", small: "& HSE control" },
  ]
  return (
    <Section tone="navy" className="border-y border-hair-light">
      <div className="grid divide-hair-light py-2 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 90} className="px-2 py-8 lg:px-8">
            <div className={`font-display font-bold tracking-tight text-white ${it.wide ? "text-xl lg:text-2xl" : "text-3xl lg:text-4xl"}`}>
              {it.big}
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">{it.small}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* ---------------- Introduction ---------------- */
function Intro() {
  return (
    <Section id="about" tone="light" className="py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — image in rounded card */}
        <Reveal className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={aboutImg}
            alt="OZJ Oil & Gas branded tanker trucks at port facility"
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </Reveal>

        {/* Right — text */}
        <Reveal delay={120} className="flex flex-col justify-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40">Who we are</p>

          <h2 className="mt-5 font-display text-[42px] font-extrabold leading-[1.04] tracking-tight lg:text-[56px]">
            <span className="text-navy">ABOUT </span>
            <span className="text-orange">OZJ</span>
          </h2>

          <p className="mt-7 text-[16px] leading-relaxed text-ink/70">
            OZJ Enterprise Limited is an energy, procurement and technical services company focused on delivering
            reliable supply solutions to organizations operating across the Oil &amp; Gas, industrial and
            critical-infrastructure sectors. Our model combines disciplined sourcing, supplier relationships,
            logistics coordination and project execution to help clients keep essential operations running.
          </p>

          <p className="mt-5 text-[16px] leading-relaxed text-ink/70">
            Our energy offering is anchored by Diesel (AGO) supply, supported by marine and offshore delivery
            capability, bulk/tank-farm supply and vessel-to-vessel operations. We also support clients with a
            broader portfolio of petroleum products, Oil &amp; Gas equipment, electrical materials and related
            procurement requirements.
          </p>

          <div className="mt-10">
            <Button to="/capabilities" variant="primary">
              Discover OZJ
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

/* ---------------- Core capabilities ---------------- */
const capCards = [
  {
    icon: iconCommercial,
    title: "Commercial Diesel Supply",
    body: "We cover commercial Diesel services — supplies to corporate organizations, residences, government establishments, offices and estates. Our AGO service delivery is strictly NNPC/DPR compliant. We leverage high-quality Diesel delivery networks, standard metering trucks, up-to-date technologies, expert drivers and haulage expertise to deliver excellence to our esteemed clients.",
  },
  {
    icon: iconOffshore,
    title: "Offshore Platform Diesel Supply",
    body: "We provide oil and gas drilling platforms with NNPC and DPR standard quality Diesel supply services required for daily operations. We supply high-quality Diesel fuel and other AGO-related delivery services. Our delivery network is absolutely reliable even in the rough waters of West Africa's coastal regions where massive swells and harsh weather are common.",
  },
  {
    icon: iconTankFarm,
    title: "Tank Farm Diesel Supply",
    body: "We have an excellent track record in bulk diesel supply to tank farms with major brands in our portfolio. We design and create unique supply networks and transshipment solutions for every supply. Our tank farm supplies are executed with vessels, and we are open to supplementary supplies, short-term or long-term contract arrangements.",
  },
  {
    icon: iconVessel,
    title: "Vessel to Vessel Diesel Supply",
    body: "Vessel-to-Vessel supply is one of our core strengths. For clients that want us to deliver directly to their vessels, we achieve that using equivalent or larger vessel capacity. Our AGO products are in sync with NNPC/DPR standards. Whatever specification you need, wherever the supply location is, we will meet and surpass your expectations.",
  },
]

function CoreCapabilities() {
  return (
    <Section tone="mist" className="py-24 lg:py-32">
      <Reveal className="max-w-3xl">
        <Eyebrow>Core capabilities</Eyebrow>
        <h2 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-ink lg:text-[52px]">
          What we supply. How we deliver.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {capCards.map((card, i) => (
          <Reveal
            key={card.title}
            delay={i * 120}
            className="group rounded-2xl border border-hair bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md lg:p-10"
          >
            {/* Icon */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange/10">
              <img
                src={card.icon}
                alt=""
                aria-hidden="true"
                className="h-8 w-8"
                style={{
                  filter:
                    "invert(63%) sepia(94%) saturate(600%) hue-rotate(2deg) brightness(101%) contrast(97%)",
                }}
              />
            </div>

            {/* Title */}
            <h3 className="font-display text-[19px] font-bold leading-snug tracking-tight text-navy lg:text-[21px]">
              {card.title}
            </h3>

            {/* Body */}
            <p className="mt-4 text-[15px] leading-relaxed text-ink/65">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* ---------------- Supply chain ---------------- */
function SupplyChainSection() {
  return (
    <Section tone="navy" className="relative overflow-hidden py-24 lg:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="light">Supply chain</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-white lg:text-[52px]">
            From requirement to delivery.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
            Every supply transaction is coordinated around product, quantity, timing, logistics and documentation.
          </p>
        </Reveal>
        <div className="mt-16">
          <SupplyChain />
        </div>
      </div>
    </Section>
  )
}

/* ---------------- Industries we serve ---------------- */
function IndustriesSection() {
  return (
    <Section tone="light" className="py-24 lg:py-32">
      <Reveal>
        <Eyebrow>Reach</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-extrabold uppercase tracking-tight text-orange lg:text-[40px]">
          Industries We Serve
        </h2>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-ink/75">{about.industriesLine}</p>
      </Reveal>

      <Reveal className="mt-12">
        <div className="grid grid-cols-2 gap-3 lg:gap-4">
          {industrySectors.map((sector) => (
            <figure
              key={sector.name}
              className={`group relative overflow-hidden bg-navy ${
                sector.span ? "col-span-2 aspect-[21/9]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={sector.image}
                alt={`${sector.name} sector`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-3 px-5 py-4 lg:px-6 lg:py-5">
                <span className="h-px w-6 bg-orange" aria-hidden="true" />
                <span className="font-display text-xl font-bold text-white lg:text-2xl">{sector.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

/* ---------------- Clients ticker ---------------- */

const logos = [
  { src: logoVisa,       alt: "Visa",       h: "h-7"  },
  { src: logoOracle,     alt: "Oracle",     h: "h-6"  },
  { src: logoChevron,    alt: "Chevron",    h: "h-10" },
  { src: logoIntel,      alt: "Intel",      h: "h-7"  },
  { src: logoIFF,        alt: "IFF",        h: "h-8"  },
  { src: logoApple,      alt: "Apple",      h: "h-9"  },
  { src: logoIBM,        alt: "IBM",        h: "h-7"  },
  { src: logoMastercard, alt: "Mastercard", h: "h-9"  },
]

function TickerRow() {
  const doubled = [...logos, ...logos]
  return (
    <div className="overflow-hidden">
      <div className="ticker-left flex w-max items-center">
        {doubled.map((logo, i) => (
          <div key={i} className="flex min-w-max items-center px-12 py-8">
            <img
              src={logo.src}
              alt={logo.alt}
              className={`${logo.h} w-auto object-contain`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Clients() {
  return (
    <Section tone="mist" className="py-20 lg:py-28">
      <Reveal className="mb-12 max-w-3xl px-6 sm:px-8 lg:px-12">
        <Eyebrow>Clients &amp; Markets</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-tight text-ink lg:text-[44px]">
          Trusted across demanding operating environments.
        </h2>
      </Reveal>

      {/* Ticker — full bleed */}
      <div className="-mx-6 overflow-hidden border-y border-hair sm:-mx-8 lg:-mx-12">
        <TickerRow />
      </div>
    </Section>
  )
}

/* ---------------- Final CTA ---------------- */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <img
        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=2000&h=1100&fit=crop&auto=format&q=80"
        alt="Marine fuel logistics operation at an industrial port"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy/90 to-navy/60" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1360px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="light">Start a conversation</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-[56px]">
            Let us build a reliable supply programme.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Whether you require a single delivery, recurring Diesel supply, bulk movement, offshore support or broader
            procurement, OZJ can structure the right supply solution around your operational needs.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button to="/contact" variant="primary">
              Request a Supply Solution
            </Button>
            <span className="text-white">
              <Button to="/contact" variant="secondary">
                Contact OZJ
              </Button>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Intro />
      <CoreCapabilities />
      <SupplyChainSection />
      <IndustriesSection />
      <Clients />
      <FinalCTA />
    </>
  )
}
