import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import RegionLinks from '@/components/RegionLinks'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Skogsinventering med drönare i Svealand',
  description:
    'Drönarbaserad skogsinventering i Svealand — Dalarna, Värmland, Örebro, Västmanland, Uppsala, Södermanland och Stockholm. Blandskog, god tillgänglighet och närhet till storstäder.',
  path: '/platser/skogsinventering-svealand',
})

const FAQ_ITEMS = [
  {
    question: 'Kan ni genomföra flygningar nära tätorter i Svealand?',
    answer:
      'Ja, vi har erfarenhet av att flyga i områden nära bebyggelse och infrastruktur. Vi följer gällande regler för drönarflygning och anpassar flygplaner efter luftrumsrestriktioner.',
  },
  {
    question: 'Passar drönarkartläggning för blandskogar i Svealand?',
    answer:
      'Absolut. Svealands blandskog med både barr- och lövträd kartläggs effektivt med drönare. Tidpunktsanpassade flygningar kan dessutom hjälpa till att särskilja trädslag och avgränsa skadade områden i blandbestånd, vilket ger mer nyanserade beslutsunderlag.',
  },
  {
    question: 'Hur snabbt kan ni genomföra ett uppdrag i Mälardalsregionen?',
    answer:
      'Tack vare god tillgänglighet och kortare avstånd i Svealand kan vi ofta mobilisera snabbt. Tidsplanen bekräftas i offerten. Akuta uppdrag, exempelvis efter stormskador, hanteras med prioritet.',
  },
  {
    question: 'Arbetar ni med privata skogsägare i Svealand?',
    answer:
      'Ja, vi arbetar med allt från enskilda skogsägare med mindre fastigheter till stora skogsbolag och kommunala förvaltare. Uppdraget anpassas alltid efter er areal och era behov, oavsett storlek.',
  },
]

export default function SvealandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Platser', url: '#' },
              { name: 'Svealand', url: '/platser/skogsinventering-svealand' },
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

      <Breadcrumbs items={[{ label: 'Platser' }, { label: 'Svealand' }]} />

      <header className="relative overflow-hidden gradient-hero py-14 sm:py-20">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative container-page max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skogsinventering med drönare i Svealand
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            Professionell drönarbaserad kartläggning i Dalarna, Värmland, Örebro, Västmanland, Uppsala, Södermanland och Stockholm. Blandskog, god infrastruktur och korta mobiliseringstider.
          </p>
        </div>
      </header>

      {/* Regional content */}
      <section className="section-padding">
        <div className="container-page max-w-3xl mx-auto">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-heading-xl text-slate-900">Effektiv skogsinventering i Svealands blandskogar</h2>
            <p>
              Svealand kännetecknas av varierade skogslandskap — från Dalarnas och Värmlands utbredda barrskogar till Mälardalsregionens blandskogar med inslag av löv, ädellöv och jordbruksmark. Regionen har generellt god vägtillgänglighet, vilket gör att vi kan mobilisera snabbt och genomföra uppdrag effektivt.
            </p>
            <p>
              Närheten till större städer som Stockholm, Uppsala och Örebro innebär att många skogsägare och förvaltare i regionen har goda möjligheter att dra nytta av drönarbaserade underlag. God tillgänglighet gör att vi kan mobilisera snabbt och leverera färdiga kartlager och ortofoton inom överenskommen tid.
            </p>
            <p>
              Svealands blandskog ställer specifika krav på inventering. Skillnader mellan trädslag, beståndsgränser i övergångszoner och varierande täthet gör att högupplösta drönardata ger ett betydligt mervärde jämfört med traditionella metoder. Med drönarbilder och bildanalys kan vi dessutom upptäcka tidiga tecken på skador eller skadedjursangrepp i blandbestånd.
            </p>
            <p>
              Vi arbetar med skogsbolag, enskilda skogsägare, kommuner och förvaltare i Svealand. Alla leveranser sker i SWEREF99 TM och är redo att importera i pcSKOG, QGIS eller ArcGIS. Oavsett om ert skogsinnehav ligger i Dalarnas fjällnära skogar eller i Södermanlands kulturlandskap anpassar vi uppdraget efter era förhållanden.
            </p>

            <h2 className="text-heading-xl text-slate-900">Län vi täcker i Svealand</h2>
            <ul>
              <li>Dalarnas län</li>
              <li>Värmlands län</li>
              <li>Örebro län</li>
              <li>Västmanlands län</li>
              <li>Uppsala län</li>
              <li>Södermanlands län</li>
              <li>Stockholms län</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-cream-200/50 section-padding overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-500/[0.03] blur-[100px]" />
        <div className="container-page relative">
          <div className="text-center">
            <span className="badge">Tjänster i Svealand</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Tillgängliga tjänster</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Samtliga våra drönarbaserade mättjänster är tillgängliga i Svealand.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Areamätning', href: '/tjanster/skogsinventering' },
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

      <RegionLinks current="svealand" />


      <FAQ items={FAQ_ITEMS} />
      <CTABand ctaHref="/offert" />
    </>
  )
}
