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
      // -------------------------------------------------------------------
      // Omfokusering 2026: sajten avgränsas till ren produktionsskog.
      // Off-scope tjänster (ekologi/ESG/vegetationsfjärranalys) samt
      // mät-/kartprodukter som egna tjänstesidor 301:as till närmaste
      // produktionsskogliga sida. Sökordsoptimerade slugs ersätter äldre.
      // -------------------------------------------------------------------

      // Skaderelaterat → samlad skogsskadeinventering
      { source: '/tjanster/multispektralanalys', destination: '/tjanster/skogsskadeinventering', permanent: true },
      { source: '/tjanster/barkborre-detektering', destination: '/tjanster/skogsskadeinventering', permanent: true },
      { source: '/tjanster/skadedokumentation', destination: '/tjanster/skogsskadeinventering', permanent: true },

      // Mät-/kartprodukter (metod, ej egen tjänst) → skogsinventering
      { source: '/tjanster/fotosyntesmatning', destination: '/tjanster/skogsinventering', permanent: true },
      { source: '/tjanster/lidar-skanning', destination: '/tjanster/skogsinventering', permanent: true },
      { source: '/tjanster/3d-modellering', destination: '/tjanster/skogsinventering', permanent: true },
      { source: '/tjanster/ortofoto-kartering', destination: '/tjanster/skogsinventering', permanent: true },

      // Helt utanför reviret → tjänstehubben
      { source: '/tjanster/kolinlagring', destination: '/tjanster', permanent: true },
      { source: '/tjanster/jaktkartering', destination: '/tjanster', permanent: true },

      // Slug-byte → sökordsoptimerad URL
      { source: '/tjanster/planteringsinventering', destination: '/tjanster/plantrakning', permanent: true },

      // Off-scope kunskapsartiklar → kunskapshubben
      { source: '/kunskap/vad-ar-ndvi', destination: '/kunskap', permanent: true },
      { source: '/kunskap/fotosyntesmatning-guide', destination: '/kunskap', permanent: true },
      { source: '/kunskap/kolinlagring-skog-guide', destination: '/kunskap', permanent: true },
      { source: '/kunskap/multispektral-vs-rgb', destination: '/kunskap', permanent: true },

      // -------------------------------------------------------------------
      // Äldre legacy-paths från utvecklingsfasen (behålls, mål uppdaterade)
      // -------------------------------------------------------------------
      { source: '/areamatning-och-skogsbruk/areamatning', destination: '/tjanster/skogsinventering', permanent: true },
      { source: '/areamatning-och-skogsbruk/inventering', destination: '/tjanster/bestandsinventering', permanent: true },
      { source: '/areamatning-och-skogsbruk/avverkningsunderlag', destination: '/tjanster/skogsbruksplan-underlag', permanent: true },
      { source: '/areamatning-och-skogsbruk/skadeinventering', destination: '/tjanster/skogsskadeinventering', permanent: true },
      { source: '/areamatning-och-skogsbruk/planteringsuppfoljning', destination: '/tjanster/plantrakning', permanent: true },
      { source: '/vegetationsanalys/ndvi-kartlaggning', destination: '/tjanster/skogsskadeinventering', permanent: true },
      { source: '/vegetationsanalys/stressanalys', destination: '/tjanster/skogsskadeinventering', permanent: true },
      { source: '/vegetationsanalys/uppfoljning-over-tid', destination: '/tjanster/skogsinventering', permanent: true },
      { source: '/areamatning-och-skogsbruk', destination: '/tjanster', permanent: true },
      { source: '/vegetationsanalys', destination: '/tjanster', permanent: true },
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
