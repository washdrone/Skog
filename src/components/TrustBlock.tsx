const TRUST_ITEMS = [
  {
    title: 'EASA-utbildade piloter',
    description:
      'Våra piloter är utbildade enligt EASA:s regelverk. Vi säkerställer att nödvändiga tillstånd finns för varje uppdrag.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    /* MÅSTE VERIFIERAS: Definiera kvalitetskontrollens kriterier och tröskelvärden */
    title: 'Kvalitetssäkrad leverans',
    description:
      'Varje underlag genomgår kontroll innan leverans.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    /* MÅSTE VERIFIERAS: Specificera datalagring, gallringspolicy och äganderätt (C4) */
    title: 'Dataintegritet',
    description:
      'Vi hanterar era data ansvarsfullt och i enlighet med gällande dataskyddsregler.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
]

export default function TrustBlock() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-600 to-forest-900" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container-page relative z-10 section-padding-sm">
        <div className="text-center mb-12">
          <span className="badge-dark">Kvalitet & trygghet</span>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.title}
              className="glass rounded-2xl p-8 text-center transition-all duration-500 hover:bg-white/[0.08]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-500/20 text-forest-300 ring-1 ring-forest-500/30">
                {item.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
