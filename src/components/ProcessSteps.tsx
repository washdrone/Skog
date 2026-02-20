interface Step {
  number: number
  title: string
  description: string
}

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <section className="section-padding bg-topo">
      <div className="container-page">
        <h2 className="text-center text-2xl font-bold text-terrain-900 sm:text-3xl">
          Så går det till
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-terrain-600">
          Från uppdragsdialog till färdigt underlag — en tydlig process i fyra steg.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-skog-700 text-lg font-bold text-white">
                {step.number}
              </div>
              {step.number < steps.length && (
                <div className="absolute left-[calc(50%+2rem)] top-7 hidden h-px w-[calc(100%-4rem)] bg-skog-200 lg:block" aria-hidden="true" />
              )}
              <h3 className="mt-4 text-base font-semibold text-terrain-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-terrain-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
