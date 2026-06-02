import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split('T')[0]

  const pages = [
    // Core
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/offert', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/om-oss', priority: 0.7, changeFrequency: 'monthly' as const },

    // Tjänster (produktionsskoglig tjänstestruktur)
    { path: '/tjanster', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/tjanster/skogsinventering', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/tjanster/tradhojdsmatning', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/tjanster/plantrakning', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/tjanster/skogsskadeinventering', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/tjanster/bestandsinventering', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/skogsbruksplan-underlag', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/arsavtal', priority: 0.7, changeFrequency: 'monthly' as const },

    // Kunskap
    { path: '/kunskap', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/kunskap/barkborre-tidigt', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kunskap/stormskada-checklista', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kunskap/dronare-vs-satellitdata', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kunskap/skogsinventering-kostnad', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kunskap/lidar-vs-dronare', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kunskap/vad-paverkar-priset', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kunskap/sasongsguide-skogsinventering', priority: 0.7, changeFrequency: 'monthly' as const },

    // Kundsegment
    { path: '/for/skogsagare', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/for/skogsbolag', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/for/forskning', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/for/kommuner', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/for/fastighet', priority: 0.6, changeFrequency: 'monthly' as const },

    // Platser (regionala)
    { path: '/platser', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platser/skogsinventering-norrland', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platser/skogsinventering-svealand', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platser/skogsinventering-smaland', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platser/skogsinventering-stockholm', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platser/skogsinventering-dalarna', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platser/skogsinventering-vasternorrland', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platser/skogsinventering-jamtland', priority: 0.7, changeFrequency: 'monthly' as const },

    /*
     * Legacy paths (/vegetationsanalys/*, /areamatning-och-skogsbruk/*) are
     * 301-redirected to /tjanster/* via next.config.js and their page files
     * have been removed. No legacy pages remain in the sitemap.
     */

    // Juridiskt
    { path: '/integritetspolicy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/cookiepolicy', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
