import Link from 'next/link'

/*
 * 404-sidan hade tidigare en enda länk tillbaka till startsidan. Google
 * beskriver 404 som en stark signal att inte genomsöka URL:en igen, men
 * besökare som landar här via en gammal länk ska hitta vidare utan att gå
 * tillbaka. Genvägarna nedan speglar sajtens huvudingångar.
 */

const SHORTCUTS = [
  {
    label: 'Tjänster',
    href: '/tjanster',
    desc: 'Skogsinventering, trädhöjdsmätning, planträkning och skadeinventering.',
  },
  {
    label: 'Kunskap',
    href: '/kunskap',
    desc: 'Guider om kostnad, barkborre, stormskada och val av metod.',
  },
  {
    label: 'Platser',
    href: '/platser',
    desc: 'Så arbetar vi regionalt — från Norrland till Götaland.',
  },
  {
    label: 'Begär offert',
    href: '/offert',
    desc: 'Beskriv ert uppdrag så återkommer vi med en prisindikation.',
  },
]

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-page max-w-3xl">
        <p className="text-sm font-mono uppercase tracking-widest text-forest-600">Fel 404</p>
        <h1 className="mt-4 text-display text-slate-900 sm:text-display-lg">
          Sidan kunde inte hittas
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          Adressen finns inte, eller så har sidan flyttat. Här är de vanligaste
          ingångarna till sajten.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {SHORTCUTS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-500/[0.05] hover:-translate-y-0.5"
            >
              <span className="block text-base font-semibold text-slate-900 group-hover:text-forest-700 transition-colors">
                {item.label}
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-slate-500">
                {item.desc}
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Hittar du inte det du söker?{' '}
          <Link href="/" className="font-semibold text-forest-600 underline hover:text-forest-800">
            Gå till startsidan
          </Link>{' '}
          eller mejla{' '}
          <a
            href="mailto:info@timberdrone.se"
            className="font-semibold text-forest-600 underline hover:text-forest-800"
          >
            info@timberdrone.se
          </a>
          .
        </p>
      </div>
    </section>
  )
}
