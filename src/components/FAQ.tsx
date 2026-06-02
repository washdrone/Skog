'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

function FAQAccordion({ item, isOpen, toggle }: { item: FAQItem; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        type="button"
        className="flex w-full items-center justify-between py-6 text-left group"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className="pr-6 text-lg font-bold text-slate-900 group-hover:text-forest-700 transition-colors tracking-tight">{item.question}</span>
        <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center transition-all duration-300 border ${isOpen ? 'bg-forest-900 border-forest-900 rotate-180' : 'bg-slate-50 border-slate-200 group-hover:border-forest-400 group-hover:bg-forest-50'}`}>
          <svg
            className={`h-4 w-4 transition-colors ${isOpen ? 'text-accent-500' : 'text-slate-500 group-hover:text-forest-600'}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="pr-12 text-base leading-relaxed text-slate-600 font-body">{item.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ({ items, showHeading = true }: { items: FAQItem[]; showHeading?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-page max-w-4xl">
        {showHeading && (
          <div className="mb-12">
            <span className="badge">Tekniska frågor</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="mt-4 text-heading-xl text-slate-900 font-display sm:text-display tracking-tight">
                Vanliga frågor
              </h2>
              <div className="max-w-md">
                <p className="text-slate-600 font-body">Svar på de vanligaste frågorna om drönarbaserad skogsinventering, skadekartläggning och leveransformat.</p>
              </div>
            </div>
          </div>
        )}
        <div className="panel bg-white p-6 sm:p-10">
          <div className="">
            {items.map((item, i) => (
              <FAQAccordion
                key={i}
                item={item}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
