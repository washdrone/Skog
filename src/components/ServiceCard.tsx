import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  index?: number
}

export default function ServiceCard({ title, description, href, icon, index = 0 }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-forest-300 hover:shadow-xl hover:shadow-forest-500/5 hover:-translate-y-1 reveal reveal-delay-${index + 1}`}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-600 ring-1 ring-forest-100 transition-all duration-300 group-hover:bg-forest-600 group-hover:text-white group-hover:ring-forest-600 group-hover:shadow-lg group-hover:shadow-forest-600/25">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-forest-700 transition-colors">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
        {description}
      </p>
      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-forest-600 opacity-0 translate-x-[-8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        Läs mer
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  )
}
