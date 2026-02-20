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
      className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-forest-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="badge">{tag}</span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-forest-700 transition-colors">
        {title}
      </h3>
      <p className="mt-1 text-sm font-medium text-slate-400">{customer}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{description}</p>
      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-forest-600">
        Läs case
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  )
}
