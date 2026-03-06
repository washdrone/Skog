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
      className={`card-shine group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-500 hover:border-forest-400/50 hover:shadow-2xl hover:shadow-forest-400/[0.08] sm:hover:-translate-y-1.5 sm:p-7 reveal reveal-delay-${index + 1}`}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-400/10 text-forest-500 ring-1 ring-forest-400/20 transition-all duration-500 group-hover:bg-forest-500 group-hover:text-white group-hover:ring-forest-500 group-hover:shadow-lg group-hover:shadow-forest-500/25 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-sans font-semibold text-slate-900 group-hover:text-forest-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
        {description}
      </p>
      <div className="mt-5 flex items-center gap-2 text-sm font-sans font-semibold text-forest-500 opacity-0 translate-x-[-8px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
        Läs mer
        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  )
}
