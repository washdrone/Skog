import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Brödsmulor" className="container-page py-3">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-terrain-500">
        <li>
          <Link href="/" className="transition-colors hover:text-skog-700">Hem</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <svg className="h-3 w-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-skog-700">{item.label}</Link>
            ) : (
              <span className="text-terrain-800" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
