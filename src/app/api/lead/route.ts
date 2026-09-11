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

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]!))
}

function buildEmailHtml(data: LeadData): string {
  const row = (label: string, value: string) =>
    value && value !== '-'
      ? `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${label}</td><td style="padding:6px 12px">${escapeHtml(value)}</td></tr>`
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
    const raw = await request.json().catch(() => null)
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
      return NextResponse.json({ error: 'Ogiltig förfrågan.' }, { status: 400 })
    }
    const stringFields = ['foretag', 'kontaktperson', 'epost', 'omrade', 'fastighetsbeteckning', 'uppdragstyp', 'areal', 'tidsram', 'meddelande'] as const
    for (const key of stringFields) {
      if (raw[key] !== undefined && (typeof raw[key] !== 'string' || raw[key].length > 5000)) {
        return NextResponse.json({ error: 'Kontrollera formulärfälten.' }, { status: 400 })
      }
      raw[key] = (raw[key] || '').trim()
    }
    for (const key of ['leverans', 'tillagg']) {
      if (raw[key] !== undefined && (!Array.isArray(raw[key]) || raw[key].length > 10 || raw[key].some((value: unknown) => typeof value !== 'string' || value.length > 200))) {
        return NextResponse.json({ error: 'Ogiltiga leveransval.' }, { status: 400 })
      }
      raw[key] = raw[key] || []
    }
    const data: LeadData = raw

    // Validate required fields
    if (!data.kontaktperson || !data.epost || !data.uppdragstyp) {
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

    let delivered = false
    const webhookUrl = process.env.LEAD_WEBHOOK_URL
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, source: 'timberdrone.se/offert', submitted_at: new Date().toISOString() }),
          signal: AbortSignal.timeout(10000),
        })
        delivered = response.ok
      } catch { console.error('[LEAD] Webhook delivery failed') }
    }

    // Send email notification to info@timberdrone.se
    if (process.env.RESEND_API_KEY) {
      try {
        const { data: emailResult, error: emailError } = await getResend().emails.send({
          from: `${COMPANY.name} Formulär <formular@timberdrone.se>`,
          to: COMPANY.email,
          replyTo: data.epost,
          subject: `Offertförfrågan: ${data.foretag || data.kontaktperson} – ${data.uppdragstyp}`,
          html: buildEmailHtml(data),
        })

        if (!emailError && emailResult?.id) delivered = true
        else console.error('[LEAD] Email delivery failed')
      } catch { console.error('[LEAD] Email delivery failed') }
    }

    if (!delivered) {
      return NextResponse.json({ success: false, error: 'Förfrågan kunde inte tas emot. Kontakta oss via e-post eller telefon.' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Serverfel. Försök igen.' },
      { status: 500 }
    )
  }
}
