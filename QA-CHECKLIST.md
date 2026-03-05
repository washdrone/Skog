# Timberdrone — QA-checklista före publicering

> Använd denna checklista innan VARJE publicering eller innehållsändring.
> Inga steg får hoppas över. Om något inte kan verifieras: publicera inte.

---

## 1. Faktakontroll (anti-gissning)

- [ ] **Alla siffror är verifierade** (areal, upplösning, tider, kapacitet)
- [ ] **Inga nya affärslöften** har lagts till utan intern bekräftelse
- [ ] **Inga regulatoriska påståenden** har lagts till utan juridisk check
- [ ] **Inga kundnamn/case** har publicerats utan godkännande
- [ ] **Kontaktuppgifter stämmer** (e-post fungerar, telefonnummer korrekt)
- [ ] **Prispåståenden** — inga specifika priser nämns utan godkännande
- [ ] **Tekniska specs** matchar faktisk utrustning och kapacitet

---

## 2. SEO-kontroll

- [ ] **Title tag** under 60 tecken (exkl. "| Timberdrone" som läggs till via template)
- [ ] **Meta description** 140–160 tecken, innehåller primärt sökord
- [ ] **H1** — exakt en per sida, innehåller primärt sökord
- [ ] **H2/H3** — logisk hierarki, inga hopplösa nivåer
- [ ] **Canonical URL** pekar på korrekt sida
- [ ] **Intern länkning** — minst 2–3 relevanta internlänkar per sida
- [ ] **Alt-texter** på alla bilder (om bilder finns)
- [ ] **Structured data** — korrekt JSON-LD för sidtypen (Service/FAQ/Breadcrumb)
- [ ] **Sitemap** — ny sida tillagd i `src/app/sitemap.ts`

---

## 3. Innehållskonsistens

- [ ] **CTA-text** konsekvent ("Boka en fri konsultation" = primär)
- [ ] **Terminologi** matchar terminologistandard:
  - "markupplösning" (inte "upplösning" bara)
  - "kartlager" (inte "lager")
  - "ortofoton" (inte "flygfoton" eller "drönarbild")
  - "georefererad" (inte "GPS-märkt")
  - "drönarfotogrammetri" (inte "drönarfotografering" vid mättjänster)
- [ ] **Siffror konsistenta** — samma värde på alla ställen det nämns
  - Sök efter värdet i koden: `grep -r "VÄRDET" src/`
- [ ] **Ton** — professionell, konkret, inte säljig eller överdriven
- [ ] **Inga motsägelser** med befintlig FAQ eller leverans-sida

---

## 4. Teknisk kontroll

- [ ] **Bygger utan fel** (`npm run build` / `npx next build`)
- [ ] **Inga TypeScript-fel**
- [ ] **Inga brutna internlänkar** (alla href pekar på existerande sidor)
- [ ] **Responsivt** — kontrollerat på mobil, tablet, desktop
- [ ] **Formulär fungerar** — testat end-to-end (submit → API → webhook)
- [ ] **Inga console errors** i browser devtools
- [ ] **Lighthouse-score** rimligt (Performance > 80, Accessibility > 90, SEO > 90)

---

## 5. Juridisk kontroll

- [ ] **GDPR-text vid formulär** stämmer med faktisk datahantering
- [ ] **Integritetspolicy** finns och är länkad
- [ ] **Cookiepolicy** finns och är länkad (om cookies används)
- [ ] **Inga upphovsrättsskyddade bilder** utan licens
- [ ] **Regulatoriska påståenden** granskade av person med drönarkompetens

---

## 6. Redirects & länkhantering (vid sidändringar)

- [ ] **Om sida tas bort:** 301-redirect till bästa alternativ
- [ ] **Om URL ändras:** 301-redirect från gammal till ny
- [ ] **Interna länkar uppdaterade** (sök efter gammal URL i koden)
- [ ] **Sitemap uppdaterad** (gammal URL borttagen, ny tillagd)
- [ ] **Breadcrumbs** visar korrekt sökväg

---

## 7. Verifieringsstatus (per textblock)

Vid varje innehållsändring, markera textblock med en av:

```
/* VERIFIERAD: [namn] [datum] */
/* EJ VERIFIERAD: [vad som saknas] */
/* MÅSTE VERIFIERAS: [specifik fråga] */
```

Publicera aldrig text markerad som "MÅSTE VERIFIERAS" utan att
först bekräfta med ansvarig person.

---

## Snabbreferens: var påståenden finns

| Påstående | Sök i koden med |
|-----------|-----------------|
| 24 timmar | `grep -r "24 timmar\|24h" src/` |
| 2–5 cm | `grep -r "2–5 cm\|2.5 cm\|GSD" src/` |
| 3–5 arbetsdagar | `grep -r "3–5 arbetsdagar\|leveranstid" src/` |
| Hela Sverige | `grep -r "hela Sverige\|Hela Sverige" src/` |
| Utan extra kostnad | `grep -r "utan extra kostnad" src/` |
| Transportstyrelsens | `grep -r "Transportstyrelsen\|luftfartsförordning" src/` |
| info@timberdrone.se | `grep -r "info@timberdrone" src/` |
| 10–100 ha | `grep -r "10–100\|100 ha\|100+ ha" src/` |
