import Image from 'next/image'

const IMAGES = {
  tradhojdsmatning: {
    file: 'tradhojdsmatning',
    alt: 'Punktmoln med en vertikal mätlinje för trädhöjd',
  },
  plantrakning: {
    file: 'plantrakning',
    alt: 'Plantkarta med avgränsad inventeringsyta, plantmarkeringar och sammanställning',
  },
  multispektral: {
    file: 'multispektral-analys',
    alt: 'Vegetationskarta med markerat område och ett NDVI-medelvärde',
  },
} as const

export default function DeliveryImage({ kind }: { kind: keyof typeof IMAGES }) {
  const item = IMAGES[kind]
  const src = `/images/services/${item.file}.webp`
  return (
    <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <a href={src} target="_blank" rel="noopener noreferrer" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-600" aria-label={`Visa större bild: ${item.alt} (öppnas i ny flik)`}>
        <Image src={src} alt={item.alt} width={1672} height={941} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full" />
      </a>
      <figcaption className="px-5 py-4 text-sm leading-relaxed text-slate-600">
        Så kan en leverans se ut. Mätvärdena är exempelvärden.
        <a href={src} target="_blank" rel="noopener noreferrer" className="mt-2 block font-semibold text-forest-700 underline underline-offset-4">Visa större bild (ny flik)</a>
      </figcaption>
    </figure>
  )
}
