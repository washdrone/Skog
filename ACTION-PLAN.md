# Timberdrone — Prioriterad åtgärdsplan

> Sorterad efter: affärsnytta x SEO-effekt x risk, med lägst insats först.
>
> **Statusnivåer:** TODO / PÅGÅR / KLAR / BLOCKERAD (av verifiering)

---

## Fas 1 — Kritiskt (innan lansering)

Dessa MÅSTE vara klara innan sajten går live. Utan dem riskerar ni
juridiska problem, förlorat förtroende eller en icke-fungerande sajt.

| # | Åtgärd | Insats | Effekt | Risk utan | Fil(er) att ändra | Status |
|---|--------|--------|--------|-----------|-------------------|--------|
| 1.1 | **Verifiera alla affärslöften** (A1–A6) | Liten (intern check) | Förtroende | HÖG — felaktiga löften skadar varumärket | Se CONTENT-VERIFICATION.md | TODO |
| 1.2 | **Lägg till telefonnummer** | Liten | Konvertering +SEO | HÖG — ovanligt att sakna, signalerar oseriöst | `schema.ts`, `kontakt/page.tsx` | TODO |
| 1.3 | **Lägg till företagsadress** | Liten | SEO (LocalBusiness) | MEDEL — Google föredrar komplett NAP | `schema.ts` | TODO |
| 1.4 | **Verifiera e-post** (info@timberdrone.se) | Liten | Konvertering | HÖG — formulär skickar till denna | Testa mail | TODO |
| 1.5 | **Konfigurera LEAD_WEBHOOK_URL / LEAD_NOTIFY_EMAIL** | Liten | Konvertering | HÖG — leads loggas bara till console | `.env` / deployment config | TODO |
| 1.6 | **Skapa integritetspolicy** | Medel | GDPR-krav | HÖG — lagkrav + footer-länk leder ingenstans | Ny sida + uppdatera Footer.tsx | TODO |
| 1.7 | **Verifiera eller ta bort case** (E1–E3) | Liten | Trovärdighet | HÖG — påhittade case skadar kraftigt | `case/page.tsx` | TODO |
| 1.8 | **Verifiera tekniska specs** (B1–B8) | Liten (intern check) | Bransch-trovärdighet | MEDEL — kunnig besökare märker fel | Se CONTENT-VERIFICATION.md | TODO |
| 1.9 | **Verifiera regulatoriska påståenden** (C1–C4) | Liten (intern check) | Juridisk säkerhet | MEDEL — regulatoriskt fel = allvarligt | Se CONTENT-VERIFICATION.md | TODO |

---

## Fas 2 — Hög effekt, låg insats (första veckorna)

Förbättringar som direkt påverkar SEO-ranking och konverteringsgrad.

| # | Åtgärd | Insats | Effekt | Typ | Fil(er) | Status |
|---|--------|--------|--------|-----|---------|--------|
| 2.1 | **Konfigurera Google Analytics** (GA4) | Liten | Mätbarhet | Teknik | `.env` → NEXT_PUBLIC_GA_ID | TODO |
| 2.2 | **Registrera i Google Search Console** | Liten | SEO-synlighet | SEO | Extern | TODO |
| 2.3 | **Skicka in sitemap till GSC** | Liten | Indexering | SEO | Extern | TODO |
| 2.4 | **Koppla sociala medieprofiler** | Liten | Förtroende + SEO | Trust | `Footer.tsx` (rad 49, 59, 69) | TODO |
| 2.5 | **Skapa cookiepolicy-sida** | Medel | GDPR | Juridik | Ny sida + uppdatera Footer.tsx | TODO |
| 2.6 | **Lägg till riktiga bilder** | Medel | Konvertering + förtroende | Design | `public/images/` + komponenter | TODO |
| 2.7 | **Lägg till WebSite-schema med sitelinks search** | Liten | SERP-utseende | SEO | `schema.ts` + `layout.tsx` | TODO |

---

## Fas 3 — Strategisk (första månaden)

Bygger långsiktig SEO-styrka och konverteringsoptimering.

| # | Åtgärd | Insats | Effekt | Typ | Status |
|---|--------|--------|--------|-----|--------|
| 3.1 | **Skapa Om oss-sida** | Medel | Förtroende + E-E-A-T | Trust/SEO | TODO |
| 3.2 | **Lägg till kundrecensioner/omdömen** | Medel | Konvertering + schema | Trust/SEO | TODO |
| 3.3 | **Skapa blogg/kunskapssida** | Stor | Organisk trafik | SEO | TODO |
| 3.4 | **Lokala landningssidor** (om relevant) | Stor | Lokal SEO | SEO | TODO |
| 3.5 | **Lägg till AggregateRating-schema** | Liten | SERP-stjärnor | SEO | TODO |
| 3.6 | **A/B-testa CTA-formuleringar** | Medel | Konvertering | CRO | TODO |
| 3.7 | **Optimera Core Web Vitals** (LCP, CLS, INP) | Medel | SEO-ranking | Teknik | TODO |
| 3.8 | **Implementera händelsespårning** (scroll depth, CTA-klick) | Liten | Insikt | Analytics | TODO |

---

## Beslutspunkter som kräver er input

Följande kan inte avgöras utan ert beslut:

| # | Fråga | Alternativ | Påverkar |
|---|-------|-----------|----------|
| D1 | Vill ni ha telefonnummer synligt på sajten? | Ja (rekommenderat) / Nej | Kontaktsida + schema + konvertering |
| D2 | Är case-studierna baserade på verkliga uppdrag? | Ja → verifiera detaljer / Nej → ta bort eller markera som exempel | Trovärdighet |
| D3 | Vilka sociala medier har ni? | LinkedIn / YouTube / Instagram / Inga | Footer + schema |
| D4 | Finns integritetspolicy? | Ja → skicka text / Nej → måste skapas | GDPR + footer |
| D5 | Vilken UAS-operatörskategori arbetar ni under? | Open / Specific / Certified | FAQ-svar + regulatorisk korrekthet |
| D6 | Har piloterna relevant certifiering? | A1/A2 / STS / Annan | Kan nämnas som trust-signal |
| D7 | Finns ansvarsförsäkring för drönarverksamhet? | Ja → nämn på sajten / Nej | Trovärdighet |
