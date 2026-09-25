# SEO configuration

The canonical production origin is `https://ozjenterprise.com`, configured in `src/seo.ts`.

`npm run build` builds the browser bundle, renders every route to static HTML and generates `sitemap.xml`, `robots.txt` and `404.html`. Vercel serves the route HTML using `cleanUrls`; do not add a catch-all rewrite to `/index.html`, which would override page metadata and proper 404 responses. Other hosts must serve the matching HTML files and return HTTP 404 for unknown paths.

Public pages are indexable in production. Careers and unknown routes are noindex. Vercel preview builds and development mode are noindex automatically; set `VITE_SEO_INDEXABLE=false` for staging on other hosts. Allowing crawling is intentional so crawlers can read the noindex directive. Vercel deployment protection may additionally restrict preview access.

Route titles, descriptions, canonical URLs and sharing metadata are maintained in `src/seo.ts`, used by both prerendering and browser navigation. Add new public routes there when adding them to `src/App.tsx`. Structured data uses existing company details only; do not invent certifications, reviews, offices or service coverage.

## Validation

- `npm run build`
- `node scripts/check-seo.mjs`
- `npx tsc --noEmit`
- Preview-indexing check: `VERCEL_ENV=preview npm run build` then `EXPECT_NOINDEX=true node scripts/check-seo.mjs`. Rebuild normally afterwards.

## Hostinger deployment

The live domain is hosted on Hostinger. Upload the **contents** of `dist/` into `public_html`, including the hidden `.htaccess` file. It maps clean URLs to their own prerendered `.html` files, including `/team` (which also has a physical directory for profiles), and serves `404.html` with a real 404 status for missing pages. Back up any existing server configuration and preserve unrelated Hostinger rules when merging. Do not use a catch-all rewrite to the homepage.

After uploading, clear Hostinger CDN cache if old 404 responses persist. Verify `/capabilities`, `/team`, `/team/akintoye-akindele`, and a nonexistent URL directly.

## Production launch

1. Publish `dist/` to the production host (Hostinger for the current domain) and ensure HTTPS works. Redirect www to the canonical apex domain in the hosting settings.
2. Deploy and check `/`, `/capabilities`, a team profile and `/sitemap.xml`. Verify an unknown URL returns HTTP 404, not 200. Use View Source to confirm page-specific text and metadata exist before JavaScript executes.
3. Add a Domain property for `ozjenterprise.com` in Google Search Console. Add Google's generated verification TXT record at the DNS provider, then verify ownership.
4. Submit `https://ozjenterprise.com/sitemap.xml`. Inspect the home, operations and contact URLs with Search Console's live URL inspection. Check organization markup with Google's Rich Results Test.
5. Monitor indexing and relevant service enquiries. Titles and descriptions target existing diesel (AGO), offshore fuel, marine logistics and procurement services; additional location or service pages need substantive, verified content.

## Outstanding business dependencies

The contact form currently displays a success state without submitting to an API or email service. Connect and test real enquiry delivery before relying on it for lead generation. The existing phone and email links remain available.

Search Console ownership verification and domain redirects require access to the relevant accounts. These are not completed by a code change. Indexing and rankings are not guaranteed by this setup.
