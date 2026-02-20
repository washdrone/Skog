import Link from 'next/link'

interface CTABandProps {
  headline?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function CTABand({
  headline = 'Redo att effektivisera ert skogsbruk?',
  description = 'Berätta om ert uppdrag så återkommer vi med en prisindikation inom 24 timmar.',
  ctaLabel = 'Begär offert',
  ctaHref = '/areamatning-och-skogsbruk/kontakt',
}: CTABandProps) {
  return (
    <section className="bg-skog-800">
      <div className="container-page py-14 sm:py-16">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{headline}</h2>
            <p className="mt-3 text-skog-200">{description}</p>
          </div>
          <Link href={ctaHref} className="btn-primary bg-white text-skog-800 hover:bg-skog-50 flex-shrink-0 text-base">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
