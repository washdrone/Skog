/**
 * Re-export from the canonical location.
 * All new code should import from '@/lib/seo/metadata' directly.
 */
export {
  buildMetadata,
  createMetadata,
  SITE_NAME,
  SITE_URL,
} from './seo/metadata'
export type { MetadataInput } from './seo/metadata'
