import { useEffect } from "react"
import { renderSeo } from "../seo"

export default function Seo({ path }: { path: string }) {
  useEffect(() => {
    document.head.querySelectorAll('title, [data-seo], meta[name="description"], meta[name="robots"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"]').forEach((node) => node.remove())
    const template = document.createElement("template")
    template.innerHTML = renderSeo(path)
    document.head.append(template.content)
  }, [path])
  return null
}
