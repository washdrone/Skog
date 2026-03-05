import { MetadataRoute } from 'next'

const BASE_URL = 'https://timberdrone.se'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    // Core
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/offert', priority: 0.9, changeFrequency: 'weekly' as const },

    // Tjänster
    { path: '/tjanster', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/tjanster/skogsinventering', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/tjanster/multispektralanalys', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/tjanster/barkborre-detektering', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/tjanster/lidar-skanning', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/ortofoto-kartering', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/3d-modellering', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/bestandsinventering', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/skogsbruksplan-underlag', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tjanster/fotosyntesmatning', priority: 0.7, changeFrequency: 'monthly' as const },

    // Kunskap
    { path: '/kunskap', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/kunskap/vad-ar-ndvi', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kunskap/barkborre-tidigt', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kunskap/dronare-vs-satellitdata', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kunskap/multispektral-vs-rgb', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kunskap/skogsinventering-kostnad', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kunskap/fotosyntesmatning-guide', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kunskap/lidar-vs-dronare', priority: 0.7, changeFrequency: 'monthly' as const },

    // Kundsegment
    { path: '/for/skogsagare', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/for/skogsbolag', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/for/forskning', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/for/kommuner', priority: 0.6, changeFrequency: 'monthly' as const },

    // Platser (regionala)
    { path: '/platser', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platser/skogsinventering-norrland', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platser/skogsinventering-svealand', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/platser/skogsinventering-smaland', priority: 0.7, changeFrequency: 'monthly' as const },

    // Befintliga sidor (bevarade)
    { path: '/vegetationsanalys', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/areamatning-och-skogsbruk', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/vegetationsanalys/ndvi-kartlaggning', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/vegetationsanalys/stressanalys', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/vegetationsanalys/uppfoljning-over-tid', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/areamatning', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/inventering', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/avverkningsunderlag', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/skadeinventering', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/planteringsuppfoljning', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/leveranser', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/faq', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/case', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/kontakt', priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
