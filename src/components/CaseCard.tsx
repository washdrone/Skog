interface CaseCardProps {
  title: string
  customer: string
  description: string
  tags: string[]
}

export default function CaseCard({ title, customer, description, tags }: CaseCardProps) {
  return (
    <div
      className="card-shine group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-500 hover:border-forest-300 hover:shadow-2xl hover:shadow-forest-500/[0.08] hover:-translate-y-1"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="badge">{tag}</span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>
      <p className="mt-1 text-sm font-medium text-slate-400">{customer}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  )
}
