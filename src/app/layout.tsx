import type { Metadata } from 'next'
import { COMPANY, OG_DEFAULTS } from '@/lib/seo/business-data'
import { websiteSchema } from '@/lib/seo/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

/*
 * TODO: Migrera till next/font/google för bättre Core Web Vitals.
 * Kräver nätverksåtkomst vid build. Exempel:
 *
 * import { Playfair_Display, Source_Serif_4, DM_Sans } from 'next/font/google'
 * const playfair = Playfair_Display({ subsets: ['latin'], weight: [...], variable: '--font-playfair' })
 * const sourceSerif = Source_Serif_4({ subsets: ['latin'], weight: [...], variable: '--font-source-serif' })
 * const dmSans = DM_Sans({ subsets: ['latin'], weight: [...], variable: '--font-dm-sans' })
 *
 * Uppdatera sedan tailwind.config.ts att använda var(--font-playfair) etc.
 */

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: `Skogsinventering med drönare i hela Sverige | ${COMPANY.name}`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    'Drönarbaserad skogsinventering, trädhöjdsmätning, planträkning och skogsskadeinventering. Skogliga beslutsunderlag för avverkning och skötsel — rikstäckande.',
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    type: OG_DEFAULTS.type,
    locale: OG_DEFAULTS.locale,
    siteName: COMPANY.name,
    images: [
      {
        url: `${COMPANY.url}${OG_DEFAULTS.imagePath}`,
        width: OG_DEFAULTS.imageWidth,
        height: OG_DEFAULTS.imageHeight,
        alt: `${COMPANY.name} — Skogsinventering med drönare`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-D0DFLHDVJM'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="flex min-h-screen flex-col bg-cream-100 text-slate-900 font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
