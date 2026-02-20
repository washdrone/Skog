import Link from 'next/link'
import { organizationSchema } from '@/lib/schema'

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-terrain-950">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topo-home" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M40 40c40 0 60 40 100 40s60-30 100-30" fill="none" stroke="#5e804f" strokeWidth="1" opacity="0.6" />
                <path d="M-20 80c40 10 60 50 100 50s60-40 100-40" fill="none" stroke="#5e804f" strokeWidth="1" opacity="0.4" />
                <path d="M20 120c30 0 50 30 90 30s70-20 110-20" fill="none" stroke="#5e804f" strokeWidth="1" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo-home)" />
          </svg>
        </div>

        <div className="container-page relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Drönarbaserade mättjänster för skogsbruk
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-terrain-300 sm:text-xl">
              Exakta underlag för areamätning, inventering och planering — levererade som
              kartlager, ortofoton och rapporter redo för ert arbetsflöde.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link href="/areamatning-och-skogsbruk" className="btn-primary text-base">
                Se våra tjänster
              </Link>
              <Link
                href="/areamatning-och-skogsbruk/kontakt"
                className="btn-secondary border-terrain-500 text-terrain-300 hover:bg-terrain-900 text-base"
              >
                Begär offert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brief services overview */}
      <section className="section-padding">
        <div className="container-page">
          <h2 className="text-center text-2xl font-bold text-terrain-900 sm:text-3xl">
            Tjänster för skog &amp; mark
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-terrain-600">
            Vi levererar drönarbaserade underlag som effektiviserar planering, uppföljning och dokumentation inom skogsbruk.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Areamätning', desc: 'Georefererade polygoner för fastigheter, avdelningar och bestånd.', href: '/areamatning-och-skogsbruk/areamatning' },
              { title: 'Inventering', desc: 'Översikt av beståndsgränser, hyggen, vägar, upplag och kantzoner.', href: '/areamatning-och-skogsbruk/inventering' },
              { title: 'Avverkningsunderlag', desc: 'Yta, avgränsning, åtkomst och hinder kartlagda för avverkningsplanering.', href: '/areamatning-och-skogsbruk/avverkningsunderlag' },
              { title: 'Skadeinventering', desc: 'Dokumentation och kartlager efter storm, snö eller insektsangrepp.', href: '/areamatning-och-skogsbruk/skadeinventering' },
              { title: 'Planteringsuppföljning', desc: 'Översikt och dokumentation av planteringar och ungskog.', href: '/areamatning-och-skogsbruk/planteringsuppfoljning' },
              { title: 'Leveranser & format', desc: 'Kartlager, ortofoton, rapporter — i branschstandard.', href: '/areamatning-och-skogsbruk/leveranser' },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group rounded-lg border border-skog-100 bg-white p-6 shadow-sm transition-all hover:border-skog-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-terrain-900 group-hover:text-skog-800">{svc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-terrain-600">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
