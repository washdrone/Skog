interface Step {
  number: number
  title: string
  description: string
}

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  // Dynamic grid columns: 3 items → 3 cols, 4 items → 4 cols on lg
  const gridCols = steps.length <= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'

  return (
    <section className="relative overflow-hidden bg-forest-600 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-forest-500/5 blur-[100px] animate-float-slow" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-forest-400/[0.03] blur-[80px] animate-float-reverse" />

      <div className="container-page relative">
        <div className="text-center">
          <span className="badge-dark">Process</span>
          <h2 className="mt-4 text-heading-xl text-white font-display sm:text-display">
            Så går det till
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            Från uppdragsdialog till färdigt underlag — en tydlig och kvalitetssäkrad process.
          </p>
        </div>

        {/* Connector line across all steps */}
        <div className="relative mt-12 sm:mt-16">
          <div className="absolute top-[2.25rem] left-0 right-0 hidden h-px lg:block" aria-hidden="true">
            <div className="mx-auto max-w-5xl px-16">
              <div className="h-px bg-gradient-to-r from-transparent via-forest-500/30 to-transparent" />
            </div>
          </div>

          <div className={`grid gap-4 sm:grid-cols-2 sm:gap-6 ${gridCols}`}>
            {steps.map((step) => (
              <div key={step.number} className="relative group">
                <div className="h-full rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-5 sm:p-6 transition-all duration-500 hover:bg-white/[0.08] hover:border-forest-500/30 hover:shadow-lg hover:shadow-forest-500/5">
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-forest-400 text-base font-sans font-bold text-forest-600 shadow-lg shadow-forest-400/25 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-forest-400/30 group-hover:scale-110 sm:h-12 sm:w-12 sm:text-lg">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-base font-sans font-semibold text-white sm:mt-5">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
