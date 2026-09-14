import { Link } from "../router"
import logoImg from "../imports/WhatsApp_Image_2026-09-09_at_21.25.53_1.png"

export default function Logo({ tone = "navy" }: { tone?: "navy" | "light" }) {
  return (
    <Link to="/" className="flex items-center" aria-label="OZJ Oil & Gas — home">
      <img
        src={logoImg}
        alt="OZJ Oil & Gas"
        className={`w-auto object-contain ${tone === "light" ? "h-16 brightness-0 invert" : "h-12"}`}
      />
    </Link>
  )
}
