'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

function FAQAccordion({ item, isOpen, toggle }: { item: FAQItem; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        type="button"
        className="flex w-full items-center justify-between py-6 text-left group"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className="pr-6 text-base font-sans font-medium text-slate-900 group-hover:text-forest-600 transition-colors">{item.question}</span>
        <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-forest-500 rotate-180' : 'bg-cream-200 group-hover:bg-forest-400/10'}`}>
          <svg
            className={`h-4 w-4 transition-colors ${isOpen ? 'text-white' : 'text-slate-500'}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="pr-12 text-sm leading-relaxed text-slate-500 font-body">{item.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ({ items, showHeading = true }: { items: FAQItem[]; showHeading?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding">
      <div className="container-page max-w-3xl">
        {showHeading && (
          <div className="text-center mb-12">
            <span className="badge">FAQ</span>
            <h2 className="mt-4 text-heading-xl text-slate-900 font-display sm:text-display">Vanliga frågor</h2>
            <p className="mt-4 text-slate-500">Svar på de vanligaste frågorna om drönarbaserade mättjänster för skogsbruk.</p>
          </div>
        )}
        <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm sm:p-4">
          <div className="px-4">
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
