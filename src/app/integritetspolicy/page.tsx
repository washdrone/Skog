import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Integritetspolicy',
  description:
    'Så hanterar TimberDrone dina personuppgifter. Läs om vilken data vi samlar in, varför, och hur du kan utöva dina rättigheter.',
  path: '/integritetspolicy',
})

export default function IntegritetspolicyPage() {
  return (
    <article className="container-page max-w-3xl py-16 sm:py-20 prose prose-slate prose-headings:font-bold prose-a:text-forest-600">
      <h1>Integritetspolicy</h1>
      <p className="lead">
        TimberDrone värnar om din integritet. Denna policy beskriver hur vi samlar in, använder och skyddar personuppgifter.
      </p>
      <p><em>Senast uppdaterad: 2026-03-06</em></p>

      <h2>1. Personuppgiftsansvarig</h2>
      <p>
        TimberDrone är personuppgiftsansvarig för behandlingen av dina personuppgifter.
        Du når oss på <a href="mailto:info@timberdrone.se">info@timberdrone.se</a>.
      </p>

      <h2>2. Vilka uppgifter vi samlar in</h2>
      <ul>
        <li><strong>Offertförfrågningar:</strong> Företagsnamn, kontaktperson, e-postadress, uppdragsbeskrivning och eventuell fastighetsbeteckning som du anger i formuläret.</li>
        <li><strong>Webbplatsanvändning:</strong> Anonymiserad besöksstatistik via Google Analytics (om aktiverat), inklusive sidvisningar, geografiskt område och enhet.</li>
      </ul>

      <h2>3. Ändamål och rättslig grund</h2>
      <ul>
        <li><strong>Offerthantering:</strong> Vi behandlar dina uppgifter för att besvara din förfrågan (berättigat intresse).</li>
        <li><strong>Webbanalys:</strong> Vi använder anonymiserad besöksstatistik för att förbättra webbplatsen (berättigat intresse). IP-adresser anonymiseras.</li>
      </ul>

      <h2>4. Lagring och delning</h2>
      <p>
        Personuppgifter lagras så länge det behövs för att fullgöra ändamålet, normalt högst 12 månader efter senaste kontakt.
        Vi delar inte dina uppgifter med tredje part utom i den mån det krävs för att leverera tjänsten
        (t.ex. e-postleverantör för att skicka bekräftelse).
      </p>

      <h2>5. Dina rättigheter</h2>
      <p>Du har rätt att:</p>
      <ul>
        <li>Begära tillgång till dina personuppgifter</li>
        <li>Begära rättelse eller radering</li>
        <li>Invända mot behandling</li>
        <li>Begära dataportabilitet</li>
      </ul>
      <p>
        Kontakta oss på <a href="mailto:info@timberdrone.se">info@timberdrone.se</a> för att utöva dina rättigheter.
        Du har även rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).
      </p>

      <h2>6. Cookies</h2>
      <p>
        Se vår <a href="/cookiepolicy">cookiepolicy</a> för information om hur vi använder cookies.
      </p>
    </article>
  )
}
