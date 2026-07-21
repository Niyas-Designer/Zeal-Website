import emailjs from '@emailjs/browser'
import { useEffect, useMemo, useState } from 'react'

const SESSION_ID_KEY = 'zeal-contact-session-id'
const SESSION_POPUP_KEY = 'zeal-contact-popup-last-session'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function getSessionId() {
  let sessionId = sessionStorage.getItem(SESSION_ID_KEY)

  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
    sessionStorage.setItem(SESSION_ID_KEY, sessionId)
  }

  return sessionId
}

function validateForm(form) {
  const nextErrors = {}

  if (!form.name.trim()) {
    nextErrors.name = 'Please enter your name.'
  }

  if (!form.email.trim()) {
    nextErrors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    nextErrors.email = 'Please enter a valid email address.'
  }

  if (!form.message.trim()) {
    nextErrors.message = 'Please enter your message.'
  } else if (form.message.trim().length < 10) {
    nextErrors.message = 'Please enter at least 10 characters.'
  }

  return nextErrors
}

function FloatingContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState({ type: '', message: '' })

  const emailConfig = useMemo(
    () => ({
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      toEmail: import.meta.env.VITE_CONTACT_RECEIVER_EMAIL || 'srinivas@zealgroups.in',
    }),
    [],
  )

  useEffect(() => {
    const sessionId = getSessionId()
    const hasShownThisSession = localStorage.getItem(SESSION_POPUP_KEY) === sessionId

    if (hasShownThisSession) {
      return undefined
    }

    const timerId = window.setTimeout(() => {
      setIsOpen(true)
      localStorage.setItem(SESSION_POPUP_KEY, sessionId)
    }, 2500)

    return () => {
      window.clearTimeout(timerId)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '' }))
    setSubmitState({ type: '', message: '' })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validateForm(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      setSubmitState({
        type: 'error',
        message: 'EmailJS is not configured yet. Add your environment variables to enable sending.',
      })
      return
    }

    setIsSubmitting(true)
    setSubmitState({ type: '', message: '' })

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          to_email: emailConfig.toEmail,
          message: form.message.trim(),
        },
        {
          publicKey: emailConfig.publicKey,
        },
      )

      setSubmitState({
        type: 'success',
        message: 'Your message has been sent successfully.',
      })
      setForm(initialForm)
      setErrors({})
    } catch {
      setSubmitState({
        type: 'error',
        message: 'Something went wrong while sending your message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/35 transition duration-300 ease-out ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div className="pointer-events-none fixed bottom-5 right-5 z-50 flex w-[calc(100vw-2.5rem)] max-w-sm flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        <div
          id="floating-contact-panel"
          className={`pointer-events-auto relative w-full origin-bottom-right overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/96 p-5 shadow-[0_26px_70px_rgba(15,23,42,0.18)] backdrop-blur-md transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-6 ${
            isOpen
              ? 'translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none translate-y-8 scale-[0.96] opacity-0'
          }`}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,12,0,0),rgba(255,12,0,0.85),rgba(255,12,0,0))]" />
          <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(255,12,0,0.14),_rgba(255,12,0,0)_72%)] blur-2xl" />

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#222]">
                Contact Us
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#ff0c00]">
                Let&apos;s talk
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#222]">
                Share your enquiry and our team will get back to you.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e6ebf0] bg-[#f8fafc] text-[#5d6772] transition hover:border-[#d4dbe3] hover:bg-white hover:text-[#111827]"
              aria-label="Close contact form"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-[#222]">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                className="w-full rounded-2xl border border-[#dde4eb] bg-white px-4 py-3 text-sm text-[#222] outline-none transition placeholder:text-[#9aa3ad] focus:border-[#d84e4e] focus:ring-2 focus:ring-[#f5c6c6]"
                placeholder="Your name"
              />
              {errors.name ? (
                <p className="mt-2 text-xs text-[#d84e4e]">{errors.name}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-[#222]">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                className="w-full rounded-2xl border border-[#dde4eb] bg-white px-4 py-3 text-sm text-[#222] outline-none transition placeholder:text-[#222] focus:border-[#222] focus:ring-2 focus:ring-[#f5c6c6]"
                placeholder="you@example.com"
              />
              {errors.email ? (
                <p className="mt-2 text-xs text-[#d84e4e]">{errors.email}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-[#222]">
                Message
              </label>
              <textarea
                id="contact-message"
                value={form.message}
                onChange={(event) => updateField('message', event.target.value)}
                rows={5}
                className="w-full resize-none rounded-2xl border border-[#dde4eb] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition placeholder:text-[#9aa3ad] focus:border-[#d84e4e] focus:ring-2 focus:ring-[#f5c6c6]"
                placeholder="Tell us about your enquiry"
              />
              {errors.message ? (
                <p className="mt-2 text-xs text-[#d84e4e]">{errors.message}</p>
              ) : null}
            </div>

            {submitState.message ? (
              <div
                className={`rounded-2xl px-4 py-3 text-sm ${
                  submitState.type === 'success'
                    ? 'bg-[#ecfdf3] text-[#166534]'
                    : 'bg-[#fef2f2] text-[#b91c1c]'
                }`}
              >
                {submitState.message}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[#ff0c00] px-5 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-white transition hover:bg-[#202938] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className={`pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#ff0c00] text-sm font-medium uppercase tracking-[0.16em] text-white shadow-[0_18px_42px_rgba(15,23,42,0.25)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#ff0c11] sm:h-auto sm:w-auto sm:gap-3 sm:px-5 sm:py-3.5 ${
            isOpen ? '' : 'animate-[contact-float_4.2s_ease-in-out_infinite]'
          }`}
          aria-expanded={isOpen}
          aria-controls="floating-contact-panel"
          aria-label="Contact Us"
        >
          <span className="hidden sm:inline">Contact Us</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/12">
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" aria-hidden="true">
              <path
                d="M4.5 6.5h15a2 2 0 012 2v7a2 2 0 01-2 2h-15a2 2 0 01-2-2v-7a2 2 0 012-2z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M4.5 8l7.5 5.4L19.5 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  )
}

export default FloatingContactForm
