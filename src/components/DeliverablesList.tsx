interface Deliverable {
  title: string
  description: string
  formats?: string[]
}

export default function DeliverablesList({ items }: { items: Deliverable[] }) {
  return (
    <section className="section-padding">
      <div className="container-page">
        <h2 className="text-center text-2xl font-bold text-terrain-900 sm:text-3xl">
          Leveranser &amp; format
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-terrain-600">
          Alla underlag levereras i branschstandard och kan importeras direkt i era system.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-lg border border-skog-100 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-skog-50 text-skog-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-terrain-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-terrain-600">{item.description}</p>
              {item.formats && item.formats.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.formats.map((fmt) => (
                    <span key={fmt} className="inline-block rounded bg-skog-50 px-2 py-0.5 text-xs font-medium text-skog-800">
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
