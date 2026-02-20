interface Deliverable {
  title: string
  description: string
  formats?: string[]
}

export default function DeliverablesList({ items }: { items: Deliverable[] }) {
  return (
    <section className="relative section-padding">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="container-page relative">
        <div className="text-center">
          <span className="badge">Format</span>
          <h2 className="mt-4 text-heading-xl text-slate-900 sm:text-display">Leveranser &amp; format</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">Alla underlag levereras i branschstandardformat och kan importeras direkt i era GIS-system.</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="card-shine group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-500 hover:border-forest-200 hover:shadow-2xl hover:shadow-forest-500/[0.08] hover:-translate-y-1">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-600 ring-1 ring-forest-100 group-hover:bg-forest-600 group-hover:text-white group-hover:ring-forest-600 group-hover:shadow-lg group-hover:shadow-forest-600/20 transition-all duration-500 group-hover:scale-110">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
              {item.formats && item.formats.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.formats.map((fmt) => (
                    <span key={fmt} className="inline-block rounded-full bg-forest-50 px-2.5 py-0.5 text-xs font-mono font-medium text-forest-700 ring-1 ring-forest-100">
                      {fmt}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
