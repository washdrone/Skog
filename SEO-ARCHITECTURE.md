# TimberDrone — SEO-arkitektur

> Denna dokumentation beskriver den centrala SEO-infrastrukturen.
> Alla nya sidor ska följa mönstren som beskrivs här.

---

## Filstruktur

```
src/lib/seo/
├── business-data.ts   # Central källa för verifierade affärsfakta
├── metadata.ts        # buildMetadata() — genererar Next.js Metadata-objekt
├── schema.ts          # JSON-LD-generatorer (Organization, Service, FAQ, etc.)
└── index.ts           # Samlad re-export

src/lib/
├── metadata.ts        # Re-export (bakåtkompatibilitet)
└── schema.ts          # Re-export (bakåtkompatibilitet)
```

---

## business-data.ts

Central sanningskälla. All metadata och structured data läser härifrån.

| Export | Typ | Beskrivning |
|--------|-----|-------------|
| `COMPANY` | object | Namn, URL, logo, e-post, telefon (undefined tills verifierat), adress (undefined) |
| `SOCIAL_PROFILES` | array | Sociala medier-profiler — tom tills konton skapats |
| `SERVICE_AREA` | object | Land och landskod |
| `OG_DEFAULTS` | object | Locale, typ, standardbild |
| `CAPABILITIES` | tuple | Tjänsteområden (skogsinventering, multispektral, etc.) |
| `COORDINATE_SYSTEM` | string | SWEREF99 TM |
| `DELIVERY_FORMATS` | tuple | GeoTIFF, GeoPackage, Shapefile, LAS/LAZ |

### Att lägga till verifierade uppgifter

1. Öppna `business-data.ts`
2. Ersätt `undefined` med det verifierade värdet
3. Schema-generatorerna anpassar sig automatiskt:
   - `COMPANY.phone` → visas i Organization-schema och på Om oss-sidan
   - `COMPANY.address` → Organization kan uppgraderas till LocalBusiness
   - `SOCIAL_PROFILES` → sameAs-array i Organization-schema

---

## buildMetadata()

Ersätter `createMetadata()` (som finns kvar som alias).

```tsx
import { buildMetadata } from '@/lib/seo/metadata'

export const metadata = buildMetadata({
  title: 'Sidtitel här',          // → "%s | TimberDrone" via template
  description: 'Meta description...',
  path: '/tjanster/skogsinventering',
  ogType: 'article',              // valfritt, default 'website'
  ogImage: '/og-skogsinventering.png', // valfritt, faller tillbaka till default
  noIndex: false,                 // valfritt
})
```

### Vad den genererar
- `title` — via layout-template `%s | TimberDrone`
- `description`
- `alternates.canonical` — full URL från path
- `openGraph` — med titel, beskrivning, bild (fallback till default), locale
- `twitter` — summary_large_image-kort
- `robots` — `noIndex` styr indexering

---

## Schema-generatorer

| Funktion | Användning |
|----------|-----------|
| `organizationSchema()` | Startsida, Om oss |
| `websiteSchema()` | Root layout (globalt) |
| `serviceSchema({ name, description, url })` | Tjänstesidor |
| `faqSchema(items)` | Sidor med FAQ-block |
| `breadcrumbSchema(items)` | Alla undersidor |
| `howToSchema({ name, description, steps })` | Processidor |

### Regler
- Alla scheman läser företagsdata från `business-data.ts`
- Organization används tills adress+telefon verifierats (då → LocalBusiness)
- SearchAction läggs till i WebSite-schema när sökfunktion implementeras
- Inget Review/AggregateRating-schema utan verifierade omdömen

---

## URL-struktur och redirects

### Primär struktur (indexeras)
```
/                     Startsida
/tjanster             Tjänste-hub
/tjanster/[slug]      Enskild tjänst (14 st)
/kunskap              Kunskaps-hub
/kunskap/[slug]       Enskild artikel (11 st)
/for/[segment]        Målgruppssida (5 st)
/platser              Plats-hub
/platser/[slug]       Regional sida (7 st)
/offert               Offertförfrågan
/om-oss               Om företaget
```

### Redirectade (301)
```
/areamatning-och-skogsbruk          → /tjanster
/areamatning-och-skogsbruk/kontakt  → /offert
/areamatning-och-skogsbruk/areamatning → /tjanster/skogsinventering
/areamatning-och-skogsbruk/inventering → /tjanster/bestandsinventering
/areamatning-och-skogsbruk/avverkningsunderlag → /tjanster/skogsbruksplan-underlag
/areamatning-och-skogsbruk/skadeinventering → /tjanster/skadedokumentation
/areamatning-och-skogsbruk/planteringsuppfoljning → /tjanster/planteringsinventering
/vegetationsanalys                  → /tjanster
/vegetationsanalys/ndvi-kartlaggning → /tjanster/multispektralanalys
/vegetationsanalys/stressanalys     → /tjanster/barkborre-detektering
/vegetationsanalys/uppfoljning-over-tid → /tjanster/multispektralanalys
```

### Ej indexerade men inte redirectade
```
/areamatning-och-skogsbruk/leveranser  (unikt leveransinnehåll, behålls)
/areamatning-och-skogsbruk/faq         (unikt FAQ-innehåll, behålls)
/areamatning-och-skogsbruk/case        (ej i sitemap — case ej verifierade)
```

---

## Content verification

Se `CONTENT-VERIFICATION.md` för fullständig lista. Sammanfattning:

### Verifierat (säkert att använda)
- Företagsnamn: TimberDrone
- E-post: info@timberdrone.se
- Webbplats: timberdrone.se
- Tjänstetyper: se `CAPABILITIES` i business-data.ts
- NDVI-formel och grundläggande vegetationsindex-vetenskap
- Sentinel-2 specifikationer (10 m, fritt, 5 dagars revisit)

### Ej verifierat (markerat i koden, får inte publiceras som fakta)
- Telefonnummer, adress
- Svarstid "24 timmar" (A1)
- Rikstäckande "Hela Sverige" (A6)
- GSD-värden "1-5 cm" / "2-5 cm" (B1)
- Drönarmodell, sensormodell, LiDAR-system (F1-F6)
- EASA-kategori, pilotcertifiering, försäkring (G1-G7)
- Alla case-studier (E1-E3)
- Vetenskapliga siffror utan källa (H1-H7)

### Nästa steg (kräver manuell verifiering)
1. Bekräfta telefonnummer → `COMPANY.phone` i business-data.ts
2. Bekräfta adress → `COMPANY.address` i business-data.ts
3. Bekräfta affärslöften (svarstid, täckning, leveranstid)
4. Bekräfta utrustning → kan då nämnas på tjänstesidor
5. Bekräfta case → återaktivera i sitemap
6. Skapa OG-bild (1200x630) → `/public/og-default.png`
7. Migrera till next/font/google vid deploy med nätverksåtkomst

---

## Post-refactor QA (2026-04-05)

### Verifierat

**Redirects (11 st)**
- Alla destinations existerar som page.tsx-filer
- Inga redirect-kedjor detekterade
- Inga destinations är själva redirect-källor
- Source-filer (page.tsx under legacy-paths) kvarstår som dead code — Next.js
  prioriterar redirects korrekt

**Internlänkar**
- Alla komponenter (Header, Footer, CTABand, StickyCTA, OutputShowcase,
  ServicePageLayout) pekar nu till canonical /tjanster/* targets
- Alla sidor under /kunskap/*, /for/*, /platser/* pekar till canonical targets
- Enda kvarvarande legacy-länk: `/areamatning-och-skogsbruk/leveranser` i
  `/for/skogsbolag/page.tsx` — korrekt, leveranssidan är ej redirectad

**Canonical/metadata**
- Alla 45 aktiva sidor använder `createMetadata()` eller `buildMetadata()`
- Legacy-sidor under /areamatning-och-skogsbruk och /vegetationsanalys
  använder manuella Metadata-objekt men serveras aldrig pga 301-redirects
- Startsidan migrerad från manuellt objekt till `buildMetadata()`

**Business-data centralisering**
- `COMPANY.email` används i: CTABand, Footer, offert/page, api/lead/route
- Kvarvarande hårdkodade e-poster: integritetspolicy, cookiepolicy (juridisk prosa
  — acceptabelt), 2 filer under redirectade legacy-sidor (ej servade)

**Overifierade affärslöften — neutraliserade**
- "EASA-certifierad" → "Regelefterlevnad" (TrustBlock)
- "inom 24 timmar" borttaget från: CTABand, offert/page, tjanster/page, LeadForm
- "Hela Sverige" neutraliserat på startsida (FAQ + benefits)
- "1-5 cm" / "Hög" markupplösning → "Centimeternivå" på startsida och tjänstehub

### Fortfarande kräver manuell verifiering
- "hela Sverige" kvarstår i: /tjanster/page.tsx (hero subheadline),
  /platser/page.tsx (titel + beskrivning) — detta är regionssidor där
  formulering sannolikt är rimlig men bör bekräftas (A6)
- Kvarvarande "24 timmar" i: 3 legacy-sidor (redirectade, ej servade)
- Case-studier (/areamatning-och-skogsbruk/case) — ej i sitemap, ej länkade
- Telefonnummer, adress, utrustning, certifieringar — se CONTENT-VERIFICATION.md

### Content-ytor säkra att expandera
- **Nya /tjanster/*-sidor** — använd `createMetadata()`, `serviceSchema()`,
  `breadcrumbSchema()`, lägg till i sitemap.ts
- **Nya /kunskap/*-artiklar** — använd `createMetadata({ ogType: 'article' })`,
  `faqSchema()`, länka till relaterade /tjanster-sidor
- **Nya /for/*-målgruppssidor** — använd `createMetadata()`, `breadcrumbSchema()`,
  länka till relevanta /tjanster-sidor
- **Nya /platser/*-regionsidor** — använd `createMetadata()`, länka till
  /tjanster-sidor (ej till legacy-paths)

---

## Final stabilization before content expansion (2026-04-05)

### Stängda risker

**Geografiska claims (A6)**
- "hela Sverige", "rikstäckande", "nationell täckning" borttagna från alla aktiva
  sidor och komponenter: schema.ts, page.tsx (startsida), tjanster/page.tsx,
  platser/page.tsx, Footer.tsx, FeatureShowcase.tsx
- Kvarvarande formuleringar som inte är geografiska löften utan kontextuella
  (t.ex. "från syd till norr") har behållits

**Dead code (legacy-sidor)**
- 12 page.tsx-filer under redirectade paths borttagna:
  - /areamatning-och-skogsbruk/ (8 filer: hub, areamatning, inventering,
    avverkningsunderlag, skadeinventering, planteringsuppfoljning, kontakt, case)
  - /vegetationsanalys/ (4 filer: hub, ndvi-kartlaggning, stressanalys,
    uppfoljning-over-tid)
- Tomma mappar borttagna (/vegetationsanalys/ helt borttagen)
- Kvarvarande under /areamatning-och-skogsbruk/: leveranser (unikt innehåll)
  och faq (unikt innehåll) — i sitemap, ej redirectade

**Business-data centralisering**
- Alla aktiva komponenter och API-routes använder COMPANY.email
- Hårdkodade e-poster i integritetspolicy/cookiepolicy lämnas medvetet
  (juridisk prosa där interpolering skulle försämra läsbarhet)

**OG-bild**
- Path `/og-default.png` refereras konsekvent från en enda plats (business-data.ts)
- buildMetadata() och layout.tsx propagerar automatiskt
- **Filen existerar inte fysiskt** — manuell åtgärd krävs

### Manuella verifieringar som fortfarande återstår
1. Telefonnummer → `COMPANY.phone` i business-data.ts (D2)
2. Adress → `COMPANY.address` i business-data.ts (D3)
3. Geografisk täckning — om rikstäckning kan bekräftas, återinför
   formuleringar med "hela Sverige" (A6)
4. Svarstid — om "24 timmar" kan bekräftas, återinför på offert-sidan (A1)
5. Utrustning — drönarmodell, sensormodell, LiDAR-system (F1-F6)
6. Certifieringar — EASA-kategori, försäkring (G1-G7)
7. OG-bild — skapa `/public/og-default.png` (1200x630)
8. Case-studier — verifiera med faktiska kunder (E1-E3)

### Varför kodbasen nu är tryggare för content-expansion
1. **En sanningskälla:** Alla affärsfakta läses från `business-data.ts` —
   ändra en gång, uppdateras överallt
2. **Inga overifierade löften:** Svarstid, täckning, certifiering och GSD
   är neutraliserade eller borttagna — ny copy kan skrivas utan att ärva
   gamla risker
3. **Ingen dead code:** Legacy-sidor borttagna, redirects hanterar inlänkar,
   inga filer konkurrerar om samma intent
4. **Konsekvent metadata:** `buildMetadata()` genererar title, canonical,
   OG, Twitter-kort — nya sidor kan inte missa något
5. **Konsekvent schema:** Alla generatorer läser från business-data —
   schema uppgraderas automatiskt när verifierade uppgifter läggs till
6. **Tydlig internlänkning:** Alla sidor pekar till canonical /tjanster/*
   targets — inga legacy-path-läckor
