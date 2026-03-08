import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/metadata'
import { websiteSchema } from '@/lib/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Skogsinventering & Multispektralanalys med Drönare i Sverige`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Precisionsinventering av skog med drönare. Multispektralanalys, fotosyntesmätning, LiDAR och barkborredetektion. Kolinlagringsberäkning för ESG. Nationell täckning.',
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: SITE_NAME,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        {(process.env.NEXT_PUBLIC_GA_ID || 'G-D0DFLHDVJM') && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-D0DFLHDVJM'}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-D0DFLHDVJM'}', {
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
