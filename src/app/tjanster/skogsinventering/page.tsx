import { createMetadata } from '@/lib/metadata'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import ServicePageLayout from '@/components/ServicePageLayout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Skogsinventering med drönare',
  description:
    'Skogsinventering med drönare ger snabbare och mer exakt data om volym, stamantal, trädslag och beståndsgränser. Kartlager i SWEREF99 TM.',
  path: '/tjanster/skogsinventering',
})

const FAQ_ITEMS = [
  {
    question: 'Hur skiljer sig drönarbaserad skogsinventering från traditionell inventering?',
    answer: 'Traditionell inventering bygger på stickprov i provytor, medan drönarbaserad inventering kartlägger hela arealen. Det ger en heltäckande bild utan extrapolering och minskar fälttiden avsevärt. Drönardata kompletterar — snarare än ersätter — fältprovytor.',
  },
  {
    question: 'Vilken noggrannhet kan förväntas vid skogsinventering med drönare?',
    answer: 'Med fotogrammetri och hög markupplösning kan vi uppskatta trädhöjd och identifiera enskilda trädkronor. Volymuppskattningar kalibreras mot fältprovytor för att uppnå relevant noggrannhet.' /* MÅSTE VERIFIERAS: noggrannhet beror på utrustning och förhållanden */,
  },
  {
    question: 'Vilka trädslag kan identifieras?',
    answer: 'Med högupplösta drönarbilder kan vi särskilja barrträd från lövträd. Med tidpunktsanpassade flygningar (t.ex. tidig vår eller höst) ökar möjligheten att särskilja gran, tall och björk. Artklassificering förbättras ytterligare med fältverifiering.',
  },
  {
    question: 'Hur stor areal kan inventeras per dag?',
    answer: 'Beroende på flygparametrar och terräng kan vi inventera stora arealer per flygdag. Faktorer som flyghöjd, överlapp och antal batterier påverkar kapaciteten.',
  },
]

export default function SkogsinventeringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Hem', url: '/' },
              { name: 'Tjänster', url: '/tjanster' },
              { name: 'Skogsinventering', url: '/tjanster/skogsinventering' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Skogsinventering med drönare',
              description: 'Snabbare och mer exakt skogsinventering med drönare. Volym, stamantal, trädslag och beståndsgränser kartlagda från luften.',
              url: '/tjanster/skogsinventering',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <ServicePageLayout
        breadcrumbLabel="Skogsinventering"
        breadcrumbParent={{ label: 'Tjänster', href: '/tjanster' }}
        headline="Skogsinventering med drönare"
        intro="Drönarbaserad skogsinventering ger en heltäckande bild av skogsbeståndet — snabbare, billigare och med högre rumslig upplösning än traditionella stickprovsmetoder."
        relatedLinks={[
          { label: 'Trädhöjdsmätning', href: '/tjanster/tradhojdsmatning' },
          { label: 'Beståndsinventering', href: '/tjanster/bestandsinventering' },
          { label: 'Skogsskadeinventering', href: '/tjanster/skogsskadeinventering' },
          { label: 'Skogsbruksplan-underlag', href: '/tjanster/skogsbruksplan-underlag' },
        ]}
      >
        <h2>Vad är skogsinventering med drönare?</h2>
        <p>
          Skogsinventering med drönare innebär att hela skogsarealen kartläggs från luften med
          högupplösta kameror och sensorer. Till skillnad från traditionell inventering, som bygger
          på stickprov i provytor, ger drönardata en heltäckande kartbild av beståndets struktur.
          Resultatet är georefererade kartlager som visar volym, stamantal, trädhöjd och
          beståndsgränser.
        </p>

        <h2>Metodik</h2>
        <p>
          Drönaren flyger systematiskt över området med hög överlapp (80 % fram, 70 % sida) och
          samlar in hundratals georefererade bilder. Bilderna bearbetas med fotogrammetrisk
          mjukvara till ortofoto och punktmoln. När uppdraget kräver noggrann markmodell även
          under tätt krontak — till exempel för terränganalys — flyger vi istället med
          drönarburen LiDAR. Från punktmolnet extraheras trädparametrar:
        </p>
        <ul>
          <li><strong>Trädhöjd</strong> — beräknas som skillnaden mellan ytmodell (DSM) och markmodell (DTM)</li>
          <li><strong>Stamantal</strong> — identifieras via trädkronssegmentering i punktmolnet</li>
          <li><strong>Krondiameter</strong> — mäts från segmenterade trädkronor</li>
          <li><strong>Volymuppskattning</strong> — beräknas med allometriska modeller kalibrerade mot fältprovytor</li>
        </ul>

        <h2>Fördelar gentemot traditionell inventering</h2>
        <ul>
          <li>Heltäckande kartläggning istället för stickprov</li>
          <li>Minskad fälttid</li>
          <li>Hög rumslig upplösning jämfört med traditionella provytor</li>
          <li>Objektiva, repeterbara mätningar</li>
          <li>Dokumentation som underlag för uppföljning över tid</li>
        </ul>

        <h2>Leveranser</h2>
        <ul>
          <li>Ortofoto (GeoTIFF, hög markupplösning)</li>
          <li>Punktmoln (LAS/LAZ)</li>
          <li>Kronhöjdsmodell (CHM) och markmodell (DTM)</li>
          <li>Beståndskarta med trädparametrar (GeoPackage/Shapefile)</li>
          <li>Sammanfattande rapport med statistik och kartor (PDF)</li>
        </ul>

        <h2>Kombinera med andra tjänster</h2>
        <p>
          Skogsinventering med drönare blir ännu kraftfullare i kombination med{' '}
          <Link href="/tjanster/tradhojdsmatning" className="text-forest-600 underline hover:text-forest-800">
            trädhöjdsmätning
          </Link>{' '}
          för höjd- och tillväxtdata eller{' '}
          <Link href="/tjanster/skogsskadeinventering" className="text-forest-600 underline hover:text-forest-800">
            skogsskadeinventering
          </Link>{' '}
          för att kartlägga storm-, insekts- och torkskador. Data kan även användas som underlag för{' '}
          <Link href="/tjanster/skogsbruksplan-underlag" className="text-forest-600 underline hover:text-forest-800">
            skogsbruksplaner
          </Link>.
        </p>
      </ServicePageLayout>

      <FAQ items={FAQ_ITEMS} />
    </>
  )
}
