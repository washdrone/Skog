interface Step {
  number: number
  title: string
  description: string
}

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <section className="bg-white border-b border-slate-200 section-padding">
      <div className="container-page">
        <div className="max-w-3xl mb-16">
          <span className="badge">Ditt uppdrag</span>
          <h2 className="mt-4 text-heading-xl text-slate-900 font-display sm:text-display tracking-tight">
            En strukturerad arbetsprocess
          </h2>
          <p className="mt-4 text-slate-600 font-body leading-relaxed max-w-2xl">
            Från den inledande behovsanalysen till leverans av färdiga beslutsunderlag direkt i era system.
          </p>
        </div>

        <div className={`grid gap-6 sm:grid-cols-2 ${steps.length <= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
          {steps.map((step) => (
            <div key={step.number} className="panel p-8 flex flex-col items-start relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-mapping-grid opacity-[0.05]" />
              <div className="text-[10px] font-mono font-bold text-forest-400 mb-6">STEG 0{step.number}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 font-body flex-grow">{step.description}</p>
              <div className="mt-6 w-full h-1 bg-slate-100 group-hover:bg-forest-500 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
