# SEO/AEO-audit — timberdrone.se (2026-06-11)

Fullständig teknisk SEO- och AEO-genomgång, sida för sida, med åtgärder genomförda direkt i koden.
Gren: `claude/timberdrone-seo-aeo-audit-tb51ss`.

> **Viktig korrigering av uppdragspremissen:** Sajten är **inte** en React SPA — den är en
> Next.js 14-app (App Router) där **samtliga 40 routes prerendras som statisk HTML vid build**
> (verifierat i byggloggen: `○ (Static) prerendered as static content`). Googlebot, GPTBot och
> ClaudeBot får alltså fullt renderad HTML med titel, meta, canonical och JSON-LD utan att köra
> JavaScript — verifierat med `curl -A "Googlebot" / "GPTBot" / "ClaudeBot"` mot byggd server.
> "KRITISK PRIORITET 1" (prerendering) var därmed redan löst by design.

> **Begränsning:** Den här körmiljöns nätverkspolicy blockerar anrop till timberdrone.se
> (`403 host_not_allowed`). Allt är därför verifierat mot den lokalt byggda produktionsservern
> (identisk HTML med vad Vercel serverar). Det som bara kan kontrolleras mot live-domänen
> (301 www/icke-www, HSTS, Lighthouse-värden) finns i verifieringschecklistan längst ned.

---

## FAS 1 — Inventering (alla 34 indexerbara sidor)

Kolumnen "Titel" anger längd **inklusive** suffixet " | TimberDrone" som mallen lägger till.

| Route | Titel (längd) | Beskr. (längd) | H1 | H2 | JSON-LD | FAQ | Ord (ca) |
|---|---|---|---|---|---|---|---|
| `/` | Skogsinventering med drönare i hela Sverige (61) | 149 | Precisionsdata för framtidens skogsbruk | 8 | Org, WebSite, FAQ | 6 | 2500 |
| `/tjanster` | Drönartjänster för skogsbruk — inventering & skador (65, trimmad fr. 76) | 136 | Drönartjänster för skogsbruk… | 2 | Service, Breadcrumb, FAQ | 5 | 1200 |
| `/tjanster/skogsinventering` | 67 | 135 | Skogsinventering med drönare | 5 | Service, Breadcrumb, FAQ | 4 | 900 |
| `/tjanster/tradhojdsmatning` | 67 | 133 | Trädhöjdsmätning med drönare | 3 | Service, Breadcrumb, FAQ | 7 | 1000 |
| `/tjanster/plantrakning` | 65 | 124 | Planträkning med drönare | 3 | Service, Breadcrumb, FAQ | 7 | 800 |
| `/tjanster/skogsskadeinventering` | 64 (trimmad fr. 71) | 137 | Skogsskadeinventering med drönare | 3 | Service, Breadcrumb, FAQ | 7 | 1000 |
| `/tjanster/bestandsinventering` | 54 | 145 | Beståndsinventering med drönare | 3 | Service, Breadcrumb, FAQ | 4 | 900 |
| `/tjanster/skogsbruksplan-underlag` | 56 | 139 | Underlag för skogsbruksplan med drönardata | 3 | Service, Breadcrumb, FAQ | 5 | 1100 |
| `/tjanster/arsavtal` | 61 (trimmad fr. 75) | 124 | Årsavtal & löpande skogsövervakning | 3 | Service, Breadcrumb, FAQ | 5 | 900 |
| `/kunskap` | 46 (trimmad fr. 71) | 143 | Kunskap om drönarbaserad skogsanalys | 1 | Breadcrumb | — | 300 |
| `/kunskap/skogsinventering-kostnad` | 55 | 131 | Vad kostar skogsinventering med drönare? | 2 | Breadcrumb, FAQ, **Article (ny)** | 5 | 900 |
| `/kunskap/barkborre-tidigt` | 51 | 129 | Upptäck barkborre tidigt med drönare | 4 | Breadcrumb, FAQ, **Article (ny)** | 5 | 700 |
| `/kunskap/stormskada-checklista` | 67 | 128 | Checklista efter stormskada i skog… | 6 | Breadcrumb, FAQ, HowTo, **Article (ny)** | 5 | 1200 |
| `/kunskap/dronare-vs-satellitdata` | 51 | 132 | Drönare vs satellitdata för skogsbruk | 2 | Breadcrumb, FAQ, **Article (ny)** | 5 | 1000 |
| `/kunskap/lidar-vs-dronare` | 63 | 133 | LiDAR vs fotogrammetri… | 2 | Breadcrumb, FAQ, **Article (ny)** | 5 | 1100 |
| `/kunskap/vad-paverkar-priset` | 54 (trimmad fr. 70) | 131 | Vad påverkar kostnaden för skogsinventering… | 2 | Breadcrumb, FAQ, **Article (ny)** | 5 | 900 |
| `/kunskap/sasongsguide-skogsinventering` | 56 (trimmad fr. 71) | 149 | Bästa tid för skogsinventering… | 2 | Breadcrumb, FAQ, **Article (ny)** | 6 | 1400 |
| `/for/skogsagare` | 43 | 133 | Drönartjänster för skogsägare | 4 | Breadcrumb, FAQ | 4 | 800 |
| `/for/skogsbolag` | 43 | 139 | Drönartjänster för skogsbolag | 4 | Breadcrumb, FAQ | 4 | 700 |
| `/for/forskning` | 43 | 121 | Drönardata för skogsforskning | 4 | Breadcrumb, FAQ | 4 | 600 |
| `/for/kommuner` | 57 | 143 | Drönartjänster för kommuner och myndigheter | 4 | Breadcrumb, FAQ | 4 | 700 |
| `/for/fastighet` | 54 (trimmad fr. 82) | 138 | Drönartjänster för skogsfastighetsköpare | 4 | Breadcrumb, FAQ | 5 | 800 |
| `/platser` | 53 | 132 | Skogsinventering med drönare — välj region | 1 | Breadcrumb | — | 500 |
| `/platser/skogsinventering-norrland` | 53 | 133 | …i Norrland | 2 | Breadcrumb, FAQ | 4 | 600 |
| `/platser/skogsinventering-svealand` | 53 | 137 | …i Svealand | 2 | Breadcrumb, FAQ | 4 | 650 |
| `/platser/skogsinventering-smaland` | 63 | 145 | …i Småland & Götaland | 2 | Breadcrumb, FAQ | 4 | 700 |
| `/platser/skogsinventering-stockholm` | 64 (trimmad fr. 76) | 137 | …i Stockholms- och Uppsalaregionen | 2 | Breadcrumb, FAQ | 4 | 650 |
| `/platser/skogsinventering-dalarna` | 53 | 127 | …i Dalarna | 2 | Breadcrumb, FAQ | 4 | 700 |
| `/platser/skogsinventering-vasternorrland` | 60 | 139 | …i Västernorrland | 2 | Breadcrumb, FAQ | 4 | 700 |
| `/platser/skogsinventering-jamtland` | 53 | 134 | …i Jämtland | 2 | Breadcrumb, FAQ | 4 | 750 |
| `/om-oss` | 61 | 99 | Om TimberDrone | 4 | Breadcrumb (Org global) | — | 800 |
| `/offert` | 25 | 125 | Begär en kostnadsfri offert | 2 | Breadcrumb | — | 400 |
| `/integritetspolicy` | 31 | 85 | Integritetspolicy | 6 | — | — | 600 |
| `/cookiepolicy` | 26 | 83 | Cookiepolicy | 2 | — | — | 300 |

Genomgående: exakt en H1 per sida, självrefererande canonical med absolut www-URL, unika titlar
och beskrivningar, OG + Twitter Card på alla sidor, `<html lang="sv">`, brödsmulor + BreadcrumbList
på alla undersidor, FAQ-svar i JSON-LD ordagrant identiska med synlig text (samma konstant används),
direkta citerbara svar i första stycket (AEO), interna länkar med beskrivande ankartext.

---

## FAS 2–5 — Fynd och åtgärder

### KRITISK

| # | Fynd | Åtgärd |
|---|---|---|
| K1 | **`og:image` pekade på `/og-default.png` som inte fanns** — 404 på alla sidors OG/Twitter-bild, dvs. inga bilder vid delning i sociala medier/meddelandeappar. | **ÅTGÄRDAT.** Genererad 1200×630-bild (mörkgrön bakgrund, vit logotyp, tagline) i `public/og-default.png`. Design-uppgradering listad under "Kräver Johans beslut". |

### HÖG

| # | Fynd | Åtgärd |
|---|---|---|
| H1 | Telefonnummer saknades helt på sajten och i strukturerad data (låg som TODO). | **ÅTGÄRDAT.** Verifierat nummer (076-309 66 96, ägaren 2026-06-11) i `business-data.ts`, Organization-schemat, footer, om-oss och offertsidan. Juridiska bolagsuppgifter utelämnas medvetet — ägarens beslut: TimberDrone profileras som fristående varumärke. |
| H2 | Ingen sammanhängande JSON-LD-graf: Organization fanns bara på `/` och `/om-oss`; `Service.provider` och `WebSite.publisher` duplicerade organisationsdata istället för att referera. | **ÅTGÄRDAT.** `Organization` (`@id: …/#organization`) och `WebSite` (`@id: …/#website`) emitteras nu globalt i `layout.tsx`; `Service.provider`, `Article.author/publisher` och `WebSite.publisher` refererar via `@id`. Dubbletter borttagna från `/` och `/om-oss`. |
| H3 | **`llms.txt` saknades.** | **ÅTGÄRDAT.** `public/llms.txt` skapad: vad TimberDrone är och inte är, tjänster, kontakt, nyckelsidor. |
| H4 | Synliga kontaktvägar var ofullständiga: ingen telefon i footer, om-oss eller offert. | **ÅTGÄRDAT.** Telefon tillagd i footer, om-oss och offertsidans Direktkontakt — tecken-identisk med JSON-LD ("076-309 66 96"). Juridiska uppgifter (bolagsnamn/org.nr/adress) visas inte, enligt ägarens beslut. |
| H5 | `robots.txt` hade bara `User-Agent: *` — inget uttryckligt, medvetet beslut om AI-crawlers. | **ÅTGÄRDAT.** Explicita Allow-regler för Googlebot, Bingbot, GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot och Google-Extended (AEO-beslut: AI-crawlers tillåts). |
| H6 | Kunskapsguiderna saknade `Article`-schema och synligt "Senast uppdaterad"-datum (E-E-A-T/AEO). | **ÅTGÄRDAT.** `articleSchema()` (datePublished/dateModified ur git-historik: publicerad 2026-03-05, uppdaterad 2026-06-02) + synlig datumrad i hero på alla 7 guider. Synligt datum och schema delar samma konstant. |

### MEDEL

| # | Fynd | Åtgärd |
|---|---|---|
| M1 | `sitemap.xml` satte `lastmod` till **byggdatumet** för alla sidor — varje deploy låtsades att allt innehåll ändrats. | **ÅTGÄRDAT.** Statiska datum: 2026-06-11 för innehållssidor (denna ändringsomgång), 2026-03-06 för juridiska sidor. Kommentar i koden om att datumet ska uppdateras vid faktisk innehållsändring. |
| M2 | 8 titlar var 70–82 tecken inkl. suffix (trunkeras i SERP). | **ÅTGÄRDAT.** Trimmade till 46–65 tecken (se tabellen). Borderline-titlar på 63–67 tecken lämnades medvetet — omskrivning av redan indexerade titlar har en kostnad. |
| M3 | `Service`-schema saknade `serviceType`; `WebSite` saknade `inLanguage`. | **ÅTGÄRDAT** i `schema.ts`. |
| M4 | Core Web Vitals kan inte mätas härifrån (ingen Chrome/Lighthouse i miljön, produktionsdomän blockerad). Indikatorer i koden är goda: First Load JS 87–102 kB, self-hostade typsnitt med `display: swap`, `next/image` med AVIF/WebP, preload av LCP-logotyp. | **EJ MÄTT** — kommandon i checklistan nedan. |

### LÅG / Avskrivna fynd

- **"Läs mer"-text i kort** (`ServiceCard`, `/platser`, `/kunskap`): ingen åtgärd — hela kortet är en enda länk vars ankartext inkluderar rubrik + beskrivning; "Läs mer" är dekorativ avslutning, inte ankartexten.
- **Soft-404**: avskrivet — `not-found.tsx` ger riktig HTTP 404 (verifierat lokalt).
- **Hreflang**: korrekt utelämnat (enspråkig sajt, `lang="sv"` satt).
- **Innehållsterritorium**: omfokuseringen till ren produktionsskog är redan gjord (commit `b72edea`); off-scope-tjänster 301:as i `next.config.js`. llms.txt förtydligar nu avgränsningen även för AI-motorer.
- **Trailing slash**: `trailingSlash: false` konsekvent; alla interna länkar/canonicals/sitemap utan trailing slash.
- **X-Robots-Tag: index, follow** sätts globalt via headers — harmlöst men redundant (LÅG, ej ändrat).

---

## Kräver Johans beslut

1. ~~Geografiskt verksamhetsområde~~ — **AVKLARAT.** Ägaren bekräftade 2026-06-11 att
   verksamheten är rikstäckande. CONTENT-VERIFICATION A6 är markerad som verifierad och
   EJ VERIFIERAD-markeringarna för rikstäckning är borttagna ur koden.
2. **og:image-design.** Nuvarande bild är en korrekt dimensionerad, varumärkad placeholder.
   Vill du ha en designad variant (foto/ortofoto + logotyp), ev. per kategori?
3. **D1 i CONTENT-VERIFICATION.md** kvarstår: bekräfta att info@timberdrone.se tar emot mail.
4. **Sociala profiler** (LinkedIn/YouTube) — läggs i `SOCIAL_PROFILES` när konton finns.
5. **Titelbyten** (M2) ändrar redan indexerade snippets — bör bevakas i Search Console 2–4 veckor.

## Kunde inte verifieras härifrån (produktionsdomän blockerad av nätverkspolicy)

- 301 icke-www → www (och http → https). Konfigureras i Vercel-projektets domäninställningar:
  båda domänerna tillagda, `www.timberdrone.se` som primär ("Redirect to www…").
- HSTS-header (Vercel sätter `strict-transport-security` automatiskt på *.vercel.app-cert-domäner — bekräfta).
- Vad som faktiskt är indexerat (Search Console).

---

## Verifieringschecklista efter deploy (körs av Johan)

```bash
# 1. Kanonisk domän: ska ge 301/308 → https://www.timberdrone.se/
curl -sI https://timberdrone.se/ | head -5
curl -sI http://www.timberdrone.se/ | head -5

# 2. Rå-HTML innehåller titel/meta/JSON-LD för bot-UA (ingen JS-rendering krävs)
curl -s -A "Googlebot" https://www.timberdrone.se/tjanster/skogsinventering | grep -c "application/ld+json"   # förväntat: 5
curl -s -A "GPTBot" https://www.timberdrone.se/ | grep -o "<title>[^<]*"
curl -s -A "ClaudeBot" https://www.timberdrone.se/kunskap/barkborre-tidigt | grep -o "Senast uppdaterad[^<]*"

# 3. Nya filer och statuskoder
curl -s https://www.timberdrone.se/robots.txt          # explicita AI-crawler-regler + Sitemap-rad
curl -s https://www.timberdrone.se/llms.txt | head -5
curl -sI https://www.timberdrone.se/og-default.png      # 200, image/png
curl -s -o /dev/null -w "%{http_code}\n" https://www.timberdrone.se/finns-inte   # 404
curl -sI https://www.timberdrone.se/ | grep -i strict-transport-security         # HSTS

# 4. Organization-schema med telefon på valfri sida
curl -s https://www.timberdrone.se/om-oss | grep -o '076-309 66 96'

# 5. Redirects (stickprov ur next.config.js)
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" https://www.timberdrone.se/tjanster/barkborre-detektering
# förväntat: 308 → /tjanster/skogsskadeinventering, utan kedjor

# 6. Lighthouse (mobil) — krav: Perf ≥ 90, LCP < 2,5 s, INP < 200 ms, CLS < 0,1
npx lighthouse https://www.timberdrone.se/ --preset=perf --form-factor=mobile --view
npx lighthouse https://www.timberdrone.se/tjanster/skogsinventering --preset=perf --form-factor=mobile --view
```

Rich Results Test (kör i webbläsare):
- https://search.google.com/test/rich-results?url=https%3A%2F%2Fwww.timberdrone.se%2F (Organization, WebSite, FAQ)
- https://search.google.com/test/rich-results?url=https%3A%2F%2Fwww.timberdrone.se%2Ftjanster%2Fskogsinventering (Service, Breadcrumb, FAQ)
- https://search.google.com/test/rich-results?url=https%3A%2F%2Fwww.timberdrone.se%2Fkunskap%2Fbarkborre-tidigt (Article, Breadcrumb, FAQ)
- Schema-validator: https://validator.schema.org/

Efter grönt: skicka in sitemap på nytt i Search Console och begär omindexering av `/`, `/tjanster`, `/om-oss`.
