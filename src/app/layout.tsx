import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/metadata'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Drönarbaserade mättjänster för skogsbruk`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Professionella drönarbaserade mät- och underlagstjänster för skogsbruk och fastighetsförvaltning. Areamätning, inventering, avverkningsunderlag och skadedokumentation.',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: SITE_NAME,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <head>
        {/* GA4 — replace GA_MEASUREMENT_ID with real ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
