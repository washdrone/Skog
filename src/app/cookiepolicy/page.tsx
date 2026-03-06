import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Cookiepolicy',
  description:
    'Information om hur TimberDrone använder cookies och liknande teknik på webbplatsen.',
  path: '/cookiepolicy',
})

export default function CookiepolicyPage() {
  return (
    <article className="container-page max-w-3xl py-16 sm:py-20 prose prose-slate prose-headings:font-bold prose-a:text-forest-600">
      <h1>Cookiepolicy</h1>
      <p className="lead">
        Denna policy förklarar hur TimberDrone använder cookies och liknande teknik.
      </p>
      <p><em>Senast uppdaterad: 2026-03-06</em></p>

      <h2>Vad är cookies?</h2>
      <p>
        Cookies är små textfiler som lagras på din enhet när du besöker en webbplats.
        De används för att webbplatsen ska fungera korrekt och för att samla in besöksstatistik.
      </p>

      <h2>Cookies vi använder</h2>

      <h3>Nödvändiga cookies</h3>
      <p>
        Dessa krävs för att webbplatsen ska fungera och kan inte stängas av.
        De lagrar ingen personligt identifierbar information.
      </p>

      <h3>Analys-cookies (valfria)</h3>
      <p>
        Om Google Analytics är aktiverat används cookies för att samla in anonymiserad besöksstatistik.
        IP-adresser anonymiseras och ingen personligt identifierbar information lagras.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Syfte</th>
            <th>Varaktighet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>_ga</code></td>
            <td>Särskiljer besökare (Google Analytics)</td>
            <td>2 år</td>
          </tr>
          <tr>
            <td><code>_ga_*</code></td>
            <td>Sessionstillstånd (Google Analytics)</td>
            <td>2 år</td>
          </tr>
        </tbody>
      </table>

      <h2>Hantera cookies</h2>
      <p>
        Du kan blockera eller radera cookies via din webbläsares inställningar.
        Observera att vissa funktioner på webbplatsen kan påverkas om du blockerar nödvändiga cookies.
      </p>

      <h2>Kontakt</h2>
      <p>
        Har du frågor om vår användning av cookies? Kontakta oss på{' '}
        <a href="mailto:info@timberdrone.se">info@timberdrone.se</a>.
      </p>
    </article>
  )
}
