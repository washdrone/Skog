import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'
import LASTMOD from '@/lib/seo/lastmod.json'

/*
 * Sitemap-policy (Google Search Central, "Build and submit a sitemap"):
 *
 *   "Google ignores <priority> and <changefreq> values."
 *   "Google uses the <lastmod> value if it's consistently and verifiably accurate."
 *   https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
 *
 * Därför:
 *  - priority och changefreq utelämnas helt — de tillför inget för Google
 *    och gör sitemappen svårare att lita på.
 *  - lastmod hämtas från lastmod.json, som genereras ur git-historiken
 *    (`npm run seo:lastmod`) och därmed speglar faktiska innehållsändringar.
 *
 * Kör `npm run seo:lastmod` efter varje innehållsändring, annars blir
 * datumen inaktuella och Google slutar lita på dem.
 */

const lastmodMap = LASTMOD as Record<string, string>

/**
 * Sidor som ska indexeras, i den ordning de hör ihop strukturellt.
 * Legacy-paths (/vegetationsanalys/*, /areamatning-och-skogsbruk/*) 301:as
 * via next.config.js och ska aldrig ligga här.
 */
const PAGES = [
  // Kärna
  '/',
  '/offert',
  '/om-oss',

  // Tjänster
  '/tjanster',
  '/tjanster/skogsinventering',
  '/tjanster/tradhojdsmatning',
  '/tjanster/plantrakning',
  '/tjanster/skogsskadeinventering',
  '/tjanster/bestandsinventering',
  '/tjanster/skogsbruksplan-underlag',
  '/tjanster/arsavtal',

  // Kunskap
  '/kunskap',
  '/kunskap/skogsinventering-kostnad',
  '/kunskap/barkborre-tidigt',
  '/kunskap/stormskada-checklista',
  '/kunskap/dronare-vs-satellitdata',
  '/kunskap/lidar-vs-dronare',
  '/kunskap/sasongsguide-skogsinventering',
  '/kunskap/ordlista',

  // Kundsegment
  '/for/skogsagare',
  '/for/skogsbolag',
  '/for/fastighet',
  '/for/forskning',
  '/for/kommuner',

  // Platser
  '/platser',
  '/platser/skogsinventering-norrland',
  '/platser/skogsinventering-svealand',
  '/platser/skogsinventering-smaland',
  '/platser/skogsinventering-stockholm',
  '/platser/skogsinventering-dalarna',
  '/platser/skogsinventering-vasternorrland',
  '/platser/skogsinventering-jamtland',

  // Juridiskt
  '/integritetspolicy',
  '/cookiepolicy',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((path) => {
    const entry: MetadataRoute.Sitemap[number] = {
      url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    }

    const lastModified = lastmodMap[path]
    if (lastModified) {
      entry.lastModified = lastModified
    }

    return entry
  })
}
