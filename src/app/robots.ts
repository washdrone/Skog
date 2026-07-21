import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

/*
 * AEO-beslut: AI-crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
 * tillåts explicit så att sajten kan citeras i AI-svarsmotorer.
 */
export default function robots(): MetadataRoute.Robots {
  const aiAndSearchBots = [
    'Googlebot',
    'Bingbot',
    'GPTBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    'PerplexityBot',
    'Google-Extended',
  ]

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      ...aiAndSearchBots.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/'],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
