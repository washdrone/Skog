/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  /*
   * Redirect plan: legacy paths → primary /tjanster structure.
   *
   * These redirects consolidate overlapping service pages so that
   * Google indexes one canonical URL per topic.
   *
   * The old pages still exist as files — these 301s take priority
   * at the routing layer, so the old page.tsx files become inactive
   * once the redirect fires.
   */
  async redirects() {
    return [
      // Areamätning sidor → /tjanster
      { source: '/areamatning-och-skogsbruk/areamatning', destination: '/tjanster/skogsinventering', permanent: true },
      { source: '/areamatning-och-skogsbruk/inventering', destination: '/tjanster/bestandsinventering', permanent: true },
      { source: '/areamatning-och-skogsbruk/avverkningsunderlag', destination: '/tjanster/skogsbruksplan-underlag', permanent: true },
      { source: '/areamatning-och-skogsbruk/skadeinventering', destination: '/tjanster/skadedokumentation', permanent: true },
      { source: '/areamatning-och-skogsbruk/planteringsuppfoljning', destination: '/tjanster/planteringsinventering', permanent: true },

      // Vegetationsanalys sidor → /tjanster
      { source: '/vegetationsanalys/ndvi-kartlaggning', destination: '/tjanster/multispektralanalys', permanent: true },
      { source: '/vegetationsanalys/stressanalys', destination: '/tjanster/barkborre-detektering', permanent: true },
      { source: '/vegetationsanalys/uppfoljning-over-tid', destination: '/tjanster/multispektralanalys', permanent: true },

      // Hub-sidor → /tjanster
      { source: '/areamatning-och-skogsbruk', destination: '/tjanster', permanent: true },
      { source: '/vegetationsanalys', destination: '/tjanster', permanent: true },

      // Kontakt → /offert (primär kontaktsida)
      { source: '/areamatning-och-skogsbruk/kontakt', destination: '/offert', permanent: true },
    ]
  },

  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
          { key: 'Content-Type', value: 'application/xml' },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
