// Central content source for the OZJ Enterprise site.
// Only facts supplied in the brief are used. No fabricated stats/clients/titles.

import ozjTruckImg from "../imports/OZJ.png"
import oilRigImg from "../imports/gabriel-xavier-XquCLVbTYLE-unsplash.jpg"
import tankFarmImg from "../imports/imgi_9_EBOK-Image-1.jpg"
import marineImg from "../imports/WhatsApp_Image_2026-09-08_at_16.02.17.jpeg"

export const IMG =
  (id: string, w: number, h: number) =>
    `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

export const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Operations", to: "/capabilities" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
]

export const contact = {
  email: "sales@ozjenterprise.com",
  phone: "+234 708 757 9641",
  website: "ozjenterprise.com",
  location: "Nigeria",
}

export const capabilities = [
  {
    slug: "commercial-diesel",
    n: "01",
    title: "Commercial Diesel",
    short:
      "Reliable diesel delivery for offices, facilities, estates, industrial sites and recurring operational requirements.",
    image: ozjTruckImg,
    alt: "OZJ Oil & Gas branded tanker trucks at port facility",
    overview:
      "Dependable Diesel (AGO) supply for organisations that cannot afford operational interruption — commercial buildings, estates, manufacturing plants, data-critical facilities and multi-site operations.",
    coordinate: [
      "Product specification and quantity confirmation",
      "Scheduled and on-demand delivery windows",
      "Receiving capacity and site access",
      "Delivery documentation and reconciliation",
    ],
    requirements: [
      "Recurring or scheduled Diesel supply",
      "Multiple delivery locations",
      "Defined receiving and storage capacity",
      "Predictable operational continuity",
    ],
  },
  {
    slug: "offshore-platform-diesel",
    n: "02",
    title: "Offshore & Platform Diesel",
    short:
      "Marine-enabled fuel logistics for offshore platforms, FPSO/FSO operations, marine vessels and remote industrial assets.",
    image: oilRigImg,
    alt: "Offshore oil and gas platform operating at sea",
    overview:
      "Marine-enabled fuel logistics engineered around the realities of offshore operations — remote assets, weather windows, receiving vessels and strict safety procedures.",
    coordinate: [
      "Marine logistics and vessel coordination",
      "Delivery location and weather windows",
      "Product quantity and quality verification",
      "Safety requirements and operating procedures",
    ],
    requirements: [
      "Offshore platform or FPSO/FSO supply",
      "Remote industrial assets",
      "Marine vessel bunkering",
      "Time-critical delivery coordination",
    ],
  },
  {
    slug: "tank-farm-supply",
    n: "03",
    title: "Tank Farm Supply",
    short:
      "Bulk movement, transshipment and structured supply programmes built around volume, receiving capacity, delivery windows and logistics.",
    image: tankFarmImg,
    alt: "Large tanker vessel for bulk fuel supply operations",
    overview:
      "Structured bulk supply programmes coordinated around volume, receiving capacity, delivery windows and multi-modal logistics for high-throughput operations.",
    coordinate: [
      "Bulk movement and transshipment",
      "Volume and receiving-capacity planning",
      "Delivery-window scheduling",
      "Logistics and documentation",
    ],
    requirements: [
      "High-volume, structured supply",
      "Defined receiving infrastructure",
      "Programme-based delivery windows",
      "Coordinated bulk logistics",
    ],
  },
  {
    slug: "vessel-to-vessel",
    n: "04",
    title: "Vessel-to-Vessel",
    short:
      "Controlled marine fuel transfer coordinated around receiving vessels, delivery location, product quantity, safety requirements and operating procedures.",
    image: IMG("1494412574643-ff11b0a5c1c3", 1200, 900),
    alt: "Marine vessels conducting fuel transfer operations at port",
    overview:
      "Controlled marine fuel transfer between vessels, coordinated end-to-end around receiving vessels, delivery location, product quantity and rigorous safety procedures.",
    coordinate: [
      "Receiving vessel and location",
      "Product quantity and specification",
      "Safety requirements and controls",
      "Standard operating procedures",
    ],
    requirements: [
      "Marine fuel transfer",
      "Defined receiving vessel",
      "Controlled transfer procedures",
      "Documented safety compliance",
    ],
  },
]

// Additional capability sections that appear only on the Capabilities page
export const extraCapabilities = [
  {
    slug: "procurement",
    n: "05",
    title: "Procurement",
    short:
      "Broader sourcing across petroleum products, Oil & Gas equipment, electrical materials and industrial supplies, subject to specification and availability.",
    image: IMG("1553413077-190dd305871c", 1200, 900),
    alt: "Industrial procurement and warehouse logistics",
    overview:
      "A broader procurement platform that lets clients consolidate petroleum products, Oil & Gas equipment, electrical materials and industrial supplies through a single commercial partner.",
    coordinate: [
      "Requirement and specification capture",
      "Supplier identification and coordination",
      "Product verification",
      "Logistics and delivery",
    ],
    requirements: [
      "Multi-category sourcing",
      "Specification-driven supply",
      "Consolidated procurement",
      "Subject to product availability",
    ],
  },
  {
    slug: "marine-logistics",
    n: "06",
    title: "Marine Logistics",
    short:
      "Integrated marine and offshore logistics coordination connecting sourcing, loading, transportation and controlled delivery.",
    image: marineImg,
    alt: "Port cranes and container terminal marine logistics",
    overview:
      "Integrated marine logistics coordination that connects the moving parts — loading, transportation, marine movement and controlled delivery — across offshore and port environments.",
    coordinate: [
      "Loading and documentation",
      "Marine and inland transportation",
      "Delivery-location coordination",
      "Reconciliation on delivery",
    ],
    requirements: [
      "Marine or offshore delivery",
      "Multi-modal movement",
      "Port and vessel coordination",
      "Documented handover",
    ],
  },
]

export const about = {
  intro: [
    "OZJ Enterprise Limited is an energy, procurement and technical services company focused on delivering reliable supply solutions to organizations operating across the Oil & Gas, industrial and critical-infrastructure sectors. Our model combines disciplined sourcing, supplier relationships, logistics coordination and project execution to help clients keep essential operations running.",
    "Our energy offering is anchored by Diesel (AGO) supply, supported by marine and offshore delivery capability, bulk/tank-farm supply and vessel-to-vessel operations. We also support clients with a broader portfolio of petroleum products, Oil & Gas equipment, electrical materials and related procurement requirements.",
  ],
  vision:
    "To build a trusted African energy and procurement platform known for reliable supply, disciplined execution and long-term value creation for institutional clients.",
  mission:
    "To deliver dependable energy products and procurement solutions through quality-focused sourcing, responsive logistics, strong supplier networks and a culture of safety, integrity and operational excellence.",
  stats: [
    { figure: "4", label: "Delivery Channels" },
    { figure: "CORE", label: "Supply Pillar" },
    { figure: "24/7", label: "Response Mindset" },
  ],
  industriesLine:
    "Energy & Oil & Gas · Banking & Financial Services · Manufacturing · Construction · Real Estate & Facilities · Telecoms · Government & Institutions · Marine · Hospitality · Education · Critical Infrastructure",
}

export const industrySectors = [
  { name: "Oil and Gas", image: oilRigImg, span: true },
  { name: "Power", image: IMG("1473341304170-971dccb5ac1e", 1000, 1000), span: false },
  { name: "Marine", image: IMG("1568347877321-f8935c7dc5a3", 1000, 1000), span: false },
  { name: "Mining", image: IMG("1504307651254-35680f356dfd", 1000, 1000), span: false },
  { name: "Chemicals", image: IMG("1581091226825-a6a2a5aee158", 1000, 1000), span: false },
]

export const supplyChain = [
  { n: "01", title: "Requirement", desc: "Understand quantity, location, timing and specification." },
  { n: "02", title: "Sourcing", desc: "Identify suitable supply and commercial options." },
  { n: "03", title: "Verification", desc: "Confirm product specification and quantity." },
  { n: "04", title: "Loading", desc: "Coordinate loading and required documentation." },
  { n: "05", title: "Logistics", desc: "Coordinate transportation and marine logistics." },
  { n: "06", title: "Delivery", desc: "Execute controlled delivery." },
  { n: "07", title: "Reconciliation", desc: "Complete quantity and documentation reconciliation." },
]

export const petroleumProducts = [
  "AGO / Diesel",
  "ATK / Jet Fuel",
  "DPK / Kerosene",
  "PMS",
  "Fuel Oil",
  "Engine & Lubricating Oils",
  "LNG",
  "LPG",
]

export const industrialProducts = [
  "Oil & Gas Equipment",
  "Electrical Materials",
  "MRO / Industrial Consumables",
  "Marine & Offshore Supplies",
]

export const industries = [
  { name: "Energy & Oil & Gas", image: IMG("1497435334941-8c899ee9e8e9", 800, 800) },
  { name: "Marine", image: IMG("1605281317010-fe5ffe798166", 800, 800) },
  { name: "Manufacturing", image: IMG("1581091226825-a6a2a5aee158", 800, 800) },
  { name: "Construction", image: IMG("1504307651254-35680f356dfd", 800, 800) },
  { name: "Banking & Financial Services", image: null },
  { name: "Telecoms", image: null },
  { name: "Real Estate & Facilities", image: IMG("1486406146926-c627a92ad1ab", 800, 800) },
  { name: "Government & Institutions", image: null },
  { name: "Hospitality", image: null },
  { name: "Education", image: null },
  { name: "Critical Infrastructure", image: IMG("1473341304170-971dccb5ac1e", 800, 800) },
]

export const whyOzj = [
  {
    n: "01",
    title: "Reliable Supply Network",
    desc: "We build supply around availability, timing and delivery requirements rather than simply quoting a product.",
  },
  {
    n: "02",
    title: "Multi-Modal Logistics",
    desc: "Commercial, bulk, marine and offshore requirements can be coordinated through an integrated delivery model.",
  },
  {
    n: "03",
    title: "One Commercial Partner",
    desc: "Clients can consolidate Diesel, petroleum products, Oil & Gas equipment and related procurement requirements.",
  },
  {
    n: "04",
    title: "Responsive Execution",
    desc: "We prioritize clear communication, quotation discipline, documentation and delivery follow-through.",
  },
  {
    n: "05",
    title: "Scalable Delivery",
    desc: "Our model can support individual deliveries, recurring supply, project requirements or larger institutional programmes.",
  },
]

export const hsePillars = [
  {
    title: "Product",
    desc: "Product specification is checked against agreed client requirements and applicable regulatory or industry criteria.",
  },
  {
    title: "Quantity",
    desc: "Delivery quantities are managed through appropriate measurement and reconciliation processes.",
  },
  {
    title: "Documentation",
    desc: "Supporting delivery, product and transaction documentation is maintained in line with the agreed supply process.",
  },
  {
    title: "HSE",
    desc: "Operations are planned with appropriate health, safety and environmental controls, including client-specific requirements.",
  },
  {
    title: "Traceability",
    desc: "Supply-chain steps are coordinated from sourcing and loading through transportation, delivery and reconciliation.",
  },
]

export const team = [
  { name: "Oshoma Zekeri", initials: "OZ" },
  { name: "Ola Josh", initials: "OJ" },
  { name: "Mope Abudu", initials: "MA" },
  { name: "Abiodun Okeneye", initials: "AO" },
]

// Placeholder client names (brief: do not invent client relationships — these are
// clearly-marked sector placeholders, not real client claims).
export const clientPlaceholders = [
  "Energy Sector",
  "Marine Operator",
  "Manufacturer",
  "Construction",
  "Financial Services",
  "Telecoms",
  "Facilities",
  "Institution",
]

export const supplyRequirementOptions = [
  "Commercial Diesel",
  "Offshore Diesel",
  "Tank Farm Supply",
  "Vessel-to-Vessel",
  "Petroleum Products",
  "Oil & Gas Equipment",
  "Industrial Supplies",
  "Marine & Offshore Supplies",
  "Other",
]
