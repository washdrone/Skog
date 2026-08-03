# Timberdrone — Innehållsverifiering & faktakontroll

> Detta dokument listar alla påståenden på sajten som kräver intern bekräftelse
> innan produktion. Ingen text ska publiceras som sanning om den inte är verifierad.
>
> **Status per rad:** VERIFIERAD / EJ VERIFIERAD / BORTTAGEN
>
> Uppdatera detta dokument löpande. Ta inte bort rader — markera dem som verifierade.

---

## A. Affärslöften (HÖG RISK — felaktigt = förlorat förtroende)

| # | Påstående | Var det används | Status | Verifierad av | Datum |
|---|-----------|-----------------|--------|---------------|-------|
| A1 | "Svar/prisindikation inom 24 timmar" | Offertsidan (hero, processteg, sidopanel), LeadForm-bekräftelse | VERIFIERAD | Ägaren (chat) | 2026-08-03 |
| A2 | Leveranstid | — | INGET LÖFTE — ägarens besked 2026-08-03: varierar med uppdragets storlek; neutrala formuleringar behålls | Ägaren (chat) | 2026-08-03 |
| A3 | "Omflygning utan extra kostnad" (vid kvalitetsbrist) | Leveranser-sidan | EJ VERIFIERAD | | |
| A4 | "Ombokning utan extra kostnad" (vid dåligt väder) | FAQ | EJ VERIFIERAD | | |
| A5 | "Kostnadsfri prisuppskattning/offert" | FAQ, offertsidan | VERIFIERAD | Ägaren (chat) | 2026-08-03 |
| A6 | "Hela Sverige" (geografisk täckning) | Startsida meta, målgrupper, CTABand, footer, FAQ, kontaktsida, FeatureShowcase | VERIFIERAD — rikstäckande | Ägaren | 2026-06-11 |

### Om ett affärslöfte inte stämmer:
- Ändra till korrekt formulering på ALLA ställen (se kolumn "Var det används")
- Sök i koden efter frasen för att hitta alla förekomster

---

## B. Tekniska specifikationer (MEDEL RISK — branschkritiska att ha rätt)

| # | Påstående | Var det används | Status | Verifierad av | Datum |
|---|-----------|-----------------|--------|---------------|-------|
| B1 | Markupplösning: "2–3 cm/pixel vid 80–120 m" (beräknad ur DJI Matrice 4E vidvinkelkamera, 4/3" 20 MP, 24 mm ekv.) | Startsida stats, hub stats, jämförelsetabeller | VERIFIERAD — beräkning godkänd av ägaren | Ägaren (chat) | 2026-08-03 |
| B2 | "10–100 hektar per flygning" | Startsida stats, hub stats, FeatureShowcase, FAQ | EJ VERIFIERAD | | |
| B3 | "SWEREF99 TM som standardkoordinatsystem" | Startsida stats, hub stats, leveranser, FAQ | VERIFIERAD | Ägaren (chat) | 2026-08-03 |
| B4 | Leveransformat: GeoTIFF, GeoPackage, Shapefile, LAS/LAZ (standardexport ur Pix4D/Metashape; skräddarsytt möjligt) | Sajten genomgående | VERIFIERAD | Ägaren (chat) | 2026-08-03 |
| B5 | "DTM/DSM baserad på fotogrammetri" (valbart tillägg) | Leveranser-sidan | EJ VERIFIERAD | | |
| B6 | "3D-modell" (valbart tillägg) | Leveranser-sidan | EJ VERIFIERAD | | |
| B7 | "Volymberäkning (virkesvältor, jordmassor)" (valbart tillägg) | Leveranser-sidan | EJ VERIFIERAD | | |
| B8 | Kompatibilitet med "QGIS, ArcGIS" + "de flesta skogsbruksprogram" | FAQ | EJ VERIFIERAD | | |

### Om en teknisk spec inte stämmer:
- Ändra till korrekt värde eller intervall
- Om osäkert: använd "typiskt" eller "upp till" istället för absolut påstående

---

## C. Regulatoriska påståenden (MEDEL RISK — måste vara korrekt juridiskt)

| # | Påstående | Var det används | Status | Verifierad av | Datum |
|---|-----------|-----------------|--------|---------------|-------|
| C1 | "Enligt EASA:s drönarregelverk och Transportstyrelsens föreskrifter" | TrustBlock, FAQ | VERIFIERAD — ägarens formulering: "skriv enligt EASA och Transportstyrelsen" | Ägaren (chat) | 2026-08-03 |
| C2 | "Vi ansvarar för alla nödvändiga tillstånd och anmälningar" | FAQ | VERIFIERAD | Ägaren (chat) | 2026-08-03 |
| C3 | "Särskilt tillstånd nära flygplatser/militära zoner — vi hanterar det" | FAQ, Stockholmssidan | VERIFIERAD | Ägaren (chat) | 2026-08-03 |
| C4 | GDPR-text vid formulär | LeadForm | JUSTERAD 2026-08-03 — matchar nu integritetspolicyn (leverantörer som krävs för leverans undantas) | Ägaren (chat) | 2026-08-03 |

### Regulatoriskt att dubbelkolla:
- Vilken operatörskategori (Open/Specific/Certified)?
- Finns UAS-operatörstillstånd?
- Har piloterna A1/A2-certifikat eller STS?
- Ansvarsförsäkring för drönarverksamhet?

---

## D. Kontaktuppgifter & företagsinformation (HÖG RISK — måste fungera)

| # | Påstående | Var det används | Status | Verifierad av | Datum |
|---|-----------|-----------------|--------|---------------|-------|
| D1 | E-post: info@timberdrone.se | Schema, CTABand, kontaktsida | VERIFIERAD | Ägaren (chat) | 2026-08-03 |
| D2 | Telefon: 076-309 66 96 | business-data.ts, schema, footer, om-oss, offert | VERIFIERAD | Ägaren | 2026-06-11 |
| D3 | Juridiskt bolagsnamn/org.nr/adress | — | UTELÄMNAS — ägarens beslut: TimberDrone profileras fristående, inga bolagsuppgifter på sajten | Ägaren | 2026-06-11 |
| D4 | Sociala medier | — | FINNS EJ — ägarens besked 2026-08-03: inga profiler; utelämnas | Ägaren (chat) | 2026-08-03 |
| D5 | Domän: www.timberdrone.se | Alla canonical-URLer, sitemap, robots | VERIFIERAD | Ägaren (chat) | 2026-08-03 |

### Vad som behövs:
- Bekräfta att info@timberdrone.se tar emot mail
- Ange telefonnummer → uppdatera schema.ts + kontaktsida
- Ange företagsadress → uppdatera schema.ts
- Ange sociala medie-URLer → uppdatera Footer.tsx (rad 49, 59, 69)

---

## E. Case/referenscase (HÖG RISK — ser påhittade ut om felaktiga)

| # | Case | Detaljer att verifiera | Status | Verifierad av | Datum |
|---|------|----------------------|--------|---------------|-------|
| E1 | "Areamätning av skogsinnehav" | Kund: "Privat skogsägare, Mellansverige" — 12 avdelningar, 180 ha, Shapefile | EJ VERIFIERAD | | |
| E2 | "Skadeinventering efter storm" | Kund: "Skogsbolag, Södra Sverige" — höststorm, försäkringsanmälan | EJ VERIFIERAD | | |
| E3 | "Planteringsuppföljning ungskog" | Kund: "Skogsförvaltare, Norrland" — 95 ha, kompletteringsplantering | EJ VERIFIERAD | | |

### Om case inte är verkliga:
- Ta bort case-sidan tills riktiga case finns
- Eller ersätt med "Exempelscenarier" med tydlig markering att det är illustrativa

---

## F. Utrustning & kapacitet (HÖG RISK — inga drönmodeller eller sensorer specificerade)

| # | Påstående | Var det används | Status | Verifierad av | Datum |
|---|-----------|-----------------|--------|---------------|-------|
| F1 | Drönare: DJI Matrice 400 och DJI Matrice 4E | om-oss, llms.txt | VERIFIERAD | Ägaren (chat) | 2026-08-03 |
| F2 | Ingen kameramodell/sensormodell nämns | Multispektral-, ortofoto-, LiDAR-sidor | SAKNAS | | |
| F3 | "5-bands multispektral sensor" med specifika våglängder (~475, ~560, ~668, ~717, ~842 nm) | Multispektralanalys, vegetationsanalys | EJ VERIFIERAD — verkar vara MicaSense men aldrig namngivet | | |
| F4 | "DLS" (Downwelling Light Sensor) nämns | Vegetationsanalys, uppföljning-sidor | EJ VERIFIERAD — sensortyp/modell ej specificerad | | |
| F5 | RTK-kapacitet | om-oss, skogsinventering | VERIFIERAD — RTK bekräftad (specifikt GNSS-system ej namngivet) | Ägaren (chat) | 2026-08-03 |
| F6 | LiDAR: DJI Zenmuse L2 (5 returer, 240 000 pkt/s, 4 cm vertikal noggrannhet vid 150 m — DJI:s specifikation som källa) | om-oss, lidar-vs-dronare, llms.txt | VERIFIERAD | Ägaren (chat) | 2026-08-03 |
| F7 | Processmjukvara: Pix4D och Agisoft Metashape | om-oss | VERIFIERAD | Ägaren (chat) | 2026-08-03 |

### Vad som behövs:
- Bekräfta vilken/vilka drönarmodeller som används
- Bekräfta vilken multispektral sensor som används (MicaSense RedEdge? Annan?)
- Bekräfta om LiDAR-kapacitet finns och i så fall vilken utrustning
- Bekräfta RTK/PPK-utrustning
- Bekräfta processmjukvara
- SEDAN: uppdatera tekniska specifikationer baserat på faktisk utrustning

---

## G. Pilotcertifieringar & regulatoriskt (HÖG RISK — vagt eller saknande)

| # | Påstående | Var det används | Status | Verifierad av | Datum |
|---|-----------|-----------------|--------|---------------|-------|
| G1 | "Certifierad UAS-operatör" / "fullständigt operatörstillstånd" | TrustBlock (nu ändrat till "Regelefterlevnad") | BORTTAGEN — ersatt med generell formulering | | |
| G2 | Vilken EASA-kategori (Open/Specific/Certified)? | Ej nämnt | SAKNAS | | |
| G3 | Pilotcertifieringar (A1/A2, STS)? | Ej nämnt | SAKNAS | | |
| G4 | Ansvarsförsäkring för drönarverksamhet? | Ej nämnt | SAKNAS | | |
| G5 | "Vi har tillstånd och försäkringar för att flyga i tätort" | Kommun-sidan | EJ VERIFIERAD | | |
| G6 | "Vi följer Integritetsskyddsmyndighetens riktlinjer" | Kommun-sidan | EJ VERIFIERAD | | |
| G7 | "Ansikten och registreringsskyltar suddas automatiskt" | Kommun-sidan | EJ VERIFIERAD — kräver specifik mjukvara | | |

### Ägarens beslut 2026-08-03: skriv endast "enligt EASA och Transportstyrelsen" — inga specifika kategorier/certifikat på sajten.
- Bekräfta operatörskategori och tillstånd
- Bekräfta pilotcertifieringar
- Bekräfta försäkringstyp och -omfattning
- Bekräfta integritetskyddsrutiner vid flygning i tätort

---

## H. Vetenskapliga påståenden utan källa (MEDEL RISK)

| # | Påstående | Var det används | Status | Verifierad av | Datum |
|---|-----------|-----------------|--------|---------------|-------|
| H1 | "SLU:s forskning visar att drönarbaserad analys identifierar dubbelt så många angripna träd" | Stressanalys-sidan | EJ VERIFIERAD — ingen specifik studie citerad | | |
| H2 | "GSI-index ger 76–83 % detektionsgrad" | Stressanalys-sidan | EJ VERIFIERAD — ingen källa | | |
| H3 | Barkborre: "4–8 veckor före visuella symptom" / "2–4 veckor" | Barkborre-sidor, kunskap | EJ VERIFIERAD — tidsangivelse utan forskningsreferens | | |
| H4 | "NRMSE under 2–4 %" för radiometrisk kalibrering | Fotosyntes-guide, NDVI-kartläggning | EJ VERIFIERAD — ingen källa | | |
| H5 | "Sverige med i snitt 60–70 % molntäcke" | Drönare vs satellitdata | EJ VERIFIERAD — ingen källa | | |
| H6 | "Minskad fälttid med 50–70 %" | Skogsinventering | EJ VERIFIERAD — ingen källa | | |
| H7 | "Kostnadseffektivare vid arealer över 20–30 hektar" | Skogsinventering-kostnad | EJ VERIFIERAD — ingen ekonomisk analys | | |

### Rekommendation:
- Citera specifika studier eller ta bort specifika siffror
- Allmänt vedertagen vetenskap (NDVI-formel, vad multispektral innebär) behöver inte källa

---

## I. Saknade sidor/innehåll (inga påståenden — men saknas för fullständig sajt)

| # | Vad saknas | Effekt | Prioritet |
|---|-----------|--------|-----------|
| I1 | Integritetspolicy-sida | Footer-text "Integritetspolicy" är ej klickbar, GDPR-krav | HÖG |
| I2 | Cookiepolicy-sida | Footer-text "Cookiepolicy" är ej klickbar | MEDEL |
| I3 | Om oss-sida | Ingen företagspresentation, minskar förtroende | MEDEL |
| I4 | Riktiga bilder | public/images/ är tomt — gradienter används som placeholder | MEDEL |
| I5 | Google Analytics-konfiguration | NEXT_PUBLIC_GA_ID saknas (ingen spårning) | HÖG |
| I6 | Lead-webhook/email-notifiering | LEAD_WEBHOOK_URL & LEAD_NOTIFY_EMAIL ej konfigurerade | HÖG |

---

## Uppdatering 2026-08-03 (ägarens svar via chat)

- **Bilder**: `sunny_ortofoto.png`, `sunny_lidar.png`, `sunny_vektordata.png` m.fl. är bekräftade som egna flygningar/leveranser — får presenteras som verkliga exempel.
- **Personer**: Inga personer ska namnges på om-oss eller i författarsignaler — ägarens beslut.
- **Svarstid**: "Svar inom 24 timmar" verifierad och återinförd på offertsidan. Leveranstid: inget löfte (varierar med storlek).
- **Case**: Ägarens beslut 2026-08-03: inga uppdragsbeskrivningar, men de egna bilderna får visas med beskrivande text — sektion "Exempel ur verkliga leveranser" tillagd på om-oss.
- **Google Search Console**: Domänen verifierad och sitemap inskickad enligt ägaren.
- **Google Business Profile**: Finns ej; ägaren vill skapa en (extern åtgärd).
- **GA4**: Mät-ID G-D0DFLHDVJM bekräftat med reservation ("bör stämma").
- **OG-bild**: Designad variant framtagen 2026-08-03 (ersätter genererad placeholder).
