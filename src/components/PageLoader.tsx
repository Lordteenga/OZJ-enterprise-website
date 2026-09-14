import logoImg from "../imports/WhatsApp_Image_2026-09-09_at_21.25.53_1.png"

export default function PageLoader() {
  return (
    <div className="page-loader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy">
      {/* Grid texture */}
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="page-loader-logo relative flex flex-col items-center gap-6">
        <img
          src={logoImg}
          alt="OZJ Oil & Gas"
          className="h-20 w-auto object-contain brightness-0 invert"
        />
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
          Energy · Procurement · Marine
        </p>

        {/* Progress bar */}
        <div className="mt-2 h-[2px] w-48 overflow-hidden bg-white/10">
          <div className="page-loader-bar h-full w-full bg-orange" />
        </div>
      </div>
    </div>
  )
}
