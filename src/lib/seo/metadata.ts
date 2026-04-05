/**
 * Central metadata builder for all pages.
 *
 * Every page should use `buildMetadata()` instead of constructing
 * a raw Next.js Metadata object. This ensures consistent titles,
 * canonical URLs, OG tags and Twitter cards across the site.
 */

import { Metadata } from 'next'
import { COMPANY, OG_DEFAULTS } from './business-data'

// Re-export for backward compatibility
export const SITE_NAME = COMPANY.name
export const SITE_URL = COMPANY.url

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface MetadataInput {
  /** Page title — will be combined with the site-wide template (`%s | TimberDrone`) */
  title: string
  /** Meta description (aim for 140-160 chars, include primary keyword) */
  description: string
  /** Path starting with `/`, e.g. `/tjanster/skogsinventering` */
  path: string
  /** Set to true for pages that should not be indexed (e.g. thank-you pages) */
  noIndex?: boolean
  /** Override OG type — defaults to 'website'. Use 'article' for knowledge pages. */
  ogType?: 'website' | 'article'
  /** Per-page OG image path (relative to SITE_URL). Falls back to default. */
  ogImage?: string
}

// ---------------------------------------------------------------------------
// Builder
// ---------------------------------------------------------------------------

export function buildMetadata({
  title,
  description,
  path,
  noIndex = false,
  ogType = 'website',
  ogImage,
}: MetadataInput): Metadata {
  const url = `${SITE_URL}${path}`
  const imageUrl = ogImage
    ? `${SITE_URL}${ogImage}`
    : `${SITE_URL}${OG_DEFAULTS.imagePath}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: OG_DEFAULTS.locale,
      type: ogType,
      images: [
        {
          url: imageUrl,
          width: OG_DEFAULTS.imageWidth,
          height: OG_DEFAULTS.imageHeight,
          alt: `${title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [imageUrl],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  }
}

// ---------------------------------------------------------------------------
// Backward-compatible alias
// ---------------------------------------------------------------------------

/** @deprecated Use `buildMetadata()` instead */
export const createMetadata = buildMetadata
