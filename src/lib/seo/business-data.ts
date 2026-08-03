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
  imagePath: '/og-default.jpg', // 1200 x 630 — designad 2026-08-03 (eget ortofoto som bakgrund)
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
  /* Metoder — utrustning verifierad av ägaren 2026-08-03 */
  'Drönarfotogrammetri',
  'LiDAR-skanning',
] as const

// ---------------------------------------------------------------------------
// Equipment — verifierad av ägaren 2026-08-03 (CONTENT-VERIFICATION F1/F5/F6)
// ---------------------------------------------------------------------------

export const EQUIPMENT = {
  /** Drönarplattformar, bekräftade av ägaren 2026-08-03 */
  drones: ['DJI Matrice 400', 'DJI Matrice 4E'] as const,
  /** RTK-positionering bekräftad (F5) */
  rtk: true,
  /** LiDAR-kapacitet bekräftad (F6) — sensormodell EJ specificerad, ange ej modell/punkttäthet */
  lidar: true,
  /** Processmjukvara bekräftad av ägaren 2026-08-03 (F7) */
  software: ['Pix4D', 'Agisoft Metashape'] as const,
  /*
   * Typisk markupplösning (GSD) för vidvinkelkameran på DJI Matrice 4E:
   * 4/3-tums CMOS, 20 MP, 24 mm ekvivalent brännvidd -> ca 2,7 cm/pixel
   * vid 100 m flyghöjd (beräknat ur sensorgeometrin, ägaren godkände
   * beräkning ur bekräftad utrustning 2026-08-03). Anges som intervall.
   */
  typicalGsd: '2–3 cm/pixel vid 80–120 m flyghöjd',
} as const

// ---------------------------------------------------------------------------
// Coordinate system (used across the site; generally accepted as correct)
// ---------------------------------------------------------------------------

export const COORDINATE_SYSTEM = 'SWEREF99 TM (EPSG:3006)'

// ---------------------------------------------------------------------------
// Delivery formats (CONTENT-VERIFICATION B4 — verifierad 2026-08-03:
// standardformat ur Pix4D/Metashape, skräddarsydda format möjliga)
// ---------------------------------------------------------------------------

export const DELIVERY_FORMATS = [
  'GeoTIFF',
  'GeoPackage',
  'Shapefile',
  'LAS/LAZ',
] as const
