import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import RegionLinks from '@/components/RegionLinks'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Skogsinventering med drönare i Västernorrland',
  description:
    'Drönarbaserad skogsinventering i Västernorrland. Vi kartlägger stora skogsinnehav i Ångermanland och Medelpad — anpassat för långa avstånd.',
  path: '/platser/skogsinventering-vasternorrland',
})

const FAQ_ITEMS = [
  {
    question: 'Hur hanterar ni de stora arealerna i Västernorrland?',
    answer:
      'Vi planerar flerdagsuppdrag för att systematiskt täcka stora skogsinnehav. Genom noggrann logistikplanering maximerar vi flygeffektiviteten per dag. Arealkapaciteten varierar beroende på terrängförhållanden och önskad upplösning — vi specificerar detta i offerten.',
  },
  {
    question: 'Kan ni flyga i Höga Kustens kuperade terräng?',
    answer:
      'Ja. Vi har erfarenhet av att arbeta i kuperad terräng och anpassar flygplaneringen efter höjdskillnaderna. Höga Kustens dramatiska topografi kräver extra noggrannhet, men resultatet blir lika tillförlitligt som i plan terräng.',
  },
  {
    question: 'Arbetar ni med de stora skogsbolagen i regionen?',
    answer:
      'Ja. Vi utför uppdrag åt både privata skogsägare och skogsbolag. För bolag med stora innehav kan vi anpassa leveranser, format och arbetsflöden efter era system och processer.',
  },
  {
    question: 'Vilka kommuner i Västernorrland täcker ni?',
    answer:
      'Vi utför uppdrag i hela Västernorrlands län, inklusive Sundsvall, Härnösand, Kramfors, Sollefteå, Örnsköldsvik, Timrå och Ånge. Resekostnad kan tillkomma beroende på avstånd och specificeras i offerten.',
  },
]

export default function VasternorrlandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Platser', url: '/platser' },
              { name: 'Västernorrland', url: '/platser/skogsinventering-vasternorrland' },
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

      <Breadcrumbs items={[{ label: 'Platser' }, { label: 'Västernorrland' }]} />

      <header className="relative overflow-hidden gradient-hero py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container-page max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skogsinventering med drönare i Västernorrland
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            Professionell drönarbaserad kartläggning av skog i Västernorrlands län. Anpassad för stora skogsinnehav i Ångermanland och Medelpad — en av Sveriges tyngsta skogsbruksregioner.
          </p>
        </div>
      </header>

      {/* Regional content */}
      <section className="section-padding">
        <div className="container-page max-w-3xl mx-auto">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-heading-xl text-slate-900">Drönarinventering anpassad för Västernorrlands skogar</h2>
            <p>
              Västernorrland tillhör Sveriges tyngsta skogsbruksregioner. Länet, som omfattar de historiska landskapen Ångermanland och Medelpad, har en lång tradition av skogsbruk och skogsindustri. Stora skogsbolag har betydande innehav här, men det finns också ett stort antal privata skogsägare med fastigheter av varierande storlek.
            </p>
            <p>
              Terrängen i Västernorrland karaktäriseras av djupa älvdalar som skär genom ett kuperat skogslandskap. Ångermanälven, Indalsälven och Ljungan har format topografin och skapat en mosaik av branta sluttningar, platåer och dalgångar. Denna variation gör traditionell fältinventering tidskrävande och svårtillgänglig i många områden. Drönarbaserad kartläggning erbjuder ett effektivt alternativ som minskar behovet av fältarbete i svår terräng.
            </p>
            <p>
              Länets skogar domineras av barrskog — gran och tall — med inslag av björk och andra lövträd. Produktiviteten varierar från högproduktiva skogar i kustlandet och älvdalarna till magrare marker i de inre delarna. Med drönarbaserad inventering kan skogsägare och förvaltare få en aktuell bild av beståndsstruktur, vitalitet och eventuella skador utan att behöva genomföra omfattande fältbesök.
            </p>
            <p>
              Höga Kusten, som är ett av Västernorrlands mest kända naturområden, har en särskilt dramatisk topografi med stora höjdskillnader på kort avstånd. Skogsmark i och kring detta område kan vara svårtillgänglig till fots, men lämpar sig väl för drönarbaserad kartläggning. Vi levererar data i SWEREF99 TM som kan importeras direkt i pcSKOG, QGIS eller ArcGIS.
            </p>

            <h2 className="text-heading-xl text-slate-900">Områden vi täcker i Västernorrland</h2>
            <ul>
              <li>Ångermanland — Härnösand, Kramfors, Sollefteå och Örnsköldsvik</li>
              <li>Medelpad — Sundsvall, Timrå och Ånge</li>
              <li>Höga Kusten och kustskogarna</li>
              <li>Inlandet och de stora älvdalarna</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-cream-200/50 section-padding overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/[0.03] blur-[100px]" />
        <div className="container-page relative">
          <div className="text-center">
            <span className="badge">Tjänster i Västernorrland</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Tillgängliga tjänster</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Samtliga våra drönarbaserade mättjänster är tillgängliga i Västernorrland.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Arealmätning', href: '/tjanster/skogsinventering' },
              { label: 'Inventering & översikt', href: '/tjanster/bestandsinventering' },
              { label: 'Avverkningsunderlag', href: '/tjanster/skogsbruksplan-underlag' },
              { label: 'Skogsskadeinventering', href: '/tjanster/skogsskadeinventering' },
              { label: 'Planträkning', href: '/tjanster/plantrakning' },
              { label: 'Trädhöjdsmätning', href: '/tjanster/tradhojdsmatning' },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 text-center text-sm font-medium text-slate-700 transition-all duration-300 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-500/[0.05] hover:-translate-y-0.5"
              >
                {svc.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RegionLinks current="vasternorrland" />


      <FAQ items={FAQ_ITEMS} />
      <CTABand ctaHref="/offert" />
    </>
  )
}
