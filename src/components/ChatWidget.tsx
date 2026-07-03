'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './ChatWidget.module.css'

/* ─── Quick-question chips ─── */
const quickQuestions = [
  {
    q: 'What products do you offer?',
    a: 'We supply 5-gallon & 3-gallon PC bottles, non-spill caps, bottle racks (3–5 tier), manual & USB pumps, folding cradles, water cooler dispensers, and custom label services. Everything your water business needs — under one roof.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Just type your requirements below and hit Send — we\'ll email you back promptly. Or call us directly at 403-667-5058, or reach us via WhatsApp anytime.',
  },
  {
    q: 'Do you ship to the USA?',
    a: 'Yes! We serve both Canada and the United States via FCL (Full Container Load), LTL (Less Than Truckload), and parcel shipping. Our Alberta distribution center is strategically placed for fast cross-border delivery.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Typically 2–4 business days within Canada. U.S. timelines vary by destination. For large FCL orders we\'ll confirm lead times during the quoting process.',
  },
  {
    q: 'Are your products FDA approved?',
    a: 'Yes — all our bottles and caps are FDA approved and BPA free. They meet strict food-grade safety standards and are designed for repeated commercial use.',
  },
  {
    q: 'Can you do custom labels?',
    a: 'Absolutely. Send us your artwork (logo, colors, design) and we handle the rest. Custom labels are a great way to build your brand on store shelves.',
  },
]

/* ─── Message type ─── */
type Msg =
  | { role: 'bot';  text: string }
  | { role: 'user'; text: string; fileName?: string }

const GREETING: Msg = {
  role: 'bot',
  text: 'Hi there 👋  I\'m the Sealper assistant. Pick a question below or type your own — your message will go straight to our team.',
}

export default function ChatWidget() {
  const [open,     setOpen]     = useState(false)
  const [msgs,     setMsgs]     = useState<Msg[]>([GREETING])
  const [input,    setInput]    = useState('')
  const [name,     setName]     = useState('')
  const [email,    setEmail]    = useState('')
  const [file,     setFile]     = useState<File | null>(null)
  const [sending,  setSending]  = useState(false)
  const [showForm, setShowForm] = useState(false)  // name/email step

  const bottomRef  = useRef<HTMLDivElement>(null)
  const fileRef    = useRef<HTMLInputElement>(null)
  const inputRef   = useRef<HTMLTextAreaElement>(null)

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs])

  // Auto-focus input when widget opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  function pushBot(text: string) {
    setMsgs(prev => [...prev, { role: 'bot', text }])
  }

  function handleQuick(item: typeof quickQuestions[number]) {
    setMsgs(prev => [...prev, { role: 'user', text: item.q }])
    setTimeout(() => pushBot(item.a), 400)
  }

  async function handleSend() {
    const text = input.trim()
    if (!text && !file) return

    // Require name + email before sending
    if (!showForm) {
      setShowForm(true)
      return
    }

    setSending(true)

    const userMsg: Msg = {
      role: 'user',
      text: text || '(file only)',
      fileName: file?.name,
    }
    setMsgs(prev => [...prev, userMsg])
    setInput('')

    try {
      const fd = new FormData()
      fd.append('name',    name.trim()  || 'Website visitor')
      fd.append('email',   email.trim() || '')
      fd.append('message', text || '(No text — see attachment)')
      if (file) fd.append('file', file)

      const res = await fetch('/api/chat', { method: 'POST', body: fd })
      const data = await res.json()

      if (data.success) {
        pushBot('✅ Message sent! Our team will get back to you shortly. In the meantime, feel free to call us at 403-667-5058.')
        setFile(null)
        setShowForm(false)
      } else {
        pushBot(`⚠️ ${data.error ?? 'Something went wrong — please try again.'}`)
      }
    } catch {
      pushBot('⚠️ Could not reach our server. Please email contact@sealper.com or call 403-667-5058.')
    } finally {
      setSending(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const hasContent = input.trim().length > 0 || !!file

  return (
    <>
      {/* ── Floating toggle button ── */}
      <button
        id="chat-widget-toggle"
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        title="Let's Chat"
      >
        {open ? (
          /* X icon */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          /* Chat bubble icon */
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
        {!open && <span className={styles.fabLabel}>Let&apos;s Chat</span>}
      </button>

      {/* ── Chat panel ── */}
      <div className={`${styles.panel} ${open ? styles.panelOpen : ''}`} role="dialog" aria-label="Chat with Sealper">

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerAvatar}>S</div>
          <div className={styles.headerInfo}>
            <span className={styles.headerName}>Sealper Support</span>
            <span className={styles.headerStatus}>
              <span className={styles.dot} />
              Online · Replies promptly
            </span>
          </div>
          <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close chat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className={styles.messages}>
          {msgs.map((m, i) => (
            <div key={i} className={`${styles.msg} ${m.role === 'user' ? styles.msgUser : styles.msgBot}`}>
              {m.role === 'bot' && <div className={styles.botAvatar}>S</div>}
              <div className={styles.bubble}>
                <p className={styles.bubbleText}>{m.text}</p>
                {m.role === 'user' && m.fileName && (
                  <p className={styles.attachBadge}>📎 {m.fileName}</p>
                )}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick-question chips — shown once at start */}
        {msgs.length <= 2 && (
          <div className={styles.chips}>
            <p className={styles.chipsLabel}>Common questions:</p>
            <div className={styles.chipsList}>
              {quickQuestions.map(q => (
                <button
                  key={q.q}
                  className={styles.chip}
                  onClick={() => handleQuick(q)}
                >
                  {q.q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Name / email step */}
        {showForm && (
          <div className={styles.infoForm}>
            <p className={styles.infoFormTitle}>Just before we send — who are we talking to?</p>
            <input
              className={styles.infoInput}
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              autoFocus
            />
            <input
              className={styles.infoInput}
              type="email"
              placeholder="Your email (optional)"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        )}

        {/* Composer */}
        <div className={styles.composer}>
          {/* File preview */}
          {file && (
            <div className={styles.filePreview}>
              <span className={styles.filePreviewName}>📎 {file.name}</span>
              <button className={styles.fileRemove} onClick={() => setFile(null)} aria-label="Remove file">✕</button>
            </div>
          )}

          <div className={styles.composerRow}>
            {/* Upload button */}
            <button
              className={styles.uploadBtn}
              onClick={() => fileRef.current?.click()}
              title="Attach a file"
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
              </svg>
            </button>
            <input
              ref={fileRef}
              type="file"
              className={styles.fileHidden}
              accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xlsx,.csv"
              onChange={e => setFile(e.target.files?.[0] ?? null)}
            />

            {/* Text input */}
            <textarea
              ref={inputRef}
              className={styles.textInput}
              placeholder="Type a message… (Enter to send)"
              rows={1}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={sending}
            />

            {/* Send button */}
            <button
              className={`${styles.sendBtn} ${hasContent || showForm ? styles.sendBtnActive : ''}`}
              onClick={handleSend}
              disabled={sending || (!hasContent && !showForm)}
              aria-label="Send message"
            >
              {sending ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={styles.spinner}>
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
