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
| A1 | "Prisindikation/offert inom 24 timmar" | Startsida stats, hub stats, kontaktsida (3 ställen), FAQ, CTABand, LeadForm success-meddelande, processteget "Uppdragsdialog" (2 ställen) | EJ VERIFIERAD | | |
| A2 | "Normal leveranstid 3–5 arbetsdagar" | Leveranser-sidan, FAQ, FeatureShowcase | EJ VERIFIERAD | | |
| A3 | "Omflygning utan extra kostnad" (vid kvalitetsbrist) | Leveranser-sidan | EJ VERIFIERAD | | |
| A4 | "Ombokning utan extra kostnad" (vid dåligt väder) | FAQ | EJ VERIFIERAD | | |
| A5 | "Kostnadsfri prisuppskattning" | FAQ | EJ VERIFIERAD | | |
| A6 | "Hela Sverige" (geografisk täckning) | Startsida meta, målgrupper, CTABand, footer, FAQ, kontaktsida, FeatureShowcase | EJ VERIFIERAD | | |

### Om ett affärslöfte inte stämmer:
- Ändra till korrekt formulering på ALLA ställen (se kolumn "Var det används")
- Sök i koden efter frasen för att hitta alla förekomster

---

## B. Tekniska specifikationer (MEDEL RISK — branschkritiska att ha rätt)

| # | Påstående | Var det används | Status | Verifierad av | Datum |
|---|-----------|-----------------|--------|---------------|-------|
| B1 | "2–5 cm markupplösning (GSD)" | Startsida stats, hub stats, FeatureShowcase (2 ställen), FAQ | EJ VERIFIERAD | | |
| B2 | "10–100 hektar per flygning" | Startsida stats, hub stats, FeatureShowcase, FAQ | EJ VERIFIERAD | | |
| B3 | "SWEREF99 TM som standardkoordinatsystem" | Startsida stats, hub stats, leveranser, FAQ | EJ VERIFIERAD | | |
| B4 | Leveransformat: Shapefile, GeoPackage, GeoJSON, KML, GeoTIFF, JPEG2000, PDF, LAS | Leveranser-sidan, FAQ, FeatureShowcase, tjänstesidor | EJ VERIFIERAD | | |
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
| C1 | "Flygning sker enligt Transportstyrelsens regler och luftfartsförordningen" | FAQ | EJ VERIFIERAD | | |
| C2 | "Vi ansvarar för alla nödvändiga tillstånd och anmälningar" | FAQ | EJ VERIFIERAD | | |
| C3 | "Särskilt tillstånd nära flygplatser/militära zoner — vi hanterar det" | FAQ | EJ VERIFIERAD | | |
| C4 | GDPR-text vid formulär: "Vi delar aldrig dina uppgifter med tredje part" | LeadForm | EJ VERIFIERAD | | |

### Regulatoriskt att dubbelkolla:
- Vilken operatörskategori (Open/Specific/Certified)?
- Finns UAS-operatörstillstånd?
- Har piloterna A1/A2-certifikat eller STS?
- Ansvarsförsäkring för drönarverksamhet?

---

## D. Kontaktuppgifter & företagsinformation (HÖG RISK — måste fungera)

| # | Påstående | Var det används | Status | Verifierad av | Datum |
|---|-----------|-----------------|--------|---------------|-------|
| D1 | E-post: info@timberdrone.se | Schema, CTABand, kontaktsida | EJ VERIFIERAD | | |
| D2 | Telefonnummer — **SAKNAS HELT** | schema.ts (kommentar), kontaktsida (placeholder) | SAKNAS | | |
| D3 | Företagsadress — **SAKNAS HELT** | schema.ts (kommentar) | SAKNAS | | |
| D4 | Sociala medier: LinkedIn, YouTube, Instagram | Footer (href="#" — placeholder) | SAKNAS | | |
| D5 | Domän: timberdrone.se | Alla canonical-URLer, sitemap, robots | EJ VERIFIERAD | | |

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
| F1 | Ingen drönarmodell nämns någonstans | Hela sajten — kapacitetspåståenden saknar grund | SAKNAS | | |
| F2 | Ingen kameramodell/sensormodell nämns | Multispektral-, ortofoto-, LiDAR-sidor | SAKNAS | | |
| F3 | "5-bands multispektral sensor" med specifika våglängder (~475, ~560, ~668, ~717, ~842 nm) | Multispektralanalys, vegetationsanalys | EJ VERIFIERAD — verkar vara MicaSense men aldrig namngivet | | |
| F4 | "DLS" (Downwelling Light Sensor) nämns | Vegetationsanalys, uppföljning-sidor | EJ VERIFIERAD — sensortyp/modell ej specificerad | | |
| F5 | RTK/PPK-kapacitet nämns | Ortofoto, skogsbolag-sidor | EJ VERIFIERAD — inget GNSS-system specificerat | | |
| F6 | LiDAR-kapacitet erbjuds som tjänst | Header, LiDAR-sidan | EJ VERIFIERAD — inget LiDAR-system specificerat | | |
| F7 | Ingen processmjukvara nämns (Pix4D, Metashape etc.) | Hela sajten | SAKNAS | | |

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

### Vad som behövs:
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
