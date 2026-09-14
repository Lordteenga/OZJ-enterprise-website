import { useState, type FormEvent } from "react"
import { contact, IMG, supplyRequirementOptions } from "../data/content"
import Section from "../components/ui/Section"
import Eyebrow from "../components/ui/Eyebrow"
import Reveal from "../components/ui/Reveal"

type Fields = {
  fullName: string
  company: string
  email: string
  phone: string
  requirement: string
  product: string
  quantity: string
  location: string
  date: string
  notes: string
}

const empty: Fields = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  requirement: "",
  product: "",
  quantity: "",
  location: "",
  date: "",
  notes: "",
}

const inputCls =
  "w-full border border-hair bg-white px-4 py-3 text-[15px] text-ink transition-colors placeholder:text-ink/35 focus:border-navy focus:outline-none focus-visible:outline-none"
const labelCls = "mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-ink/55"

function Field({
  label,
  name,
  value,
  onChange,
  error,
  required,
  type = "text",
  placeholder,
}: {
  label: string
  name: keyof Fields
  value: string
  onChange: (name: keyof Fields, v: string) => void
  error?: string
  required?: boolean
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className={labelCls}>
        {label} {required && <span className="text-orange">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(e) => onChange(name, e.target.value)}
        className={`${inputCls} ${error ? "border-orange-600" : ""}`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 font-mono text-[11px] text-orange-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (name: keyof Fields, v: string) => {
    setValues((prev) => ({ ...prev, [name]: v }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {}
    if (!values.fullName.trim()) next.fullName = "Please enter your full name"
    if (!values.company.trim()) next.company = "Please enter your company"
    if (!values.email.trim()) next.email = "Please enter your work email"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address"
    if (!values.requirement) next.requirement = "Select a supply requirement"
    return next
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const first = document.getElementById(Object.keys(next)[0])
      first?.focus()
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[76px]">
        <img
          src={IMG("1524661135-423995f22d0b", 2000, 900)}
          alt="Port and marine logistics at dawn"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-navy/60" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1360px] px-6 pb-16 pt-20 sm:px-8 lg:px-12 lg:pb-20 lg:pt-24">
          <Eyebrow tone="light">Contact</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-[60px]">
            Tell us what you need supplied.
          </h1>
        </div>
      </section>

      <Section tone="mist" className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          {/* Form */}
          <div className="border border-hair bg-white p-7 sm:p-10">
            {submitted ? (
              <Reveal className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-navy" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#f7941d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h2 className="mt-7 font-display text-2xl font-bold tracking-tight text-ink">Supply request received.</h2>
                <p className="mt-3 max-w-md text-ink/65">
                  Thank you, {values.fullName.split(" ")[0] || "there"}. Our team will review your requirement and respond
                  to {values.email || "your email"} shortly.
                </p>
                <button
                  className="mt-8 font-mono text-[12px] uppercase tracking-[0.14em] text-navy underline underline-offset-4 hover:text-orange"
                  onClick={() => {
                    setValues(empty)
                    setSubmitted(false)
                  }}
                >
                  Submit another request
                </button>
              </Reveal>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h2 className="font-display text-xl font-semibold tracking-tight text-ink">Supply enquiry</h2>
                <p className="mt-1.5 text-sm text-ink/55">Fields marked with an orange asterisk are required.</p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <Field label="Full Name" name="fullName" value={values.fullName} onChange={update} error={errors.fullName} required />
                  <Field label="Company" name="company" value={values.company} onChange={update} error={errors.company} required />
                  <Field label="Work Email" name="email" type="email" value={values.email} onChange={update} error={errors.email} required />
                  <Field label="Phone" name="phone" type="tel" value={values.phone} onChange={update} error={errors.phone} />

                  <div className="sm:col-span-2">
                    <label htmlFor="requirement" className={labelCls}>
                      Supply Requirement <span className="text-orange">*</span>
                    </label>
                    <select
                      id="requirement"
                      name="requirement"
                      value={values.requirement}
                      aria-invalid={!!errors.requirement}
                      onChange={(e) => update("requirement", e.target.value)}
                      className={`${inputCls} ${errors.requirement ? "border-orange-600" : ""} ${values.requirement ? "text-ink" : "text-ink/35"}`}
                    >
                      <option value="">Select a requirement…</option>
                      {supplyRequirementOptions.map((o) => (
                        <option key={o} value={o} className="text-ink">
                          {o}
                        </option>
                      ))}
                    </select>
                    {errors.requirement && (
                      <p className="mt-1.5 font-mono text-[11px] text-orange-600">{errors.requirement}</p>
                    )}
                  </div>

                  <Field label="Product" name="product" value={values.product} onChange={update} placeholder="e.g. AGO / Diesel" />
                  <Field label="Estimated Quantity" name="quantity" value={values.quantity} onChange={update} placeholder="e.g. 33,000 litres" />
                  <Field label="Delivery Location" name="location" value={values.location} onChange={update} />
                  <Field label="Required Delivery Date" name="date" type="date" value={values.date} onChange={update} />

                  <div className="sm:col-span-2">
                    <label htmlFor="notes" className={labelCls}>
                      Additional Requirements
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={values.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      className={`${inputCls} resize-none`}
                      placeholder="Specification, receiving capacity, safety requirements, or anything else we should know."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 bg-orange px-7 py-4 font-medium tracking-tight text-navy transition-colors hover:bg-orange-600 hover:text-white sm:w-auto"
                >
                  Submit Supply Request
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <Reveal className="flex flex-col gap-8">
            <div className="border border-hair bg-navy p-8 text-white">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange">Direct contact</h2>
              <ul className="mt-6 space-y-5">
                <li>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">Email</div>
                  <a href={`mailto:${contact.email}`} className="mt-1 block text-lg font-medium hover:text-orange">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">Phone</div>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-1 block text-lg font-medium hover:text-orange">
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">UK Office</div>
                  <address className="mt-1 block not-italic text-base font-medium leading-relaxed">
                    Dormy House, Dunmow Road<br />
                    Hertfordshire CM23 5HR<br />
                    United Kingdom
                  </address>
                </li>
                <li>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">Nigeria Office</div>
                  <address className="mt-1 block not-italic text-base font-medium leading-relaxed">
                    12 Wile Ariyo Street<br />
                    Lekki Phase 1, Lagos<br />
                    Nigeria
                  </address>
                </li>
              </ul>
            </div>
            <div className="border border-hair bg-white p-8">
              <p className="font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                Quality products. Reliable supply. Professional execution.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/60">
                Whether you require a single delivery, recurring supply, bulk movement or offshore support, we will
                structure the right solution around your operation.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
