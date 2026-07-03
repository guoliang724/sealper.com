import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const name      = (formData.get('name')    as string | null) ?? 'Anonymous'
    const email     = (formData.get('email')   as string | null) ?? ''
    const message   = (formData.get('message') as string | null) ?? ''
    const file      = formData.get('file') as File | null

    if (!message.trim()) {
      return Response.json({ error: 'Message is required.' }, { status: 400 })
    }

    // Build transporter from env vars
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST   ?? 'smtp.gmail.com',
      port:   Number(process.env.SMTP_PORT ?? '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER ?? '',
        pass: process.env.SMTP_PASS ?? '',
      },
    })

    // Build attachment if file was uploaded
    const attachments: nodemailer.Attachment[] = []
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer())
      attachments.push({
        filename: file.name,
        content:  buffer,
        contentType: file.type || 'application/octet-stream',
      })
    }

    const recipientEmail = process.env.CONTACT_EMAIL ?? 'contact@sealper.com'

    await transporter.sendMail({
      from:    `"Sealper Chat" <${process.env.SMTP_USER ?? 'noreply@sealper.com'}>`,
      to:      recipientEmail,
      replyTo: email || undefined,
      subject: `[Chat Message] New inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #f59e0b; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #0d0f14; margin: 0; font-size: 20px;">💬 New Chat Message — Sealper Website</h2>
          </div>
          <div style="background: #13161d; padding: 24px; border-radius: 0 0 8px 8px; color: #f1f5f9;">
            <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">FROM</p>
            <p style="margin: 0 0 20px 0; font-size: 16px; font-weight: bold;">${name}${email ? ` &lt;${email}&gt;` : ''}</p>

            <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">MESSAGE</p>
            <div style="background: #1c2030; border-left: 3px solid #f59e0b; padding: 16px; border-radius: 4px; margin-bottom: 20px;">
              <p style="margin: 0; line-height: 1.7; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>

            ${file && file.size > 0 ? `<p style="margin: 0; color: #94a3b8; font-size: 13px;">📎 Attachment: <strong style="color: #22d3ee;">${file.name}</strong> (${(file.size / 1024).toFixed(1)} KB)</p>` : ''}
          </div>
          <p style="color: #475569; font-size: 11px; margin-top: 12px; text-align: center;">Sent via Sealper website chat widget · ${new Date().toLocaleString('en-CA', { timeZone: 'America/Edmonton' })}</p>
        </div>
      `,
      attachments,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('[/api/chat] Error:', err)
    return Response.json(
      { error: 'Failed to send message. Please try again or call us at 403-667-5058.' },
      { status: 500 }
    )
  }
}
