# SEO-CHECKLIST — timberdrone.se

Status efter omfokusering till **ren produktionsskog** (2026-06).
Kanonisk form: `https://www.timberdrone.se` (www, https, ingen trailing slash).
Rikstäckande – ingen ort, ingen adress, inget bolagsnamn/org.nr, inget `sameAs`.

> **Viktigt om stacken:** Sajten är byggd i **Next.js 14 (App Router)**, inte
> Vite. Det betyder att server-side-rendering (SSR/SSG) redan är inbyggt –
> varje publik route prerenderas till färdig HTML. Den ursprungliga oron i
> uppdraget om "tom HTML till crawlers" gäller alltså inte denna kod.

---

## Sajtens revir (avgränsning)

**Ägs av sajten (produktionsskog):** skogsinventering, trädhöjdsmätning,
planträkning, skogsskadeinventering, beståndsinventering, skogsbruksplan-underlag,
årsavtal.

**Borttaget / utanför reviret** (ekologi/ESG/vegetationsfjärranalys samt mät-/
kartprodukter som egna tjänster): multispektralanalys, fotosyntesmätning,
kolinlagring & ESG, jaktkartering, barkborre-detektering (uppgått i
skogsskadeinventering), LiDAR-skanning, 3D-modellering, ortofoto-kartering.
Mätning/3D/ortofoto nämns numera endast **neutralt som metod**, aldrig som egen
tjänstesida eller H1.

---

## STEG 1 — Rendering ✅ (klart, framgår av Next.js)

- [x] Alla publika routes prerenderas till statisk HTML (`next build` → 40/40 sidor `○ (Static)`).
- [x] Verifierat att råkällan innehåller `<title>`, `<meta name="description">`,
      `<link rel="canonical">`, H1, brödtext och JSON-LD **utan JS** (kontroll mot
      `.next/server/app/**.html`).
- [ ] **Manuellt efter deploy:** bekräfta live med
      `curl -A "Googlebot" https://www.timberdrone.se/tjanster/tradhojdsmatning`
      (texten ska finnas i råsvaret).

## STEG 2 — Canonical ✅

- [x] `buildMetadata()` sätter absolut `alternates.canonical` per sida.
- [x] www + https + ingen trailing slash (`trailingSlash: false`).
- [x] Canonical-host läses från `COMPANY.url` (`https://www.timberdrone.se`).

## STEG 3 — Per-sida metadata ✅

- [x] Unik `title` + `description` per route via `createMetadata`/`buildMetadata`.
- [x] Open Graph + Twitter Card (`summary_large_image`).
- [x] `<html lang="sv">` i `layout.tsx`.
- [x] Nya tjänstesidor: title med primärt sökord först, description 140–160 tecken.
- [ ] **OG-bild:** `OG_DEFAULTS.imagePath` pekar på `/og-default.png` som ännu inte
      finns i `public/`. Skapa 1200×630-bild (skogsmotiv, ingen overifierad spec/text).

## STEG 4 — JSON-LD ✅

- [x] `Organization` (namn, logo, `areaServed: Country/Sweden`, e-post). Inget
      `sameAs`, ingen `LocalBusiness`, ingen adress/geo.
- [x] `Service` per tjänst (`areaServed: SE`).
- [x] `BreadcrumbList` på sidor med brödsmulor.
- [x] `FAQPage` på sidor med FAQ.
- [x] `WebSite` i layouten. `SearchAction` utelämnad (ingen sökruta finns ännu).

## STEG 5 — Crawl & indexering ✅

- [x] Dynamisk `sitemap.xml` (`src/app/sitemap.ts`) med alla publika URL:er + `lastmod`.
- [x] Borttagna sidor utelämnade ur sitemap; nya tjänstesidor tillagda.
- [x] `robots.txt` (`src/app/robots.ts`) tillåter crawl, blockerar `/api/`, pekar på sitemap.
- [x] Inga `noindex` kvar från utvecklingsfasen (`X-Robots-Tag: index, follow`).
- [x] 301-redirects för alla borttagna/omdöpta URL:er i `next.config.js`.

## STEG 6 — Innehåll & tjänstetexter ✅

Fyra dedikerade landningssidor, var och en med primärt sökord i H1, slug och
första 100 orden, logisk H2/H3-hierarki och FAQ (5–8 frågor formulerade som folk söker):

- [x] `/tjanster/skogsinventering` (befintlig – interna länkar och vokabulär rensade)
- [x] `/tjanster/tradhojdsmatning` (**ny**)
- [x] `/tjanster/plantrakning` (**ny**, ersätter `planteringsinventering`)
- [x] `/tjanster/skogsskadeinventering` (**ny**, ersätter `skadedokumentation` + `barkborre-detektering`)
- [x] Nationella signaler ("i hela Sverige", "rikstäckande") – ingen ort.
- [x] Produktionsskoglig vokabulär genomgående; inga miljö-/ekologi-/ESG-sidor.
- [x] Bild-alt med sökordsnära text (OutputShowcase, FeatureShowcase, startsidans kort).

## STEG 7 — Prestanda (Core Web Vitals) — delvis

- [x] Bilder via `next/image` (lazy som standard, AVIF/WebP via `next.config.js`).
- [x] Logotyp `priority` (LCP-element i header).
- [x] `preconnect` till Google Fonts-domäner.
- [x] Automatisk code-splitting per route (Next.js).
- [ ] **Återstår:** migrera Google Fonts till `next/font/google` (self-host) för att
      ta bort render-blockerande extern `<link rel="stylesheet">`. Se TODO i `layout.tsx`.
      Kräver nätverksåtkomst vid build.
- [ ] **Återstår:** kör Lighthouse/PageSpeed mot live-URL efter deploy och stäm av LCP/CLS/INP.

---

## Manuella steg i Google Search Console (ägaren måste göra själva)

1. **Verifiera egendomar:**
   - Domän-egenskap `timberdrone.se` (DNS-TXT) — täcker www + non-www + alla subdomäner.
   - URL-prefix-egenskap `https://www.timberdrone.se` (den kanoniska formen).
2. **Skicka in sitemap:** lägg till `https://www.timberdrone.se/sitemap.xml`.
3. **URL-inspektion + "Begär indexering"** på de viktigaste sidorna:
   - `/` (startsidan)
   - `/tjanster`
   - `/tjanster/skogsinventering`
   - `/tjanster/tradhojdsmatning`
   - `/tjanster/plantrakning`
   - `/tjanster/skogsskadeinventering`
4. **Bekräfta 301:or:** kontrollera i URL-inspektion att gamla URL:er
   (t.ex. `/tjanster/multispektralanalys`, `/tjanster/planteringsinventering`)
   pekar om korrekt och att de nya/överlevande sidorna indexeras.
5. **Följ upp** "Sidor" / "Indexering" efter någon vecka — säkerställ att de
   borttagna URL:erna faller ur indexet och att de nya tas in.

---

## Övriga noteringar / städning kvar

- Rotfilerna `index.html` och `style.css` är **kvarlevor från den statiska
  pre-Next.js-versionen** och serveras inte av Next.js. Kan tas bort vid tillfälle
  (lämnade orörda nu för att inte bredda ändringen).
- `public/multispectral_ndvi.png` används inte längre och kan rensas bort.
- Dead CSS-klasser för NDVI-gradient finns kvar i `globals.css` (oanvända, ofarliga).
- Overifierade värden är markerade i koden med `/* EJ VERIFIERAD */` respektive
  `/* MÅSTE VERIFIERAS */` enligt CLAUDE.md — fyll i fakta (noggrannhet, GSD,
  leveranstider, rikstäckning A6) när de bekräftats.
