import { RouterProvider, useRouter } from "./router"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Seo from "./components/Seo"
import Home from "./pages/Home"
import About from "./pages/About"
import Team, { TeamProfile } from "./pages/Team"
import Capabilities from "./pages/Capabilities"
import Procurement from "./pages/Procurement"
import QualityHSE from "./pages/QualityHSE"
import Contact from "./pages/Contact"

function Routes() {
  const { path } = useRouter()

  let page
  switch (path) {
    case "/about":
      page = <About />
      break
    case "/team":
      page = <Team />
      break
    case "/team/oshoma-zekeri":
      page = <TeamProfile slug="oshoma-zekeri" />
      break
    case "/team/akintoye-akindele":
      page = <TeamProfile slug="akintoye-akindele" />
      break
    case "/team/ola-joshua":
      page = <TeamProfile slug="ola-joshua" />
      break
    case "/team/mope-abudu":
      page = <TeamProfile slug="mope-abudu" />
      break
    case "/team/ozekhome-solomon-francis":
      page = <TeamProfile slug="ozekhome-solomon-francis" />
      break
    case "/capabilities":
      page = <Capabilities />
      break
    case "/procurement":
      page = <Procurement />
      break
    case "/quality-hse":
      page = <QualityHSE />
      break
    case "/contact":
      page = <Contact />
      break
    case "/careers":
      page = (
        <div className="flex min-h-[60vh] items-center justify-center px-6 pt-[76px]">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange">Coming Soon</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-navy">Careers at OZJ</h1>
            <p className="mt-4 text-ink/60">Career opportunities page — content to be supplied.</p>
          </div>
        </div>
      )
      break
    case "/":
      page = <Home />
      break
    default:
      page = <div className="mx-auto px-6 pb-24 pt-40"><h1 className="text-4xl font-bold">Page not found</h1><p className="mt-4">This page does not exist. <a href="/" className="underline">Return to the homepage</a>.</p></div>
  }

  return (
    <div className="flex min-h-full flex-col">
      <Seo path={path} />
      <Nav />
      <main className="page-enter flex-1">{page}</main>
      <Footer />
    </div>
  )
}

export default function App({ initialPath }: { initialPath?: string }) {
  return (
    <RouterProvider initialPath={initialPath}>
      <Routes />
    </RouterProvider>
  )
}
