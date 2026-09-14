import Eyebrow from "./ui/Eyebrow"

type PageHeroProps = {
  eyebrow: string
  title: string
  intro?: string
  image: string
  alt: string
}

export default function PageHero({ eyebrow, title, intro, image, alt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-navy pt-[76px]">
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy/85 to-navy/40" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/70 to-transparent" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1360px] px-6 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-24">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[64px]">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</p>}
      </div>
    </section>
  )
}
