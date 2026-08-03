import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo/metadata'
import { breadcrumbSchema } from '@/lib/seo/schema'
import { COMPANY, COORDINATE_SYSTEM, DELIVERY_FORMATS, EQUIPMENT } from '@/lib/seo/business-data'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTABand from '@/components/CTABand'

export const metadata = buildMetadata({
  title: 'Om oss — drönarbaserad skogsinventering',
  description:
    'TimberDrone levererar drönarbaserad skogsinventering och geodata för produktionsskogsbruk. Läs om vår metodik och våra tjänster.',
  path: '/om-oss',
})

export default function OmOssPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Om oss', url: '/om-oss' },
            ])
          ),
        }}
      />

      <section className="bg-cream-100 section-padding border-b border-slate-200">
        <div className="container-page">
          <Breadcrumbs items={[{ label: 'Om oss' }]} />

          <div className="max-w-3xl">
            <span className="badge">Om företaget</span>
            <h1 className="mt-4 text-display text-slate-900 font-display tracking-tight">
              Om TimberDrone
            </h1>
            <p className="mt-6 text-lg text-slate-600 font-body leading-relaxed">
              TimberDrone levererar drönarbaserad datainsamling och analys för produktionsskogsbruk.
              Vi arbetar med fotogrammetri, LiDAR-skanning och geodatabearbetning
              för att skapa beslutsunderlag åt skogsägare, skogsbolag, förvaltare och forskare.
            </p>
          </div>
        </div>
      </section>

      {/* Vad vi gör */}
      <section className="bg-white section-padding border-b border-slate-200">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="text-heading-xl text-slate-900 font-display tracking-tight mb-6">
              Vad vi gör
            </h2>
            <p className="text-slate-600 font-body leading-relaxed mb-8">
              Vi samlar in georefererade data med drönare och bearbetar dem till kartlager,
              ortofoton och 3D-modeller. Resultaten levereras i branschstandardformat
              och kan importeras direkt i GIS-system.
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-4">Tjänsteområden</h3>
            <ul className="grid gap-2 sm:grid-cols-2 mb-8">
              {[
                'Skogsinventering',
                'Trädhöjdsmätning',
                'Planträkning',
                'Skogsskadeinventering',
                'Beståndsinventering',
                'Underlag till skogsbruksplan',
              ].map((cap) => (
                <li key={cap} className="flex items-center gap-3 text-sm text-slate-700 font-body">
                  <div className="h-1 w-1 bg-forest-500 rounded-none flex-shrink-0" />
                  {cap}
                </li>
              ))}
            </ul>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="panel p-6">
                <h3 className="text-sm font-bold text-slate-900 mb-2">Koordinatsystem</h3>
                <p className="text-sm text-slate-600 font-body">{COORDINATE_SYSTEM}</p>
              </div>
              <div className="panel p-6">
                <h3 className="text-sm font-bold text-slate-900 mb-2">Leveransformat</h3>
                <p className="text-sm text-slate-600 font-body">
                  {DELIVERY_FORMATS.join(', ')} — andra format efter överenskommelse
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Utrustning — verifierad av ägaren 2026-08-03 */}
      <section className="bg-cream-100 section-padding border-b border-slate-200">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="text-heading-xl text-slate-900 font-display tracking-tight mb-6">
              Utrustning och programvara
            </h2>
            <p className="text-slate-600 font-body leading-relaxed mb-8">
              Vi flyger enterprise-plattformarna {EQUIPMENT.drones.join(' och ')} med
              RTK-positionering för centimeternoggrann georeferering. Datainsamlingen
              sker med högupplöst RGB-kamera för fotogrammetri och med LiDAR-sensorn
              DJI Zenmuse L2 när uppdraget kräver markmodeller under krontak — L2:an
              registrerar upp till fem returer per laserpuls och 240&nbsp;000 punkter
              per sekund, vilket gör att laserdata når marken även genom täta kronor.
              Med vidvinkelkameran uppnås en markupplösning på typiskt {EQUIPMENT.typicalGsd}.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="panel p-6">
                <h3 className="text-sm font-bold text-slate-900 mb-2">Drönare</h3>
                <p className="text-sm text-slate-600 font-body">{EQUIPMENT.drones.join(', ')}</p>
              </div>
              <div className="panel p-6">
                <h3 className="text-sm font-bold text-slate-900 mb-2">Sensorer & positionering</h3>
                <p className="text-sm text-slate-600 font-body">
                  Högupplöst RGB, LiDAR (DJI Zenmuse L2), RTK-GNSS
                </p>
              </div>
              <div className="panel p-6">
                <h3 className="text-sm font-bold text-slate-900 mb-2">Processmjukvara</h3>
                <p className="text-sm text-slate-600 font-body">{EQUIPMENT.software.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arbetsmetod */}
      <section className="bg-white section-padding border-b border-slate-200">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="text-heading-xl text-slate-900 font-display tracking-tight mb-6">
              Arbetsmetod
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">1. Uppdragsdialog</h3>
                <p className="text-slate-600 font-body leading-relaxed">
                  Vi diskuterar areal, syfte och önskade leveranser. Utifrån det utformar vi
                  en flygplan och tidsplan.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">2. Datainsamling</h3>
                <p className="text-slate-600 font-body leading-relaxed">
                  Flygning genomförs med överlappande bildserier eller LiDAR-skanning.
                  Alla data georefereras med RTK-positionering.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">3. Bearbetning</h3>
                <p className="text-slate-600 font-body leading-relaxed">
                  Rådata från kamera och LiDAR bearbetas i Pix4D och Agisoft Metashape
                  till ortofoton, punktmoln och kartlager som ligger till grund för
                  skogliga beslutsunderlag.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">4. Leverans & kvalitetskontroll</h3>
                <p className="text-slate-600 font-body leading-relaxed">
                  Varje leverans granskas innan den skickas. Data levereras digitalt i
                  överenskommet format, redo att importeras i QGIS, ArcGIS eller
                  skogliga verksamhetssystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exempel ur verkliga leveranser — bilderna bekräftade som egna av ägaren
          2026-08-03; texterna beskriver bilderna, inga uppdragsdetaljer anges */}
      <section className="bg-cream-100 section-padding border-b border-slate-200">
        <div className="container-page">
          <div className="max-w-3xl mb-12">
            <h2 className="text-heading-xl text-slate-900 font-display tracking-tight mb-4">
              Exempel ur verkliga leveranser
            </h2>
            <p className="text-slate-600 font-body leading-relaxed">
              Bilderna nedan är hämtade ur våra egna flygningar och visar de tre
              huvudtyper av underlag vi levererar.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                image: '/sunny_ortofoto.png',
                alt: 'Ortofoto över skogsbestånd, framställt ur egna drönarbilder',
                title: 'Ortofoto',
                text: 'Ett skalriktigt, georefererat flygfoto sammansatt av hundratals överlappande drönarbilder. Här syns beståndsgränser, luckor, vägar och vattendrag med en detaljnivå som gör det möjligt att mäta areal och avstånd direkt i bilden.',
              },
              {
                image: '/sunny_lidar.png',
                alt: 'Höjddata och punktmoln över skog, visualiserad ur egen flygning',
                title: 'Höjddata & punktmoln',
                text: 'Visualisering av skogens tredimensionella struktur. Ur punktmolnet tas ytmodell, markmodell och kronhöjdsmodell fram — grunden för trädhöjd, volymuppskattning och tillväxtuppföljning över hela arealen.',
              },
              {
                image: '/sunny_vektordata.png',
                alt: 'Beståndskarta som vektordata, framställd ur egen drönarkartering',
                title: 'Vektordata & kartlager',
                text: 'Färdiga kartlager med avgränsade ytor och attributdata, redo att öppnas i QGIS, ArcGIS eller skogliga verksamhetssystem. Beståndsgränser, skadeytor och arealberäkningar levereras i format som passar ert arbetsflöde.',
              },
            ].map((item) => (
              <figure key={item.title} className="panel overflow-hidden flex flex-col">
                <div className="relative aspect-[16/10] w-full bg-forest-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 font-body leading-relaxed">{item.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="bg-white section-padding border-b border-slate-200">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="text-heading-xl text-slate-900 font-display tracking-tight mb-6">
              Kontakt
            </h2>
            <p className="text-slate-600 font-body leading-relaxed mb-6">
              Har du frågor om våra tjänster eller vill diskutera ett uppdrag?
            </p>
            <div className="space-y-3">
              <p className="text-slate-700 font-body">
                <strong>E-post:</strong>{' '}
                <a href={`mailto:${COMPANY.email}`} className="text-forest-600 hover:text-forest-700 font-bold">
                  {COMPANY.email}
                </a>
              </p>
              {COMPANY.phone && (
                <p className="text-slate-700 font-body">
                  <strong>Telefon:</strong>{' '}
                  <a href={`tel:${COMPANY.phone.replace(/[\s-]/g, '')}`} className="text-forest-600 hover:text-forest-700 font-bold">
                    {COMPANY.phone}
                  </a>
                </p>
              )}
            </div>
            <div className="mt-8">
              <Link href="/offert" className="btn-primary">
                Begär offert
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        headline="Redo att komma igång?"
        description="Berätta om ert uppdrag så diskuterar vi upplägg och tidsplan."
      />
    </>
  )
}
