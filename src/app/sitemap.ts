import { MetadataRoute } from 'next'

const BASE_URL = 'https://timberdrone.se'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split('T')[0]

  const pages = [
    // Core
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/offert', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/om-oss', priority: 0.7, changeFrequency: 'monthly' as const },

    // Tjänster (primär tjänstestruktur)
    { path: '/tjanster', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/tjanster/skogsinventering', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/tjanster/multispektralanalys', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/tjanster/barkborre-detektering', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/tjanster/lidar-skanning', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/ortofoto-kartering', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/3d-modellering', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/tjanster/bestandsinventering', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/skogsbruksplan-underlag', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/fotosyntesmatning', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/tjanster/planteringsinventering', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/tjanster/skadedokumentation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/kolinlagring', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/arsavtal', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/tjanster/jaktkartering', priority: 0.6, changeFrequency: 'monthly' as const },

    // Kunskap
    { path: '/kunskap', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/kunskap/vad-ar-ndvi', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kunskap/barkborre-tidigt', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kunskap/dronare-vs-satellitdata', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kunskap/multispektral-vs-rgb', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kunskap/skogsinventering-kostnad', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kunskap/fotosyntesmatning-guide', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kunskap/lidar-vs-dronare', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kunskap/vad-paverkar-priset', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kunskap/kolinlagring-skog-guide', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kunskap/sasongsguide-skogsinventering', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kunskap/stormskada-checklista', priority: 0.7, changeFrequency: 'monthly' as const },

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
    url: `${BASE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
