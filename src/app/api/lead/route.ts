import { NextResponse } from 'next/server'

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
          source: 'timberdrone.se/areamatning-och-skogsbruk',
          ...data,
          submitted_at: new Date().toISOString(),
        }),
      }).catch((err) => {
        console.error('[LEAD WEBHOOK ERROR]', err)
      })
    }

    // If an email endpoint is configured, send notification
    const notifyEmail = process.env.LEAD_NOTIFY_EMAIL
    if (notifyEmail) {
      // Email sending would be integrated here (e.g., Resend, SendGrid)
      console.log(`[LEAD NOTIFY] Would email ${notifyEmail}`)
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Serverfel. Försök igen.' },
      { status: 500 }
    )
  }
}
