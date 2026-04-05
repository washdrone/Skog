import { SITE_URL } from './metadata'

export function organizationSchema() {
  /* Organization istället för LocalBusiness — adress och telefon saknas (MÅSTE VERIFIERAS).
     Byt till LocalBusiness när fullständig NAP (namn, adress, telefon) är bekräftad. */
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TimberDrone',
    url: SITE_URL,
    logo: `${SITE_URL}/timberdrone-logo.png`,
    description:
      'Skogsinventering, multispektralanalys, fotosyntesmätning, LiDAR och barkborredetektion med drönare. Kolinlagringsberäkning för ESG.',
    email: 'info@timberdrone.se',
    /* MÅSTE VERIFIERAS: telefonnummer — lägg till när bekräftat */
    /* telephone: '+46-XX-XXX XX XX', */
    areaServed: {
      '@type': 'Country',
      name: 'Sweden',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@timberdrone.se',
      contactType: 'customer service',
      availableLanguage: 'Swedish',
    },
    knowsAbout: [
      'Skogsinventering',
      'Multispektralanalys',
      'Fotosyntesmätning',
      'LiDAR-skanning',
      'Barkborredetektion',
      'Ortofoto',
      'Kolinlagringsberäkning',
      'ESG-rapportering skog',
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TimberDrone',
    url: SITE_URL,
    description:
      'Skogsinventering och multispektralanalys med drönare i hela Sverige.',
    publisher: {
      '@type': 'Organization',
      name: 'TimberDrone',
      url: SITE_URL,
    },
    /* SearchAction borttagen — ingen sökfunktion finns på sajten.
       Lägg till igen om /kunskap får sökfunktionalitet. */
  }
}

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
      '@type': 'LocalBusiness',
      name: 'TimberDrone',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sweden',
    },
  }
}

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

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
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
