import { SITE_URL } from './metadata'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Timberdrone',
    url: SITE_URL,
    description:
      'Professionella drönarbaserade mät- och underlagstjänster för skogsbruk och fastighetsförvaltning.',
    email: 'info@timberdrone.se',
    /* MÅSTE VERIFIERAS: telefonnummer — lägg till när bekräftat */
    /* telephone: '+46-XX-XXX XX XX', */
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SE',
      /* MÅSTE VERIFIERAS: ort och gatuadress */
    },
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
      name: 'Timberdrone',
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
