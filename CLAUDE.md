# Timberdrone — Regler för innehållsproduktion

## ABSOLUT REGEL: Gissa aldrig, anta aldrig

**All text som publiceras på sajten ska baseras på verifierade fakta — aldrig på antaganden eller gissningar.**

### Vad detta innebär i praktiken

1. **Utrustning**: Nämn aldrig drönmodeller, kameramodeller, sensorspecifikationer, LiDAR-system eller annan hårdvara utan att det är bekräftat vilken utrustning som faktiskt används.

2. **Piloter och certifieringar**: Skriv aldrig om pilotcertifieringar (A1/A2, STS, EASA-kategori), operatörstillstånd, eller kompetenser utan att det är verifierat. Ange aldrig specifika certifikattyper eller tillståndsnummer utan bekräftelse.

3. **Tekniska specifikationer**: Ange aldrig GSD-värden, punkttäthet, noggrannhet, täckningskapacitet eller liknande utan att det är verifierat mot faktisk utrustning och faktiska flygparametrar.

4. **Affärslöften**: Ange aldrig leveranstider, svarstider, prisgarantier, geografisk täckning eller omflygningspolicyer utan intern bekräftelse.

5. **Regulatoriska påståenden**: Skriv aldrig om regelefterlevnad, tillstånd, försäkringar eller juridiska förhållanden utan verifiering.

6. **Vetenskapliga påståenden**: Citera alltid källa vid specifika siffror (detektionstider, noggrannhetsprocent, tröskelvärden). Allmänt vedertagen vetenskap (t.ex. NDVI-formeln, Sentinel-2:s upplösning) behöver inte källa men ska vara korrekt.

7. **Case/referenscase**: Publicera aldrig case som om de vore verkliga om de inte är bekräftade med faktisk kund och faktiska data.

### När du är osäker

- **Fråga alltid** ägaren/uppdragsgivaren innan du skriver in nya fakta.
- Om något inte kan verifieras: **utelämna det** hellre än att gissa.
- Om en uppgift behöver finnas men inte är bekräftad: markera den med `/* MÅSTE VERIFIERAS: [fråga] */` i koden och ta **inte** med den i synlig text.

### Verifieringsdokument

Se dessa filer för aktuell status på alla påståenden:
- `CONTENT-VERIFICATION.md` — fullständig lista med verifieringsstatus
- `QA-CHECKLIST.md` — checklista att följa vid varje publicering
- `ACTION-PLAN.md` — prioriterad åtgärdsplan

### Kodnivå

- Kommentera alltid overifierade värden i koden med `/* EJ VERIFIERAD */` eller `/* MÅSTE VERIFIERAS */`
- Kör aldrig `npm run build` och publicera utan att ha gått igenom QA-CHECKLIST.md
- Sök alltid efter befintliga förekomster av ett värde innan det ändras (`grep -r "värdet" src/`)
