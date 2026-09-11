import Link from 'next/link'
import Image from 'next/image'

const OUTPUTS = [
  {
    title: 'Trädhöjd och punktmoln',
    description: 'Höjddata visar beståndets struktur och ger underlag för uppföljning. Trädhöjd beräknas i förhållande till marknivån; underlagets kvalitet påverkar resultatet.',
    detail: 'Punktmoln · höjdmodell · rapport',
    href: '/tjanster/tradhojdsmatning',
    linkText: 'Läs om trädhöjdsmätning',
    image: '/images/services/tradhojdsmatning.webp',
    alt: 'Punktmoln med vertikal mätlinje för trädhöjd',
  },
  {
    title: 'Plantantal och fördelning',
    description: 'En plantkarta visar identifierade plantor, täthet och möjliga luckor inför fältkontroll. Små plantor och plantor som döljs av vegetation kan missas.',
    detail: 'Plantkarta · plantor per hektar · luckor',
    href: '/tjanster/plantrakning',
    linkText: 'Läs om planträkning',
    image: '/images/services/plantrakning.webp',
    alt: 'Plantkarta med inventeringsyta, plantmarkeringar och sammanställning',
  },
  {
    title: 'Förstå vegetationsindex',
    description: 'NDVI visualiserar variation i vegetation utifrån rött och nära infrarött ljus. Ett avvikande värde fastställer inte skadeorsaken och behöver tolkas tillsammans med annat underlag.',
    detail: 'Kunskap · multispektrala data · NDVI',
    href: '/kunskap/ordlista',
    linkText: 'Läs om NDVI i ordlistan',
    image: '/images/services/multispektral-analys.webp',
    alt: 'Vegetationskarta med markerat område och NDVI-medelvärde',
  },
]

export default function OutputShowcase() {
  return (
    <section aria-labelledby="output-heading" className="bg-white section-padding border-b border-slate-200">
      <div className="container-page">
        <div className="max-w-3xl mb-10">
          <span className="badge">Från bild till beslutsunderlag</span>
          <h2 id="output-heading" className="mt-4 text-heading-xl text-slate-900 font-display tracking-tight">Se vad kartor och mätdata kan visa</h2>
          <p className="mt-4 text-slate-600 font-body leading-relaxed">Utforska höjdunderlag och plantkartor, eller läs om hur vegetationsindex fungerar. Vilka data och leveransformat som passar ert område stämmer vi av i offerten.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {OUTPUTS.map((output) => (
            <article key={output.title} className="panel flex flex-col overflow-hidden">
              <figure>
                <a href={output.image} target="_blank" rel="noopener noreferrer" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-forest-600" aria-label={`Visa större bild: ${output.title} (ny flik)`}>
                  <Image src={output.image} alt={output.alt} width={1672} height={941} sizes="(min-width: 1280px) 384px, (min-width: 768px) calc(50vw - 48px), calc(100vw - 32px)" className="h-auto w-full" />
                </a>
                <figcaption className="border-b border-slate-200 px-6 py-4 text-sm leading-relaxed text-slate-600">
                  Så kan en leverans se ut. Mätvärdena är exempelvärden.
                  <a href={output.image} target="_blank" rel="noopener noreferrer" className="mt-2 block font-semibold text-forest-700 underline underline-offset-4" aria-label={`Visa större bild: ${output.title} (ny flik)`}>Visa större bild (ny flik)</a>
                </figcaption>
              </figure>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-900">{output.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{output.description}</p>
                <p className="mt-5 text-xs font-semibold text-forest-700">{output.detail}</p>
                <Link href={output.href} className="mt-6 border-t border-slate-200 pt-5 text-sm font-bold text-forest-700 underline underline-offset-4">{output.linkText}</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
