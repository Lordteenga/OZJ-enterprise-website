import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react"

type RouterContextValue = {
  path: string
  navigate: (to: string) => void
}

const RouterContext = createContext<RouterContextValue>({
  path: "/",
  navigate: () => {},
})

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => window.location.pathname || "/")

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || "/")
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])

  const navigate = useCallback((to: string) => {
    const [pathname, hash] = to.split("#")
    if (pathname && pathname !== window.location.pathname) {
      window.history.pushState({}, "", to)
      setPath(pathname)
      if (hash) {
        // allow the target page to mount before scrolling to anchor
        requestAnimationFrame(() => {
          const el = document.getElementById(hash)
          el?.scrollIntoView({ behavior: "smooth" })
        })
      } else {
        window.scrollTo({ top: 0 })
      }
    } else if (hash) {
      const el = document.getElementById(hash)
      el?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [])

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>
}

export function useRouter() {
  return useContext(RouterContext)
}

type LinkProps = {
  to: string
  className?: string
  children: ReactNode
  "aria-label"?: string
  onClick?: () => void
}

export function Link({ to, className, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter()
  return (
    <a
      href={to}
      className={className}
      aria-label={rest["aria-label"]}
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
        navigate(to)
      }}
    >
      {children}
    </a>
  )
}
