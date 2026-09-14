import { Link } from "../router"
import oshomaImg from "../imports/WhatsApp_Image_2026-09-14_at_01.04.54.jpeg"
import olaImg from "../imports/WhatsApp_Image_2026-09-14_at_01.06.40.jpeg"
import rigImg from "../imports/gabriel-xavier-XquCLVbTYLE-unsplash.jpg"
import PageHero from "../components/PageHero"
import Section from "../components/ui/Section"
import Eyebrow from "../components/ui/Eyebrow"
import Reveal from "../components/ui/Reveal"
import { FinalCTA } from "./Home"

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export const leaders = [
  {
    slug: "oshoma-zekeri",
    name: "Oshoma Zekeri",
    role: "Chief Executive Officer",
    image: oshomaImg,
    imageAlt: "Oshoma Zekeri, CEO of OZJ Enterprise Limited",
    tagline: "Executive MBA · Founder · Strategic Investor",
    linkedin: "https://www.linkedin.com/in/oshoma-z-cmgr-fcmi-301328282",
    stats: [
      { figure: "40+", label: "Startup investments" },
      { figure: "4", label: "Successful exits" },
      { figure: "MBA", label: "Aston Business School" },
    ],
    bio: [
      "A seasoned executive with a background in global operations and compliance for multinational firms, Oshoma has successfully transitioned his corporate expertise into a prolific career as a founder and strategic investor.",
      "With a portfolio of over 40 startup investments and 4 successful exits, he brings a rare, dual perspective to the tech ecosystem — operating as both a builder and a backer. Beyond tech, Oshoma is a highly experienced real estate investor with a multi-million-pound portfolio.",
      "Committed to fostering the next generation of talent, he has mentored numerous entrepreneurs through the complexities of launching and scaling products. Oshoma holds an Executive MBA from Aston Business School and is a dedicated advocate for innovation across the UK and the burgeoning African tech sectors.",
    ],
    expertise: ["Global Operations", "Compliance", "Venture Investing", "Real Estate", "Mentorship"],
  },
  {
    slug: "ola-joshua",
    name: "Ola Josh",
    role: "Chief Operating Officer",
    image: olaImg,
    imageAlt: "Ola Josh, COO of OZJ Enterprise Limited",
    tagline: "Investment Banking · Private Equity · M&A",
    linkedin: "https://www.linkedin.com/in/josh-ola-5439b41b4",
    stats: [
      { figure: "$2B+", label: "Capital raised" },
      { figure: "42+", label: "M&A transactions" },
      { figure: "10+", label: "Years capital markets" },
    ],
    bio: [
      "Josh is a faith-driven, impact-based investor across the continent of Africa. He has a successful track record of building a team of some of the most high-powered, experienced executives with a combined 50+ years of experience running billion-dollar companies.",
      "With experience in multibillion-dollar acquisitions and IPO listings within the first 60 days, he has built a platform capable of reaching 9–10 figure market capitalisation in 5 years. He has single-handedly delivered over 700 project presentations in less than 6 months and negotiated multiparty, multiphase 7–9 figure USD takeovers of family businesses and corporations across several sectors.",
      "His astute business sense and core expertise in leadership, management, and large-scale business development have earned him the reputation of a high-performance business leader.",
      "He has extensive experience across upstream, midstream, and downstream financing transactions within the oil and gas sector, having been involved in financing transactions exceeding $350 million in aggregate value.",
    ],
    expertise: ["Investment Banking", "Private Equity", "M&A Deal Structuring", "Capital Raising", "Capital Markets"],
  },
]

/* ---------------- Team card grid (index) ---------------- */
export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The people accountable for every delivery."
        intro="OZJ is led by operators who treat energy supply as an institutional responsibility — meet the leadership setting the standard across our UK and Nigeria operations."
        image={rigImg}
        alt="Offshore energy operations at sea"
      />

      <Section tone="light" className="py-24 lg:py-32">
        <Reveal>
          <Eyebrow>Team</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-navy lg:text-[52px]">
            Meet the <span className="text-orange">leadership</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {leaders.map((leader, i) => (
            <Reveal key={leader.slug} delay={i * 100}>
              <Link
                to={`/team/${leader.slug}`}
                className="group block overflow-hidden border border-hair bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-navy">
                  <img
                    src={leader.image}
                    alt={leader.imageAlt}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent"
                    aria-hidden="true"
                  />
                  {/* Role badge */}
                  <div className="absolute inset-x-0 bottom-0 px-6 py-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange">{leader.role}</p>
                    <h3 className="mt-1 font-display text-2xl font-extrabold tracking-tight text-white lg:text-3xl">
                      {leader.name}
                    </h3>
                  </div>
                </div>

                {/* Card footer */}
                <div className="flex items-center justify-between px-6 py-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">{leader.tagline}</p>
                  <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-navy transition-colors group-hover:text-orange">
                    View profile
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  )
}

/* ---------------- Individual profile page ---------------- */
export function TeamProfile({ slug }: { slug: string }) {
  const leader = leaders.find((l) => l.slug === slug)

  if (!leader) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6 pt-[76px]">
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange">Not Found</p>
          <h1 className="mt-4 font-display text-4xl font-bold text-navy">Profile not found</h1>
          <Link to="/team" className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-orange hover:underline">
            ← Back to Team
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Back nav */}
      <div className="pt-[76px]">
        <div className="mx-auto w-full max-w-[1360px] px-6 py-6 sm:px-8 lg:px-12">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-orange"
          >
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M13 8H3M7 12l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Team
          </Link>
        </div>
      </div>

      <Section tone="light" className="pb-24 pt-4 lg:pb-32">
        {/* Hero two-column */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* Photo */}
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative aspect-[3/4] overflow-hidden bg-navy">
              <img
                src={leader.image}
                alt={leader.imageAlt}
                className="h-full w-full object-cover object-top"
                loading="eager"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"
                aria-hidden="true"
              />
              <span className="absolute left-5 top-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">
                OZJ Leadership
              </span>
            </div>

            {/* Stats beneath photo */}
            <div className="mt-6 grid grid-cols-3 divide-x divide-hair border border-hair">
              {leader.stats.map((s) => (
                <div key={s.label} className="px-4 py-5 text-center">
                  <div className="font-display text-2xl font-extrabold tracking-tight text-orange lg:text-3xl">
                    {s.figure}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal delay={100}>
            <Eyebrow>{leader.role}</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-navy lg:text-[56px]">
              {leader.name}
            </h1>
            <p className="mt-2 font-display text-lg font-semibold text-ink/55">{leader.tagline}</p>
            <span className="mt-6 block h-[3px] w-10 bg-orange" aria-hidden="true" />

            <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-ink/75">
              {leader.bio.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>

            {/* Expertise tags */}
            <div className="mt-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">Expertise</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {leader.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="border border-hair px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect with ${leader.name} on LinkedIn`}
              className="group mt-10 inline-flex items-center gap-3 border border-hair px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-navy transition-colors hover:border-orange hover:text-orange"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span>Connect on LinkedIn</span>
            </a>
          </Reveal>
        </div>
      </Section>

      <FinalCTA />
    </>
  )
}
