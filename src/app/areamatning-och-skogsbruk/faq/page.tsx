import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

/*
 * EJ VERIFIERAD: Alla FAQ-svar nedan kräver intern bekräftelse.
 * Specifika verifieringspunkter:
 * - B2: "10–100 hektar" per flygning
 * - B1: "2–5 cm" GSD
 * - B4: filformat (Shapefile, GeoPackage, GeoJSON, GeoTIFF, KML, JPEG2000)
 * - B3: "SWEREF99 TM" som standard
 * - A2: "3–5 arbetsdagar" leveranstid
 * - A4: "bokar vi om utan extra kostnad" (väder)
 * - C1–C3: Transportstyrelsens regler, tillstånd, anmälningar
 * - A6: "hela Sverige"
 * - B8: kompatibilitet med "QGIS, ArcGIS" och "de flesta skogsbruksprogram"
 * - A1: "prisindikation inom 24 timmar"
 * - A5: "kostnadsfri prisuppskattning"
 */
const FAQ_ITEMS = [
  {
    question: 'Hur stor areal kan ni kartlägga med drönare?',
    answer:
      'Vi anpassar uppdraget efter era behov. En enskild flygning täcker typiskt 10–100 hektar beroende på upplösningskrav och terräng. Större arealer hanteras med flera flygningar och levereras som ett sammanhängande underlag.',
  },
  {
    question: 'Vilken upplösning har ortofoton?',
    answer:
      'Markupplösningen (GSD) beror på flyghöjd och kamera. Typiskt levererar vi 2–5 cm per pixel, vilket räcker för att identifiera enskilda träd, stigar och mindre objekt. Vi anpassar upplösningen efter uppdragets syfte.',
  },
  {
    question: 'I vilka filformat levereras data?',
    answer:
      'Standardformat inkluderar Shapefile, GeoPackage och GeoJSON för vektordata samt GeoTIFF för ortofoto. Vi kan även leverera i KML, JPEG2000, PDF och andra format efter överenskommelse. Se sidan Leveranser & format för fullständig lista.',
  },
  {
    question: 'Vilket koordinatsystem används?',
    answer:
      'Standard är SWEREF99 TM. Andra koordinatsystem (t.ex. lokala system) kan levereras efter överenskommelse. Koordinatsystem anges alltid i medföljande metadata.',
  },
  {
    question: 'Hur lång tid tar det från flygning till leverans?',
    answer:
      'Normal leveranstid är 3–5 arbetsdagar efter genomförd flygning. Vid akuta behov, t.ex. skadeinventering efter storm, kan vi prioritera snabbare leverans. Tidsplan bekräftas alltid i offerten.',
  },
  {
    question: 'Kan ni flyga vid dåligt väder?',
    answer:
      'Drönare kräver rimliga väderförhållanden — vi flyger inte i kraftigt regn, snöfall eller stark vind. Om vädret inte tillåter flygning vid planerat datum bokar vi om utan extra kostnad.',
  },
  {
    question: 'Behövs tillstånd för drönarflygning?',
    answer:
      'Vi ansvarar för alla nödvändiga tillstånd och anmälningar. Flygning sker enligt Transportstyrelsens regler och luftfartsförordningen. I vissa områden (t.ex. nära flygplatser eller militära zoner) kan särskilt tillstånd krävas, vilket vi hanterar i god tid.',
  },
  {
    question: 'Arbetar ni i hela Sverige?',
    answer:
      'Ja, vi utför uppdrag i hela Sverige. Vid avstånd tillkommer resekostnad, som specificeras i offerten. Vi samordnar gärna flera uppdrag i samma region.',
  },
  {
    question: 'Kan jag använda datan i mitt befintliga GIS-system?',
    answer:
      'Alla leveranser sker i branschstandardformat som är kompatibla med vanliga GIS-system (QGIS, ArcGIS, etc.) samt de flesta skogsbruksprogram. Vi anpassar format efter era system om så önskas.',
  },
  {
    question: 'Vad kostar det?',
    answer:
      'Priset beror på areal, uppdragstyp, reseavstånd och önskade leveranser. Vi ger alltid en prisindikation inom 24 timmar efter att vi fått in er förfrågan. Kontakta oss via offertformuläret för en kostnadsfri prisuppskattning.',
  },
]

export const metadata: Metadata = {
  title: 'Vanliga frågor om drönarbaserade mättjänster för skog',
  description:
    'Svar på vanliga frågor om drönarbaserad areamätning, inventering och kartläggning för skogsbruk. Upplösning, filformat, koordinatsystem, leveranstider, priser och täckningsområde.',
  alternates: { canonical: 'https://timberdrone.se/areamatning-och-skogsbruk/faq' },
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Areamätning & skogsbruk', url: '/areamatning-och-skogsbruk' },
              { name: 'Vanliga frågor', url: '/areamatning-och-skogsbruk/faq' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(FAQ_ITEMS)),
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Areamätning & skogsbruk', href: '/areamatning-och-skogsbruk' },
          { label: 'Vanliga frågor' },
        ]}
      />

      <header className="relative overflow-hidden gradient-hero py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container-page max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Vanliga frågor
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            Svar på de vanligaste frågorna om drönarbaserade mättjänster för skogsbruk
            och markförvaltning.
          </p>
        </div>
      </header>

      <FAQ items={FAQ_ITEMS} showHeading={false} />

      <CTABand
        headline="Har du fler frågor?"
        description="Kontakta oss så svarar vi gärna på frågor om våra tjänster, leveranser eller priser."
        ctaLabel="Kontakta oss"
      />
    </>
  )
}
