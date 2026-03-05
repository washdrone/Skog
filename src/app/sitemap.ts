import { MetadataRoute } from 'next'

const BASE_URL = 'https://timberdrone.se'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/vegetationsanalys', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/areamatning-och-skogsbruk', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/vegetationsanalys/ndvi-kartlaggning', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/vegetationsanalys/stressanalys', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/vegetationsanalys/uppfoljning-over-tid', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/areamatning', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/inventering', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/avverkningsunderlag', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/skadeinventering', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/planteringsuppfoljning', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/leveranser', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/case', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/areamatning-och-skogsbruk/kontakt', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
