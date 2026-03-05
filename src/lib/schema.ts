import { SITE_URL } from './metadata'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TimberDrone',
    url: SITE_URL,
    description:
      'Skogsinventering, multispektralanalys, fotosyntesmätning, LiDAR och barkborredetektion med drönare. Kolinlagringsberäkning för ESG. Nationell täckning i hela Sverige.',
    email: 'info@timberdrone.se',
    /* MÅSTE VERIFIERAS: telefonnummer — lägg till när bekräftat */
    /* telephone: '+46-XX-XXX XX XX', */
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SE',
      /* MÅSTE VERIFIERAS: ort och gatuadress */
    },
    areaServed: [
      { '@type': 'Country', name: 'Sweden' },
      { '@type': 'State', name: 'Norrbottens län' },
      { '@type': 'State', name: 'Västerbottens län' },
      { '@type': 'State', name: 'Jämtlands län' },
      { '@type': 'State', name: 'Västernorrlands län' },
      { '@type': 'State', name: 'Gävleborgs län' },
      { '@type': 'State', name: 'Dalarnas län' },
      { '@type': 'State', name: 'Värmlands län' },
      { '@type': 'State', name: 'Örebro län' },
      { '@type': 'State', name: 'Västmanlands län' },
      { '@type': 'State', name: 'Uppsala län' },
      { '@type': 'State', name: 'Stockholms län' },
      { '@type': 'State', name: 'Södermanlands län' },
      { '@type': 'State', name: 'Östergötlands län' },
      { '@type': 'State', name: 'Jönköpings län' },
      { '@type': 'State', name: 'Kronobergs län' },
      { '@type': 'State', name: 'Kalmar län' },
      { '@type': 'State', name: 'Gotlands län' },
      { '@type': 'State', name: 'Blekinge län' },
      { '@type': 'State', name: 'Skåne län' },
      { '@type': 'State', name: 'Hallands län' },
      { '@type': 'State', name: 'Västra Götalands län' },
    ],
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
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/kunskap?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
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
