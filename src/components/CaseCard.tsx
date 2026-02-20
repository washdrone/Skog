import Link from 'next/link'

interface CaseCardProps {
  title: string
  customer: string
  description: string
  tags: string[]
  href: string
}

export default function CaseCard({ title, customer, description, tags, href }: CaseCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-skog-100 bg-white p-6 shadow-sm transition-all hover:border-skog-300 hover:shadow-md"
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span key={tag} className="inline-block rounded bg-skog-50 px-2 py-0.5 text-xs font-medium text-skog-800">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-terrain-900 group-hover:text-skog-800">
        {title}
      </h3>
      <p className="mt-1 text-sm font-medium text-terrain-500">{customer}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-terrain-600">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-skog-700">
        Läs mer
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  )
}
