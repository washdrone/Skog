import { MetadataRoute } from 'next'

const BASE_URL = 'https://timberdrone.se'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    // Core
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const, lastModified: '2026-03-10' },
    { path: '/offert', priority: 0.9, changeFrequency: 'weekly' as const, lastModified: '2026-03-10' },

    // Tjänster
    { path: '/tjanster', priority: 0.9, changeFrequency: 'weekly' as const, lastModified: '2026-03-10' },
    { path: '/tjanster/skogsinventering', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/tjanster/multispektralanalys', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/tjanster/barkborre-detektering', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/tjanster/lidar-skanning', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/tjanster/ortofoto-kartering', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/tjanster/3d-modellering', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/tjanster/bestandsinventering', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/tjanster/skogsbruksplan-underlag', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/tjanster/fotosyntesmatning', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/tjanster/planteringsinventering', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/tjanster/skadedokumentation', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/tjanster/kolinlagring', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/tjanster/arsavtal', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/tjanster/jaktkartering', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },

    // Kunskap
    { path: '/kunskap', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: '2026-03-10' },
    { path: '/kunskap/vad-ar-ndvi', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/kunskap/barkborre-tidigt', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/kunskap/dronare-vs-satellitdata', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/kunskap/multispektral-vs-rgb', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/kunskap/skogsinventering-kostnad', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/kunskap/fotosyntesmatning-guide', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/kunskap/lidar-vs-dronare', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/kunskap/vad-paverkar-priset', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/kunskap/kolinlagring-skog-guide', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/kunskap/sasongsguide-skogsinventering', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/kunskap/stormskada-checklista', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },

    // Kundsegment
    { path: '/for/skogsagare', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/for/skogsbolag', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/for/forskning', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/for/kommuner', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/for/fastighet', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },

    // Platser (regionala)
    { path: '/platser', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/platser/skogsinventering-norrland', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/platser/skogsinventering-svealand', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/platser/skogsinventering-smaland', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/platser/skogsinventering-stockholm', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/platser/skogsinventering-dalarna', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/platser/skogsinventering-vasternorrland', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/platser/skogsinventering-jamtland', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },

    // Befintliga sidor (bevarade)
    { path: '/vegetationsanalys', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: '2026-03-10' },
    { path: '/areamatning-och-skogsbruk', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: '2026-03-10' },
    { path: '/vegetationsanalys/ndvi-kartlaggning', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/vegetationsanalys/stressanalys', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/vegetationsanalys/uppfoljning-over-tid', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/areamatning-och-skogsbruk/areamatning', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/areamatning-och-skogsbruk/inventering', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/areamatning-och-skogsbruk/avverkningsunderlag', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/areamatning-och-skogsbruk/skadeinventering', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/areamatning-och-skogsbruk/planteringsuppfoljning', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/areamatning-och-skogsbruk/leveranser', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/areamatning-och-skogsbruk/faq', priority: 0.6, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/areamatning-och-skogsbruk/case', priority: 0.5, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { path: '/areamatning-och-skogsbruk/kontakt', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },

    // Juridiskt
    { path: '/integritetspolicy', priority: 0.3, changeFrequency: 'yearly' as const, lastModified: '2026-03-10' },
    { path: '/cookiepolicy', priority: 0.3, changeFrequency: 'yearly' as const, lastModified: '2026-03-10' },
  ]

  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
