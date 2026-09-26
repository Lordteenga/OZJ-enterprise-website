import { contact } from "./data/content"

export const siteUrl = "https://ozjenterprise.com"
export const indexingEnabled = import.meta.env.VITE_SEO_INDEXABLE !== "false"
export const pages: Record<string, { title: string; description: string; noindex?: boolean }> = {
  "/": { title: "Diesel Supply & Marine Fuel Logistics in Nigeria | OZJ Oil & Gas", description: "OZJ Enterprise Limited supplies diesel (AGO), coordinates marine and offshore fuel delivery, and sources oil and gas equipment in Nigeria. Discuss your supply needs." },
  "/about": { title: "About OZJ Enterprise | Energy Supply & Procurement", description: "Learn about OZJ Enterprise Limited, our approach to diesel supply, petroleum procurement, marine logistics and technical services for essential operations." },
  "/capabilities": { title: "Diesel Supply, Offshore Fuel & Marine Logistics | OZJ", description: "Explore commercial diesel delivery, offshore platform fuel supply, bulk tank farm supply and vessel-to-vessel fuel transfer from OZJ Oil & Gas." },
  "/procurement": { title: "Petroleum Products & Oil and Gas Procurement | OZJ", description: "Source petroleum products, oil and gas equipment, electrical materials and industrial supplies through OZJ, subject to specification and availability." },
  "/quality-hse": { title: "Quality, Health, Safety & Environment | OZJ Oil & Gas", description: "See how OZJ coordinates product verification, quantity control, documentation, traceability and HSE requirements throughout the fuel supply process." },
  "/team": { title: "Leadership Team | OZJ Oil & Gas", description: "Meet OZJ Oil & Gas leadership: Dr. Akintoye Akindele, Oshoma Zekeri, Ola Josh and Mope Abudu. Explore their experience in investment, operations, governance and energy infrastructure." },
  "/team/akintoye-akindele": { title: "Dr. Akintoye Akindele | Chairman, OZJ Oil & Gas", description: "Meet Dr. Akintoye Akindele, Chairman of OZJ Oil and Gas, with experience in private equity, entrepreneurship, corporate finance and energy infrastructure." },
  "/team/oshoma-zekeri": { title: "Oshoma Zekeri | Chief Executive Officer, OZJ", description: "Meet Oshoma Zekeri, Chief Executive Officer of OZJ Enterprise Limited, with experience in global operations, compliance, investment and entrepreneurship." },
  "/team/ola-joshua": { title: "Ola Josh | Chief Operating Officer, OZJ", description: "Meet Ola Josh, Chief Operating Officer of OZJ Enterprise Limited, with experience in investment banking, private equity and oil and gas financing." },
  "/team/mope-abudu": { title: "Mope Abudu | Non Executive Director, OZJ", description: "Meet Mope Abudu, Non Executive Director at OZJ Enterprise Limited, with 30+ years experience in finance, governance, venture capital and management consulting." },
  "/contact": { title: "Contact OZJ | Diesel Supply & Procurement Enquiries", description: "Contact OZJ Enterprise about diesel supply, marine fuel delivery or procurement. Call +234 708 757 9641 or email sales@ozjenterprise.com." },
  "/careers": { title: "Careers | OZJ Oil & Gas", description: "Career opportunities at OZJ Enterprise Limited.", noindex: true },
}
const escape = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
export function renderSeo(path: string) {
  const page = pages[path] ?? { title: "Page Not Found | OZJ Oil & Gas", description: "The requested page could not be found.", noindex: true }
  const canonical = siteUrl + (path === "/" ? "/" : path)
  const image = `${siteUrl}/ozj-diesel-delivery-preview.png`
  const meta = (name: string, content: string, property = false) => `<meta data-seo ${property ? "property" : "name"}="${name}" content="${escape(content)}">`
  const graph: object[] = []
  if (path === "/" || path === "/about") graph.push({
    "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "OZJ Oil & Gas", legalName: "OZJ Enterprise Limited", url: siteUrl,
    email: contact.email, telephone: contact.phone,
    description: pages["/about"].description,
  })
  if (path === "/") graph.push({ "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "OZJ Oil & Gas", alternateName: "OZJ Enterprise Limited", publisher: { "@id": `${siteUrl}/#organization` } })
  return [
    `<title data-seo>${escape(page.title)}</title>`,
    meta("description", page.description),
    meta("robots", page.noindex || !indexingEnabled ? "noindex, follow" : "index, follow, max-image-preview:large"),
    ...(pages[path] ? [`<link data-seo rel="canonical" href="${escape(canonical)}">`] : []),
    meta("og:title", page.title, true), meta("og:description", page.description, true), meta("og:type", "website", true),
    meta("og:url", canonical, true), meta("og:site_name", "OZJ Oil & Gas", true), meta("og:locale", "en_NG", true),
    meta("og:image", image, true), meta("og:image:alt", "OZJ Oil & Gas diesel delivery tanker", true),
    meta("twitter:card", "summary_large_image"), meta("twitter:title", page.title), meta("twitter:description", page.description), meta("twitter:image", image),
    ...(graph.length ? [`<script data-seo type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c")}</script>`] : []),
  ].join("\n")
}
