import { renderToString } from "react-dom/server"
import App from "./App"
export { pages, renderSeo, siteUrl, indexingEnabled } from "./seo"
export function render(path: string) {
  return renderToString(<App initialPath={path} />)
}
