/**
 * Central source of truth for all verified business data.
 *
 * RULE: Only add values here that are confirmed.
 * Mark anything pending with a TODO comment and leave the field
 * as `undefined` so that consumers can handle the absence gracefully.
 *
 * See /CONTENT-VERIFICATION.md for full verification status.
 */

// ---------------------------------------------------------------------------
// Company identity
// ---------------------------------------------------------------------------

export const COMPANY = {
  name: 'TimberDrone',
  /*
   * Ägarens beslut 2026-06-11: TimberDrone profileras som fristående
   * varumärke — juridiskt bolagsnamn, org.nr och adress utelämnas på
   * sajten och i strukturerad data.
   */
  legalName: undefined as string | undefined,
  orgNumber: undefined as string | undefined,
  url: 'https://www.timberdrone.se',
  logoPath: '/timberdrone-logo.png',
  email: 'info@timberdrone.se',

  /* Verifierad av ägaren 2026-06-11 (CONTENT-VERIFICATION D2) */
  phone: '076-309 66 96' as string | undefined,
  address: undefined as
    | { street: string; postalCode: string; city: string; country: string }
    | undefined,
} as const

// ---------------------------------------------------------------------------
// Social profiles (populate as accounts are created — CONTENT-VERIFICATION D4)
// ---------------------------------------------------------------------------

export const SOCIAL_PROFILES: { platform: string; url: string }[] = [
  // { platform: 'LinkedIn', url: 'https://linkedin.com/company/timberdrone' },
  // { platform: 'YouTube', url: 'https://youtube.com/@timberdrone' },
]

// ---------------------------------------------------------------------------
// Service area
// ---------------------------------------------------------------------------

/** Geographic coverage — rikstäckande, verifierad av ägaren 2026-06-11 (A6) */
export const SERVICE_AREA = {
  country: 'Sweden',
  countryCode: 'SE',
} as const

// ---------------------------------------------------------------------------
// OG / social sharing defaults
// ---------------------------------------------------------------------------

export const OG_DEFAULTS = {
  locale: 'sv_SE' as const,
  type: 'website' as const,
  imagePath: '/og-default.png', // 1200 x 630 — genererad placeholder, kan ersättas med designad variant
  imageWidth: 1200,
  imageHeight: 630,
} as const

// ---------------------------------------------------------------------------
// Capabilities — topics the company demonstrably covers (used in schema knowsAbout)
// ---------------------------------------------------------------------------

export const CAPABILITIES = [
  'Skogsinventering',
  'Trädhöjdsmätning',
  'Planträkning',
  'Skogsskadeinventering',
  'Beståndsinventering',
  'Virkesförrådsuppskattning',
  'Underlag för skogsbruksplan',
] as const

// ---------------------------------------------------------------------------
// Coordinate system (used across the site; generally accepted as correct)
// ---------------------------------------------------------------------------

export const COORDINATE_SYSTEM = 'SWEREF99 TM (EPSG:3006)'

// ---------------------------------------------------------------------------
// Delivery formats (CONTENT-VERIFICATION B4 — EJ VERIFIERAD, men rimligt)
// ---------------------------------------------------------------------------

export const DELIVERY_FORMATS = [
  'GeoTIFF',
  'GeoPackage',
  'Shapefile',
  'LAS/LAZ',
] as const
