'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

function FAQAccordion({ item, isOpen, toggle }: { item: FAQItem; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-skog-100">
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-base font-medium text-terrain-900">{item.question}</span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-terrain-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5 pr-8 text-sm leading-relaxed text-terrain-600">
          {item.answer}
        </div>
      )}
    </div>
  )
}

export default function FAQ({ items, showHeading = true }: { items: FAQItem[]; showHeading?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding">
      <div className="container-page max-w-3xl">
        {showHeading && (
          <>
            <h2 className="text-center text-2xl font-bold text-terrain-900 sm:text-3xl">
              Vanliga frågor
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-terrain-600">
              Svar på de vanligaste frågorna om drönarbaserade mättjänster för skogsbruk.
            </p>
          </>
        )}
        <div className="mt-10">
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
    </section>
  )
}
