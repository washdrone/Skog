# TimberDrone — Fullständig SEO-, AEO- och Innehållsaudit

> Datum: 2026-04-05 (uppdaterad med arkitekturrefaktor)
> Omfattning: 57 sidor, alla komponenter, metadata, structured data, internlänkning, teknisk SEO
> Se även: SEO-ARCHITECTURE.md för teknisk dokumentation av det nya SEO-lagret

---

## DEL 1 — EXECUTIVE SUMMARY

### Största problem
1. **Ingen OG-bild** — social delning ger ingen preview (åtgärdat i denna commit)
2. **Organization-schema var LocalBusiness utan adress/telefon** — ogiltigt schema (åtgärdat)
3. **WebSite-schema hade SearchAction utan sökfunktion** (åtgärdat)
4. **Generiska ankartexter "Läs mer"** på startsidans persona-kort (åtgärdat)
5. **Header "Kontakt" pekade på /areamatning-och-skogsbruk/kontakt** istället för /offert (åtgärdat)
6. **Sitemap med hårdkodade datum** — alla sidor hade samma lastModified (åtgärdat)
7. **Startsidans title** kringgick template-mönstret och var för lång (åtgärdat)
8. **Overifierat "1-5 cm" GSD-värde** i hero-stats (åtgärdat till "Centimeternivå")
9. **Fonter via extern CDN** — render-blocking (dokumenterad TODO, kräver nätverksåtkomst vid build)
10. **Duplicerad sajt-struktur** — /tjanster, /areamatning-och-skogsbruk och /vegetationsanalys överlappar

### Största möjligheter
1. Konsolidera tjänstestrukturen (pillar/cluster)
2. Skapa Om oss-sida för E-E-A-T
3. Bygga ut tunna sidor (/platser hub, /offert, /for/*)
4. Lägga till OG-bild (placeholder-referens tillagd, bild behöver skapas)
5. Migrera till next/font vid deploy med nätverksåtkomst

---

## DEL 2 — FULLSTÄNDIG SIDINVENTERING

### Startsida
| URL | Fil | Funktion | H1 |
|-----|-----|----------|----|
| / | src/app/page.tsx | Hub & konvertering | Precisionsdata för framtidens skogsbruk |

### Tjänster (/tjanster) — 15 sidor
| URL | Funktion |
|-----|----------|
| /tjanster | Hub — listar 14 tjänster |
| /tjanster/skogsinventering | Primär tjänst — skogsinventering |
| /tjanster/multispektralanalys | NDVI, NDRE, vegetationsindex |
| /tjanster/barkborre-detektering | Tidig detektion granbarkborre |
| /tjanster/lidar-skanning | LiDAR punktmoln & höjdmodeller |
| /tjanster/ortofoto-kartering | Ortofoto & flygfotografering |
| /tjanster/3d-modellering | 3D-modeller av skog |
| /tjanster/bestandsinventering | Beståndskarta & gränser |
| /tjanster/skogsbruksplan-underlag | Underlag för skogsbruksplan |
| /tjanster/fotosyntesmatning | Fotosyntetisk aktivitet |
| /tjanster/planteringsinventering | Planteringskontroll |
| /tjanster/skadedokumentation | Storm- & skadedokumentation |
| /tjanster/kolinlagring | Kol & ESG-underlag |
| /tjanster/arsavtal | Löpande årsavtal |
| /tjanster/jaktkartering | Jaktplaneringsmaterial |

### Vegetationsanalys (/vegetationsanalys) — 4 sidor (äldre struktur)
| URL | Funktion |
|-----|----------|
| /vegetationsanalys | Hub |
| /vegetationsanalys/ndvi-kartlaggning | NDVI-kartläggning |
| /vegetationsanalys/stressanalys | Stressanalys & skadedetektering |
| /vegetationsanalys/uppfoljning-over-tid | Övervakning över tid |

### Areamätning (/areamatning-och-skogsbruk) — 10 sidor (äldre struktur)
| URL | Funktion |
|-----|----------|
| /areamatning-och-skogsbruk | Hub |
| /areamatning-och-skogsbruk/areamatning | Arealmätning |
| /areamatning-och-skogsbruk/inventering | Inventeringsöversikt |
| /areamatning-och-skogsbruk/avverkningsunderlag | Avverkningsunderlag |
| /areamatning-och-skogsbruk/skadeinventering | Skadeinventering |
| /areamatning-och-skogsbruk/planteringsuppfoljning | Planteringsuppföljning |
| /areamatning-och-skogsbruk/leveranser | Leveranser & format |
| /areamatning-och-skogsbruk/faq | FAQ |
| /areamatning-och-skogsbruk/case | Case-studier (EJ VERIFIERADE) |
| /areamatning-och-skogsbruk/kontakt | Kontakt & offert |

### Kunskap (/kunskap) — 12 sidor
| URL | Funktion |
|-----|----------|
| /kunskap | Hub — listar alla artiklar |
| /kunskap/vad-ar-ndvi | Vad är NDVI? |
| /kunskap/barkborre-tidigt | Tidig barkborredetektion |
| /kunskap/dronare-vs-satellitdata | Drönare vs satellitdata |
| /kunskap/multispektral-vs-rgb | Multispektral vs RGB |
| /kunskap/skogsinventering-kostnad | Kostnad skogsinventering |
| /kunskap/fotosyntesmatning-guide | Fotosyntesmätning guide |
| /kunskap/lidar-vs-dronare | LiDAR vs fotogrammetri |
| /kunskap/vad-paverkar-priset | Vad påverkar priset? |
| /kunskap/kolinlagring-skog-guide | Kolinlagring i skog |
| /kunskap/sasongsguide-skogsinventering | Säsongsguide |
| /kunskap/stormskada-checklista | Checklista stormskada |

### Målgrupper (/for) — 5 sidor
| URL | Funktion |
|-----|----------|
| /for/skogsagare | Privata skogsägare |
| /for/skogsbolag | Skogsbolag |
| /for/forskning | Skogsforskning |
| /for/kommuner | Kommuner & markägare |
| /for/fastighet | Fastighetsvärdering |

### Platser (/platser) — 8 sidor
| URL | Funktion |
|-----|----------|
| /platser | Hub — alla regioner |
| /platser/skogsinventering-norrland | Norrland |
| /platser/skogsinventering-svealand | Svealand |
| /platser/skogsinventering-smaland | Småland & Götaland |
| /platser/skogsinventering-stockholm | Stockholm & Uppsala |
| /platser/skogsinventering-dalarna | Dalarna |
| /platser/skogsinventering-vasternorrland | Västernorrland |
| /platser/skogsinventering-jamtland | Jämtland |

### Övrigt
| URL | Funktion |
|-----|----------|
| /offert | Offertförfrågan |
| /integritetspolicy | Integritetspolicy |
| /cookiepolicy | Cookiepolicy |

---

## DEL 3 — PRIORITERAD GAP-ANALYS

### A. KRITISKA PROBLEM

| # | Problem | Varför det spelar roll | Filer | Lösning | Status |
|---|---------|----------------------|-------|---------|--------|
| A1 | LocalBusiness-schema utan adress/telefon | Ogiltigt i Googles validering | schema.ts | Bytt till Organization | ÅTGÄRDAT |
| A2 | SearchAction utan sökfunktion | Vilseledande schema | schema.ts | Borttagen | ÅTGÄRDAT |
| A3 | Ingen OG-bild | Ingen preview vid social delning | metadata.ts, layout.tsx, page.tsx | OG-bild referens tillagd | ÅTGÄRDAT (bild behöver skapas) |
| A4 | Duplicerad struktur /tjanster vs /areamatning-och-skogsbruk | Kannibalisering, förvirrar Google | Hela sajten | Konsolidera med canonicals/redirects | KRÄVER BESLUT |
| A5 | Overifierade affärslöften ("24h", "Hela Sverige") | Rättslig risk, förlorat förtroende | Se CONTENT-VERIFICATION.md | Verifiera eller ändra formulering | BLOCKERAD |

### B. HÖGPRIORITERADE FÖRBÄTTRINGAR

| # | Problem | Filer | Lösning | Status |
|---|---------|-------|---------|--------|
| B1 | Generisk ankartext "Läs mer" på startsidan | page.tsx | Bytt till beskrivande ankartext per persona | ÅTGÄRDAT |
| B2 | Header "Kontakt" pekar på /areamatning-och-skogsbruk/kontakt | Header.tsx | Ändrat till /offert | ÅTGÄRDAT |
| B3 | Sitemap med hårdkodade datum | sitemap.ts | Dynamiskt datum (now) | ÅTGÄRDAT |
| B4 | Startsidans title för lång, kringgår template | page.tsx | Använder template-mönstret | ÅTGÄRDAT |
| B5 | "1-5 cm" GSD EJ VERIFIERAD i hero | page.tsx | Bytt till "Centimeternivå" | ÅTGÄRDAT |
| B6 | Saknad Om oss-sida | — | Skapa /om-oss | TODO |
| B7 | Fonter via extern CDN | layout.tsx | Migrera till next/font | TODO (kräver nätverksåtkomst) |
| B8 | Case-studier EJ VERIFIERADE | case/page.tsx | Verifiera eller ta bort | BLOCKERAD |

### C. MEDELPRIORITERADE FÖRBÄTTRINGAR

| # | Problem | Lösning |
|---|---------|---------|
| C1 | Tunna sidor: /platser hub, /offert | Bygg ut med FAQ och processdetaljer |
| C2 | Målgruppssidor tunna (~700 ord) | Lägg till invändningshantering, FAQ |
| C3 | Footer saknade offertlänk | ÅTGÄRDAT |
| C4 | robots.ts blockerade inte /api/ | ÅTGÄRDAT |
| C5 | GA4 med hårdkodat fallback | Rensat till variabel | ÅTGÄRDAT |
| C6 | Trailing slash inkonsistens | trailingSlash: false i next.config.js | ÅTGÄRDAT |

### D. LÅGPRIORITERADE FÖRBÄTTRINGAR

| # | Problem | Lösning |
|---|---------|---------|
| D1 | Footer visar bara 5/11 kunskapsartiklar | Lägg till fler eller "Alla artiklar"-länk |
| D2 | Sociala medier-länkar saknas | Lägg till när profiler finns |
| D3 | Ingen hreflang | Lägg till sv som explicit |
| D4 | Case-sida utesluten ur sitemap | Åtgärdat (borttagen tills verifierad) |

---

## DEL 4 — VERIFIERINGSLOGG

Se separat CONTENT-VERIFICATION.md för fullständig lista. Här är sammanfattning:

### Affärslöften (HÖG RISK)
| Påstående | Status | Platser | Åtgärd |
|-----------|--------|---------|--------|
| "Offert inom 24 timmar" | EJ VERIFIERAD | 6+ ställen | Verifiera eller byt till "Svar inom kort" |
| "Hela Sverige" | EJ VERIFIERAD | 6+ ställen | Verifiera eller ange regioner explicit |
| "Ingen bindningstid" | EJ VERIFIERAD | /offert | Verifiera |
| "Kostnadsfri prisuppskattning" | EJ VERIFIERAD | /offert FAQ | Verifiera |

### Tekniska specs (MEDEL RISK)
| Påstående | Status | Åtgärd |
|-----------|--------|--------|
| GSD "1-5 cm" / "2-5 cm" | EJ VERIFIERAD | Bytt till "Centimeternivå" på startsidan |
| "SWEREF99 TM" som standard | EJ VERIFIERAD | Rimligt men bör bekräftas |
| Leveransformat (GeoTIFF etc.) | EJ VERIFIERAD | Bör bekräftas |
| "5-bands multispektral" | EJ VERIFIERAD | Sensormodell okänd |

### Vetenskapliga påståenden
| Påstående | Status | Åtgärd |
|-----------|--------|--------|
| "60-70% molntäcke i Sverige" | Saknar källa | Citera SMHI eller ta bort |
| "4-8 veckor före visuella symptom" | Saknar källa | Citera studie eller vagare formulering |
| "Minskad fälttid 50-70%" | Saknar källa | Ta bort specifik procent |
| "NRMSE under 2-4%" | Saknar källa | Citera källa eller ta bort |

### Regulatoriskt
| Påstående | Status | Åtgärd |
|-----------|--------|--------|
| EASA-kategori | SAKNAS | Ange operatörskategori |
| Pilotcertifiering | SAKNAS | Ange eller utelämna |
| Ansvarsförsäkring | SAKNAS | Ange eller utelämna |

---

## DEL 5 — IMPLEMENTERADE FÖRBÄTTRINGAR

### Metadata per sida (createMetadata)
- `title` använder nu template-mönstret (`%s | TimberDrone`) istället för manuell konkatenering
- OG-bild tillagd i alla sidor via createMetadata och layout.tsx
- OG-bild-alt dynamiskt baserat på sidtitel

### Startsida
- Title: "Skogsinventering med Drönare — Multispektralanalys & LiDAR"
- Meta description: Uppdaterad med SWEREF99 TM-referens
- Persona-kort: Beskrivande ankartexter istället för "Läs mer"
- Hero-stats: "Centimeternivå" istället för overifierat "1-5 cm"
- Tagit bort "oöverträffad reproducerbarhet" (superlativ)

---

## DEL 6 — METADATA PER SIDA (rekommendationer)

### Sidor med metadata som bör ses över

| Sida | Nuvarande title | Föreslagen title | Anledning |
|------|-----------------|------------------|-----------|
| / | (åtgärdat) | Skogsinventering med Drönare — Multispektralanalys & LiDAR | Kortare, template-kompatibel |
| /tjanster | OK | — | |
| /kunskap | OK | — | |
| /offert | OK | — | |
| /for/skogsagare | OK | — | |

---

## DEL 7 — INTERNLÄNKNINGSKARTA

### Pillar/Cluster-struktur (rekommendation)

**Pillar 1: Skogsinventering med drönare**
- Pillar-sida: /tjanster/skogsinventering
- Cluster:
  - /kunskap/skogsinventering-kostnad
  - /kunskap/vad-paverkar-priset
  - /kunskap/sasongsguide-skogsinventering
  - /tjanster/bestandsinventering
  - /tjanster/skogsbruksplan-underlag
  - /tjanster/lidar-skanning

**Pillar 2: Multispektralanalys & vegetationshälsa**
- Pillar-sida: /tjanster/multispektralanalys
- Cluster:
  - /kunskap/vad-ar-ndvi
  - /kunskap/multispektral-vs-rgb
  - /kunskap/fotosyntesmatning-guide
  - /tjanster/barkborre-detektering
  - /tjanster/fotosyntesmatning
  - /kunskap/barkborre-tidigt

**Pillar 3: Drönardata vs alternativ**
- Pillar-sida: /kunskap/dronare-vs-satellitdata
- Cluster:
  - /kunskap/lidar-vs-dronare
  - /kunskap/multispektral-vs-rgb

**Pillar 4: Kolinlagring & ESG**
- Pillar-sida: /tjanster/kolinlagring
- Cluster:
  - /kunskap/kolinlagring-skog-guide

### Förbättrade ankartexter (implementerade)

| Sida | Gammal ankartext | Ny ankartext |
|------|------------------|--------------|
| / (persona: Skogsägare) | "Läs mer" | "Tjänster för skogsägare" |
| / (persona: Distansägare) | "Läs mer" | "Drönardata för distansägare" |
| / (persona: Skogsbolag) | "Läs mer" | "Tjänster för skogsbolag" |
| / (persona: Forskning) | "Läs mer" | "Drönardata för forskning" |

### Orphan-analys
| Sida | Inlänkar från | Rekommendation |
|------|---------------|----------------|
| /areamatning-och-skogsbruk/case | Ingen synlig | Ta bort ur sitemap tills verifierad (ÅTGÄRDAT) |
| /areamatning-och-skogsbruk/faq | Ingen synlig | Länka från hub-sidan |

---

## DEL 8 — TEKNISK SEO-LISTA

### Åtgärdade
| Fil | Ändring |
|-----|---------|
| src/app/layout.tsx | OG-bild i default metadata, rensat GA-villkor |
| src/lib/metadata.ts | OG-bild i createMetadata, title utan manuell pipe |
| src/lib/schema.ts | Organization istf LocalBusiness, borttagen SearchAction, tillagd logo |
| src/app/page.tsx | Bättre title, OG-bild, beskrivande ankartexter, säkrare GSD-formulering |
| src/components/Header.tsx | Kontakt → /offert |
| src/components/Footer.tsx | Tillagd offertlänk |
| src/app/sitemap.ts | Dynamiska datum, borttagen case-sida, renare struktur |
| src/app/robots.ts | Disallow /api/ |
| next.config.js | trailingSlash: false |

### Kvarstående (kräver manuell åtgärd)
| Fil | Ändring | Krav |
|-----|---------|------|
| layout.tsx | Migrera Google Fonts till next/font | Nätverksåtkomst vid build |
| public/ | Skapa og-default.png (1200x630) | Designresurs |
| schema.ts | Byt tillbaka till LocalBusiness | Kräver adress + telefonnummer |

---

## DEL 9 — STRUCTURED DATA

### Behåll (korrekt)
- `WebSite` — på layout.tsx (utan SearchAction nu)
- `Organization` — på startsidan (bytt från LocalBusiness)
- `Service` — på tjänstesidor
- `FAQPage` — på sidor med faktiska FAQ-block
- `BreadcrumbList` — på undersidor

### Borttaget
- `SearchAction` i WebSite-schema — ingen sökfunktion finns

### Ändrat
- `LocalBusiness` → `Organization` — adress och telefon saknas

### Lägg till när verifierat
- `LocalBusiness` — när fullständig NAP (namn, adress, telefon) bekräftats
- `HowTo` — finns som funktion men bör bara användas på sidor med tydlig steg-för-steg-process

### Lägg INTE till
- `Review` / `AggregateRating` — inga verifierade omdömen finns
- `Person` — ingen specifik person nämns

---

## DEL 10 — IMPLEMENTERINGSORDNING

### Fas 1 — Klart (denna commit)
1. ✅ OG-bild-referens i all metadata
2. ✅ Organization-schema (från ogiltigt LocalBusiness)
3. ✅ Borttagen SearchAction
4. ✅ Beskrivande ankartexter
5. ✅ Header-nav fixad
6. ✅ Footer förbättrad
7. ✅ Sitemap förbättrad
8. ✅ robots.ts förbättrad
9. ✅ Trailing slash
10. ✅ Säkrare GSD-formulering
11. ✅ Renare title-tag

### Fas 2 — Kräver extern åtgärd
1. Skapa og-default.png (1200x630) och lägg i /public/
2. Migrera till next/font/google vid nästa deploy
3. Verifiera alla affärslöften i CONTENT-VERIFICATION.md
4. Bekräfta eller ta bort case-studier
5. Lägga till telefonnummer och adress → byt tillbaka till LocalBusiness

### Fas 3 — Strategisk
1. Skapa Om oss-sida
2. Konsolidera /areamatning-och-skogsbruk och /vegetationsanalys under /tjanster
3. Bygga ut tunna sidor
4. Lägga till fler internlänkar från kunskapssidor till /tjanster
5. Skapa pillar/cluster-länkar explicit

### Fas 4 — Löpande
1. Publicera verifierade case-studier
2. Bygga ut kunskapskluster
3. Lägga till lokalt innehåll per region
4. A/B-testa CTA-formuleringar
