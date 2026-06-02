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

// ---------------------------------------------------------------------------
// Organization
// ---------------------------------------------------------------------------

export function organizationSchema() {
  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: SITE_URL,
    logo: `${SITE_URL}${COMPANY.logoPath}`,
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

  // Add phone when verified
  if (COMPANY.phone) {
    base.telephone = COMPANY.phone
  }

  // Add address when verified — at that point, change @type to LocalBusiness
  if (COMPANY.address) {
    base.address = {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.street,
      postalCode: COMPANY.address.postalCode,
      addressLocality: COMPANY.address.city,
      addressCountry: COMPANY.address.country,
    }
  }

  // Add social profiles when available
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
    name: COMPANY.name,
    url: SITE_URL,
    description:
      'Drönarbaserad skogsinventering och skogliga beslutsunderlag i hela Sverige.',
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      url: SITE_URL,
    },
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
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: COMPANY.name,
      url: SITE_URL,
    },
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
