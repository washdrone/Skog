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
