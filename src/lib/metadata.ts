import { Metadata } from 'next'

const SITE_NAME = 'TimberDrone'
const SITE_URL = 'https://timberdrone.se'

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
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'sv_SE',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og-default.png`,
          width: 1200,
          height: 630,
          alt: `${title} — TimberDrone`,
        },
      ],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  }
}

export { SITE_NAME, SITE_URL }
