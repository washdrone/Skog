/**
 * Typed JSON-LD schema generators.
 *
 * All generators read from `business-data.ts` — never hardcode company
 * information inside individual schema objects.
 *
 * RULES:
 * - Only emit fields whose values are verified.
 * - Leave a TODO comment where fields can be added later.
 * - Do NOT use LocalBusiness until address + phone are confirmed.
 */

import {
  COMPANY,
  SERVICE_AREA,
  CAPABILITIES,
  SOCIAL_PROFILES,
} from './business-data'

const SITE_URL = COMPANY.url

/*
 * Stable @id-noder som knyter ihop JSON-LD-grafen över hela sajten.
 * Organization/WebSite emitteras globalt i layout.tsx; övriga scheman
 * refererar hit istället för att duplicera företagsdata.
 */
export const ORG_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

// ---------------------------------------------------------------------------
// Organization
// ---------------------------------------------------------------------------

export function organizationSchema() {
  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: COMPANY.name,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}${COMPANY.logoPath}`,
    },
    description:
      'Drönarbaserad skogsinventering, trädhöjdsmätning, planträkning och skogsskadeinventering. Skogliga beslutsunderlag i hela Sverige.',
    email: COMPANY.email,
    areaServed: {
      '@type': 'Country',
      name: SERVICE_AREA.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: COMPANY.email,
      contactType: 'customer service',
      availableLanguage: 'Swedish',
    },
    knowsAbout: [...CAPABILITIES],
  }

  if (COMPANY.legalName) {
    base.legalName = COMPANY.legalName
  }

  if (COMPANY.orgNumber) {
    base.identifier = {
      '@type': 'PropertyValue',
      propertyID: 'Organisationsnummer',
      value: COMPANY.orgNumber,
    }
  }

  if (COMPANY.phone) {
    base.telephone = COMPANY.phone
  }

  if (COMPANY.address) {
    base.address = {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.street,
      postalCode: COMPANY.address.postalCode,
      addressLocality: COMPANY.address.city,
      addressCountry: COMPANY.address.country,
    }
  }

  if (SOCIAL_PROFILES.length > 0) {
    base.sameAs = SOCIAL_PROFILES.map((p) => p.url)
  }

  return base
}

// ---------------------------------------------------------------------------
// WebSite
// ---------------------------------------------------------------------------

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: COMPANY.name,
    url: SITE_URL,
    inLanguage: 'sv-SE',
    description:
      'Drönarbaserad skogsinventering och skogliga beslutsunderlag i hela Sverige.',
    publisher: { '@id': ORG_ID },
    // TODO: add SearchAction when /kunskap gains a search feature
  }
}

// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: name,
    description,
    url: `${SITE_URL}${url}`,
    provider: { '@id': ORG_ID },
    areaServed: {
      '@type': 'Country',
      name: SERVICE_AREA.country,
    },
  }
}

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

// ---------------------------------------------------------------------------
// Breadcrumb
// ---------------------------------------------------------------------------

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

// ---------------------------------------------------------------------------
// Article (kunskapsartiklar/guider)
// ---------------------------------------------------------------------------

export function articleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
}: {
  headline: string
  description: string
  /** Path starting with `/`, e.g. `/kunskap/barkborre-tidigt` */
  url: string
  /** ISO date, e.g. '2026-03-05' */
  datePublished: string
  /** ISO date — ska matcha synligt "Senast uppdaterad"-datum på sidan */
  dateModified: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: `${SITE_URL}${url}`,
    mainEntityOfPage: `${SITE_URL}${url}`,
    inLanguage: 'sv-SE',
    datePublished,
    dateModified,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  }
}

// ---------------------------------------------------------------------------
// DefinedTermSet (ordlista/begreppssida)
// ---------------------------------------------------------------------------

export function definedTermSetSchema({
  name,
  description,
  url,
  terms,
}: {
  name: string
  description: string
  /** Path starting with `/`, e.g. `/kunskap/ordlista` */
  url: string
  terms: { term: string; definition: string }[]
}) {
  const setId = `${SITE_URL}${url}#termset`
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': setId,
    name,
    description,
    url: `${SITE_URL}${url}`,
    inLanguage: 'sv-SE',
    hasDefinedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      inDefinedTermSet: setId,
    })),
  }
}

// ---------------------------------------------------------------------------
// HowTo
// ---------------------------------------------------------------------------

export function howToSchema({
  name,
  description,
  steps,
}: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  }
}
