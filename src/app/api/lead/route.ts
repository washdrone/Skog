import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { COMPANY } from '@/lib/seo/business-data'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

interface LeadData {
  foretag: string
  kontaktperson: string
  epost: string
  omrade: string
  fastighetsbeteckning: string
  uppdragstyp: string
  areal: string
  leverans: string[]
  tillagg: string[]
  tidsram: string
  meddelande: string
}

function buildEmailHtml(data: LeadData): string {
  const row = (label: string, value: string) =>
    value && value !== '-'
      ? `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${label}</td><td style="padding:6px 12px">${value}</td></tr>`
      : ''

  return `
    <h2 style="color:#1a3c2a">Ny offertförfrågan från timberdrone.se</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      ${row('Företag', data.foretag)}
      ${row('Kontaktperson', data.kontaktperson)}
      ${row('E-post', data.epost)}
      ${row('Område/kommun', data.omrade)}
      ${row('Fastighetsbeteckning', data.fastighetsbeteckning)}
      ${row('Uppdragstyp', data.uppdragstyp)}
      ${row('Uppskattad areal', data.areal ? `${data.areal} ha` : '')}
      ${row('Leverans', data.leverans?.length ? data.leverans.join(', ') : '')}
      ${row('Tillägg', data.tillagg?.length ? data.tillagg.join(', ') : '')}
      ${row('Tidsram', data.tidsram)}
      ${row('Meddelande', data.meddelande)}
    </table>
    <p style="margin-top:16px;font-size:12px;color:#666">Skickat ${new Date().toISOString()}</p>
  `
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const data: LeadData = await request.json()

    // Validate required fields
    if (!data.foretag || !data.kontaktperson || !data.epost || !data.uppdragstyp) {
      return NextResponse.json(
        { error: 'Obligatoriska fält saknas.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(data.epost)) {
      return NextResponse.json(
        { error: 'Ogiltig e-postadress.' },
        { status: 400 }
      )
    }

    // Basic honeypot / rate-limit check could be added here.

    // Log the lead (replace with CRM/webhook integration)
    console.log('[LEAD]', {
      timestamp: new Date().toISOString(),
      foretag: data.foretag,
      kontaktperson: data.kontaktperson,
      epost: data.epost,
      omrade: data.omrade || '-',
      fastighetsbeteckning: data.fastighetsbeteckning || '-',
      uppdragstyp: data.uppdragstyp,
      areal: data.areal || '-',
      leverans: data.leverans?.length ? data.leverans.join(', ') : '-',
      tillagg: data.tillagg?.length ? data.tillagg.join(', ') : '-',
      tidsram: data.tidsram || '-',
      meddelande: data.meddelande || '-',
    })

    // If a webhook URL is configured, forward the lead
    const webhookUrl = process.env.LEAD_WEBHOOK_URL
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'timberdrone.se/offert',
          ...data,
          submitted_at: new Date().toISOString(),
        }),
      }).catch((err) => {
        console.error('[LEAD WEBHOOK ERROR]', err)
      })
    }

    // Send email notification to info@timberdrone.se
    if (process.env.RESEND_API_KEY) {
      const { data: emailResult, error: emailError } = await getResend().emails.send({
        from: `${COMPANY.name} Formulär <formular@timberdrone.se>`,
        to: COMPANY.email,
        replyTo: data.epost,
        subject: `Offertförfrågan: ${data.foretag} – ${data.uppdragstyp}`,
        html: buildEmailHtml(data),
      })

      if (emailError) {
        console.error('[LEAD EMAIL ERROR]', emailError)
        return NextResponse.json(
          { success: false, error: 'E-post kunde inte skickas.', detail: emailError.message },
          { status: 502 }
        )
      }

      console.log('[LEAD EMAIL SENT]', emailResult?.id)
    } else {
      console.warn('[LEAD] RESEND_API_KEY not set — skipping email')
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Serverfel. Försök igen.' },
      { status: 500 }
    )
  }
}
