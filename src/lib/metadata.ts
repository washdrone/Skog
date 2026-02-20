import { Metadata } from 'next'

const SITE_NAME = 'WashDrone'
const SITE_URL = 'https://washdrone.se'

export function createMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string
  description: string
  path: string
  noIndex?: boolean
}): Metadata {
  const url = `${SITE_URL}${path}`
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'sv_SE',
      type: 'website',
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  }
}

export { SITE_NAME, SITE_URL }
