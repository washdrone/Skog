interface Step {
  number: number
  title: string
  description: string
}

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <section className="relative overflow-hidden bg-night-950 section-padding">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-forest-500/5 blur-[100px]" />

      <div className="container-page relative">
        <div className="text-center">
          <span className="badge-dark">Process</span>
          <h2 className="mt-4 text-heading-xl text-white sm:text-display">
            Så går det till
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            Från uppdragsdialog till färdigt underlag — en tydlig och kvalitetssäkrad process.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              {/* Connector line */}
              {step.number < steps.length && (
                <div className="absolute right-0 top-10 hidden h-px w-6 bg-gradient-to-r from-forest-500/40 to-transparent lg:block translate-x-full" aria-hidden="true" />
              )}
              <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:border-forest-500/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-600 text-lg font-bold text-white shadow-lg shadow-forest-600/25">
                  {step.number}
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
