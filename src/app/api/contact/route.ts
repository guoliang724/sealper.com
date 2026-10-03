import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)
    const field = (key: string, max: number) =>
      typeof body?.[key] === 'string' ? (body[key] as string).trim().slice(0, max) : ''

    const company = field('company', 200)
    const name    = field('name', 200)
    const email   = field('email', 200)
    const message = field('message', 5000)

    if (!name || !message || !EMAIL_RE.test(email)) {
      return Response.json({ error: 'Please fill in your name, a valid email and a message.' }, { status: 400 })
    }

    // Quote requests go to both inboxes configured on the server.
    const recipients = [process.env.contact_email, process.env.contact_email1]
      .map((r) => r?.trim())
      .filter((r): r is string => !!r)

    if (recipients.length === 0) {
      console.error('[/api/contact] contact_email / contact_email1 are not set')
      return Response.json(
        { error: 'Failed to send message. Please try again or call us at 403-667-5058.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST   ?? 'smtp.gmail.com',
      port:   Number(process.env.SMTP_PORT ?? '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER ?? '',
        pass: process.env.SMTP_PASS ?? '',
      },
    })

    const row = (label: string, value: string) => `
      <p style="margin: 0 0 4px 0; color: #6A7B8F; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">${label}</p>
      <p style="margin: 0 0 18px 0; font-size: 15px; color: #0A2540;">${value}</p>`

    await transporter.sendMail({
      from:    `"Sealper Website" <${process.env.SMTP_USER ?? 'noreply@sealper.com'}>`,
      to:      recipients,
      replyTo: email,
      subject: `[Get a Quote] ${name}${company ? ` — ${company}` : ''}`,
      text: [
        `Company: ${company || '-'}`,
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0B4A7F; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #FFFFFF; margin: 0; font-size: 20px;">New Quote Request — Sealper Website</h2>
          </div>
          <div style="background: #F5FAFE; padding: 24px; border-radius: 0 0 8px 8px;">
            ${row('Company', company ? escapeHtml(company) : '—')}
            ${row('Name', escapeHtml(name))}
            ${row('Email', `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`)}
            <p style="margin: 0 0 4px 0; color: #6A7B8F; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
            <div style="background: #FFFFFF; border-left: 3px solid #0AA6E6; padding: 16px; border-radius: 4px;">
              <p style="margin: 0; line-height: 1.7; white-space: pre-wrap; color: #0A2540;">${escapeHtml(message)}</p>
            </div>
          </div>
          <p style="color: #94A3B4; font-size: 11px; margin-top: 12px; text-align: center;">Sent via the Get a Quote form · ${new Date().toLocaleString('en-CA', { timeZone: 'America/Edmonton' })}</p>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('[/api/contact] Error:', err)
    return Response.json(
      { error: 'Failed to send message. Please try again or call us at 403-667-5058.' },
      { status: 500 }
    )
  }
}
