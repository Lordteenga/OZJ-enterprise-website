import { readFile, writeFile, mkdir, rm } from "node:fs/promises"
import { render, pages, renderSeo, siteUrl, indexingEnabled } from "../.tmp-prerender/entry-server.js"

const template = (await readFile("dist/index.html", "utf8"))
  .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
  .replace(/<meta\b[^>]*(?:name="(?:description|robots|twitter:[^"]*)"|property="og:[^"]*")[^>]*>/gi, "")
for (const path of [...Object.keys(pages), "/404"]) {
  const file = path === "/" ? "dist/index.html" : path === "/404" ? "dist/404.html" : `dist${path}.html`
  const html = template.replace("</head>", `${renderSeo(path)}\n</head>`).replace('<div id="root"></div>', () => `<div id="root">${render(path)}</div>`)
  await mkdir(file.slice(0, file.lastIndexOf("/")), { recursive: true })
  await writeFile(file, html)
}
const urls = Object.entries(pages).filter(([, page]) => !page.noindex).map(([path]) => `<url><loc>${siteUrl}${path}</loc></url>`)
await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}</urlset>\n`)
await writeFile("dist/robots.txt", `User-agent: *\nAllow: /\n${indexingEnabled ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ""}`)
await rm(".tmp-prerender", { recursive: true, force: true })
console.log(`Prerendered ${Object.keys(pages).length} pages and a 404 page.`)
