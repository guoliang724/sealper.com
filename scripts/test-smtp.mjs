// Quick SMTP check: node --env-file=.env.local scripts/test-smtp.mjs
import nodemailer from 'nodemailer'

const cfg = {
  host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT ?? '587'),
  secure: process.env.SMTP_SECURE === 'true',
  user: process.env.SMTP_USER ?? '',
}
console.log('Config:', cfg, 'pass set:', !!process.env.SMTP_PASS)
console.log('Recipients:', process.env.contact_email, process.env.contact_email1)

const t = nodemailer.createTransport({
  host: cfg.host, port: cfg.port, secure: cfg.secure,
  auth: { user: cfg.user, pass: process.env.SMTP_PASS ?? '' },
  logger: true,
})

try {
  await t.verify()
  console.log('✅ SMTP login OK')
  const to = process.env.contact_email || cfg.user
  const info = await t.sendMail({ from: cfg.user, to, subject: 'Sealper SMTP test', text: 'It works.' })
  console.log('✅ Sent to', to, info.response)
} catch (e) {
  console.error('❌', e.code, e.responseCode, e.response || e.message)
}
