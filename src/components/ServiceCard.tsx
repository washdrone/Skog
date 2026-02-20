import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-skog-100 bg-white p-6 shadow-sm transition-all hover:border-skog-300 hover:shadow-md"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-skog-50 text-skog-700 transition-colors group-hover:bg-skog-100">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-terrain-900 group-hover:text-skog-800">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-terrain-600">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-skog-700">
        Läs mer
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  )
}
