# SEO & AEO Optimeringsplan — TimberDrone

## Nuläge
- Sajten använder fortfarande **"WashDrone"** som varumärke — ska vara **"TimberDrone"**
- Next.js 14 med SSR (bra grund), TypeScript, Tailwind CSS
- 15 sidor finns, men URL-strukturen matchar inte SEO-strategin
- Grundläggande schema markup finns (LocalBusiness, Service, FAQ, Breadcrumb)
- Meta-taggar finns men är optimerade för "WashDrone", inte strategins sökord
- Saknar: regionala sidor, kundsegmentsidor, kunskapssidor, blogg, offertformulär på root-nivå

---

## Fas 1 — Kritisk grund (denna implementation)

### 1. Varumärkesbyte: WashDrone → TimberDrone
- Uppdatera `SITE_NAME` och `SITE_URL` i `src/lib/metadata.ts` till "TimberDrone" / "https://timberdrone.se"
- Byt alla "WashDrone"-referenser i layout, header, footer, alla sidor
- Uppdatera schema markup i `src/lib/schema.ts`
- Uppdatera sitemap.ts och robots.ts med ny domän

### 2. Meta-taggar optimerade efter sökordsstrategin
- **Startsida**: Title: "TimberDrone | Skogsinventering & Multispektralanalys med Drönare i Sverige"
- **Tjänstesidor**: Unika title/description per sida med primärsökord från strategin
- Uppdatera Open Graph-taggar med nya titlar/beskrivningar
- Säkerställ att varje sida har canonical URL

### 3. Schema Markup — utöka
- Utöka `organizationSchema` med korrekt TimberDrone-info, email, serviceArea (alla 21 län)
- Lägg till `HowTo`-schema på metodiksidor
- Lägg till `BreadcrumbList` på alla sidor som saknar det
- Förbättra `FAQPage`-schema — lägg till FAQ-sektioner på fler tjänstesidor

### 4. URL-struktur — nya sidor enligt strategin
Skapa följande nya sidor/routes:

**Tjänstesidor** (under `/tjanster/`):
- `/tjanster/` — Tjänsteöversikt (hub)
- `/tjanster/skogsinventering/` — Primärt sökord
- `/tjanster/multispektralanalys/` — Differentiator
- `/tjanster/fotosyntesmatning/` — Unik differentiator
- `/tjanster/lidar-skanning/`
- `/tjanster/barkborre-detektering/` — Högt söktryck
- `/tjanster/ortofoto-kartering/`
- `/tjanster/3d-modellering/`
- `/tjanster/bestandsinventering/`
- `/tjanster/skogsbruksplan-underlag/`

**Kundsegmentsidor** (under `/for/`):
- `/for/skogsagare/`
- `/for/skogsbolag/`
- `/for/forskning/`
- `/for/kommuner/`

**Offert-sida**:
- `/offert/` — Dedikerad konverteringssida med formulär

**Kunskapssidor** (under `/kunskap/`):
- `/kunskap/vad-ar-ndvi/`
- `/kunskap/skogsinventering-kostnad/`
- `/kunskap/barkborre-tidigt/`
- `/kunskap/multispektral-vs-rgb/`
- `/kunskap/fotosyntesmatning-guide/`
- `/kunskap/dronare-vs-satellitdata/`
- `/kunskap/lidar-vs-dronare/`

**Regionala sidor** (under `/platser/`):
- `/platser/skogsinventering-norrland/`
- `/platser/skogsinventering-svealand/`
- `/platser/skogsinventering-smaland/`

### 5. On-page SEO — innehållsmallar
- Startsidan: Ny H1 enligt strategi, intro 150-200 ord, tjänsteöversikt, sociala bevis, FAQ med schema
- Tjänstesidor: H1 med primärt sökord, 200-300 ord intro, fördelar, metodik, prissättning, kundcase, FAQ, intern länkning
- Regionala sidor: Lokalt H1, 200+ ord regionspecifikt innehåll, lokala sökord, regionala CTA:er
- Kunskapssidor: H1 som fråga, direkt svar i första 50 orden (AEO), FAQ-schema

### 6. AEO-optimering
- Alla kunskapssidor börjar med direkt definition/svar (för AI-citerbarhet)
- FAQ-sektioner med schema markup på alla tjänste- och kunskapssidor
- Jämförelsesidor med tabeller (drönare vs satellit, multispektral vs RGB)
- Konkreta siffror och statistik genomgående

### 7. Navigation & intern länkning
- Uppdatera Header med ny menystruktur: Tjänster (dropdown), Kunskap, Platser, Om oss, Offert (CTA)
- Uppdatera Footer med alla nya sidkategorier
- Intern länkning mellan tjänstesidor, kunskapssidor och regionala sidor
- Breadcrumbs på alla nya sidor

### 8. Sitemap & robots.txt
- Uppdatera sitemap.ts med alla nya sidor och korrekta prioriteringar
- Behåll robots.ts som tillåter all crawling

---

## Vad som INTE ingår i denna implementation
- Blogg/innehållskalender (kräver löpande innehållsproduktion)
- Google Business Profile (extern tjänst)
- Google Search Console (extern tjänst)
- Länkbyggande (extern aktivitet)
- Google Analytics-konfiguration (kräver GA_ID)
- Redirects från gamla URL:er (bör göras vid deploy)

---

## Teknisk approach
- Återanvänd befintliga komponenter (ServicePageLayout, FAQ, LeadForm, CTABand, ProcessSteps, Breadcrumbs)
- Skapa nya page.tsx-filer för varje ny route
- Utöka metadata.ts och schema.ts med nya hjälpfunktioner
- Uppdatera tailwind-tema om nödvändigt för TimberDrone-branding
- Alla sidor SSR (Next.js App Router) — ingen client-only rendering
