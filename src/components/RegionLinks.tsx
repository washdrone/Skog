import Link from 'next/link'

/**
 * Hierarkisk länkning mellan platssidorna.
 *
 * Jämtland och Västernorrland ligger geografiskt inuti Norrland, Dalarna och
 * Stockholm/Uppsala inuti Svealand. Utan explicita länkar ser Google sju
 * fristående sidor som tävlar om samma sökordsmönster, och samtliga nås bara
 * via /platser-hubben.
 *
 * Den här komponenten gör hierarkin explicit: varje sida länkar uppåt till sin
 * region, nedåt till sina län och i sidled till angränsande områden. Det är den
 * faktor Google beskriver som "perceived inventory" — den du påverkar mest.
 * https://developers.google.com/crawling/docs/crawl-budget
 */

export type RegionKey =
  | 'norrland'
  | 'svealand'
  | 'smaland'
  | 'stockholm'
  | 'dalarna'
  | 'vasternorrland'
  | 'jamtland'

interface RegionNode {
  label: string
  href: string
  /** Överordnad region, om sidan är ett län inom en större region. */
  parent?: RegionKey
  /** Län som ligger inom regionen. */
  children?: RegionKey[]
  /** Sidoordnade områden på samma nivå. */
  siblings?: RegionKey[]
}

export const REGIONS: Record<RegionKey, RegionNode> = {
  norrland: {
    label: 'Norrland',
    href: '/platser/skogsinventering-norrland',
    children: ['jamtland', 'vasternorrland'],
    siblings: ['svealand', 'smaland'],
  },
  svealand: {
    label: 'Svealand',
    href: '/platser/skogsinventering-svealand',
    children: ['dalarna', 'stockholm'],
    siblings: ['norrland', 'smaland'],
  },
  smaland: {
    label: 'Småland & Götaland',
    href: '/platser/skogsinventering-smaland',
    siblings: ['svealand', 'norrland'],
  },
  jamtland: {
    label: 'Jämtland',
    href: '/platser/skogsinventering-jamtland',
    parent: 'norrland',
    siblings: ['vasternorrland'],
  },
  vasternorrland: {
    label: 'Västernorrland',
    href: '/platser/skogsinventering-vasternorrland',
    parent: 'norrland',
    siblings: ['jamtland'],
  },
  dalarna: {
    label: 'Dalarna',
    href: '/platser/skogsinventering-dalarna',
    parent: 'svealand',
    siblings: ['stockholm'],
  },
  stockholm: {
    label: 'Stockholm & Uppsala',
    href: '/platser/skogsinventering-stockholm',
    parent: 'svealand',
    siblings: ['dalarna'],
  },
}

function RegionCard({ node, prefix }: { node: RegionNode; prefix: string }) {
  return (
    <Link
      href={node.href}
      className="group rounded-2xl border border-slate-200/80 bg-white px-5 py-4 transition-all duration-300 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-500/[0.05] hover:-translate-y-0.5"
    >
      <span className="block text-xs font-medium uppercase tracking-wider text-forest-600">
        {prefix}
      </span>
      <span className="mt-1 block text-sm font-semibold text-slate-800 group-hover:text-forest-700 transition-colors">
        Skogsinventering i {node.label}
      </span>
    </Link>
  )
}

export default function RegionLinks({ current }: { current: RegionKey }) {
  const node = REGIONS[current]
  const parent = node.parent ? REGIONS[node.parent] : undefined
  const children = (node.children ?? []).map((key) => REGIONS[key])
  const siblings = (node.siblings ?? []).map((key) => REGIONS[key])

  return (
    <section className="bg-white section-padding-sm border-t border-slate-200">
      <div className="container-page">
        <h2 className="text-center text-heading text-slate-900">Angränsande områden</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-500">
          Vi arbetar rikstäckande. Ligger er fastighet i ett angränsande område hittar ni
          rätt sida här.
        </p>

        <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {parent && <RegionCard node={parent} prefix="Överordnad region" />}
          {children.map((child) => (
            <RegionCard key={child.href} node={child} prefix="Län inom regionen" />
          ))}
          {siblings.map((sibling) => (
            <RegionCard key={sibling.href} node={sibling} prefix="Angränsande" />
          ))}
        </div>

        <p className="mt-8 text-center text-sm">
          <Link
            href="/platser"
            className="font-semibold text-forest-600 underline hover:text-forest-800"
          >
            Se samtliga regioner
          </Link>
        </p>
      </div>
    </section>
  )
}
