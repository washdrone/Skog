import type { Metadata } from 'next'
import { Playfair_Display, Source_Serif_4, DM_Sans } from 'next/font/google'
import { COMPANY, OG_DEFAULTS } from '@/lib/seo/business-data'
import { websiteSchema } from '@/lib/seo/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

/*
 * Self-hostade typsnitt via next/font/google — eliminerar render-blockerande
 * extern <link> till Google Fonts och ger bättre Core Web Vitals (LCP/CLS).
 * Exponeras som CSS-variabler och konsumeras av tailwind.config.ts.
 */
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
})
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-serif',
  display: 'swap',
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

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
    <html lang="sv" className={`antialiased ${playfair.variable} ${sourceSerif.variable} ${dmSans.variable}`}>
      <head>
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
