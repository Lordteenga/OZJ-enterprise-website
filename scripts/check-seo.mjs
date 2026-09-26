import assert from "node:assert/strict"
import { readFile, readdir, access } from "node:fs/promises"
import path from "node:path"
async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? htmlFiles(path.join(directory, entry.name)) : entry.name.endsWith(".html") ? [path.join(directory, entry.name)] : []))).flat()
}
assert.equal(await readFile("dist/.htaccess", "utf8"), await readFile("public/.htaccess", "utf8"), "Hostinger routing must be included in the deployment")
const titles = new Set()
const files = await htmlFiles("dist")
assert.equal(files.length, 13)
for (const file of files) {
  const html = await readFile(file, "utf8")
  const title = html.match(/<title[^>]*>(.*?)<\/title>/)?.[1]
  assert(title && !titles.has(title), `Missing or duplicate title: ${file}`)
  titles.add(title)
  assert.equal((html.match(/name="description"/g) || []).length, 1, file)
  assert.equal((html.match(/name="robots"/g) || []).length, 1, file)
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, file)
  assert(!html.includes('class="page-loader '), file)
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1]
  if (!file.endsWith("404.html")) assert(canonical?.startsWith("https://ozjenterprise.com/"), file)
  const excluded = file.endsWith("careers.html") || file.endsWith("404.html") || process.env.EXPECT_NOINDEX === "true"
  assert(html.includes(`content="${excluded ? 'noindex, follow' : 'index, follow, max-image-preview:large'}"`), file)
  for (const [, json] of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)) JSON.parse(json)
  for (const [, asset] of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) await access(`dist${asset}`)
}
const sitemap = await readFile("dist/sitemap.xml", "utf8")
assert.equal((sitemap.match(/<loc>/g) || []).length, 11)
assert(!sitemap.includes("careers") && !sitemap.includes("404"))
console.log(`SEO checks passed for ${files.length} HTML documents: metadata, headings, indexability, JSON-LD, assets and sitemap.`)
